'use client'

import { Suspense, lazy, useRef, useEffect, useState, useCallback, forwardRef } from 'react'
import type { ForwardRefExoticComponent, RefAttributes } from 'react'

// Fallback component for when Spline fails to load
const SplineFallback = forwardRef<HTMLDivElement, any>((props, ref) => (
  <div 
    ref={ref} 
    className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-900 to-black rounded-lg"
  >
    <div className="text-gray-400 text-sm">3D Scene unavailable</div>
  </div>
));

SplineFallback.displayName = 'SplineFallback'

// Lazy load Spline with better error handling and SSR safety
const Spline = lazy(() => {
  // Only import on client side
  if (typeof window === 'undefined') {
    return Promise.resolve({ default: SplineFallback });
  }
  
  return import('@splinetool/react-spline').catch(() => ({
    default: SplineFallback
  }));
})

interface SplineSceneProps {
  scene: string
  className?: string
  priority?: boolean // For above-the-fold content
}

export function SplineScene({ scene, className, priority = false }: SplineSceneProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(priority); // Load immediately if priority
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // Ensure we're on the client side
  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleIntersection = useCallback(([entry]: IntersectionObserverEntry[]) => {
    if (entry.isIntersecting && !isInView) {
      setIsInView(true);
      setIsLoading(true);
    }
  }, [isInView]);

  useEffect(() => {
    if (priority) return; // Skip observer for priority content

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.05,
      rootMargin: '200px' // Start loading earlier
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [handleIntersection, priority]);

  const handleSplineLoad = useCallback(() => {
    setIsLoading(false);
  }, []);

  const handleSplineError = useCallback(() => {
    setHasError(true);
    setIsLoading(false);
  }, []);

  if (hasError) {
    return (
      <div className={`w-full h-full bg-gradient-to-br from-gray-900 to-black rounded-lg flex items-center justify-center ${className}`}>
        <div className="text-gray-400 text-sm">3D Scene unavailable</div>
      </div>
    );
  }

  // Don't render anything until we're on the client
  if (!isClient) {
    return (
      <div className={`w-full h-full bg-gradient-to-br from-gray-900 to-black rounded-lg flex items-center justify-center ${className}`}>
        <div className="text-gray-400 text-sm">Loading 3D Scene...</div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className={`w-full h-full ${className}`}>
      {isInView ? (
        <Suspense 
          fallback={
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-900 to-black rounded-lg">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
              <span className="ml-3 text-gray-400 text-sm">Loading 3D Scene...</span>
            </div>
          }
        >
          <Spline
            scene={scene}
            className="w-full h-full"
            onLoad={handleSplineLoad}
            onError={handleSplineError}
            style={{ 
              willChange: isLoading ? 'transform' : 'auto',
              transform: isLoading ? 'translateZ(0)' : 'none'
            }}
          />
        </Suspense>
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-gray-900 to-black rounded-lg flex items-center justify-center">
          <div className="text-gray-400 text-sm">Scroll to load 3D Scene</div>
        </div>
      )}
    </div>
  )
} 