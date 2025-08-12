// hooks/useIntersectionObserver.ts
import { useEffect, useRef } from 'react';

type ObserverCallback = (sectionId: string) => void;

export function useIntersectionObserver(
  sectionIds: string[],
  callback: ObserverCallback
) {
  const observer = useRef<IntersectionObserver | null>(null);
  const visibleSections = useRef<Map<string, number>>(new Map());

  useEffect(() => {
    // If an observer already exists, disconnect it
    if (observer.current) {
      observer.current.disconnect();
    }

    // Create a new observer
    observer.current = new IntersectionObserver(
      (entries) => {
        // Update visibility ratios for all entries
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0) {
            visibleSections.current.set(entry.target.id, entry.intersectionRatio);
          } else {
            visibleSections.current.delete(entry.target.id);
          }
        });

        // Find the section with the highest visibility ratio
        let mostVisibleSection = '';
        let highestRatio = 0;

        visibleSections.current.forEach((ratio, sectionId) => {
          if (ratio > highestRatio) {
            highestRatio = ratio;
            mostVisibleSection = sectionId;
          }
        });

        // Only trigger callback if we have a most visible section
        if (mostVisibleSection && highestRatio > 0.1) {
          console.log('Most visible section:', mostVisibleSection, 'Ratio:', highestRatio);
          callback(mostVisibleSection);
        }
      },
      {
        // Use multiple thresholds for better tracking
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
        // More generous margins
        rootMargin: "0px 0px 0px 0px",
      }
    );

    // Observe each section by its ID
    const { current: currentObserver } = observer;
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        currentObserver.observe(el);
      }
    });

    // Cleanup function to disconnect the observer when the component unmounts
    return () => {
      if (currentObserver) {
        currentObserver.disconnect();
      }
    };
  }, [sectionIds, callback]); // Rerun effect if sections or callback change
}