"use client";

import { motion } from "framer-motion";
import {
  SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiRedux, SiShadcnui,
  SiNodedotjs, SiPython, SiPostman, SiMysql, SiMongodb, SiSupabase, SiAppwrite,
  SiPandas, SiNumpy, SiPlotly, SiScikitlearn, SiJupyter,
  SiGit, SiGithub, SiSalesforce, SiGreensock, SiThreedotjs, SiWordpress,
} from "react-icons/si";
import { skills } from "@/lib/data";

const iconMap: Record<string, React.ReactNode> = {
  SiTypescript:  <SiTypescript />,
  SiReact:       <SiReact />,
  SiNextdotjs:   <SiNextdotjs />,
  SiTailwindcss: <SiTailwindcss />,
  SiRedux:       <SiRedux />,
  SiShadcnui:    <SiShadcnui />,
  SiNodedotjs:   <SiNodedotjs />,
  SiPython:      <SiPython />,
  SiPostman:     <SiPostman />,
  SiMysql:       <SiMysql />,
  SiMongodb:     <SiMongodb />,
  SiSupabase:    <SiSupabase />,
  SiAppwrite:    <SiAppwrite />,
  SiPandas:      <SiPandas />,
  SiNumpy:       <SiNumpy />,
  SiPlotly:      <SiPlotly />,
  SiScikitlearn: <SiScikitlearn />,
  SiJupyter:     <SiJupyter />,
  SiGit:         <SiGit />,
  SiGithub:      <SiGithub />,
  SiSalesforce:  <SiSalesforce />,
  SiGreensock:   <SiGreensock />,
  SiThreedotjs:  <SiThreedotjs />,
  SiWordpress:   <SiWordpress />,
};

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const, delay },
});

const categories = [
  { label: "Frontend",          key: "frontend" as const },
  { label: "Backend & Database", key: "backend"  as const },
  { label: "Data & Analytics",  key: "data"     as const },
  { label: "Tools & Other",     key: "tools"    as const },
];

function SkillBadge({ name, icon }: { name: string; icon: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.06 }}
      transition={{ duration: 0.15 }}
      className="flex items-center gap-2.5 rounded-lg border border-border bg-surface px-4 py-3 text-sm font-medium text-muted transition-colors hover:border-accent hover:text-fg"
    >
      <span className="text-base text-accent" aria-hidden="true">{iconMap[icon] ?? null}</span>
      {name}
    </motion.div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">

        <motion.p {...fadeUp(0)} className="mb-2 font-mono text-sm font-semibold tracking-widest text-accent uppercase">
          // Skills
        </motion.p>
        <motion.h2 {...fadeUp(0.05)} className="mb-16 text-4xl font-extrabold tracking-tight text-fg sm:text-5xl">
          My Tech Stack
        </motion.h2>

        <div className="flex flex-col gap-12">
          {categories.map(({ label, key }, ci) => (
            <motion.div key={key} {...fadeUp(0.1 + ci * 0.08)}>
              <h3 className="mb-5 text-xs font-semibold tracking-widest text-muted uppercase">
                {label}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills[key].map((skill) => (
                  <SkillBadge key={skill.name} name={skill.name} icon={skill.icon} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
