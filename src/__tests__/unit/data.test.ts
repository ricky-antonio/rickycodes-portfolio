import { describe, it, expect } from "vitest";
import { personal, skills, projects, experience, education } from "@/lib/data";

const URL_REGEX = /^https?:\/\/.+/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const VALID_CATEGORIES = ["Web App", "UI/UX", "Tools"] as const;

describe("personal", () => {
  it("has all required fields", () => {
    expect(personal.name).toBeTruthy();
    expect(personal.firstName).toBeTruthy();
    expect(personal.title).toBeTruthy();
    expect(personal.tagline).toBeTruthy();
    expect(personal.email).toBeTruthy();
    expect(personal.github).toBeTruthy();
    expect(personal.linkedin).toBeTruthy();
    expect(personal.bio).toBeTruthy();
  });

  it("email is valid format", () => {
    expect(EMAIL_REGEX.test(personal.email)).toBe(true);
  });

  it("github and linkedin are valid URLs", () => {
    expect(URL_REGEX.test(personal.github)).toBe(true);
    expect(URL_REGEX.test(personal.linkedin)).toBe(true);
  });

  it("hobbies is a non-empty array of strings", () => {
    expect(Array.isArray(personal.hobbies)).toBe(true);
    expect(personal.hobbies.length).toBeGreaterThan(0);
    personal.hobbies.forEach((h) => expect(typeof h).toBe("string"));
  });
});

describe("skills", () => {
  const categories = ["ai", "frontend", "backend", "data", "tools"] as const;

  it("has all skill categories", () => {
    categories.forEach((cat) => expect(skills[cat]).toBeDefined());
  });

  it("each skill has a name and icon", () => {
    categories.forEach((cat) => {
      skills[cat].forEach((skill) => {
        expect(skill.name).toBeTruthy();
        expect(skill.icon).toBeTruthy();
      });
    });
  });

  it("no duplicate skill names across all categories", () => {
    const allNames = categories.flatMap((cat) => skills[cat].map((s) => s.name));
    const unique = new Set(allNames);
    expect(unique.size).toBe(allNames.length);
  });

  it("each category has at least 2 skills", () => {
    categories.forEach((cat) => {
      expect(skills[cat].length).toBeGreaterThanOrEqual(2);
    });
  });
});

describe("projects", () => {
  it("has at least one project", () => {
    expect(projects.length).toBeGreaterThan(0);
  });

  it("each project has all required fields", () => {
    projects.forEach((p) => {
      expect(p.title, `${p.title} missing title`).toBeTruthy();
      expect(p.category, `${p.title} missing category`).toBeTruthy();
      expect(p.description, `${p.title} missing description`).toBeTruthy();
      expect(Array.isArray(p.tech), `${p.title} tech must be array`).toBe(true);
      expect(p.tech.length, `${p.title} has no tech stack`).toBeGreaterThan(0);
      expect(p.github, `${p.title} missing github`).toBeTruthy();
      expect(p.demo, `${p.title} missing demo`).toBeTruthy();
      expect(p.image, `${p.title} missing image`).toBeTruthy();
    });
  });

  it("all project categories are valid", () => {
    projects.forEach((p) => {
      expect(VALID_CATEGORIES).toContain(p.category as typeof VALID_CATEGORIES[number]);
    });
  });

  it("github and demo URLs are valid", () => {
    projects.forEach((p) => {
      expect(URL_REGEX.test(p.github), `${p.title} github URL invalid`).toBe(true);
      expect(URL_REGEX.test(p.demo), `${p.title} demo URL invalid`).toBe(true);
    });
  });

  it("no duplicate project titles", () => {
    const titles = projects.map((p) => p.title);
    const unique = new Set(titles);
    expect(unique.size).toBe(titles.length);
  });

  it("image paths start with /", () => {
    projects.forEach((p) => {
      expect(p.image.startsWith("/"), `${p.title} image path should be relative`).toBe(true);
    });
  });
});

describe("experience", () => {
  it("has at least one entry", () => {
    expect(experience.length).toBeGreaterThan(0);
  });

  it("each entry has required fields", () => {
    experience.forEach((e) => {
      expect(e.role, "missing role").toBeTruthy();
      expect(e.company, "missing company").toBeTruthy();
      expect(e.location, "missing location").toBeTruthy();
      expect(e.period, "missing period").toBeTruthy();
      expect(Array.isArray(e.bullets), "bullets must be array").toBe(true);
      expect(e.bullets.length, "no bullets").toBeGreaterThan(0);
    });
  });

  it("period format includes a year", () => {
    experience.forEach((e) => {
      expect(/\d{4}/.test(e.period), `${e.company} period should contain a year`).toBe(true);
    });
  });
});

describe("education", () => {
  it("has at least one entry", () => {
    expect(education.length).toBeGreaterThan(0);
  });

  it("each entry has school, degree, and location", () => {
    education.forEach((e) => {
      expect(e.school).toBeTruthy();
      expect(e.degree).toBeTruthy();
      expect(e.location).toBeTruthy();
    });
  });
});
