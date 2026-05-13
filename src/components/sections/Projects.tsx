"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { projects } from "@/lib/data";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const, delay },
});

const categories = ["All", "Web App", "UI/UX", "Tools"] as const;
type Filter = (typeof categories)[number];

export function Projects() {
  const [filter, setFilter] = useState<Filter>("All");

  const filtered = filter === "All"
    ? projects
    : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">

        <motion.p {...fadeUp(0)} className="mb-2 font-mono text-sm font-semibold tracking-widest text-accent uppercase">
          // Projects
        </motion.p>
        <motion.h2 {...fadeUp(0.05)} className="mb-10 text-4xl font-extrabold tracking-tight text-fg sm:text-5xl">
          Things I&apos;ve Built
        </motion.h2>

        {/* Filter tabs */}
        <motion.div {...fadeUp(0.1)} className="mb-12 flex gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                filter === cat
                  ? "bg-accent text-white"
                  : "border border-border text-muted hover:border-accent hover:text-fg"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.article
                key={project.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="group flex flex-col overflow-hidden rounded-xl border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-xl hover:shadow-accent/10"
              >
                {/* Screenshot */}
                <div className="relative h-44 w-full overflow-hidden bg-bg">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Category badge */}
                  <span className="absolute left-3 top-3 rounded-md bg-bg/80 px-2.5 py-1 text-xs font-semibold text-accent backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col gap-3 p-5">
                  <h3 className="font-bold text-fg">{project.title}</h3>
                  <p className="text-sm leading-relaxed text-muted flex-1">{project.description}</p>

                  {/* Tech pills */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-md bg-bg px-2 py-0.5 text-xs font-medium text-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 pt-1">
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-medium text-muted transition-colors hover:text-accent"
                    >
                      <FiGithub size={14} /> GitHub
                    </Link>
                    <Link
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-medium text-muted transition-colors hover:text-accent"
                    >
                      <FiExternalLink size={14} /> Live Demo
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
