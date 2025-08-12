'use client'

import { SplineScene } from "@/components/ui/spline"
import  TextRotator from "./classy-hero"

import React, { useState, useEffect, useRef } from "react"
import { GradientTextDemo } from "./gradient-demo"
import { gsap } from "gsap"

export function SplineSceneBasic() {
  const [titlesVisible, setTitlesVisible] = useState(true)
  const [counter, setCounter] = useState(5)
  const [showButton, setShowButton] = useState(false)
  const [splineInteractive, setSplineInteractive] = useState(false)
  const [countdownStarted, setCountdownStarted] = useState(false)
  const titleRefs = useRef<(HTMLElement | null)[]>([])
  const containerRef = useRef<HTMLDivElement>(null)
  
  // Function to add elements to refs array
  const addToRefs = (el: HTMLElement | null, index: number) => {
    if (el && !titleRefs.current.includes(el)) {
      titleRefs.current[index] = el
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      // GSAP stagger animation for all 4 titles
      const tl = gsap.timeline({
        onComplete: () => {
          // Start countdown after stagger animation completes
          setTimeout(() => {
            startCountdown()
          }, 1000) // Wait 1 second after stagger completes
        }
      })
      
      tl.fromTo(
        titleRefs.current.filter(Boolean), // Filter out null refs
        {
          opacity: 0,
          y: 50,
          scale: 0.8,
          filter: "blur(10px)"
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 1.2,
          ease: "power3.out",
          stagger: {
            amount: 0.8, // Total time for all animations
            from: "start"
          }
        }
      )
    }, 4000)
    return () => clearTimeout(timer)
  }, [])

  const startCountdown = () => {
    setCountdownStarted(true)
    const countdownInterval = setInterval(() => {
      setCounter((prev) => {
        if (prev <= 1) {
          clearInterval(countdownInterval)
          // Hide titles and make Spline interactive
          setTitlesVisible(false)
          setSplineInteractive(true)
          setShowButton(true)
          return 0
        }
        return prev - 1
      })
    }, 1000)
  }

  const toggleTitles = () => {
    if (titlesVisible) {
      // Hide titles
      setTitlesVisible(false)
      setSplineInteractive(true)
    } else {
      // Show titles
      setTitlesVisible(true)
      setSplineInteractive(false)
    }
  }

  // const [showVideo, setShowVideo] = useState(false); // showVideo state seems unused
  
  //   useEffect(() => {
  //     const timer = setTimeout(() => {
  //       setShowVideo(true);
  //     }, 5000); // 7 seconds
  //     return () => clearTimeout(timer);
  //   }, []);

  return (
    <div ref={containerRef} className="w-full h-screen relative overflow-hidden">
      <div className="flex flex-col md:flex-row h-full relative">
        {/* Hero Titles - Conditional visibility */}
        <div 
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 w-full p-8 flex flex-col justify-center items-center bg-transparent transition-all duration-1000 ${
            titlesVisible ? 'z-20 opacity-100' : 'z-0 opacity-0'
          }`} 
          style={{ transform: 'translate(-50%, -70%)' }}
        >
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            <h2
              ref={(el) => addToRefs(el, 0)}
              className="uppercase tracking-widest mb-3 text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-quantico font-bold text-center text-white-100 opacity-0"
              style={{ fontFamily: "var(--font-quantico) !important" }}
            >
              FULL STACK
            </h2>

            <div 
              ref={(el) => addToRefs(el, 1)}
              className="text-center text-white-100 tracking-widest text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-quantico font-bold [text-shadow:1px_1px_3px_rgba(0,0,0,0.7)] opacity-0"
              style={{ fontFamily: "var(--font-quantico) !important" }}
            >
              <GradientTextDemo/>
            </div>
            
            <div
              className="text-2xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl mt-2 text-center font-quantico font-bold text-sky-400"
              style={{ fontFamily: "var(--font-quantico) !important" }}
            >
              <span
                ref={(el) => addToRefs(el, 2)}
                className="block mb-2 font-quantico font-bold opacity-0"
                style={{ 
                  textShadow: "2px 2px 3px rgba(0,0,0,0.7)",
                  fontFamily: "var(--font-quantico) !important"
                }}
              >
                Designing&nbsp;&amp;&nbsp;crafting
              </span>
              <div ref={(el) => addToRefs(el, 3)} className="opacity-0">
                <TextRotator
                  words={[
                    "Apps",
                    "Platforms",
                    "Interfaces",
                    "Websites",
                    "Animations",
                    "Features",
                    "Experiences",
                  ]}
                  interval={2000}
                  className="text-5xl sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl font-quantico"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Counter Display - Same position as button */}
        {!showButton && counter > 0 && countdownStarted && (
          <div className="absolute left-1/2 -translate-x-1/2 z-30" style={{ top: '5%' }}>
            <div className="bg-black/50 backdrop-blur-sm rounded-full w-20 h-20 flex items-center justify-center border border-sky-600/30">
              <span className="text-3xl font-bold text-sky-600 font-quantico">
                {counter}
              </span>
            </div>
          </div>
        )}

        {/* Toggle Text Button - Show/Hide functionality */}
        {showButton && (
          <div className="absolute left-1/2 -translate-x-1/2 z-30" style={{ top: '5%' }}>
            <button
              onClick={toggleTitles}
              className="bg-transparent hover:bg-white/10 text-white px-8 py-4 rounded-full font-quantico font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border border-white/30"
            >
              {titlesVisible ? 'Free View Interaction' : 'Show information'}
            </button>
          </div>
        )}

        {/* Spline Scene - Interactive when titles are hidden */}
        <div 
          className={`absolute inset-0 w-full h-full overflow-hidden transition-all duration-1000 ${
            splineInteractive ? 'z-10' : 'z-5'
          }`}
          style={{ 
            borderRadius: '312px',
            pointerEvents: splineInteractive ? 'auto' : 'none'
          }}
        >
          <SplineScene
            scene="https://prod.spline.design/t1YmZBlct2uWTGpy/scene.splinecode"
            className="w-full h-full"
            priority={true}
          />
          {/* Enhanced gradient mask overlay */}
          <div
            className="absolute left-0 bottom-0 w-full"
            style={{
              height: '150px',
              background: 'linear-gradient(to top, rgba(0, 0, 26, 1) 0%, rgba(0, 0, 26, 0.9) 30%, rgba(0, 0, 26, 0.7) 60%, transparent 100%)',
              pointerEvents: 'none',
              zIndex: 5,
            }}
          />
        </div>
      </div>
    </div>
  )
}