# rickycodes.dev — Personal Portfolio

A fast, accessible, single-page portfolio built with the modern React stack — featuring my projects, experience, and a hardened contact form. Designed with as much care for performance, accessibility, and SEO as for visual polish.

**Live:** [rickycodes.dev](https://rickycodes.dev)

## Stack

- **Framework:** Next.js (App Router) + React
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Testing:** Vitest + React Testing Library (unit/component), Playwright (e2e)
- **Deployment:** Vercel

## Highlights

- **Tested** — unit, component, and end-to-end suites covering accessibility (axe-core), links, performance, responsiveness, and SEO
- **Accessible** — built to accessibility standards and verified with automated a11y tests
- **SEO-ready** — dynamic Open Graph image generation, sitemap, robots, and canonical metadata
- **Hardened contact form** — server-side validation, rate limiting, honeypot, and timing checks against spam
- **Performance-focused** — optimized images (next/image, webp), minimal client JS, fast LCP

## Running locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm run test` | Run unit + component tests (Vitest) |
| `npm run test:e2e` | Run end-to-end tests (Playwright) |
| `npm run test:all` | Run the full suite |

## License

© Ricardo Monterrosa. All rights reserved.
