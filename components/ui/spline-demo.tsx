'use client'

import { SplineScene } from "@/components/ui/spline"
import  TextRotator from "./classy-hero"
import React, { useState, useEffect, useRef, useCallback } from "react"
import { GradientTextDemo } from "./gradient-demo"
import { gsap } from "gsap"
import { NavbarButton } from "@/components/ui/resizable-navbar"

export function SplineSceneBasic() {
  const [titlesVisible, setTitlesVisible] = useState(true)
  const [counter, setCounter] = useState(5)
  const [showButton, setShowButton] = useState(false)
  const [splineInteractive, setSplineInteractive] = useState(false)
  const [countdownStarted, setCountdownStarted] = useState(false)
  const titleRefs = useRef<(HTMLElement | null)[]>([])
  const containerRef = useRef<HTMLDivElement>(null)
  const counterRef = useRef<HTMLDivElement>(null)
  
  // Function to add elements to refs array
  const addToRefs = (el: HTMLElement | null, index: number) => {
    if (el && !titleRefs.current.includes(el)) {
      titleRefs.current[index] = el
    }
  }

  // Function to get color based on counter value
  const getCounterColor = (count: number) => {
    switch (count) {
      case 5: return { bg: 'bg-transparent', text: 'text-red-400', border: 'border-red-400' }
      case 4: return { bg: 'bg-transparent', text: 'text-orange-400', border: 'border-orange-400' }
      case 3: return { bg: 'bg-transparent', text: 'text-yellow-400', border: 'border-yellow-400' }
      case 2: return { bg: 'bg-transparent', text: 'text-blue-400', border: 'border-blue-400' }
      case 1: return { bg: 'bg-transparent', text: 'text-green-400', border: 'border-green-400' }
      case 0: return { bg: 'bg-transparent', text: 'text-purple-400', border: 'border-purple-400' }
      default: return { bg: 'bg-transparent', text: 'text-sky-400', border: 'border-sky-400' }
    }
  }

  // Function to animate counter pulsation
  const animateCounter = useCallback(() => {
    if (counterRef.current) {
      gsap.to(counterRef.current, {
        scale: 1.5,
        duration: 0.3,
        ease: "power2.out",
        yoyo: true,
        repeat: 1
      })
    }
  }, [])

  // Function to animate fade-off when counter reaches 0
  const animateFadeOff = useCallback(() => {
    if (titleRefs.current.length > 0) {
      const tl = gsap.timeline({
        onComplete: () => {
          setTitlesVisible(false)
          setSplineInteractive(true)
          setShowButton(true)
        }
      })
      
      // Animate all title elements with a subtle stagger
      tl.to(titleRefs.current.filter(Boolean), {
        opacity: 0,
        y: -30,
        scale: 0.95,
        filter: "blur(8px)",
        duration: 1.2,
        ease: "power2.inOut",
        stagger: {
          amount: 0.4,
          from: "start"
        }
      })
    }
  }, [])

  const startCountdown = useCallback(() => {
    setCountdownStarted(true)
    const countdownInterval = setInterval(() => {
      setCounter((prev) => {
        // Trigger animation before changing counter
        animateCounter()
        
        if (prev <= 1) {
          clearInterval(countdownInterval)
          // Start fade-off animation when counter reaches 0
          setTimeout(() => {
            animateFadeOff()
          }, 600) // Wait for final counter animation to complete
          return 0
        }
        return prev - 1
      })
    }, 1000)
  }, [animateCounter, animateFadeOff])

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
  }, [startCountdown])

  // Function to animate titles back in when user clicks 'Exit Interaction'
  const animateTitlesIn = useCallback(() => {
    if (titleRefs.current.length > 0) {
      // First set visibility and z-index
      setTitlesVisible(true)
      setSplineInteractive(false)
      
      // Reset any previous transforms and start animation
      const tl = gsap.timeline()
      
      // Set initial state for re-entry
      tl.set(titleRefs.current.filter(Boolean), {
        opacity: 0,
        y: 30,
        scale: 0.9,
        filter: "blur(5px)"
      })
      
      // Animate titles back in with stagger
      tl.to(titleRefs.current.filter(Boolean), {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        duration: 1,
        ease: "power2.out",
        stagger: {
          amount: 0.3,
          from: "start"
        }
      })
    }
  }, [])

  const toggleTitles = () => {
    if (titlesVisible) {
      // Hide titles with fade-off animation
      animateFadeOff()
    } else {
      // Show titles with fade-in animation
      animateTitlesIn()
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
    <div ref={containerRef} className="w-full h-screen relative overflow-hidden pt-20 md:pt-24">
      <div className="flex flex-col md:flex-row h-full relative">
        {/* Hero Titles - Conditional visibility */}
        <div 
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 w-full p-8 flex flex-col justify-center items-center bg-transparent ${
            titlesVisible ? 'z-20' : 'z-0'
          }`} 
          style={{ transform: 'translate(-50%, -70%)' }}
        >
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            <h2
              ref={(el) => addToRefs(el, 0)}
              className="uppercase tracking-widest mb-3 text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-quantico font-bold text-center text-white-100"
              style={{ fontFamily: "var(--font-quantico) !important", opacity: 0 }}
            >
              FULL STACK
            </h2>

            <div 
              ref={(el) => addToRefs(el, 1)}
              className="text-center text-white-100 tracking-widest text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-quantico font-bold [text-shadow:1px_1px_3px_rgba(0,0,0,0.7)]"
              style={{ fontFamily: "var(--font-quantico) !important", opacity: 0 }}
            >
              <GradientTextDemo/>
            </div>
            
            <div
              className="text-2xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl mt-2 text-center font-quantico font-bold text-sky-400"
              style={{ fontFamily: "var(--font-quantico) !important" }}
            >
              <span
                ref={(el) => addToRefs(el, 2)}
                className="block mb-2 font-quantico font-bold"
                style={{ 
                  textShadow: "2px 2px 3px rgba(0,0,0,0.7)",
                  fontFamily: "var(--font-quantico) !important",
                  opacity: 0
                }}
              >
                Designing&nbsp;&amp;&nbsp;crafting
              </span>
              <div ref={(el) => addToRefs(el, 3)} style={{ opacity: 0 }}>
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
        {!showButton && counter >= 0 && countdownStarted && (
          <div className="absolute left-1/2 -translate-x-1/2 z-30" style={{ top: '5%' }}>
            <div 
              ref={counterRef}
              className={`rounded-full w-20 h-20 flex items-center justify-center transition-all duration-300 bg-transparent border-2 ${getCounterColor(counter).border} shadow-[0_0_12px_rgba(56,189,248,0.35)]`}
            >
              <span className={`text-3xl font-bold font-quantico ${getCounterColor(counter).text}`}>
                {counter}
              </span>
            </div>
          </div>
        )}

        {/* Toggle Text Button - Show/Hide functionality */}
        {showButton && (
          <div className="absolute left-1/2 -translate-x-1/2 z-30" style={{ top: '5%' }}>
            <NavbarButton
              as="button"
              onClick={toggleTitles}
              variant="ghost"
              className="px-8 py-4 text-lg font-quantico"
            >
              {titlesVisible ? 'TEXT OFF' : 'TEXT ON'}
            </NavbarButton>
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