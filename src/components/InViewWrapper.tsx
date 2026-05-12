"use client";

import { useInView } from "@/hooks/useInView";

export function InViewWrapper({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const [ref, inView] = useInView();
  return (
    <div ref={ref} className={`${inView ? "in-view" : ""} ${className}`.trim()}>
      {children}
    </div>
  );
}
