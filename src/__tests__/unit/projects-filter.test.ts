import { describe, it, expect } from "vitest";
import { projects } from "@/lib/data";

function filterProjects(filter: "All" | "Web App" | "UI/UX" | "Tools") {
  return filter === "All" ? projects : projects.filter((p) => p.category === filter);
}

describe("projects filter logic", () => {
  it("All returns every project", () => {
    expect(filterProjects("All").length).toBe(projects.length);
  });

  it("Web App returns only Web App projects", () => {
    const result = filterProjects("Web App");
    expect(result.length).toBeGreaterThan(0);
    result.forEach((p) => expect(p.category).toBe("Web App"));
  });

  it("UI/UX returns only UI/UX projects", () => {
    const result = filterProjects("UI/UX");
    expect(result.length).toBeGreaterThan(0);
    result.forEach((p) => expect(p.category).toBe("UI/UX"));
  });

  it("Tools returns only Tools projects", () => {
    const result = filterProjects("Tools");
    expect(result.length).toBeGreaterThan(0);
    result.forEach((p) => expect(p.category).toBe("Tools"));
  });

  it("Web App + UI/UX + Tools totals all projects", () => {
    const webApp = filterProjects("Web App").length;
    const uiux = filterProjects("UI/UX").length;
    const tools = filterProjects("Tools").length;
    expect(webApp + uiux + tools).toBe(projects.length);
  });

  it("filtered results are a subset of all projects", () => {
    const allTitles = new Set(projects.map((p) => p.title));
    filterProjects("Web App").forEach((p) => expect(allTitles.has(p.title)).toBe(true));
    filterProjects("UI/UX").forEach((p) => expect(allTitles.has(p.title)).toBe(true));
    filterProjects("Tools").forEach((p) => expect(allTitles.has(p.title)).toBe(true));
  });
});
