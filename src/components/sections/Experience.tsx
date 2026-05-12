"use client";

import { FiMapPin, FiCalendar } from "react-icons/fi";
import { experience } from "@/lib/data";
import { useInView } from "@/hooks/useInView";

export function Experience() {
  const [ref, inView] = useInView();

  return (
    <section id="experience" className="py-24 lg:py-32">
      <div ref={ref} className={`mx-auto max-w-6xl px-6 ${inView ? "in-view" : ""}`}>

        <p className="fade-up mb-2 font-mono text-sm font-semibold tracking-widest text-accent uppercase" style={{ transitionDelay: "0ms" }}>
          // Experience
        </p>
        <h2 className="fade-up mb-16 text-4xl font-extrabold tracking-tight text-fg sm:text-5xl" style={{ transitionDelay: "50ms" }}>
          Where I&apos;ve Worked
        </h2>

        <div className="relative flex flex-col gap-0">
          <div className="absolute left-0 top-2 bottom-2 hidden w-px bg-border md:block" />

          {experience.map((job, i) => (
            <div
              key={job.company}
              className="fade-up group relative md:pl-10"
              style={{ transitionDelay: `${100 + i * 100}ms` }}
            >
              <div className="absolute left-0 top-2 hidden h-2.5 w-2.5 -translate-x-[5px] rounded-full border-2 border-accent bg-bg transition-colors group-hover:bg-accent md:block" />

              <div className={`flex flex-col gap-6 pb-12 ${i === experience.length - 1 ? "pb-0" : ""}`}>
                <div className="rounded-xl border border-border bg-surface p-6 transition-all duration-300 group-hover:border-accent group-hover:shadow-lg group-hover:shadow-accent/10">

                  <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-fg">
                        {job.role}
                        {"project" in job && job.project && (
                          <span className="text-accent"> — {job.project}</span>
                        )}
                      </h3>
                      <span className="text-base font-semibold text-muted">{job.company}</span>
                    </div>
                    <div className="flex flex-col gap-1 text-xs text-muted sm:items-end">
                      <span className="flex items-center gap-1.5">
                        <FiCalendar size={12} />
                        {job.period}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <FiMapPin size={12} />
                        {job.location}
                      </span>
                    </div>
                  </div>

                  <ul className="flex flex-col gap-2.5">
                    {job.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3 text-sm leading-relaxed text-muted">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                        {bullet}
                      </li>
                    ))}
                  </ul>

                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
