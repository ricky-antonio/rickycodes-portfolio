import dynamic from "next/dynamic";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";
import { ProjectsSkeleton } from "@/components/sections/ProjectsSkeleton";

// Framer Motion is only needed for the filter layout animation in Projects.
// Dynamic import keeps FM out of the initial bundle so it doesn't block FCP.
const Projects = dynamic(
  () => import("@/components/sections/Projects").then((m) => ({ default: m.Projects })),
  { loading: () => <ProjectsSkeleton /> }
);

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </>
  );
}
