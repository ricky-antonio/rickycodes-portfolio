"use client";

import { motion } from "framer-motion";
import { FiCode, FiLayers, FiZap } from "react-icons/fi";
import { personal, education } from "@/lib/data";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const, delay },
});

const stats = [
  { icon: FiZap, value: "3+", label: "Years Experience" },
  { icon: FiLayers, value: "10+", label: "Projects Shipped" },
  { icon: FiCode, value: "TS", label: "TypeScript First" },
];

export function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">

        {/* Section heading */}
        <motion.p {...fadeUp(0)} className="mb-2 font-mono text-sm font-semibold tracking-widest text-accent uppercase">
          // About Me
        </motion.p>
        <motion.h2 {...fadeUp(0.05)} className="mb-16 text-4xl font-extrabold tracking-tight text-fg sm:text-5xl">
          Who I Am
        </motion.h2>

        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">

          {/* Left — bio + stats */}
          <div className="flex flex-col gap-8">
            <motion.p {...fadeUp(0.1)} className="text-lg leading-relaxed text-muted">
              {personal.bio}
            </motion.p>

            {/* Stat cards */}
            <motion.div {...fadeUp(0.2)} className="grid grid-cols-3 gap-4">
              {stats.map(({ icon: Icon, value, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center gap-2 rounded-xl border border-border bg-surface p-5 text-center transition-colors hover:border-accent"
                >
                  <Icon size={20} className="text-accent" />
                  <span className="text-2xl font-extrabold text-fg">{value}</span>
                  <span className="text-xs font-medium text-muted">{label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — education */}
          <div className="flex flex-col gap-6">
            <motion.h3 {...fadeUp(0.1)} className="text-xs font-semibold tracking-widest text-muted uppercase">
              Education
            </motion.h3>

            {education.map((edu, i) => (
              <motion.div
                key={edu.school}
                {...fadeUp(0.15 + i * 0.1)}
                className="group relative flex flex-col gap-1 rounded-xl border border-border bg-surface p-6 transition-colors hover:border-accent"
              >
                {/* Accent left bar */}
                <div className="absolute left-0 top-6 bottom-6 w-[3px] rounded-full bg-gradient-to-b from-accent to-accent-2 opacity-0 transition-opacity group-hover:opacity-100" />

                <span className="text-base font-bold text-fg">{edu.school}</span>
                <span className="text-sm text-muted">{edu.degree}</span>
                <span className="mt-1 text-xs font-medium text-accent">{edu.location}</span>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
