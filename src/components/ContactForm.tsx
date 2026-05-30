"use client";

import { useActionState, useEffect, useRef } from "react";
import { useFormStatus } from "react-dom";
import { FiSend, FiCheckCircle, FiAlertCircle } from "react-icons/fi";
import { sendContactEmail, type ContactState } from "@/app/actions/contact";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-accent/30 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
    >
      <FiSend size={18} />
      {pending ? "Sending…" : "Send Message"}
    </button>
  );
}

export function ContactForm() {
  const [state, action] = useActionState<ContactState, FormData>(sendContactEmail, null);
  const timestampRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (timestampRef.current) timestampRef.current.value = Date.now().toString();
  }, []);

  if (state?.success) {
    return (
      <div className="flex flex-col items-center gap-4 rounded-xl border border-green-500/30 bg-green-500/10 px-8 py-10 text-center">
        <FiCheckCircle size={36} className="text-green-400" />
        <p className="text-lg font-semibold text-fg">Message sent!</p>
        <p className="text-sm text-muted">Thanks for reaching out — I&apos;ll get back to you soon.</p>
      </div>
    );
  }

  return (
    <form action={action} className="flex flex-col gap-4 text-left">
      {/* Honeypot — off-screen, not display:none (bots detect that) */}
      <div aria-hidden="true" style={{ position: "absolute", left: "-9999px", width: 0, height: 0, overflow: "hidden" }}>
        <label htmlFor="_trap">Leave this field empty</label>
        <input type="text" id="_trap" name="_trap" tabIndex={-1} autoComplete="off" />
      </div>
      {/* Timing token — set on mount, bots submit before this is populated */}
      <input ref={timestampRef} type="hidden" name="_t" />

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-xs font-semibold tracking-widest text-muted uppercase">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            className="rounded-lg border border-border bg-surface px-4 py-3 text-sm text-fg placeholder:text-muted/50 outline-none transition-colors focus:border-accent"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-xs font-semibold tracking-widest text-muted uppercase">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className="rounded-lg border border-border bg-surface px-4 py-3 text-sm text-fg placeholder:text-muted/50 outline-none transition-colors focus:border-accent"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-xs font-semibold tracking-widest text-muted uppercase">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="What's on your mind?"
          className="resize-none rounded-lg border border-border bg-surface px-4 py-3 text-sm text-fg placeholder:text-muted/50 outline-none transition-colors focus:border-accent"
        />
      </div>

      {state && !state.success && (
        <div className="flex items-center gap-2 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
          <FiAlertCircle size={16} className="shrink-0" />
          {state.error}
        </div>
      )}

      <SubmitButton />
    </form>
  );
}
