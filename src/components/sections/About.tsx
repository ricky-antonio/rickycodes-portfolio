import { FiCode, FiLayers, FiZap } from "react-icons/fi";
import { personal, education } from "@/lib/data";
import { InViewWrapper } from "@/components/InViewWrapper";

const stats = [
  { icon: FiZap,    value: "3+",  label: "Years Experience" },
  { icon: FiLayers, value: "10+", label: "Projects Shipped" },
  { icon: FiCode,   value: "TS",  label: "TypeScript First" },
];

export function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32">
      <InViewWrapper className="mx-auto max-w-6xl px-6">

        <p className="fade-up mb-2 font-mono text-sm font-semibold tracking-widest text-accent-text uppercase" style={{ transitionDelay: "0ms" }}>
          // About Me
        </p>
        <h2 className="fade-up mb-16 text-4xl font-extrabold tracking-tight text-fg sm:text-5xl" style={{ transitionDelay: "50ms" }}>
          Who I Am
        </h2>

        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">

          {/* Left — bio + stats */}
          <div className="flex flex-col gap-8">
            <p className="fade-up text-lg leading-relaxed text-muted" style={{ transitionDelay: "100ms" }}>
              {personal.bio}
            </p>

            <div className="fade-up grid grid-cols-3 gap-4" style={{ transitionDelay: "200ms" }}>
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
            </div>
          </div>

          {/* Right — education */}
          <div className="flex flex-col gap-6">
            <h3 className="fade-up text-xs font-semibold tracking-widest text-muted uppercase" style={{ transitionDelay: "100ms" }}>
              Education
            </h3>

            {education.map((edu, i) => (
              <div
                key={edu.school}
                className="fade-up group relative flex flex-col gap-1 rounded-xl border border-border bg-surface p-6 hover:border-accent"
                style={{ transitionDelay: `${150 + i * 100}ms` }}
              >
                <div className="absolute left-0 top-6 bottom-6 w-[3px] rounded-full bg-gradient-to-b from-accent to-accent-2 opacity-0 transition-opacity group-hover:opacity-100" />
                <span className="text-base font-bold text-fg">{edu.school}</span>
                <span className="text-sm text-muted">{edu.degree}</span>
                <span className="mt-1 text-xs font-medium text-accent-text">{edu.location}</span>
              </div>
            ))}
          </div>

        </div>
      </InViewWrapper>
    </section>
  );
}
