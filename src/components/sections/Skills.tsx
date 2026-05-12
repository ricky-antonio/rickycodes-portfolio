import {
  SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiRedux, SiShadcnui,
  SiNodedotjs, SiPython, SiPostman, SiMysql, SiMongodb, SiSupabase, SiAppwrite,
  SiPandas, SiNumpy, SiPlotly, SiScikitlearn, SiJupyter,
  SiGit, SiGithub, SiSalesforce, SiGreensock, SiThreedotjs, SiWordpress,
} from "react-icons/si";
import { skills } from "@/lib/data";
import { InViewWrapper } from "@/components/InViewWrapper";

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

const categories = [
  { label: "Frontend",           key: "frontend" as const },
  { label: "Backend & Database", key: "backend"  as const },
  { label: "Data & Analytics",   key: "data"     as const },
  { label: "Tools & Other",      key: "tools"    as const },
];

function SkillBadge({ name, icon }: { name: string; icon: string }) {
  return (
    <div className="flex items-center gap-2.5 rounded-lg border border-border bg-surface px-4 py-3 text-sm font-medium text-muted transition-all duration-150 hover:scale-[1.06] hover:border-accent hover:text-fg">
      <span className="text-base text-accent" aria-hidden="true">{iconMap[icon] ?? null}</span>
      {name}
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-24 lg:py-32">
      <InViewWrapper className="mx-auto max-w-6xl px-6">

        <p className="fade-up mb-2 font-mono text-sm font-semibold tracking-widest text-accent uppercase" style={{ transitionDelay: "0ms" }}>
          // Skills
        </p>
        <h2 className="fade-up mb-16 text-4xl font-extrabold tracking-tight text-fg sm:text-5xl" style={{ transitionDelay: "50ms" }}>
          My Tech Stack
        </h2>

        <div className="flex flex-col gap-12">
          {categories.map(({ label, key }, ci) => (
            <div key={key} className="fade-up" style={{ transitionDelay: `${100 + ci * 80}ms` }}>
              <h3 className="mb-5 text-xs font-semibold tracking-widest text-muted uppercase">
                {label}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills[key].map((skill) => (
                  <SkillBadge key={skill.name} name={skill.name} icon={skill.icon} />
                ))}
              </div>
            </div>
          ))}
        </div>

      </InViewWrapper>
    </section>
  );
}
