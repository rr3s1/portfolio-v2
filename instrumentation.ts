// Add global polyfills for browser APIs
if (typeof global !== 'undefined') {
  if (typeof global.self === 'undefined') {
    global.self = global;
  }
  if (typeof global.window === 'undefined') {
    (global as any).window = {
      location: {
        protocol: 'http:',
        hostname: 'localhost',
        port: '3000',
        pathname: '/',
        search: '',
        hash: '',
        href: 'http://localhost:3000/',
        origin: 'http://localhost:3000'
      },
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => {},
      localStorage: {
        getItem: () => null,
        setItem: () => {},
        removeItem: () => {},
        clear: () => {}
      },
      sessionStorage: {
        getItem: () => null,
        setItem: () => {},
        removeItem: () => {},
        clear: () => {}
      }
    };
  }
  if (typeof global.navigator === 'undefined') {
    (global as any).navigator = {
      userAgent: 'Node.js'
    };
  }
  if (typeof global.document === 'undefined') {
    (global as any).document = {
      createElement: () => ({
        setAttribute: () => {},
        getAttribute: () => null,
        appendChild: () => {},
        removeChild: () => {},
        style: {}
      }),
      createTextNode: () => ({}),
      querySelector: () => null,
      querySelectorAll: () => [],
      getElementById: () => null,
      getElementsByTagName: () => [],
      head: { 
        appendChild: () => {},
        removeChild: () => {},
        querySelector: () => null
      },
      body: { 
        appendChild: () => {},
        removeChild: () => {},
        querySelector: () => null
      }
    };
  }
}

export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    await import('./sentry.server.config');
  }

  if (process.env.NEXT_RUNTIME === 'edge') {
    await import('./sentry.edge.config');
  }
}
