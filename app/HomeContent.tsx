'use client';

import dynamic from "next/dynamic";
import { useEffect, useRef, type ReactNode } from "react";

// 1. First, define all the types we need
interface NavItem {
  name: string;
  link: string;
  target?: string;
  icon?: ReactNode;
}

// Define the expected props for FloatingNav component
interface FloatingNavProps {
  navItems: NavItem[];
  className?: string;
}

interface LazySectionProps {
  id: string;
  children: ReactNode;
  className?: string;
}

// 2. Define navigation items
const navItems: NavItem[] = [
  { name: "Home", link: "#hero" },
  { name: "Projects", link: "#projects" },
  { name: "Designs", link: "#designs" },
  { name: "About", link: "#about" },
  { name: "Tech Stack", link: "#tech-stack" },
  { name: "Contact", link: "#contact" },
];

// 3. Create a type-safe dynamic import function
function createDynamicImport<T extends {}>(
  loader: () => Promise<{ default: React.ComponentType<T> }>,
  options: { ssr?: boolean; loading?: () => JSX.Element | null } = {}
) {
  return dynamic(loader, { ...options }) as unknown as React.ComponentType<T>;
}

// 4. Define loading components
const loadingComponent = (
  <div className="h-96 bg-gray-800/20 rounded-lg flex items-center justify-center">
    <div className="animate-pulse w-12 h-12 bg-gray-700 rounded-lg"></div>
  </div>
);

const heroLoading = <div className="h-screen flex items-center justify-center">Loading...</div>;
const footerLoading = <div className="h-40 bg-gray-900"></div>;
const starsLoading = <div className="fixed inset-0 -z-10 bg-gradient-to-b from-black to-gray-900" />;

// 5. Dynamically import components with proper typing
const FloatingNav = createDynamicImport<FloatingNavProps>(
  () => import("@/components/ui/FloatingNav").then(mod => ({
    default: (props: FloatingNavProps) => <mod.FloatingNav {...props} />
  })),
  { ssr: true, loading: () => null }
);

const Hero = createDynamicImport<{}>(
  () => import("@/components/Hero"),
  { ssr: true, loading: () => heroLoading }
);

const Grid = createDynamicImport<{}>(
  () => import("@/components/Grid"),
  { ssr: false, loading: () => loadingComponent }
);

const Story = createDynamicImport<{}>(
  () => import("@/components/Story"),
  { ssr: false, loading: () => loadingComponent }
);

const Approach = createDynamicImport<{}>(
  () => import("@/components/Approach"),
  { ssr: false, loading: () => loadingComponent }
);

const Footer = createDynamicImport<{}>(
  () => import("@/components/Footer"),
  { ssr: false, loading: () => footerLoading }
);

const LazySection = createDynamicImport<LazySectionProps>(
  () => import("@/components/LazySection").then(mod => ({
    default: (props: LazySectionProps) => <mod.LazySection {...props} />
  })),
  { ssr: false, loading: () => null }
);

const StarsCanvas = createDynamicImport<{}>(
  () => import("@/components/main/star-background").then(mod => ({ default: mod.StarsCanvas })),
  { ssr: false, loading: () => starsLoading }
);

const TimelineDemo = createDynamicImport<{}>(
  () => import("@/components/ui/timeline-demo"),
  { ssr: false, loading: () => loadingComponent }
);

const HomeContent = () => {
  const observer = useRef<IntersectionObserver | null>(null);
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  useEffect(() => {
    // Color mapping for each section
    const sectionColors: { [key: string]: string } = {
      'hero': '#00001a',
      'projects': '#db9846',
      'designs': '#b54304',
      'about': '#81b5e0',
      'tech-stack': '#66718f',
      'contact': '#4c5279',
      'footer': '#3d2b2f'
    };

    // Initialize IntersectionObserver
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            const color = sectionColors[sectionId];
            if (color) {
              document.documentElement.style.setProperty('--dynamic-bg-color', color);
            }
          }
        });
      },
      { threshold: 0.4 }
    );

    // Observe all sections
    Object.keys(sectionColors).forEach(sectionId => {
      const element = document.getElementById(sectionId);
      if (element && observer.current) {
        observer.current.observe(element);
      }
    });

    // Cleanup
    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);

  return (
    <main className="relative flex justify-center p-0 md:p-5 items-center flex-col overflow-hidden mx-auto">
      <FloatingNav navItems={navItems} />
      <div className="max-w-7xl w-full relative">
        <section id="hero" className="relative h-screen flex items-center justify-center">
          <Hero />
          <div className="absolute inset-0 -z-10">
            <StarsCanvas />
          </div>
        </section>

        <LazySection id="projects">
          <Grid />
        </LazySection>

        <LazySection id="designs">
          <TimelineDemo />
        </LazySection>

        <LazySection id="about">
          <Story />
        </LazySection>

        <LazySection id="tech-stack">
          <Approach />
        </LazySection>

        <LazySection id="contact">
          <Footer />
        </LazySection>
      </div>
    </main>
  );
};

export default HomeContent;
