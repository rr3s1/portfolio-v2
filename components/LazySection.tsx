'use client';

import { ReactNode } from 'react';
import { useLazyIntersectionObserver } from '@/hooks/useLazyIntersectionObserver';

interface LazySectionProps {
  children: ReactNode;
  fallback?: ReactNode;
  className?: string;
  threshold?: number;
  rootMargin?: string;
}

export const LazySection: React.FC<LazySectionProps> = ({
  children,
  fallback,
  className = '',
  threshold = 0.1,
  rootMargin = '100px',
}) => {
  const { ref, hasIntersected } = useLazyIntersectionObserver({
    threshold,
    rootMargin,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className={className}>
      {hasIntersected ? children : (fallback || <div className="h-96 bg-gray-800/20 rounded-lg animate-pulse" />)}
    </section>
  );
};