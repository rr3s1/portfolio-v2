export const navItems = [
  { name: "PROJECTS", link: "#projects" },
  { name: "TECHSTACK", link: "#techstack" },
  { name: "GITHUB", link: "https://github.com/rr3s1", target: "_blank" },
];

export const gridItems = [
  {
    id: 1,
    title: "",
    description: "",
    className: "row-span-3 sm:row-span-3 md:col-span-3 lg:col-span-3 md:row-span-4 lg:row-span-4 min-h-[45vh] sm:min-h-[50vh] md:min-h-[55vh] lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "",
    spareImg: "",
  },
  {
    id: 2,
    title: "ABOUT ME",
    description: "Hi there! I am a Full-Stack Developer focused on building modern web & mobile apps by using React, Next.js and React Native with a high interest in creating clean, performant and visually appealing UI's.",
    className: "md:col-span-2 lg:col-span-2 md:row-span-2 lg:row-span-2 justify-start text-justify-start text-2xl",
    imgClassName: "absolute left-8 top-8 md:w-96 w-60 opacity-75  contrast-55 rounded-2xl",
    titleClassName: "justify-start text-justify-start font-bold text-2xl",
    img: "/DataRef12.png",
    spareImg: "",
  },
  {
    id: 3,
    title: "BACK-END & DATABASES",
    description: "Node.js, Appwrite, Firebase, PostgreSQL, RESTful APIs",
    className: "md:col-span-2 lg:col-span-2 md:row-span-2 lg:row-span-2",
    imgClassName: "absolute right-0 bottom-0 opacity-30 blur-sm contrast-75",
    titleClassName: "justify-start text-justify-start font-bold text-2xl",
    img: "",
    spareImg: "/22.png",
  },
  {
    id: 4,
    title: "FRONT-END",
    description: "React, Next.js, TypeScript, JavaScript (ES6+), HTML5/CSS3, React Native",
    className: "md:col-span-2 lg:col-span-2 md:row-span-1 lg:row-span-1",
    imgClassName: "opacity-10 blur-sm",
    titleClassName: "justify-start text-justify-start font-bold text-2xl",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "3D & ANIMATION",
    description: "Three.js, React Three Fiber (R3F), GSAP, Framer Motion, Spline",
    className: "md:col-span-3 lg:col-span-3 md:row-span-1 lg:row-span-1",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60 opacity-95 blur-sm",
    titleClassName: "justify-start text-justify-start font-bold text-2xl",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
];

export const techstack = [
  {
    quote:
      "Leveraging its component-based architecture...",
    name: "React.js",
    title: "Declarative Component Framework",
    icon: "/public/arrow.svg",
    logo: "/logos/react.svg"
  },
  {
    quote:
      "Utilizing this powerful React framework...",
    name: "Next.js",
    title: "Server Rendering Framework",
    icon: "/public/arrow.svg",
    logo: "/logos/next.svg"
  },
  {
    quote:
      "Enhancing JavaScript development by adding static types...",
    name: "TypeScript",
    title: "Static Typed JavaScript",
    icon: "/public/arrow.svg",
    logo: "/logos/ts.svg"
  },
  {
    quote:
      "Employing a utility-first CSS framework...",
    name: "Tailwind CSS",
    title: "Utility First CSS",
    icon: "/public/arrow.svg",
    logo: "/logos/tailwind.svg"
  },
  {
    quote:
      "Utilizing this versatile JavaScript library to create...",
    name: "Three.js",
    title: "WebGL 3D Graphics",
    icon: "/public/arrow.svg",
    logo: "/logos/threejs.svg" // Assuming this was a typo and should be threejs.svg, or if it truly reuses react.svg, keep as is. For this solution, I'll assume it should be specific to Three.js
  },
  {
    quote:
      "Building declarative and reusable 3D scenes...",
    name: "React Three Fiber & Drei",
    title: "React Three Abstraction",
    icon: "/public/arrow.svg",
    logo: "/logos/expo-1.svg" // Assuming a logo for R3F, or reuse react.svg if intended. For this solution, I'll assume it should be specific.
  },
  {
    quote:
      "Implementing high-performance, intricate...",
    name: "GSAP (GreenSock)",
    title: "High Performance Animations",
    icon: "/public/arrow.svg",
    logo: "/logos/gsap.svg"
  },
  {
    quote:
      "Integrating production-ready animations...",
    name: "Framer Motion",
    title: "Declarative Motion Library",
    icon: "/public/arrow.svg",
    logo: "/logos/framer-motion.svg" // Assuming a logo for Framer Motion, or reuse react.svg if intended. For this solution, I'll assume it should be specific.
  },
   {
    quote:
      "Integrating production-ready animations...",
    name: "Framer Motion",
    title: "Declarative Motion Library",
    icon: "/public/arrow.svg",
    logo: "/logos/Framer.svg" // Assuming a logo for Framer Motion, or reuse react.svg if intended. For this solution, I'll assume it should be specific.
  },
  {
    quote:
      "Leveraging the industry-standard platform...",
    name: "GitHub",
    title: "Collaborative Code Platform",
    icon: "/public/arrow.svg",
    logo: "/logos/github.svg"
  },
  {
    quote:
      "Utilizing the Node Package Manager...",
    name: "NPM",
    title: "JavaScript Dependency Manager",
    icon: "/public/arrow.svg",
    logo: "/logos/npm.svg"
  },
  {
    quote:
      "Employing this highly-configurable static-module bundler...",
    name: "Webpack",
    title: "Static Module Bundler",
    icon: "/public/arrow.svg",
    logo: "/logos/webpack.svg"
  }
];


export const techstackV2 = [
  // Frontend Technologies
  {
    quote:
      "Builds interactive UIs using component architecture and Virtual DOM for performance. Declarative logic and hooks simplify state management. Its vast ecosystem and community support make it ideal for complex SPAs.",
    name: "React",
    title: "Declarative Component Framework",
    icon: "/logos/react.svg"
  },
  {
    quote:
      "Powerful React framework for production web apps, featuring SSR/SSG for SEO and performance. Simplifies routing and backend tasks with API routes. Built-in optimizations enhance developer experience and app speed.",
    name: "Next.js",
    title: "Server Rendering Framework",
    icon: "/logos/next.svg"
  },
  {
    quote:
      "Enhances JavaScript with static types, improving code quality and maintainability. Catches errors at compile time, offers excellent tooling like autocompletion, and simplifies collaboration on large projects.",
    name: "TypeScript",
    title: "Static Typed JavaScript",
    icon: "/logos/ts.svg"
  },
  {
    quote:
      "Modern JavaScript standard with arrow functions, destructuring, modules, and async/await. Provides cleaner syntax and powerful features for building scalable web applications.",
    name: "JavaScript (ES6+)",
    title: "Modern JavaScript Standard",
    icon: "/logos/js.svg"
  },
  {
    quote:
      "Foundation technologies for web development. HTML5 provides semantic markup and modern APIs, while CSS3 offers advanced styling with animations, flexbox, and grid layouts.",
    name: "HTML5/CSS3",
    title: "Web Foundation Technologies",
    icon: "/logos/html-css.svg"
  },
  {
    quote:
      "JavaScript framework for building native mobile applications for both iOS and Android from a single codebase. Leverages React's declarative UI paradigm for efficient mobile development.",
    name: "React Native",
    title: "Cross-Platform Mobile Framework",
    icon: "/logos/react-native.svg"
  },

  // 3D & Animation Technologies
  {
    quote:
      "Versatile JavaScript library for creating interactive 3D graphics in browsers via WebGL. Provides fine-grained control over scenes, cameras, lighting, and animations, supporting complex models and immersive experiences.",
    name: "Three.js",
    title: "WebGL 3D Graphics Library",
    icon: "/logos/threejs.svg"
  },
  {
    quote:
      "Builds declarative 3D scenes in React using R3F, bridging React's model with Three.js. Provides React components for 3D rendering, reducing boilerplate and accelerating creation of complex, interactive 3D web experiences.",
    name: "React Three Fiber (R3F)",
    title: "React 3D Renderer",
    icon: "/logos/r3f.svg"
  },
  {
    quote:
      "High-performance JavaScript animation platform for intricate, controlled web animations. Excels at complex sequencing and animating diverse properties smoothly. Modular plugins like ScrollTrigger offer unparalleled creative control.",
    name: "GSAP",
    title: "High Performance Animation Library",
    icon: "/logos/gsap.svg"
  },
  {
    quote:
      "Integrates production-ready animations, complex gestures, and layout transitions in React with an intuitive API. Simplifies state-based animations and fluid interactions. Easily adds sophisticated, physics-based motion within JSX.",
    name: "Framer Motion",
    title: "React Animation Library",
    icon: "/logos/framer-motion.svg"
  },
  {
    quote:
      "Web-based 3D design tool for creating interactive 3D experiences. Enables designers and developers to build 3D scenes, animations, and interactive content without complex coding.",
    name: "Spline",
    title: "3D Design & Animation Tool",
    icon: "/logos/spline.svg"
  },

  // Backend & Database Technologies
  {
    quote:
      "JavaScript runtime built on Chrome's V8 engine for server-side development. Enables full-stack JavaScript applications with non-blocking I/O, extensive package ecosystem via npm, and excellent performance.",
    name: "Node.js",
    title: "JavaScript Runtime Environment",
    icon: "/logos/nodejs.svg"
  },
  {
    quote:
      "Self-hosted Backend-as-a-Service platform providing pre-built APIs for authentication, databases, storage, functions, and real-time communication. Accelerates modern app development with comprehensive backend services.",
    name: "Appwrite",
    title: "Open-Source Backend Platform",
    icon: "/logos/appwrite.svg"
  },
  {
    quote:
      "Google's comprehensive app development platform offering authentication, real-time database, cloud storage, hosting, and serverless functions. Simplifies backend development with integrated services and real-time capabilities.",
    name: "Firebase",
    title: "Google Backend Platform",
    icon: "/logos/firebase.svg"
  },
  {
    quote:
      "Powerful, open-source object-relational database system renowned for its reliability, data integrity, and performance. Supports advanced features like JSON data types, full-text search, and complex queries.",
    name: "PostgreSQL",
    title: "Advanced Relational Database",
    icon: "/logos/postgresql.svg"
  },
  {
    quote:
      "Architectural style for designing networked applications using standard HTTP methods. Provides stateless, cacheable communication between client and server with clear resource-based URLs and standard status codes.",
    name: "RESTful APIs",
    title: "Web Service Architecture",
    icon: "/logos/rest-api.svg"
  },

  // UI & Styling Technologies
  {
    quote:
      "Utility-first CSS framework for rapidly building custom UIs directly in HTML. Promotes consistency via a configurable design system. Its JIT engine ensures optimized, small CSS files for faster load times.",
    name: "Tailwind CSS",
    title: "Utility-First CSS Framework",
    icon: "/logos/tailwind.svg"
  },
  {
    quote:
      "Collection of beautifully designed, reusable UI components built with Radix UI and Tailwind CSS. Provides copy-paste components for building modern, accessible user interfaces quickly and consistently.",
    name: "ShadCN",
    title: "Modern UI Component Library",
    icon: "/logos/shadcn.svg"
  },
  {
    quote:
      "React component library implementing Google's Material Design principles. Offers pre-built, customizable components with consistent styling, theming support, and accessibility features for rapid UI development.",
    name: "Material UI",
    title: "Material Design Components",
    icon: "/logos/material-ui.svg"
  },
  {
    quote:
      "Design methodology prioritizing mobile devices first, then progressively enhancing for larger screens. Ensures optimal user experience across all devices with flexible layouts and touch-friendly interfaces.",
    name: "Responsive & Mobile-First Design",
    title: "Adaptive Design Approach",
    icon: "/logos/responsive-design.svg"
  },

  // Developer Tools
  {
    quote:
      "Distributed version control system for tracking code changes and collaboration. Essential for managing project history, branching strategies, and team coordination in software development workflows.",
    name: "Git",
    title: "Version Control System",
    icon: "/logos/git.svg"
  },
  {
    quote:
      "Cloud platform for frontend deployment with automatic builds, preview deployments, and global CDN. Optimized for modern frameworks like Next.js, providing seamless CI/CD and excellent developer experience.",
    name: "Vercel",
    title: "Frontend Deployment Platform",
    icon: "/logos/vercel.svg"
  },
  {
    quote:
      "Application monitoring platform providing real-time error tracking, performance monitoring, and release health insights. Helps developers identify, debug, and resolve issues quickly in production environments.",
    name: "Sentry",
    title: "Error Monitoring & Performance",
    icon: "/logos/sentry.svg"
  },
  {
    quote:
      "Containerization platform for packaging applications with their dependencies into portable containers. Ensures consistent environments across development, testing, and production deployments.",
    name: "Docker",
    title: "Application Containerization",
    icon: "/logos/docker.svg"
  },
  {
    quote:
      "Knowledge management and note-taking applications for organizing development processes, documentation, and project planning. Supports linking ideas, creating workflows, and maintaining comprehensive project documentation.",
    name: "Obsidian/Notion",
    title: "Process Documentation Tools",
    icon: "/logos/documentation.svg"
  }
];


export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
