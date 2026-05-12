import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import { projects } from "@/lib/data";

vi.mock("framer-motion", () => ({
  motion: new Proxy({}, {
    get: (_t, tag: string) =>
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ({ children, layout, ...props }: any) => React.createElement(tag, props, children),
  }),
  AnimatePresence: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

vi.mock("next/image", () => ({
  default: ({ src, alt }: { src: string; alt: string }) => <img src={src} alt={alt} />,
}));

vi.mock("next/link", () => ({
  default: ({ children, href, ...props }: { children: React.ReactNode; href: string; [k: string]: unknown }) =>
    <a href={href} {...props}>{children}</a>,
}));

vi.mock("react-icons/fi", () => ({
  FiGithub: () => <span>github</span>,
  FiExternalLink: () => <span>external</span>,
}));

import { Projects } from "@/components/sections/Projects";

const webAppProjects = projects.filter((p) => p.category === "Web App");
const uiuxProjects = projects.filter((p) => p.category === "UI/UX");

describe("Projects component", () => {
  it("renders the section heading", () => {
    render(<Projects />);
    expect(screen.getByText("Things I've Built")).toBeInTheDocument();
  });

  it("renders all filter buttons", () => {
    render(<Projects />);
    expect(screen.getByRole("button", { name: "All" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Web App" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "UI/UX" })).toBeInTheDocument();
  });

  it("shows all projects by default", () => {
    render(<Projects />);
    projects.forEach((p) => {
      expect(screen.getByText(p.title)).toBeInTheDocument();
    });
  });

  it("filter to Web App shows only Web App projects", () => {
    render(<Projects />);
    fireEvent.click(screen.getByRole("button", { name: "Web App" }));

    webAppProjects.forEach((p) => expect(screen.getByText(p.title)).toBeInTheDocument());
    uiuxProjects.forEach((p) => expect(screen.queryByText(p.title)).not.toBeInTheDocument());
  });

  it("filter to UI/UX shows only UI/UX projects", () => {
    render(<Projects />);
    fireEvent.click(screen.getByRole("button", { name: "UI/UX" }));

    uiuxProjects.forEach((p) => expect(screen.getByText(p.title)).toBeInTheDocument());
    webAppProjects.forEach((p) => expect(screen.queryByText(p.title)).not.toBeInTheDocument());
  });

  it("switching back to All restores all projects", () => {
    render(<Projects />);
    fireEvent.click(screen.getByRole("button", { name: "Web App" }));
    fireEvent.click(screen.getByRole("button", { name: "All" }));

    projects.forEach((p) => expect(screen.getByText(p.title)).toBeInTheDocument());
  });

  it("each project card renders a GitHub and Live Demo link", () => {
    render(<Projects />);
    const githubLinks = screen.getAllByText("GitHub");
    const demoLinks = screen.getAllByText("Live Demo");
    expect(githubLinks.length).toBe(projects.length);
    expect(demoLinks.length).toBe(projects.length);
  });

  it("project images have descriptive alt text", () => {
    render(<Projects />);
    projects.forEach((p) => {
      expect(screen.getByAltText(p.title)).toBeInTheDocument();
    });
  });
});
