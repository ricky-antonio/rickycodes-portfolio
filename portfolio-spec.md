# Ricardo Monterrosa — Portfolio Website Spec

## Overview

A single-page personal portfolio for Ricardo Monterrosa, a Software Engineer specializing in React. The goal is to impress recruiters and hiring managers and land a new role. The site should feel bold, modern, and professional — not a generic template.

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 14+ (App Router) |
| Styling | Tailwind CSS v3 |
| Animations | Framer Motion |
| Icons | Lucide React + React Icons (for brand logos) |
| Dark/Light mode | next-themes |
| Deployment target | Vercel |

---

## Design System

### Color Mode
Both dark and light mode supported via a toggle in the navbar. Dark mode is the default.

### Color Palette

**Dark mode**
```
Background:     #0D0D14  (near-black with a blue-violet tint)
Surface:        #13131F  (cards, nav)
Surface hover:  #1A1A2E
Accent primary: #A855F7  (purple-500)
Accent second:  #EC4899  (pink-500)
Text primary:   #F5F5FF
Text muted:     #94A3B8
Border:         #1E1E30
```

**Light mode**
```
Background:     #FAFAFA
Surface:        #FFFFFF
Accent primary: #7C3AED  (violet-600)
Accent second:  #DB2777  (pink-600)
Text primary:   #1E1B4B
Text muted:     #64748B
Border:         #E2E8F0
```

### Typography
- **Headings:** `Inter` or `Cal Sans` — bold, large, tight letter-spacing
- **Body:** `Inter` — clean, readable
- **Code snippets:** `JetBrains Mono` or `Fira Code` — monospace

### Spacing & Layout
- Max content width: `1200px`
- Section padding: `py-24` (desktop), `py-16` (mobile)
- Consistent section heading style: small overline label (e.g., `// ABOUT`) above the main heading

### Animation Principles
- Sections animate in on scroll (fade + slide up) via Framer Motion
- Skill/tech badges have a subtle hover scale effect
- CTA buttons have gradient shimmer or glow on hover
- Keep animations tasteful — fast, not flashy; enhance the content, don't distract from it

---

## Site Structure

Single page, smooth-scroll. All sections live at `/`. Navbar links jump to section anchors.

```
/
├── Navbar (sticky, glassmorphism effect)
├── Hero
├── About
├── Skills
├── Projects
├── Experience
└── Contact / Footer
```

No separate pages. No resume download.

---

## Sections

### 1. Navbar

**Layout:** Sticky top bar, blurred glass background (`backdrop-blur`), full width.

**Contents:**
- Left: Logo / name — `RM` monogram or `Ricardo Monterrosa` wordmark
- Center: Nav links — About · Skills · Projects · Experience · Contact
- Right: Dark/light mode toggle + `Hire Me` CTA button (accent color)

**Behavior:**
- Hides on scroll down, reappears on scroll up (optional enhancement)
- Active link highlights based on scroll position
- Mobile: hamburger menu → fullscreen slide-in drawer

---

### 2. Hero

**Layout:** Full viewport height (`min-h-screen`), centered or split layout (text left, visual right).

**Contents:**

Left column:
- Small overline: `// SOFTWARE ENGINEER`
- Large heading: `Hi, I'm Ricardo` or `Ricardo Monterrosa`
- Subheading: `Software Engineer Specializing in React`
- Code block (styled, syntax-highlighted look):
  ```js
  const developer = {
    firstName: "Ricardo",
    lastName: "Monterrosa",
    hobby: () => {
      console.log("eat...");
      console.log("code...");
      console.log("jiu jitsu...");
      console.log("sleep...");
      console.log("repeat...");
    }
  }
  ```
- Two CTA buttons: `View My Work` (accent, scrolls to Projects) · `Get In Touch` (outline, scrolls to Contact)
- Social icons: GitHub · LinkedIn

Right column (or background element):
- Profile photo (circular crop, subtle glow ring in accent color)
- Optional: animated floating tech badge icons orbiting the photo, or abstract blob/gradient shape

**Animation:** Text and buttons fade + slide in on load with staggered delay.

---

### 3. About

**Layout:** Two-column (text left, optional visual or stats right) or centered single column.

**Contents:**

- Section label: `// ABOUT ME`
- Heading: `Who I Am`
- Body text:
  > Hi, I'm Ricardo! A skilled React developer with a passion for crafting sleek, engaging, and user-focused web experiences. Combining creativity and technical expertise, I thrive on building intuitive interfaces that deliver seamless functionality and modern aesthetics. When I'm not coding, you'll find me on the mats training jiu jitsu.

- Optional stat cards (3 across):
  - `3+ Years` — Professional experience
  - `10+ Projects` — Built and shipped
  - `React Specialist` — Primary focus

**Education sub-section** (below the bio or in a card):
- DeVry University — B.S. Computer Engineering — Pomona, CA
- Nucamp Coding Bootcamp — Full Stack Web Development — San Diego, CA

---

### 4. Skills

**Layout:** Grid of badge/pill cards, grouped by category.

**Section label:** `// SKILLS`
**Heading:** `My Tech Stack`

**Categories:**

**Frontend**
- TypeScript · React · Next.js · Tailwind CSS · Redux · React Router · React Query

**Backend & Database**
- Node.js · Supabase · Appwrite

**Tools & Other**
- Git · GitHub · WordPress · Salesforce · PHP · GSAP · Three.js · ShadCN

**Design considerations:**
- Each skill is a pill/badge with an icon (Devicons or SVG) + label
- Subtle hover effect (scale + glow)
- Skills animate in staggered on scroll

---

### 5. Projects

**Layout:** Grid of cards (3-col desktop, 2-col tablet, 1-col mobile).

**Section label:** `// PROJECTS`
**Heading:** `Things I've Built`

**Filter tabs** (optional): `All · Web App · UI/UX`

**Each project card contains:**
- Project screenshot or placeholder image
- Category badge (e.g., `Web App`, `UI/UX`)
- Project name (bold)
- Short description
- Tech stack badges (small pills)
- Two links: `GitHub →` · `Live Demo →`
- Hover: card lifts with shadow, overlay or border glow

**Projects list:**

| # | Name | Category | Description | Tech |
|---|---|---|---|---|
| 1 | StoreIt - Cloud Storage | Web App | Cloud storage app with secure file uploads and sleek UI | TypeScript, React, Next.js, Tailwind, ShadCN, Appwrite | https://github.com/ricky-antonio/store_it | https://store-it-ricky-antonio.vercel.app/ |
| 2 | The Wild Oasis | Web App | Modern booking platform for luxury rentals with auth and secure DB | React, Next.js, NextAuth, Supabase, Tailwind | https://github.com/ricky-antonio/wild-oasis-website | https://wild-oasis-gules-ten.vercel.app/ |
| 3 | Wild Oasis Admin Dashboard | Web App | Admin dashboard for managing bookings, analytics, and user insights | React, Supabase, React Query | https://github.com/ricky-antonio/wild-oasis-admin | https://ricmonterrosa.com/wild-oasis-admin/dashboard |
| 4 | Apple iPhone Clone | UI/UX | Dynamic site with GSAP animations and 3D graphics via Three.js | React, GSAP, Three.js, Tailwind, Sentry | https://github.com/ricky-antonio/apple-clone | https://ricmonterrosa.com/apple-iphone |
| 5 | Brainwave Landing Page | UI/UX | Visually engaging landing page with sleek layout and responsive design | React, Tailwind | https://github.com/ricky-antonio/brainwave | https://ricmonterrosa.com/brainwave |
| 6 | Cryptoverse Stats & Insights | Web App | Crypto stats app with Coinranking + News APIs and dynamic price charts | React, Redux, React Router | https://github.com/ricky-antonio/react-api-cryptoverse | https://ricmonterrosa.com/cryptoverse |

**TODO:** Add GitHub repo URLs and live demo URLs for each project.

---

### 6. Experience

**Layout:** Vertical timeline or alternating card layout.

**Section label:** `// EXPERIENCE`
**Heading:** `Where I've Worked`

**Each entry contains:**
- Company name + location
- Role/title (bold, accent color)
- Date range
- 3–4 bullet points of accomplishments
- Optional: company logo placeholder or icon

**Entries:**

---

**Web Developer** — La Jolla Institute
*San Diego, CA · 2022 – 2025*
- Designed and developed custom WordPress themes using PHP, improving user experience and functionality.
- Integrated APIs to dynamically update website content, ensuring data accuracy and seamless updates.
- Automated repetitive tasks and streamlined workflows using Salesforce, increasing operational efficiency.

---

**Senior Web Developer** — Digital Rocket
*San Diego, CA · 2021*
- Managed project lifecycles, leading junior developers to deliver high-quality web applications on schedule.
- Built and deployed websites using WordPress and Elementor, optimizing workflows for client satisfaction.
- Defined project scopes with stakeholders and ensured alignment with client goals through clear communication.

---

**Software Engineer Student** — Nucamp
*San Diego, CA · 2020 – 2021*
- Built responsive web applications with React, Node.js, and Bootstrap, implementing scalable solutions.
- Collaborated on Agile team projects, developing dynamic front-end applications and integrating RESTful APIs.
- Completed full-stack projects including a task manager app and a blog platform with authentication.

---

### 7. Contact / Footer

**Layout:** Centered, full-width section. Serves as both the contact section and the page footer.

**Section label:** `// CONTACT`
**Heading:** `Let's Build Something Amazing Together`
**Subtext:** Short tagline inviting recruiters/collaborators to reach out.

**Contents:**
- Email link (large, styled): `rickyantonio.codes@gmail.com` — renders as `mailto:rickyantonio.codes@gmail.com`
- Social link buttons: GitHub · LinkedIn
- Footer bar: `© 2025 Ricardo Monterrosa. All rights reserved.`

**No contact form** — links only.

---

## Open TODOs (fill in before build)

- [x] GitHub: https://github.com/ricky-antonio
- [x] LinkedIn: https://www.linkedin.com/in/ricardomonterrosa/
- [x] Contact email: rickyantonio.codes@gmail.com (mailto link)
- [x] Profile photo — provided (white background, portrait crop, works for both dark/light mode)
- [x] GitHub repo URLs for each project — all added
- [x] Live demo URLs for each project — all added
- [ ] Confirm if any projects should be excluded from the site
- [x] "Hire Me" CTA — smooth scrolls to the Contact/Footer section (`#contact`)
- [ ] Any certifications or additional credentials to add to the About/Education section?

---

## Folder Structure (Next.js App Router)

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout: fonts, ThemeProvider, metadata
│   ├── page.tsx            # Home page — renders all section components
│   └── globals.css         # Tailwind base + custom CSS variables
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Experience.tsx
│   │   └── Contact.tsx
│   └── ui/
│       ├── SectionHeading.tsx   # Reusable overline + heading component
│       ├── ProjectCard.tsx
│       ├── SkillBadge.tsx
│       ├── ExperienceCard.tsx
│       └── ThemeToggle.tsx
├── lib/
│   └── data.ts             # All content data (projects, skills, experience)
├── public/
│   ├── profile.jpg         # Profile photo
│   └── projects/           # Project screenshots
└── tailwind.config.ts
```

**Key principle:** All site content lives in `lib/data.ts` as typed TypeScript objects. Components are purely presentational — updating the site means editing `data.ts`, not hunting through JSX.

---

## Key Dependencies

```json
{
  "next": "^14",
  "react": "^18",
  "tailwindcss": "^3",
  "framer-motion": "^11",
  "next-themes": "^0.3",
  "lucide-react": "latest",
  "react-icons": "latest"
}
```
