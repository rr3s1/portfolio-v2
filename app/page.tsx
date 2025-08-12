"use client";
import dynamic from "next/dynamic";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";

import Footer from "@/components/Footer";
import Approach from "@/components/Approach";
import { LazySection } from "@/components/LazySection";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useState, useCallback } from "react";

// Lazy load heavy 3D components with better loading states
const StarsCanvas = dynamic(() => import("@/components/main/star-background").then(mod => ({ default: mod.StarsCanvas })), {
  ssr: false,
  loading: () => <div className="fixed inset-0 -z-10 bg-gradient-to-b from-black to-gray-900" />
});

// Defer heavy components until they're needed

const TimelineDemo = dynamic(() => import("@/components/ui/timeline-demo"), {
  ssr: false,
  loading: () => (
    <div className="h-96 bg-gray-800 rounded-lg flex items-center justify-center">
      <div className="animate-pulse w-12 h-12 bg-gray-700 rounded-lg"></div>
    </div>
  )
});

const HeroParallaxDemo = dynamic(() => import("@/components/ui/hero-parallax-demo"), {
  ssr: false,
  loading: () => (
    <div className="h-96 bg-gray-800 rounded-lg flex items-center justify-center">
      <div className="animate-pulse w-12 h-12 bg-gray-700 rounded-lg"></div>
    </div>
  )
});

const Techstack = dynamic(() => import("@/components/TechStack"), {
  ssr: false,
  loading: () => (
    <div className="h-64 bg-gray-800 rounded-lg flex items-center justify-center">
      <div className="animate-pulse w-8 h-8 bg-gray-700 rounded-lg"></div>
    </div>
  )
});






// Define your cosmic journey color palette with transparency to show stars
const sections = [
  { id: 'hero', color: 'rgba(0, 0, 26, 0.85)' }, // Cosmic Deep Blue - The starting point, deep space
  { id: 'timeline', color: 'rgba(3, 43, 51, 0.85)' },
  { id: 'parallax', color: 'rgba(36, 0, 46, 0.85)' }, // Starlight Teal - Distant galaxy cluster
  { id: 'approach', color: 'rgba(28, 37, 65, 0.85)' }, // Asteroid Grey - Muted asteroid belt
  { id: 'grid', color: 'rgba(1, 56, 66, 0.85)' }, // Supernova Gold - Distant exploding star
  { id: 'tech', color: 'rgba(15, 25, 45, 0.65)' }, // Lighter Deep Void - More transparent for glass effect
  { id: 'footer', color: 'rgba(10, 15, 35, 0.65)' }, // Lighter Cosmic Blue - More transparent for glass effect
];

const sectionIds = sections.map(s => s.id);

export default function Home() {
  const [currentBgColor, setCurrentBgColor] = useState(sections[0].color);

  const handleSectionChange = useCallback((sectionId: string) => {
    console.log('Section detected:', sectionId);
    const section = sections.find(s => s.id === sectionId);
    if (section) {
      console.log('Setting background color to:', section.color);
      setCurrentBgColor(section.color);
    } else {
      console.log('Section not found in sections array:', sectionId);
    }
  }, []);

  useIntersectionObserver(sectionIds, handleSectionChange);

  return (
    <>
      <StarsCanvas />
      <FloatingNav navItems={navItems}/>
      
      <main 
        className="relative w-full max-w-full overflow-x-hidden transition-colors duration-1000 ease-in-out"
        style={{ backgroundColor: currentBgColor }}
      >
      
     

        {/* Hero section - Full width, no constraints */}
        <section id="hero" className="min-h-screen w-full">
          <Hero />
        </section>
     
        {/* Other sections - Constrained width, centered */}
        <div className="flex justify-center">
          <div className="max-w-7xl w-full px-4 md:px-8">


          <section id="approach" className="mt-40 py-60">
          <LazySection>
            <Approach />
          </LazySection>
        </section>


  
          <section id="grid" >
          <LazySection>
            <Grid />
          </LazySection>
        </section>

          <section id="timeline" className="mt-20 py-20">
          <LazySection>
            <TimelineDemo />
          </LazySection>
        </section>
        
        <section id="parallax">
          <LazySection>
            <HeroParallaxDemo />
          </LazySection>
        </section>
        
    
      
        
        {/* <section id="story">
          <LazySection>
            <Story />
          </LazySection>
        </section>
         */}
        <section id="tech">
          <LazySection>
            <Techstack />
          </LazySection>
        </section>

        <section id="footer">
          <Footer />
        </section>
          </div>
        </div>
      </main>
    </>
  );
}
