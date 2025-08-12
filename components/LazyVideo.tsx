'use client';

import React, { useRef, useEffect, useState, useCallback } from 'react';

interface LazyVideoProps {
  src: string;
  className?: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  playsInline?: boolean;
  poster?: string;
}

export const LazyVideo: React.FC<LazyVideoProps> = ({
  src,
  className = '',
  autoPlay = false,
  muted = true,
  loop = false,
  playsInline = true,
  poster
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05, rootMargin: '100px' }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleLoadedData = useCallback(() => {
    setIsLoaded(true);
  }, []);

  const handleError = useCallback(() => {
    setLoadError(true);
  }, []);

  const handleCanPlay = useCallback(() => {
    if (autoPlay && videoRef.current && isInView) {
      videoRef.current.play().catch(() => {
        console.warn('Autoplay prevented');
      });
    }
  }, [autoPlay, isInView]);

  if (loadError) {
    return (
      <div className={`bg-gradient-to-br from-gray-900 to-black rounded-lg flex items-center justify-center ${className}`}>
        <div className="text-gray-400 text-sm">Video unavailable</div>
      </div>
    );
  }

  return (
    <video
      ref={videoRef}
      className={`${className} ${!isLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
      autoPlay={false} // Handle autoplay manually for better control
      muted={muted}
      loop={loop}
      playsInline={playsInline}
      preload={isInView ? 'metadata' : 'none'} // Use metadata instead of auto for faster loading
      poster={poster}
      onLoadedData={handleLoadedData}
      onCanPlay={handleCanPlay}
      onError={handleError}
      style={{ willChange: isLoaded ? 'auto' : 'opacity' }}
    >
      {isInView && <source src={src} type="video/mp4" />}
    </video>
  );
};