"use client";
import React, { useState } from 'react'
import { AuroraBackground } from './ui/aurora-background'
import { SplineSceneBasic } from './ui/spline-demo'
import { Spotlight } from './ui/spotlight-new'
import LoadingAnimation from './ui/loading-animation'


const Hero = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && (
        <LoadingAnimation 
          onComplete={handleLoadingComplete}
          duration={1500}
        />
      )}
      
      <section id="Hero" className={`transition-opacity duration-500 mask-top-fade ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <AuroraBackground className="relative min-h-screen flex flex-col justify-center items-center pt-20 md:pt-36">
        
          <Spotlight />
          
          <div className="w-full px-0 sm:container sm:mx-auto sm:px-8 relative z-10">
            <SplineSceneBasic />
          </div>
        </AuroraBackground>
      </section>
      
    </>
  )
}

export default Hero
