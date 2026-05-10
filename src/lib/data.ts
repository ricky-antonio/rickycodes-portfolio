export const personal = {
  name: "Ricardo Monterrosa",
  firstName: "Ricardo",
  title: "Software Engineer",
  tagline: "Building fast, full-stack web experiences.",
  email: "rickyantonio.codes@gmail.com",
  github: "https://github.com/ricky-antonio",
  linkedin: "https://www.linkedin.com/in/ricardomonterrosa/",
  bio: "A skilled React developer with a passion for crafting sleek, engaging, and user-focused web experiences. Combining creativity and technical expertise, I thrive on building intuitive interfaces that deliver seamless functionality and modern aesthetics. When I'm not coding, you'll find me on the mats training jiu jitsu.",
  hobbies: ["eat...", "code...", "jiu jitsu...", "sleep...", "repeat..."],
};

export const skills = {
  frontend: [
    { name: "TypeScript", icon: "SiTypescript" },
    { name: "React", icon: "SiReact" },
    { name: "Next.js", icon: "SiNextdotjs" },
    { name: "Tailwind CSS", icon: "SiTailwindcss" },
    { name: "Redux", icon: "SiRedux" },
    { name: "React Router", icon: "SiReactrouter" },
    { name: "React Query", icon: "SiReactquery" },
  ],
  backend: [
    { name: "Node.js", icon: "SiNodedotjs" },
    { name: "Supabase", icon: "SiSupabase" },
    { name: "Appwrite", icon: "SiAppwrite" },
  ],
  tools: [
    { name: "Git", icon: "SiGit" },
    { name: "GitHub", icon: "SiGithub" },
    { name: "WordPress", icon: "SiWordpress" },
    { name: "PHP", icon: "SiPhp" },
    { name: "GSAP", icon: "SiGreensock" },
    { name: "Three.js", icon: "SiThreedotjs" },
    { name: "ShadCN", icon: "SiShadcnui" },
  ],
};

export const projects = [
  {
    title: "StoreIt - Cloud Storage",
    category: "Web App",
    description:
      "Cloud storage app built with cutting-edge tech stack, featuring secure file uploads and sleek UI.",
    tech: ["TypeScript", "React", "Next.js", "TailwindCSS", "ShadCN", "Appwrite"],
    github: "https://github.com/ricky-antonio/store_it",
    demo: "https://store-it-ricky-antonio.vercel.app/",
    image: "/projects/storeit.png",
  },
  {
    title: "The Wild Oasis",
    category: "Web App",
    description:
      "Modern booking platform for luxury rentals, featuring user authentication and a secure database.",
    tech: ["React", "Next.js", "NextAuth", "Supabase", "Tailwind"],
    github: "https://github.com/ricky-antonio/wild-oasis-website",
    demo: "https://wild-oasis-gules-ten.vercel.app/",
    image: "/projects/wild-oasis.png",
  },
  {
    title: "Wild Oasis Admin Dashboard",
    category: "Web App",
    description:
      "Admin dashboard enabling business management of bookings, analytics, and user insights.",
    tech: ["React", "Supabase", "React Query"],
    github: "https://github.com/ricky-antonio/wild-oasis-admin",
    demo: "https://ricmonterrosa.com/wild-oasis-admin/dashboard",
    image: "/projects/wild-oasis-admin.png",
  },
  {
    title: "Apple iPhone Clone",
    category: "UI/UX",
    description:
      "Dynamic site blending GSAP animations and cutting-edge 3D graphics technology for engaging experiences.",
    tech: ["React", "GSAP", "Three.js", "Tailwind", "Sentry"],
    github: "https://github.com/ricky-antonio/apple-clone",
    demo: "https://ricmonterrosa.com/apple-iphone",
    image: "/projects/apple-clone.png",
  },
  {
    title: "Brainwave Landing Page",
    category: "UI/UX",
    description:
      "Visually engaging landing page, featuring sleek layout, responsive design, and modern UI.",
    tech: ["React", "Tailwind"],
    github: "https://github.com/ricky-antonio/brainwave",
    demo: "https://ricmonterrosa.com/brainwave",
    image: "/projects/brainwave.png",
  },
  {
    title: "Cryptoverse Stats & Insights",
    category: "Web App",
    description:
      "Comprehensive crypto stats app leveraging Coinranking and News APIs, featuring dynamic price charts.",
    tech: ["React", "Redux", "React Router"],
    github: "https://github.com/ricky-antonio/react-api-cryptoverse",
    demo: "https://ricmonterrosa.com/cryptoverse",
    image: "/projects/cryptoverse.png",
  },
];

export const experience = [
  {
    role: "Web Developer",
    company: "La Jolla Institute",
    location: "San Diego, CA",
    period: "2022 – 2025",
    bullets: [
      "Designed and developed custom WordPress themes using PHP, improving user experience and functionality.",
      "Integrated APIs to dynamically update website content, ensuring data accuracy and seamless updates.",
      "Automated repetitive tasks and streamlined workflows using Salesforce, increasing operational efficiency.",
    ],
  },
  {
    role: "Senior Web Developer",
    company: "Digital Rocket",
    location: "San Diego, CA",
    period: "2021",
    bullets: [
      "Managed project lifecycles, leading junior developers to deliver high-quality web applications on schedule.",
      "Built and deployed websites using WordPress and Elementor, optimizing workflows for client satisfaction.",
      "Defined project scopes with stakeholders and ensured alignment with client goals through clear communication.",
    ],
  },
  {
    role: "Software Engineer Student",
    company: "Nucamp",
    location: "San Diego, CA",
    period: "2020 – 2021",
    bullets: [
      "Built responsive web applications with React, Node.js, and Bootstrap, implementing scalable solutions.",
      "Collaborated on Agile team projects, developing dynamic front-end applications and integrating RESTful APIs.",
      "Completed full-stack projects including a task manager app and a blog platform with authentication.",
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
