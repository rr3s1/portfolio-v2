import React from "react";
import { Timeline } from "@/components/ui/timeline";

export default function TimelineDemo() {
  const Tech = ({ items }: { items: string[] }) => (
    <div className="mt-2 flex flex-wrap gap-2" aria-label="Tech stack">
      {items.map((t) => (
        <span
          key={t}
          className="px-2.5 py-1 text-xs rounded-full border border-white/10 bg-white/5 text-neutral-700 dark:text-neutral-200 shadow-[0_0_6px_rgba(255,255,255,0.08)] backdrop-blur-sm"
        >
          {t}
        </span>
      ))}
    </div>
  );
  const data = [
    {
      title: (
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6EFFB1] to-[#A594F9]" id="projects">Portfolio v2</span>
      ),
      content: (
        <div className="bg-transparent quantico-regular">
          <p className="mb-4 quantico-regular font-normal text-neutral-800 text-lg md:text-xl lg:text-2xl dark:text-neutral-200">
            Interactive personal portfolio with 3D visuals, motion‑responsive UI and reusable components for a smooth browsing experience.
          </p>
          <div className="mb-4">
            <p className="text-sm text-neutral-600 dark:text-neutral-400">Tech Stack</p>
            <Tech items={["Next.js", "React", "TypeScript", "Tailwind CSS", "Three.js", "Framer Motion"]} />
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href="https://portfolio-v2-ashy-theta.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-transparent text-emerald-400 border border-emerald-300/40 rounded-full tracking-wider font-semibold shadow-[0_0_8px_rgba(52,211,153,0.25)] hover:bg-emerald-300/10 hover:border-emerald-300/70 hover:shadow-[0_0_16px_rgba(52,211,153,0.45)] focus:outline-none focus:ring-2 focus:ring-emerald-400/40 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Live Demo
            </a>
            <a
              href="https://github.com/rr3s1/portfolio-v2"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-transparent text-sky-200 border border-sky-300/40 rounded-full tracking-wider font-semibold shadow-[0_0_8px_rgba(56,189,248,0.25)] hover:bg-sky-300/10 hover:border-sky-300/70 hover:shadow-[0_0_16px_rgba(56,189,248,0.45)] focus:outline-none focus:ring-2 focus:ring-orange-500/40 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              GitHub Repo
            </a>
          </div>
        </div>
      ),
    },
    {
      title: (
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6EFFB1] to-[#A594F9]">Aura Aesthetics</span>
      ),
      content: (
        <div className="bg-transparent quantico-regular">
          <p className="mb-4 quantico-regular font-normal text-neutral-800 text-lg md:text-xl lg:text-2xl dark:text-neutral-200">
            Comprehensive clinic platform for patient profiles, appointment scheduling, medical records and an admin dashboard with alerts.
          </p>
          <div className="mb-4">
            <p className="text-sm text-neutral-600 dark:text-neutral-400">Tech Stack</p>
            <Tech items={["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Spline", "Appwrite", "Twilio", "Sentry"]} />
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href="https://auraaesthetics.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-transparent text-emerald-400 border border-emerald-300/40 rounded-full tracking-wider font-semibold shadow-[0_0_8px_rgba(52,211,153,0.25)] hover:bg-emerald-300/10 hover:border-emerald-300/70 hover:shadow-[0_0_16px_rgba(52,211,153,0.45)] focus:outline-none focus:ring-2 focus:ring-emerald-400/40 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Live Demo
            </a>
            <a
              href="https://github.com/rr3s1/auraaesthetics"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-transparent text-sky-200 border border-sky-300/40 rounded-full tracking-wider font-semibold shadow-[0_0_8px_rgba(56,189,248,0.25)] hover:bg-sky-300/10 hover:border-sky-300/70 hover:shadow-[0_0_16px_rgba(56,189,248,0.45)] focus:outline-none focus:ring-2 focus:ring-orange-500/40 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              GitHub Repo
            </a>
          </div>
        </div>
      ),
    },
    {
      title: (
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6EFFB1] to-[#A594F9]">AI PrepWise</span>
      ),
      content: (
        <div className="bg-transparent quantico-regular">
          <p className="mb-4 quantico-regular font-normal text-neutral-800 text-lg md:text-xl lg:text-2xl dark:text-neutral-200">
            AI‑driven interview prep with voice‑based mock interviews, instant scoring and actionable feedback.
          </p>
          <div className="mb-4">
            <p className="text-sm text-neutral-600 dark:text-neutral-400">Tech Stack</p>
            <Tech items={["Next.js", "Firebase", "Tailwind CSS", "Vapi AI", "shadcn/ui", "Gemini"]} />
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href="https://ai-interviews-system.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-transparent text-emerald-400 border border-emerald-300/40 rounded-full tracking-wider font-semibold shadow-[0_0_8px_rgba(52,211,153,0.25)] hover:bg-emerald-300/10 hover:border-emerald-300/70 hover:shadow-[0_0_16px_rgba(52,211,153,0.45)] focus:outline-none focus:ring-2 focus:ring-emerald-400/40 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Live Demo
            </a>
            <a
              href="https://github.com/rr3s1/ai-interviews-system"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-transparent text-sky-200 border border-sky-300/40 rounded-full tracking-wider font-semibold shadow-[0_0_8px_rgba(56,189,248,0.25)] hover:bg-sky-300/10 hover:border-sky-300/70 hover:shadow-[0_0_16px_rgba(56,189,248,0.45)] focus:outline-none focus:ring-2 focus:ring-orange-500/40 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              GitHub Repo
            </a>
          </div>
        </div>
      ),
    },
    {
      title: (
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6EFFB1] to-[#A594F9]">AI ResuMind</span>
      ),
      content: (
        <div className="bg-transparent quantico-regular">
          <p className="mb-4 quantico-regular font-normal text-neutral-800 text-lg md:text-xl lg:text-2xl dark:text-neutral-200">
            Smart resume analyzer that matches resumes to job posts, generates ATS scores and offers tailored improvement tips.
          </p>
          <div className="mb-4">
            <p className="text-sm text-neutral-600 dark:text-neutral-400">Tech Stack</p>
            <Tech items={["React", "TypeScript", "Vite", "Tailwind CSS", "Puter.js", "Zustand"]} />
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href="#"
              aria-disabled="true"
              title="Live demo coming soon"
              className="inline-flex items-center gap-2 px-6 py-3 bg-transparent text-emerald-400 border border-emerald-300/40 rounded-full tracking-wider font-semibold opacity-60 cursor-not-allowed pointer-events-none"
            >
              Live Demo
            </a>
            <a
              href="https://github.com/rr3s1/AI-resume-ATS"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-transparent text-sky-200 border border-sky-300/40 rounded-full tracking-wider font-semibold shadow-[0_0_8px_rgba(56,189,248,0.25)] hover:bg-sky-300/10 hover:border-sky-300/70 hover:shadow-[0_0_16px_rgba(56,189,248,0.45)] focus:outline-none focus:ring-2 focus:ring-orange-500/40 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              GitHub Repo
            </a>
          </div>
        </div>
      ),
    },
    {
      title: (
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6EFFB1] to-[#A594F9]">Prestige Hair Salon</span>
      ),
      content: (
        <div className="bg-transparent quantico-regular">
          <p className="mb-4 quantico-regular font-normal text-neutral-800 text-lg md:text-xl lg:text-2xl dark:text-neutral-200">
            Premium salon landing page with booking flows, service showcases, team profiles and testimonials to drive conversions.
          </p>
          <div className="mb-4">
            <p className="text-sm text-neutral-600 dark:text-neutral-400">Tech Stack</p>
            <Tech items={["React", "TypeScript", "Tailwind CSS", "GSAP", "Spline", "Convex"]} />
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href="https://prestige-salon.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-transparent text-emerald-400 border border-emerald-300/40 rounded-full tracking-wider font-semibold shadow-[0_0_8px_rgba(52,211,153,0.25)] hover:bg-emerald-300/10 hover:border-emerald-300/70 hover:shadow-[0_0_16px_rgba(52,211,153,0.45)] focus:outline-none focus:ring-2 focus:ring-emerald-400/40 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Live Demo
            </a>
            <a
              href="https://github.com/rr3s1/prestige-salon"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-transparent text-sky-200 border border-sky-300/40 rounded-full tracking-wider font-semibold shadow-[0_0_8px_rgba(56,189,248,0.25)] hover:bg-sky-300/10 hover:border-sky-300/70 hover:shadow-[0_0_16px_rgba(56,189,248,0.45)] focus:outline-none focus:ring-2 focus:ring-orange-500/40 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              GitHub Repo
            </a>
          </div>
        </div>
      ),
    },
    {
      title: (
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6EFFB1] to-[#A594F9]">3D Apple iPhone</span>
      ),
      content: (
        <div className="bg-transparent quantico-regular">
          <p className="mb-4 quantico-regular font-normal text-neutral-800 text-lg md:text-xl lg:text-2xl dark:text-neutral-200">
            Product page experience with dynamic 3D model viewing, smooth animations and an elegant, high‑polish UI.
          </p>
          <div className="mb-4">
            <p className="text-sm text-neutral-600 dark:text-neutral-400">Tech Stack</p>
            <Tech items={["React", "Tailwind CSS", "GSAP", "Three.js", "R3F"]} />
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href="https://3d-iphone-gsap.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-transparent text-emerald-400 border border-emerald-300/40 rounded-full tracking-wider font-semibold shadow-[0_0_8px_rgba(52,211,153,0.25)] hover:bg-emerald-300/10 hover:border-emerald-300/70 hover:shadow-[0_0_16px_rgba(52,211,153,0.45)] focus:outline-none focus:ring-2 focus:ring-emerald-400/40 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Live Demo
            </a>
            <a
              href="https://github.com/rr3s1/3D-iPhone15-GSAP"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-transparent text-sky-200 border border-sky-300/40 rounded-full tracking-wider font-semibold shadow-[0_0_8px_rgba(56,189,248,0.25)] hover:bg-sky-300/10 hover:border-sky-300/70 hover:shadow-[0_0_16px_rgba(56,189,248,0.45)] focus:outline-none focus:ring-2 focus:ring-orange-500/40 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              GitHub Repo
            </a>
          </div>
        </div>
      ),
    },
    {
      title: (
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6EFFB1] to-[#A594F9]">Cocktails GSAP</span>
      ),
      content: (
        <div className="bg-transparent quantico-regular">
          <p className="mb-4 quantico-regular font-normal text-neutral-800 text-lg md:text-xl lg:text-2xl dark:text-neutral-200">
            Scroll‑driven storytelling with parallax, pinned sections, synced video playback and custom animated carousels.
          </p>
          <div className="mb-4">
            <p className="text-sm text-neutral-600 dark:text-neutral-400">Tech Stack</p>
            <Tech items={["React", "Vite", "Tailwind CSS", "GSAP"]} />
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href="https://cocktails-gsap-nine.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-transparent text-emerald-400 border border-emerald-300/40 rounded-full tracking-wider font-semibold shadow-[0_0_8px_rgba(52,211,153,0.25)] hover:bg-emerald-300/10 hover:border-emerald-300/70 hover:shadow-[0_0_16px_rgba(52,211,153,0.45)] focus:outline-none focus:ring-2 focus:ring-emerald-400/40 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Live Demo
            </a>
            <a
              href="https://github.com/rr3s1/cocktails-gsap/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-transparent text-sky-200 border border-sky-300/40 rounded-full tracking-wider font-semibold shadow-[0_0_8px_rgba(56,189,248,0.25)] hover:bg-sky-300/10 hover:border-sky-300/70 hover:shadow-[0_0_16px_rgba(56,189,248,0.45)] focus:outline-none focus:ring-2 focus:ring-orange-500/40 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              GitHub Repo
            </a>
          </div>
        </div>
      ),
    },
    {
      title: (
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6EFFB1] to-[#A594F9]">FoodDelivery Android</span>
      ),
      content: (
        <div className="bg-transparent quantico-regular">
          <p className="mb-4 quantico-regular font-normal text-neutral-800 text-lg md:text-xl lg:text-2xl dark:text-neutral-200">
            Mobile food ordering with Google sign‑in, rich search and filters, product pages, cart and a smooth checkout flow.
          </p>
          <div className="mb-4">
            <p className="text-sm text-neutral-600 dark:text-neutral-400">Tech Stack</p>
            <Tech items={["React Native", "Expo", "TypeScript", "NativeWind", "Appwrite"]} />
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href="#"
              aria-disabled="true"
              title="Live demo coming soon"
              className="inline-flex items-center gap-2 px-6 py-3 bg-transparent text-emerald-400 border border-emerald-300/40 rounded-full tracking-wider font-semibold opacity-60 cursor-not-allowed pointer-events-none"
            >
              Live Demo
            </a>
            <a
              href="https://github.com/rr3s1/food-order-mobile"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-transparent text-sky-200 border border-sky-300/40 rounded-full tracking-wider font-semibold shadow-[0_0_8px_rgba(56,189,248,0.25)] hover:bg-sky-300/10 hover:border-sky-300/70 hover:shadow-[0_0_16px_rgba(56,189,248,0.45)] focus:outline-none focus:ring-2 focus:ring-orange-500/40 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              GitHub Repo
            </a>
          </div>
        </div>
      ),
    },
    {
      title: (
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6EFFB1] to-[#A594F9]">TMDB Movies Android</span>
      ),
      content: (
        <div className="bg-transparent quantico-regular">
          <p className="mb-4 quantico-regular font-normal text-neutral-800 text-lg md:text-xl lg:text-2xl dark:text-neutral-200">
            Movie discovery app featuring lightning‑fast search, trending insights and clean mobile UI with tab navigation.
          </p>
          <div className="mb-4">
            <p className="text-sm text-neutral-600 dark:text-neutral-400">Tech Stack</p>
            <Tech items={["React Native", "Expo", "TypeScript", "NativeWind", "Appwrite", "TMDB API"]} />
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href="#"
              aria-disabled="true"
              title="Live demo coming soon"
              className="inline-flex items-center gap-2 px-6 py-3 bg-transparent text-emerald-400 border border-emerald-300/40 rounded-full tracking-wider font-semibold opacity-60 cursor-not-allowed pointer-events-none"
            >
              Live Demo
            </a>
            <a
              href="https://github.com/rr3s1/mobile-movie-app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-transparent text-sky-200 border border-sky-300/40 rounded-full tracking-wider font-semibold shadow-[0_0_8px_rgba(56,189,248,0.25)] hover:bg-sky-300/10 hover:border-sky-300/70 hover:shadow-[0_0_16px_rgba(56,189,248,0.45)] focus:outline-none focus:ring-2 focus:ring-orange-500/40 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              GitHub Repo
            </a>
          </div>
        </div>
      ),
    },
    
    {
      title: (
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6EFFB1] to-[#A594F9]">RealEstate Android</span>
      ),
      content: (
        <div className="bg-transparent quantico-regular">
          <p className="mb-4 quantico-regular font-normal text-neutral-800 text-lg md:text-xl lg:text-2xl dark:text-neutral-200">
            Cross‑platform real estate app with Google sign‑in, searchable listings, detail pages and saved profiles.
          </p>
          <div className="mb-4">
            <p className="text-sm text-neutral-600 dark:text-neutral-400">Tech Stack</p>
            <Tech items={["React Native", "Expo", "TypeScript", "NativeWind", "Appwrite"]} />
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href="#"
              aria-disabled="true"
              title="Live demo coming soon"
              className="inline-flex items-center gap-2 px-6 py-3 bg-transparent text-emerald-400 border border-emerald-300/40 rounded-full tracking-wider font-semibold opacity-60 cursor-not-allowed pointer-events-none"
            >
              Live Demo
            </a>
            <a
              href="https://github.com/rr3s1/Real-Estate-MobileApp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-transparent text-sky-200 border border-sky-300/40 rounded-full tracking-wider font-semibold shadow-[0_0_8px_rgba(56,189,248,0.25)] hover:bg-sky-300/10 hover:border-sky-300/70 hover:shadow-[0_0_16px_rgba(56,189,248,0.45)] focus:outline-none focus:ring-2 focus:ring-orange-500/40 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              GitHub Repo
            </a>
          </div>
        </div>
      ),
    },
    {
      title: (
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6EFFB1] to-[#A594F9]">Healthcare Management</span>
      ),
      content: (
        <div className="bg-transparent quantico-regular">
          <p className="mb-4 quantico-regular font-normal text-neutral-800 text-lg md:text-xl lg:text-2xl dark:text-neutral-200">
            Patient scheduling and management with admin workflows, confirmations, cancellations and automated SMS notifications.
          </p>
          <div className="mb-4">
            <p className="text-sm text-neutral-600 dark:text-neutral-400">Tech Stack</p>
            <Tech items={["Next.js", "Appwrite", "TypeScript", "Tailwind CSS", "ShadCN", "Twilio"]} />
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href="#"
              aria-disabled="true"
              title="Live demo coming soon"
              className="inline-flex items-center gap-2 px-6 py-3 bg-transparent text-emerald-400 border border-emerald-300/40 rounded-full tracking-wider font-semibold opacity-60 cursor-not-allowed pointer-events-none"
            >
              Live Demo
            </a>
            <a
              href="https://github.com/rr3s1/jsm_medical_schedule_app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-transparent text-sky-200 border border-sky-300/40 rounded-full tracking-wider font-semibold shadow-[0_0_8px_rgba(56,189,248,0.25)] hover:bg-sky-300/10 hover:border-sky-300/70 hover:shadow-[0_0_16px_rgba(56,189,248,0.45)] focus:outline-none focus:ring-2 focus:ring-orange-500/40 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              GitHub Repo
            </a>
          </div>
        </div>
      ),
    },
    {
      title: (
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6EFFB1] to-[#A594F9]">FileStorage System</span>
      ),
      content: (
        <div className="bg-transparent quantico-regular">
          <p className="mb-4 quantico-regular font-normal text-neutral-800 text-lg md:text-xl lg:text-2xl dark:text-neutral-200">
            Upload, organize, share, and download files with auth, global search, sorting and an insights dashboard.
          </p>
          <div className="mb-4">
            <p className="text-sm text-neutral-600 dark:text-neutral-400">Tech Stack</p>
            <Tech items={["Next.js", "React", "TypeScript", "Tailwind CSS", "Appwrite", "ShadCN"]} />
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href="#"
              aria-disabled="true"
              title="Live demo coming soon"
              className="inline-flex items-center gap-2 px-6 py-3 bg-transparent text-emerald-400 border border-emerald-300/40 rounded-full tracking-wider font-semibold opacity-60 cursor-not-allowed pointer-events-none"
            >
              Live Demo
            </a>
            <a
              href="https://github.com/rr3s1/jsm_storeit"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-transparent text-sky-200 border border-sky-300/40 rounded-full tracking-wider font-semibold shadow-[0_0_8px_rgba(56,189,248,0.25)] hover:bg-sky-300/10 hover:border-sky-300/70 hover:shadow-[0_0_16px_rgba(56,189,248,0.45)] focus:outline-none focus:ring-2 focus:ring-orange-500/40 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              GitHub Repo
            </a>
          </div>
        </div>
      ),
    },
    
    {
      title: (
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6EFFB1] to-[#A594F9]">Zentry Awwwards</span>
      ),
      content: (
        <div className="bg-transparent quantico-regular">
          <p className="mb-4 quantico-regular font-normal text-neutral-800 text-lg md:text-xl lg:text-2xl dark:text-neutral-200">
            Visual experience with scroll‑triggered animations, geometric transitions and immersive video storytelling.
          </p>
          <div className="mb-4">
            <p className="text-sm text-neutral-600 dark:text-neutral-400">Tech Stack</p>
            <Tech items={["React", "Tailwind CSS", "GSAP"]} />
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href="#"
              aria-disabled="true"
              title="Live demo coming soon"
              className="inline-flex items-center gap-2 px-6 py-3 bg-transparent text-emerald-400 border border-emerald-300/40 rounded-full tracking-wider font-semibold opacity-60 cursor-not-allowed pointer-events-none"
            >
              Live Demo
            </a>
            <a
              href="https://github.com/rr3s1/awwWW"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-transparent text-sky-200 border border-sky-300/40 rounded-full tracking-wider font-semibold shadow-[0_0_8px_rgba(56,189,248,0.25)] hover:bg-sky-300/10 hover:border-sky-300/70 hover:shadow-[0_0_16px_rgba(56,189,248,0.45)] focus:outline-none focus:ring-2 focus:ring-orange-500/40 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              GitHub Repo
            </a>
          </div>
        </div>
      ),
    },
    {
      title: (
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6EFFB1] to-[#A594F9]">Next.js Portfolio</span>
      ),
      content: (
        <div className="bg-transparent quantico-regular">
          <p className="mb-4 quantico-regular font-normal text-neutral-800 text-lg md:text-xl lg:text-2xl dark:text-neutral-200">
            Modern landing page with engaging hero, smooth animations and clear sections to showcase work and contact info.
          </p>
          <div className="mb-4">
            <p className="text-sm text-neutral-600 dark:text-neutral-400">Tech Stack</p>
            <Tech items={["Next.js", "Three.js", "Tailwind CSS", "Framer Motion"]} />
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href="#"
              aria-disabled="true"
              title="Live demo coming soon"
              className="inline-flex items-center gap-2 px-6 py-3 bg-transparent text-emerald-400 border border-emerald-300/40 rounded-full tracking-wider font-semibold opacity-60 cursor-not-allowed pointer-events-none"
            >
              Live Demo
            </a>
            <a
              href="https://github.com/rr3s1/portfoli0_jsm"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-transparent text-sky-200 border border-sky-300/40 rounded-full tracking-wider font-semibold shadow-[0_0_8px_rgba(56,189,248,0.25)] hover:bg-sky-300/10 hover:border-sky-300/70 hover:shadow-[0_0_16px_rgba(56,189,248,0.45)] focus:outline-none focus:ring-2 focus:ring-orange-500/40 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              GitHub Repo
            </a>
          </div>
        </div>
      ),
    },
    {
      title: (
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6EFFB1] to-[#A594F9]">SaaS Xora Modern UI/UX</span>
      ),
      content: (
        <div className="bg-transparent quantico-regular">
          <p className="mb-4 quantico-regular font-normal text-neutral-800 text-lg md:text-xl lg:text-2xl dark:text-neutral-200">
            SaaS landing page with clear product value, feature highlights, social proof and conversion‑focused CTAs.
          </p>
          <div className="mb-4">
            <p className="text-sm text-neutral-600 dark:text-neutral-400">Tech Stack</p>
            <Tech items={["React", "Tailwind CSS"]} />
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href="#"
              aria-disabled="true"
              title="Live demo coming soon"
              className="inline-flex items-center gap-2 px-6 py-3 bg-transparent text-emerald-400 border border-emerald-300/40 rounded-full tracking-wider font-semibold opacity-60 cursor-not-allowed pointer-events-none"
            >
              Live Demo
            </a>
            <a
              href="https://github.com/rr3s1/JSM-SaaS-Landing-Page"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-transparent text-sky-200 border border-sky-300/40 rounded-full tracking-wider font-semibold shadow-[0_0_8px_rgba(56,189,248,0.25)] hover:bg-sky-300/10 hover:border-sky-300/70 hover:shadow-[0_0_16px_rgba(56,189,248,0.45)] focus:outline-none focus:ring-2 focus:ring-orange-500/40 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              GitHub Repo
            </a>
          </div>
        </div>
      ),
    },
    {
      title: (
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6EFFB1] to-[#A594F9]">3D Portfolio</span>
      ),
      content: (
        <div className="bg-transparent quantico-regular">
          <p className="mb-4 quantico-regular font-normal text-neutral-800 text-lg md:text-xl lg:text-2xl dark:text-neutral-200">
            Minimal 3D portfolio focused on concise storytelling, interactive visuals and fast performance.
          </p>
          <div className="mb-4">
            <p className="text-sm text-neutral-600 dark:text-neutral-400">Tech Stack</p>
            <Tech items={["React", "Three.js", "Tailwind CSS"]} />
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href="#"
              aria-disabled="true"
              title="Live demo coming soon"
              className="inline-flex items-center gap-2 px-6 py-3 bg-transparent text-emerald-400 border border-emerald-300/40 rounded-full tracking-wider font-semibold opacity-60 cursor-not-allowed pointer-events-none"
            >
              Live Demo
            </a>
            <a
              href="https://github.com/rr3s1/JSM_3D_ThreeJS_Portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-transparent text-sky-200 border border-sky-300/40 rounded-full tracking-wider font-semibold shadow-[0_0_8px_rgba(56,189,248,0.25)] hover:bg-sky-300/10 hover:border-sky-300/70 hover:shadow-[0_0_16px_rgba(56,189,248,0.45)] focus:outline-none focus:ring-2 focus:ring-orange-500/40 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              GitHub Repo
            </a>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full h-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}