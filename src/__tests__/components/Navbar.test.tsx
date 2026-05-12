import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";

vi.mock("framer-motion", () => ({
  motion: new Proxy({}, {
    get: (_t, tag: string) =>
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ({ children, ...props }: any) => React.createElement(tag, props, children),
  }),
  AnimatePresence: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

vi.mock("next/link", () => ({
  default: ({ children, href, ...props }: { children: React.ReactNode; href: string; [k: string]: unknown }) =>
    <a href={href} {...props}>{children}</a>,
}));

vi.mock("@/components/ui/ThemeToggle", () => ({
  ThemeToggle: () => <button aria-label="Toggle theme">Theme</button>,
}));

vi.mock("react-icons/fi", () => ({
  FiMenu: () => <span data-testid="icon-menu">menu</span>,
  FiX: () => <span data-testid="icon-close">close</span>,
}));

import { Navbar } from "@/components/layout/Navbar";

describe("Navbar", () => {
  beforeEach(() => {
    vi.spyOn(window, "addEventListener").mockImplementation(() => {});
    vi.spyOn(window, "removeEventListener").mockImplementation(() => {});
  });

  it("renders the RM. logo", () => {
    render(<Navbar />);
    expect(screen.getByText(/RM/)).toBeInTheDocument();
  });

  it("renders all desktop nav links", () => {
    render(<Navbar />);
    const links = ["About", "Skills", "Projects", "Experience", "Contact"];
    links.forEach((label) => {
      expect(screen.getAllByText(label).length).toBeGreaterThan(0);
    });
  });

  it("renders the Hire Me button", () => {
    render(<Navbar />);
    const hireMeLinks = screen.getAllByText("Hire Me");
    expect(hireMeLinks.length).toBeGreaterThan(0);
  });

  it("mobile menu is closed by default", () => {
    render(<Navbar />);
    expect(screen.queryByTestId("icon-close")).not.toBeInTheDocument();
    expect(screen.getByTestId("icon-menu")).toBeInTheDocument();
  });

  it("mobile menu opens when hamburger button is clicked", () => {
    render(<Navbar />);
    const menuButton = screen.getByRole("button", { name: /toggle menu/i });
    fireEvent.click(menuButton);
    expect(screen.getByTestId("icon-close")).toBeInTheDocument();
  });

  it("mobile menu closes when a nav link is clicked", () => {
    render(<Navbar />);
    const menuButton = screen.getByRole("button", { name: /toggle menu/i });
    fireEvent.click(menuButton);
    expect(screen.getByTestId("icon-close")).toBeInTheDocument();

    const aboutLinks = screen.getAllByText("About");
    fireEvent.click(aboutLinks[aboutLinks.length - 1]);
    expect(screen.queryByTestId("icon-close")).not.toBeInTheDocument();
  });

  it("nav links point to correct section anchors", () => {
    render(<Navbar />);
    const aboutLinks = screen.getAllByRole("link", { name: "About" });
    expect(aboutLinks[0]).toHaveAttribute("href", "#about");
  });
});
