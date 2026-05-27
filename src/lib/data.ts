export const personal = {
  name: "Ricardo Monterrosa",
  firstName: "Ricardo",
  title: "Software Engineer",
  tagline: "Full-stack engineer building fast, modern web experiences.",
  email: "rickyantonio.codes@gmail.com",
  github: "https://github.com/ricky-antonio",
  linkedin: "https://www.linkedin.com/in/ricardomonterrosa/",
  bio: "A full-stack engineer with a passion for crafting sleek, performant, and user-focused web experiences. I work across the entire stack — from pixel-perfect UIs to scalable APIs — combining technical depth with a sharp eye for design. When I'm not shipping, you'll find me on the mats training jiu jitsu.",
  hobbies: ["eat...", "code...", "jiu jitsu...", "sleep...", "repeat..."],
};

export const skills = {
  frontend: [
    { name: "TypeScript", icon: "SiTypescript" },
    { name: "React", icon: "SiReact" },
    { name: "Next.js", icon: "SiNextdotjs" },
    { name: "Tailwind CSS", icon: "SiTailwindcss" },
    { name: "Redux", icon: "SiRedux" },
    { name: "ShadCN", icon: "SiShadcnui" },
  ],
  backend: [
    { name: "Node.js", icon: "SiNodedotjs" },
    { name: "Python", icon: "SiPython" },
    { name: "REST APIs", icon: "SiPostman" },
    { name: "MySQL", icon: "SiMysql" },
    { name: "MongoDB", icon: "SiMongodb" },
    { name: "Supabase", icon: "SiSupabase" },
    { name: "Appwrite", icon: "SiAppwrite" },
  ],
  data: [
    { name: "Pandas", icon: "SiPandas" },
    { name: "NumPy", icon: "SiNumpy" },
    { name: "Matplotlib", icon: "SiPlotly" },
    { name: "Scikit-Learn", icon: "SiScikitlearn" },
    { name: "Jupyter", icon: "SiJupyter" },
  ],
  tools: [
    { name: "Git", icon: "SiGit" },
    { name: "GitHub", icon: "SiGithub" },
    { name: "Vitest", icon: "SiVitest" },
    { name: "Testing Library", icon: "SiTestinglibrary" },
    { name: "Salesforce", icon: "SiSalesforce" },
    { name: "GSAP", icon: "SiGreensock" },
    { name: "Three.js", icon: "SiThreedotjs" },
    { name: "WordPress", icon: "SiWordpress" },
  ],
};

export const projects = [
  {
    title: "Lodestar - Task Management",
    category: "Web App",
    description:
      "A Trello competitor with AI-powered task tools — six task views, smart prioritization, auto-scheduling, and a keyboard-first workflow designed to keep you in flow.",
    tech: ["TypeScript", "Next.js", "Supabase", "ShadCN", "Claude AI", "Vitest"],
    github: "https://github.com/ricky-antonio/lodestar",
    demo: "https://lodestar-amber.vercel.app",
    image: "/projects/lodestar.webp",
  },
  {
    title: "Bloom - Concept Explorer",
    category: "Web App",
    description:
      "Type any word and watch it bloom — AI expands your idea into an interactive force-directed graph of connected concepts, powered by D3 physics and streaming Claude AI.",
    tech: ["TypeScript", "Next.js", "D3.js", "TailwindCSS", "Claude AI", "Vitest"],
    github: "https://github.com/ricky-antonio/bloom",
    demo: "https://bloom.rickycodes.dev/",
    image: "/projects/bloom.webp",
  },
  {
    title: "StoreIt - Cloud Storage",
    category: "Web App",
    description:
      "Cloud storage app built with cutting-edge tech stack, featuring secure file uploads and sleek UI.",
    tech: ["TypeScript", "React", "Next.js", "TailwindCSS", "ShadCN", "Appwrite"],
    github: "https://github.com/ricky-antonio/store_it",
    demo: "https://store-it.rickycodes.dev/",
    image: "/projects/storeit.webp",
  },
  {
    title: "Apple iPhone Clone",
    category: "UI/UX",
    description:
      "Dynamic site blending GSAP animations and cutting-edge 3D graphics technology for engaging experiences.",
    tech: ["React", "GSAP", "Three.js", "Tailwind", "Sentry"],
    github: "https://github.com/ricky-antonio/apple-clone",
    demo: "https://phone-store.rickycodes.dev/",
    image: "/projects/apple-clone.webp",
  },
  {
    title: "Brainwave Landing Page",
    category: "UI/UX",
    description:
      "Visually engaging landing page, featuring sleek layout, responsive design, and modern UI.",
    tech: ["React", "Tailwind"],
    github: "https://github.com/ricky-antonio/brainwave",
    demo: "https://brainwave.rickycodes.dev/",
    image: "/projects/brainwave.webp",
  },
  {
    title: "Unfold - JSON & CSV Formatter",
    category: "Tools",
    description:
      "Paste JSON or CSV and instantly pretty-print, explore in a sortable table or interactive tree, and export — all client-side.",
    tech: ["TypeScript", "React", "Next.js", "TailwindCSS", "ShadCN", "highlight.js"],
    github: "https://github.com/ricky-antonio/json-formatter",
    demo: "https://unfold.rickycodes.dev/",
    image: "/projects/unfold.webp",
  },
];

export const experience = [
  {
    role: "Autonomous Vehicle Operations Supervisor",
    project: "Waymo Project",
    company: "Transdev",
    location: "San Diego, CA",
    period: "2025 – Present",
    bullets: [
      "Developed and deployed custom performance dashboards using Python (Pandas, NumPy, Seaborn) to track depot and driver metrics, turning raw operational data into actionable performance targets.",
      "Lead strategic planning and labor forecasting to meet client mission demands, managing shift coordination and workforce scheduling to ensure 100% operational readiness in a high-growth autonomous vehicle environment.",
      "Audit and implement global process standards, identifying and resolving dispatch bottlenecks to improve mission completion rates.",
      "Monitor and investigate experimental AV software anomalies, sensor triggers, and fallback logic to provide engineering teams with structured, reproducible data for system refinement.",
    ],
  },
  {
    role: "Web Developer",
    company: "La Jolla Institute",
    location: "San Diego, CA",
    period: "2022 – 2025",
    bullets: [
      "Architected automated workflows using Salesforce and custom scripts, reducing manual work hours and improving departmental consistency.",
      "Managed the end-to-end operational lifecycle of web systems, integrating backend data sources via APIs to maintain real-time data integrity.",
      "Acted as the sole technical owner for multiple departments, coordinating timelines and deliverables for high-impact web infrastructure projects.",
    ],
  },
  {
    role: "Web Developer",
    company: "Digital Rocket",
    location: "San Diego, CA",
    period: "2021 – 2022",
    bullets: [
      "Redesigned internal development workflows, increasing team delivery speed and consistency across technical solutions.",
      "Managed and mentored junior team members, focusing on skill development and the adoption of scalable team practices.",
    ],
  },
  {
    role: "Project Administrator",
    company: "Honeywell UOP",
    location: "Chicago, IL",
    period: "2018 – 2019",
    bullets: [
      "Managed full-cycle procurement and production schedules for international refinery hardware/software upgrades, coordinating across multiple time zones and cultures.",
      "Translated complex technical requirements for non-engineering stakeholders, ensuring alignment between engineering and manufacturing partners.",
    ],
  },
  {
    role: "Administrative Services Analyst II",
    company: "County of Riverside",
    location: "Riverside, CA",
    period: "2014 – 2017",
    bullets: [
      "Directed field technician assignments and IT equipment deployment across county sites, ensuring compliance with state regulations.",
      "Rebuilt an Access database to improve data accuracy and reporting capabilities for large-scale survey data.",
    ],
  },
];

export const education = [
  {
    school: "DeVry University",
    degree: "Bachelor of Science, Computer Engineering",
    location: "Pomona, CA",
  },
  {
    school: "Nucamp Coding Bootcamp",
    degree: "Full Stack Web Development",
    location: "San Diego, CA",
  },
];
