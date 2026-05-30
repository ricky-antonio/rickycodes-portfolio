import Link from "next/link";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { personal } from "@/lib/data";
import { InViewWrapper } from "@/components/InViewWrapper";
import { ContactForm } from "@/components/ContactForm";

const links = [
  { icon: FiMail,     label: "Email",    value: personal.email,            href: `mailto:${personal.email}` },
  { icon: FiGithub,   label: "GitHub",   value: "ricky-antonio",           href: personal.github },
  { icon: FiLinkedin, label: "LinkedIn", value: "ricardomonterrosa",        href: personal.linkedin },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-24 lg:py-32">
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-accent opacity-5 blur-[100px]" />

      <InViewWrapper className="relative mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">

          <p className="fade-up mb-2 font-mono text-sm font-semibold tracking-widest text-accent-text uppercase" style={{ transitionDelay: "0ms" }}>
            // Contact
          </p>
          <h2 className="fade-up mb-4 text-4xl font-extrabold tracking-tight text-fg sm:text-5xl" style={{ transitionDelay: "50ms" }}>
            Let&apos;s Build Something Amazing
          </h2>
          <p className="fade-up mb-12 text-lg text-muted" style={{ transitionDelay: "100ms" }}>
            I&apos;m open to new opportunities, collaborations, and interesting projects.
            Reach out and let&apos;s talk.
          </p>

          <div className="fade-up mb-12 grid gap-4 sm:grid-cols-3" style={{ transitionDelay: "150ms" }}>
            {links.map(({ icon: Icon, label, value, href }) => (
              <Link
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className="group flex flex-col items-center gap-3 rounded-xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-lg hover:shadow-accent/10"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-bg text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                  <Icon size={20} />
                </span>
                <span className="text-xs font-semibold tracking-widest text-muted uppercase">{label}</span>
                <span className="text-sm font-medium text-fg">{value}</span>
              </Link>
            ))}
          </div>

          <div className="fade-up w-full text-left" style={{ transitionDelay: "200ms" }}>
            <ContactForm />
          </div>

        </div>
      </InViewWrapper>

      <div className="mx-auto mt-24 max-w-6xl border-t border-border px-6 pt-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <span className="text-sm font-bold text-fg">
            RM<span className="text-accent-text">.</span>
          </span>
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} Ricardo Monterrosa. All rights reserved.
          </p>
          <div className="flex gap-1">
            <Link href={personal.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="flex h-11 w-11 items-center justify-center text-muted transition-colors hover:text-accent">
              <FiGithub size={18} />
            </Link>
            <Link href={personal.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="flex h-11 w-11 items-center justify-center text-muted transition-colors hover:text-accent">
              <FiLinkedin size={18} />
            </Link>
            <Link href={`mailto:${personal.email}`} aria-label="Email" className="flex h-11 w-11 items-center justify-center text-muted transition-colors hover:text-accent">
              <FiMail size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
