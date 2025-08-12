import {withSentryConfig} from '@sentry/nextjs';
/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Skip type checking during build - useful for deployment
    ignoreBuildErrors: true,
  },
  eslint: {
    // Skip ESLint during build - optional
    ignoreDuringBuilds: true,
  },
  images: {
    formats: ['image/webp', 'image/avif'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
      },
      {
        protocol: 'https',
        hostname: 'ui.aceternity.com',
        pathname: '/**',
      },
    ],
  },
  experimental: {
    optimizePackageImports: ['@react-three/fiber', '@react-three/drei', 'three', 'framer-motion', 'gsap'],
    // Disable CSS optimization to avoid critters dependency issue
    // optimizeCss: true,
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  poweredByHeader: false,
  webpack: (config, { isServer, dev }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }

    // Fix for Spline and other browser-only libraries during SSR
    if (isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@splinetool/react-spline': false,
        '@splinetool/runtime': false,
      };
      
      // Add fallbacks for browser globals
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
        crypto: false,
      };
    }

    // Add polyfill for server-side rendering using a different approach
    if (isServer) {
      // Add a webpack plugin to inject polyfills at the very beginning
      config.plugins = config.plugins || [];
      config.plugins.push({
        apply: (compiler) => {
          compiler.hooks.compilation.tap('PolyfillPlugin', (compilation) => {
            compilation.hooks.beforeModuleAssets.tap('PolyfillPlugin', () => {
              // Inject polyfills directly into global scope with proper checks
              try {
                if (typeof global !== 'undefined' && typeof window === 'undefined') {
                  // Use Object.defineProperty to avoid getter/setter conflicts
                  if (!global.window) {
                    Object.defineProperty(global, 'window', {
                      value: {
                        location: {
                          protocol: 'http:',
                          hostname: 'localhost',
                          port: '3000',
                          pathname: '/',
                          search: '',
                          hash: '',
                          href: 'http://localhost:3000/',
                          origin: 'http://localhost:3000'
                        }
                      },
                      writable: true,
                      configurable: true
                    });
                  }
                  
                  if (!global.self) {
                    Object.defineProperty(global, 'self', {
                      value: global,
                      writable: true,
                      configurable: true
                    });
                  }
                  
                  if (!global.navigator) {
                    Object.defineProperty(global, 'navigator', {
                      value: { userAgent: 'Node.js' },
                      writable: true,
                      configurable: true
                    });
                  }
                }
              } catch (e) {
                // Silently ignore if properties can't be set
              }
            });
          });
        }
      });
    }

    // Exclude service worker from webpack processing
    config.module.rules.push({
      test: /sw\.js$/,
      type: 'asset/resource',
      generator: {
        filename: 'static/chunks/[name].[hash][ext]',
      },
    });
    
    // Production optimizations
    if (!dev) {
      // Tree shaking improvements
      config.optimization.usedExports = true;
      config.optimization.sideEffects = false;
      
      // Aggressive bundle splitting for better caching
      config.optimization.splitChunks = {
        chunks: 'all',
        minSize: 20000,
        maxSize: 200000,
        cacheGroups: {
          // Critical framework chunks
          react: {
            name: 'react',
            test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
            chunks: 'all',
            priority: 40,
            reuseExistingChunk: true,
          },
          // Heavy 3D libraries - lazy load these
          three: {
            name: 'three',
            test: /[\\/]node_modules[\\/](three|@react-three)[\\/]/,
            chunks: 'async',
            priority: 35,
            reuseExistingChunk: true,
          },
          // Spline - biggest offender, force async
          spline: {
            name: 'spline',
            test: /[\\/]node_modules[\\/]@splinetool[\\/]/,
            chunks: 'async',
            priority: 30,
            reuseExistingChunk: true,
          },
          // Animation libraries
          animations: {
            name: 'animations',
            test: /[\\/]node_modules[\\/](framer-motion|gsap)[\\/]/,
            chunks: 'async',
            priority: 25,
            reuseExistingChunk: true,
          },
          // Icons - can be async
          icons: {
            name: 'icons',
            test: /[\\/]node_modules[\\/](react-icons|@tabler\/icons|lucide-react)[\\/]/,
            chunks: 'async',
            priority: 20,
            reuseExistingChunk: true,
          },
          // Sentry - async load
          sentry: {
            name: 'sentry',
            test: /[\\/]node_modules[\\/]@sentry[\\/]/,
            chunks: 'async',
            priority: 15,
            reuseExistingChunk: true,
          },
          // Other vendor libraries
          vendor: {
            name: 'vendor',
            test: /[\\/]node_modules[\\/]/,
            chunks: 'all',
            priority: 10,
            reuseExistingChunk: true,
          },
        },
      };
    }
    
    return config;
  },
};

// Temporarily disable Sentry to isolate the "self is not defined" issue
export default nextConfig;

/*
export default withSentryConfig(nextConfig, {
// For all available options, see:
// https://github.com/getsentry/sentry-webpack-plugin#options

org: "srl-3f",
project: "javascript-nextjs",

// Only print logs for uploading source maps in CI
silent: !process.env.CI,

// For all available options, see:
// https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

// Upload a larger set of source maps for prettier stack traces (increases build time)
widenClientFileUpload: true,

// Uncomment to route browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers.
// This can increase your server load as well as your hosting bill.
// Note: Check that the configured route will not match with your Next.js middleware, otherwise reporting of client-
// side errors will fail.
// tunnelRoute: "/monitoring",

// Hides source maps from generated client bundles
hideSourceMaps: true,

// Automatically tree-shake Sentry logger statements to reduce bundle size
disableLogger: true,

// Enables automatic instrumentation of Vercel Cron Monitors. (Does not yet work with App Router route handlers.)
// See the following for more information:
// https://docs.sentry.io/product/crons/
// https://vercel.com/docs/cron-jobs
automaticVercelMonitors: true,
});
*/