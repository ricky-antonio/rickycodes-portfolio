import { describe, it, expect } from "vitest";
import { projects } from "@/lib/data";

type Filter = "All" | "AI" | "Full-Stack" | "UI/UX" | "Tools";
const CATEGORIES: Exclude<Filter, "All">[] = ["AI", "Full-Stack", "UI/UX", "Tools"];

function filterProjects(filter: Filter) {
  return filter === "All" ? projects : projects.filter((p) => p.category === filter);
}

describe("projects filter logic", () => {
  it("All returns every project", () => {
    expect(filterProjects("All").length).toBe(projects.length);
  });

  it("each category returns only its own projects", () => {
    CATEGORIES.forEach((cat) => {
      const result = filterProjects(cat);
      expect(result.length, `${cat} has no projects`).toBeGreaterThan(0);
      result.forEach((p) => expect(p.category).toBe(cat));
    });
  });

  it("AI groups the Claude-powered projects", () => {
    const ai = filterProjects("AI").map((p) => p.title);
    expect(ai).toContain("Citadel - Urban Intelligence");
    expect(ai).toContain("Lodestar - Task Management");
    expect(ai).toContain("Bloom - Concept Explorer");
  });

  it("every category combined totals all projects", () => {
    const total = CATEGORIES.reduce((sum, cat) => sum + filterProjects(cat).length, 0);
    expect(total).toBe(projects.length);
  });

  it("filtered results are a subset of all projects", () => {
    const allTitles = new Set(projects.map((p) => p.title));
    CATEGORIES.forEach((cat) =>
      filterProjects(cat).forEach((p) => expect(allTitles.has(p.title)).toBe(true))
    );
  });
});
