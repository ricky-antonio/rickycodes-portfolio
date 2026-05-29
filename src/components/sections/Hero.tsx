import Image from "next/image";
import Link from "next/link";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { personal } from "@/lib/data";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div aria-hidden className="pointer-events-none absolute -top-40 -left-40 h-[300px] w-[300px] rounded-full bg-accent opacity-10 blur-[60px] sm:h-[600px] sm:w-[600px] sm:blur-[120px]" />
      <div aria-hidden className="pointer-events-none absolute -bottom-40 -right-20 h-[250px] w-[250px] rounded-full bg-accent-2 opacity-10 blur-[60px] sm:h-[500px] sm:w-[500px] sm:blur-[120px]" />

      <div className="relative mx-auto w-full max-w-6xl px-6 py-24 lg:py-32">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-16">

          {/* ── Left column ── */}
          <div className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left">

            <p
              className="anim-fade-up mb-4 font-mono text-sm font-semibold tracking-widest text-accent-text uppercase"
              style={{ animationDelay: "0ms" }}
            >
              // Software Engineer
            </p>

            <h1
              className="anim-fade-up mb-8 text-5xl font-extrabold leading-tight tracking-tight text-fg sm:text-6xl lg:text-7xl"
              style={{ animationDelay: "0ms" }}
            >
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-accent to-accent-2 bg-clip-text text-transparent">
                Ricardo
              </span>
              <span className="mt-3 block text-xl font-medium tracking-wide text-muted sm:text-2xl">
                {personal.tagline}
              </span>
            </h1>

            {/* Code block — LCP element on mobile, so it animates in the first
                paint batch (no delay) to keep its LCP timestamp early. */}
            <div
              className="anim-fade-up mb-8 w-full max-w-md rounded-xl border border-border bg-surface p-5 text-left shadow-lg"
              style={{ animationDelay: "0ms" }}
            >
              <div className="mb-3 flex gap-1.5">
                <span className="h-3 w-3 rounded-full bg-red-500" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-500" />
              </div>
              <pre className="font-mono text-xs leading-relaxed sm:text-sm overflow-x-auto">
                <span className="text-pink-400">const</span>
                <span className="text-fg"> developer </span>
                <span className="text-pink-400">=</span>
                <span className="text-fg"> {"{"}</span>
                {"\n"}
                {"  "}
                <span className="text-violet-700 dark:text-violet-300">firstName</span>
                <span className="text-muted">: </span>
                <span className="text-green-400">&quot;Ricardo&quot;</span>
                <span className="text-muted">,</span>
                {"\n"}
                {"  "}
                <span className="text-violet-700 dark:text-violet-300">lastName</span>
                <span className="text-muted">: </span>
                <span className="text-green-400">&quot;Monterrosa&quot;</span>
                <span className="text-muted">,</span>
                {"\n"}
                {"  "}
                <span className="text-violet-700 dark:text-violet-300">dailyRoutine</span>
                <span className="text-muted">: () </span>
                <span className="text-pink-400">=&gt;</span>
                <span className="text-fg"> {"{"}</span>
                {"\n"}
                {personal.hobbies.map((h) => (
                  <span key={h}>
                    {"    "}
                    <span className="text-yellow-400">console</span>
                    <span className="text-muted">.log(</span>
                    <span className="text-green-400">&quot;{h}&quot;</span>
                    <span className="text-muted">);</span>
                    {"\n"}
                  </span>
                ))}
                {"  "}
                <span className="text-fg">{"}"}</span>
                <span className="text-muted">,</span>
                {"\n"}
                <span className="text-fg">{"}"}</span>
              </pre>
            </div>

            {/* CTA buttons */}
            <div
              className="anim-fade-up mb-8 flex flex-wrap gap-4"
              style={{ animationDelay: "400ms" }}
            >
              <a
                href="#projects"
                className="rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-accent/40 hover:shadow-xl"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="rounded-lg border border-border px-6 py-3 text-sm font-semibold text-fg transition-all hover:border-accent hover:text-accent"
              >
                Get In Touch
              </a>
            </div>

            {/* Social links */}
            <div
              className="anim-fade-up flex gap-5"
              style={{ animationDelay: "500ms" }}
            >
              <Link href={personal.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted transition-colors hover:text-accent">
                <FiGithub size={22} />
              </Link>
              <Link href={personal.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted transition-colors hover:text-accent">
                <FiLinkedin size={22} />
              </Link>
              <Link href={`mailto:${personal.email}`} aria-label="Email" className="text-muted transition-colors hover:text-accent">
                <FiMail size={22} />
              </Link>
            </div>
          </div>

          {/* ── Right column — Profile photo ── */}
          <div
            className="anim-scale-in relative flex-shrink-0"
            style={{ animationDelay: "200ms" }}
          >
            <div className="absolute inset-0 -m-2 rounded-full bg-gradient-to-br from-accent to-accent-2 opacity-40 blur-xl" />
            <div className="relative overflow-hidden rounded-full p-[3px] bg-linear-to-br from-accent to-accent-2">
              <div className="relative overflow-hidden rounded-full bg-bg transform-[translateZ(0)]">
                <Image
                  src="/profile.webp"
                  alt="Ricardo Monterrosa"
                  width={340}
                  height={340}
                  sizes="(max-width: 640px) 256px, 320px"
                  className="h-64 w-64 rounded-full object-cover object-top sm:h-80 sm:w-80"
                  priority
                />
                <div className="pointer-events-none absolute inset-0 rounded-full shadow-[inset_0_0_10px_2px_var(--accent-glow)]" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
