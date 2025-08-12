"use client";
import { useEffect, useRef } from 'react';

const sectionColors = {
  'hero': '#00001a',       // Initial deep blue
  'projects': '#db9846',   // Light orange/gold
  'designs': '#b54304',    // Burnt orange/rust
  'about': '#81b5e0',      // Sky blue
  'tech-stack': '#66718f', // Slate blue
  'contact': '#4c5279',    // Deep purple-blue
  'footer': '#3d2b2f'      // Dark finish
} as const;

export function useBackgroundColor() {
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          const color = sectionColors[sectionId as keyof typeof sectionColors];
          if (color) {
            document.documentElement.style.setProperty('--dynamic-bg-color', color);
          }
        }
      });
    };

    observer.current = new IntersectionObserver(handleIntersect, {
      root: null,
      rootMargin: '0px',
      threshold: 0.4,
    });

    // Observe all sections
    Object.keys(sectionColors).forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.current?.observe(element);
      }
    });

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);
}
