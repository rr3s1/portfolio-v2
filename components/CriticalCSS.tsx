'use client';

import { useEffect } from 'react';

export const CriticalCSS = () => {
  useEffect(() => {
    // Preload critical CSS for above-the-fold content
    const criticalStyles = `
      .hero-section {
        min-height: 100vh;
        background: linear-gradient(to bottom, #000000, #1a1a2e);
      }
      .loading-skeleton {
        background: linear-gradient(90deg, #374151 25%, #4b5563 50%, #374151 75%);
        background-size: 200% 100%;
        animation: loading 1.5s infinite;
      }
      @keyframes loading {
        0% { background-position: 200% 0; }
        100% { background-position: -200% 0; }
      }
    `;

    const styleElement = document.createElement('style');
    styleElement.textContent = criticalStyles;
    document.head.appendChild(styleElement);

    return () => {
      if (document.head.contains(styleElement)) {
        document.head.removeChild(styleElement);
      }
    };
  }, []);

  return null;
};