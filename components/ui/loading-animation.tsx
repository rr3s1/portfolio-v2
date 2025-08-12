"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface LoadingAnimationProps {
  onComplete: () => void;
  duration?: number;
}

const LoadingAnimation: React.FC<LoadingAnimationProps> = ({ 
  onComplete, 
  duration = 1500 
}) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 300); // Wait for fade out animation
    }, duration);

    return () => clearTimeout(timer);
  }, [onComplete, duration]);

  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-300 ${
      isVisible ? 'opacity-100' : 'opacity-0'
    }`}>
      <div className="flex flex-col items-center space-y-4">
        {/* Logo with pulse animation */}
        <div className="relative">
          <Image
            src="/rs-logopng.png"
            alt="Loading..."
            width={120}
            height={120}
            className="animate-pulse"
            priority
          />
        </div>
        
        {/* Loading dots */}
        <div className="flex space-x-2">
          <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
        
        {/* Loading text */}
        <p className="text-white text-sm font-light tracking-wider animate-pulse">
          Loading...
        </p>
      </div>
    </div>
  );
};

export default LoadingAnimation;