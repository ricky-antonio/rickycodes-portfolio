export const personal = {
  name: "Ricardo Monterrosa",
  firstName: "Ricardo",
  title: "Frontend Developer",
  tagline: "Frontend developer building fast, polished web experiences powered by AI.",
  email: "rickyantonio.codes@gmail.com",
  github: "https://github.com/ricky-antonio",
  linkedin: "https://www.linkedin.com/in/ricardomonterrosa/",
  bio: "A frontend developer who builds polished, high-performance web apps including AI-integrated tools like a real-time city dashboard and a streaming concept-mapping app. I care as much about design, accessibility, and performance as I do about features. When I'm not shipping, you'll find me on the mats training jiu jitsu.",
  hobbies: ["eat...", "code...", "jiu jitsu...", "sleep...", "repeat..."],
};

export const skills = {
  ai: [
    { name: "Claude AI", icon: "SiClaude" },
    { name: "LLM Integration", icon: "LuBrainCircuit" },
    { name: "Prompt Engineering", icon: "LuMessageSquareCode" },
  ],
  frontend: [
    { name: "TypeScript", icon: "SiTypescript" },
    { name: "React", icon: "SiReact" },
    { name: "Next.js", icon: "SiNextdotjs" },
    { name: "Tailwind CSS", icon: "SiTailwindcss" },
    { name: "shadcn/ui", icon: "SiShadcnui" },
    { name: "Redux", icon: "SiRedux" },
    { name: "GSAP", icon: "SiGreensock" },
    { name: "Three.js", icon: "SiThreedotjs" },
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
    { name: "NumPy", icon: "SiNumpy" },
    { name: "Seaborn", icon: "SiPlotly" },
    { name: "Matplotlib", icon: "SiPlotly" },
    { name: "Google Colab", icon: "SiGooglecolab" },
  ],
  tools: [
    { name: "Git", icon: "SiGit" },
    { name: "GitHub", icon: "SiGithub" },
    { name: "Vitest", icon: "SiVitest" },
    { name: "React Testing Library", icon: "SiTestinglibrary" },
    { name: "Playwright", icon: "LuMonitorCheck" },
    { name: "Salesforce", icon: "SiSalesforce" },
    { name: "WordPress", icon: "SiWordpress" },
  ],
};

export const projects = [
  {
    title: "Bloom - Concept Explorer",
    category: "AI",
    description:
      "Type any word and watch it bloom — AI expands your idea into an interactive force-directed graph of connected concepts, powered by D3 physics and streaming Claude AI.",
    tech: ["TypeScript", "Next.js", "D3.js", "TailwindCSS", "Claude AI", "Vitest"],
    github: "https://github.com/ricky-antonio/bloom",
    demo: "https://bloom.rickycodes.dev/",
    image: "/projects/bloom.webp",
  },
  {
    title: "Citadel - Urban Intelligence",
    category: "AI",
    description:
      "Real-time city dashboard aggregating 8 live APIs — weather, transit, air quality, events, and crime — with an AI chat assistant, anomaly detection, and a custom-built orbital map UI.",
    tech: ["TypeScript", "Next.js", "Mapbox", "Supabase", "Claude AI", "Playwright"],
    github: "https://github.com/ricky-antonio/citadel",
    demo: "https://citadel.rickycodes.dev",
    image: "/projects/citadel.webp",
  },
  {
    title: "Lodestar - Task Management",
    category: "AI",
    description:
      "A Trello competitor with AI-powered task tools — six task views, smart prioritization, auto-scheduling, and a keyboard-first workflow designed to keep you in flow.",
    tech: ["TypeScript", "Next.js", "Supabase", "shadcn/ui", "Claude AI", "Vitest"],
    github: "https://github.com/ricky-antonio/lodestar",
    demo: "https://lodestar-amber.vercel.app",
    image: "/projects/lodestar.webp",
  },
  {
    title: "BaseKit - SaaS Starter",
    category: "Full-Stack",
    description:
      "Production-ready SaaS starter with auth, Stripe subscription billing, teams, admin dashboard, and transactional email — wired end-to-end so you can ship on day one.",
    tech: ["TypeScript", "Next.js", "Supabase", "Stripe", "Resend", "shadcn/ui"],
    github: "https://github.com/ricky-antonio/basekit",
    demo: "https://basekit.rickycodes.dev/",
    image: "/projects/basekit.webp",
  },
  {
    title: "Apple iPhone Clone",
    category: "UI/UX",
    description:
      "A pixel-faithful Apple iPhone 15 Pro landing page — drag-to-rotate 3D phone models in four titanium finishes, scroll-driven GSAP animations, and a synced video carousel.",
    tech: ["React", "GSAP", "Three.js", "Tailwind", "Sentry"],
    github: "https://github.com/ricky-antonio/apple-clone",
    demo: "https://phone-store.rickycodes.dev/",
    image: "/projects/apple-clone.webp",
  },
  {
    title: "Unfold - JSON & CSV Formatter",
    category: "Tools",
    description:
      "Paste JSON or CSV and instantly pretty-print, explore in a sortable table or interactive tree, and export — all client-side.",
    tech: ["TypeScript", "React", "Next.js", "TailwindCSS", "shadcn/ui", "highlight.js"],
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
      "Monitor and investigate experimental AV software anomalies, sensor triggers, and fallback logic to provide engineering teams with structured, reproducible data for system refinement.",
      "Lead strategic planning and labor forecasting to meet client mission demands, managing shift coordination and workforce scheduling to ensure 100% operational readiness in a high-growth autonomous vehicle environment.",
      "Audit and implement global process standards, identifying and resolving dispatch bottlenecks to improve mission completion rates.",
    ],
  },
  {
    role: "Web Developer",
    project: "lji.org & mag.lji.org",
    company: "La Jolla Institute",
    location: "San Diego, CA",
    period: "2022 – 2025",
    bullets: [
      "Built lji.org and mag.lji.org from scratch — the full public web presence for a biomedical research nonprofit with 24+ faculty labs — integrating external APIs for event feeds, research databases, and real-time institutional data.",
      "Engineered Salesforce automation workflows that eliminated recurring manual processes across departments, reducing operational overhead and improving cross-team consistency.",
      "Served as the sole technical owner for all web infrastructure across multiple departments for 3 years, maintaining consistent uptime for a high-visibility research institution.",
    ],
  },
  {
    role: "Web Developer",
    company: "Digital Rocket",
    location: "San Diego, CA",
    period: "2021 – 2022",
    bullets: [
      "Built client websites and CMS-integrated lead generation landing pages for local businesses, including an insurance campaign wired to a backend CMS for real-time lead capture and management.",
      "Overhauled internal development workflows and mentored junior developers, improving delivery speed and consistency across client projects.",
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
];
