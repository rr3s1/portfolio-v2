import type { Metadata } from "next";
import { Inter, Quantico } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import { Analytics } from "@vercel/analytics/next";

import { ServiceWorkerRegistration } from "@/components/ServiceWorkerRegistration";
import { CriticalCSS } from "@/components/CriticalCSS";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

const quantico = Quantico({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal"],
  variable: "--font-quantico",
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: "SR Portfolio",
  description: "Interactive portfolio showcasing web development and 3D visualization skills.",
  keywords: ["Portfolio", "Web Development", "3D Visualization", "Next.js", "React", "Tailwind CSS", "Three.js"],
  authors: [{ name: "SR" }],
  creator: "SR",
  publisher: "SR",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://portfolio-nine-lime-35.vercel.app',
    title: 'SR Portfolio',
    description: 'Interactive portfolio showcasing web development and 3D visualization skills.',
    siteName: 'SR Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SR Portfolio',
    description: 'Interactive portfolio showcasing web development and 3D visualization skills.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="dns-prefetch" href="https://prod.spline.design" />
        <link rel="dns-prefetch" href="https://unpkg.com" />
        <link rel="dns-prefetch" href="https://vercel-scripts.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#060718" />
        <link rel="preload" href="/videos/seawon.mp4" as="video" type="video/mp4" />
      </head>
      <body className={`${inter.className} ${quantico.variable}`}>
       
        <ThemeProvider
          attribute="class"
          forcedTheme="dark"     
          enableSystem={false} 
          >
            <CriticalCSS />
            <ServiceWorkerRegistration />
            {children}
            <Analytics />
          </ThemeProvider>
          </body>
    </html>
  );
}
