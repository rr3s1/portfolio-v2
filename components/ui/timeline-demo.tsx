import React from "react";
import { Timeline } from "@/components/ui/timeline";

export default function TimelineDemo() {
  const data = [
    {
      title: (
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6EFFB1] to-[#A594F9]" id="projects">Portfolio v2</span>
      ),
      content: (
        <div className="bg-transparent quantico-regular">
          <p className="mb-8 quantico-regular font-normal text-neutral-800 text-lg md:text-xl lg:text-2xl dark:text-neutral-200">
            An interactive and visually-rich personal portfolio built with advanced frontend technologies and 3D animations.
          </p>
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
          <p className="mb-8 quantico-regular font-normal text-neutral-800 text-lg md:text-xl lg:text-2xl dark:text-neutral-200">
            Full-stack beauty clinic management system with appointment scheduling and admin dashboard.
          </p>
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
          <p className="mb-8 quantico-regular font-normal text-neutral-800 text-lg md:text-xl lg:text-2xl dark:text-neutral-200">
            AI-powered platform for interviews preparation, featuring Vapi AI voice agent and Gemini AI feedback.
          </p>
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
          <p className="mb-8 quantico-regular font-normal text-neutral-800 text-lg md:text-xl lg:text-2xl dark:text-neutral-200">
            High-level AI-driven application that evaluates resumes against job listings, providing ATS scores and tailored feedback.
          </p>
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
          <p className="mb-8 quantico-regular font-normal text-neutral-800 text-lg md:text-xl lg:text-2xl dark:text-neutral-200">
            Ultra modern hair salon landing page designed to streamline appointment booking, marketing of services and client testimonials using React 19, Spline 3D and GSAP Animations.
          </p>
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
          <p className="mb-8 quantico-regular font-normal text-neutral-800 text-lg md:text-xl lg:text-2xl dark:text-neutral-200">
            A 3D showcase of an Apple-style product page featuring advanced 3D models, smooth animations and a polished, modern interface.
          </p>
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
          <p className="mb-8 quantico-regular font-normal text-neutral-800 text-lg md:text-xl lg:text-2xl dark:text-neutral-200">
            A visually scroll-driven website showcasing advanced GSAP animations, parallax effects and video-syncing.
          </p>
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
          <p className="mb-8 quantico-regular font-normal text-neutral-800 text-lg md:text-xl lg:text-2xl dark:text-neutral-200">
            React Native full-stack mobile app featuring search/filters, cart functionality and Google Auth, powered by a scalable backend.
          </p>
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
          <p className="mb-8 quantico-regular font-normal text-neutral-800 text-lg md:text-xl lg:text-2xl dark:text-neutral-200">
            A React Native app for browsing trending movies, searching titles and exploring content using the TMDB API.
          </p>
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
          <p className="mb-8 quantico-regular font-normal text-neutral-800 text-lg md:text-xl lg:text-2xl dark:text-neutral-200">
          React Native full-stack mobile application for browsing real estate listings, built with a modern, cross-platform technology stack.
          </p>
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
          <p className="mb-8 quantico-regular font-normal text-neutral-800 text-lg md:text-xl lg:text-2xl dark:text-neutral-200">
            A full-stack patient management system allowing appointment booking, admin management and SMS notifications via Twilio.
          </p>
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
          <p className="mb-8 quantico-regular font-normal text-neutral-800 text-lg md:text-xl lg:text-2xl dark:text-neutral-200">
            A platform for file uploads, management, and sharing, featuring user authentication, file operations and a dashboard.
          </p>
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
          <p className="mb-8 quantico-regular font-normal text-neutral-800 text-lg md:text-xl lg:text-2xl dark:text-neutral-200">
            Modern Website inspired by Zentry, featuring scroll-triggered animations, geometric transitions and video storytelling.
          </p>
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
          <p className="mb-8 quantico-regular font-normal text-neutral-800 text-lg md:text-xl lg:text-2xl dark:text-neutral-200">
            Portfolio Landing Page crafted using Next.js, Three.js, Framer Motion and TailwindCSS.
          </p>
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
          <p className="mb-8 quantico-regular font-normal text-neutral-800 text-lg md:text-xl lg:text-2xl dark:text-neutral-200">
            SaaS Landing Page developed using React.js and Tailwind CSS that exemplifies modern UI/UX principles.
          </p>
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
          <p className="mb-8 quantico-regular font-normal text-neutral-800 text-lg md:text-xl lg:text-2xl dark:text-neutral-200">
            Minimalistic 3D portfolio landing page built with React.js, Three.js and TailwindCSS to demonstrate developer skills.
          </p>
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