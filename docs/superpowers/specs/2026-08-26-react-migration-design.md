# Design: Migrate joehoppe.github.io from Jekyll to React

## Context

`joehoppe.github.io` is currently a GitHub Pages user site rendered by
Jekyll (`jekyll-theme-slate`) directly from `README.md`, with
`_config.yml` supplying the theme and Kramdown as the Markdown
renderer. The site is linked directly from Joe's resume and is
reviewed by recruiters and hiring managers.

## Goal

Migrate the site to a React application, hosted at the same URL
(`https://joehoppe.github.io/`), while preserving the site's current
content and visual style. The migration is primarily a platform/tech
stack change intended to serve as a showcase piece — demonstrating
that Joe can build and ship a real React app — not a content
redesign.

## Non-goals

- **No new Projects section.** The current site's biggest content gap
  (per `toDo.md` item 1 — no showcase of 3-5 real projects) is
  explicitly **out of scope** for this migration. It remains a
  separate future task once the React app exists.
- **No visual redesign.** The current dark, minimal `jekyll-theme-slate`
  look is recreated in plain CSS, not redesigned.
- **No routing.** The site stays a single scrollable page; no
  multi-route SPA.

## Content scope

All current content is ported as-is, reorganized into React
components:

| Section | Disposition |
| --- | --- |
| Bio, social badges (LinkedIn, GitHub, LeetCode, PluralSight, Medium, DEV.to), StackOverflow flair | Kept, ported directly |
| Certifications table (PluralSight/AZ-900 badge images) | Kept, reworked — images properly sized (fixes current horizontal-overflow bug), presented as a secondary section below the writing log |
| PluralSight PDF (`PluralSight profile 2022.pdf`) | Kept, linked from the "Older highlights" content, same as today |
| Year-by-year writing/activity log (dev.to, Medium articles, back to 2023) | Kept in full, reworked into a proper "Writing" section grouped by year |
| LeetCode profile link | Kept |

Nothing is dropped from the current page's content. The only
deletions are Jekyll-specific plumbing that has no purpose once the
site is a built React app (see **Cleanup** below).

## Approach

**Single-page app with anchored sections, typed content data files, no
router.** Two alternatives were considered and rejected for now:

- *Multi-route SPA (React Router)* — better fits genuinely separate
  pages, but the content is naturally one page today, and GitHub Pages
  has no server-side rewrite support, which complicates deep-linking
  to routes. Revisit if/when a real multi-page Projects section is
  built.
- *Markdown/MDX content files* — closer to the current
  Kramdown-in-README authoring style, but adds an MDX build plugin for
  content that is really structured data (dates, links, titles), not
  prose. Typed TypeScript data files give the same editability with
  compile-time safety and no extra tooling.

## Tech stack

- **Build tool:** Vite + React + TypeScript
- **Styling:** Plain CSS via CSS Modules, one `.module.css` per
  component, recreating the current slate theme's look
- **Testing:** Vitest + React Testing Library — a light smoke-test
  suite (not exhaustive coverage)
- **Deployment:** GitHub Actions, using GitHub's official Pages
  deploy action (no build artifacts committed to git)
- No router, no state management library — content is static and
  doesn't need either

## Repo structure

Source lives at the repo root (not a subfolder), alongside existing
root-level docs and assets:

```text
package.json, vite.config.ts, tsconfig.json, index.html
src/
  main.tsx, App.tsx
  components/       (Bio, Nav, Certifications, Writing, Footer, ...)
  content/           (certifications.ts, writing.ts, links.ts — typed data)
  *.module.css       (co-located with each component)
public/              (cert images, PluralSight PDF, favicon)
.github/workflows/deploy.yml
README.md            (rewritten — repo docs + link to live site)
LICENSE, CLAUDE.md    (kept; CLAUDE.md updated — see Cleanup)
```

## Content data model

Each content section is a typed array in `src/content/`, rendered by
generic list/table components. Editing content later means editing a
data array, not JSX. Example shapes:

```ts
interface Certification {
  date: string;
  title: string;
  badgeImage: string; // path under public/
  imageWidth: number; // max-width in px; image scales responsively below it
  link: string;
}

interface WritingEntry {
  year: string;
  title: string;
  url: string;
  source: string; // e.g. "dev.to article", "Medium article", "Spreadsheet"
}
```

## Page structure

One scrollable page, same content order as today:

1. Jump-link nav (new — addresses `toDo.md` item 5)
2. Bio + social badges + StackOverflow flair
3. Certifications (responsive, capped at each badge's max-width —
   fixes the current overflow bug from `toDo.md` item 3)
4. Writing, grouped by year (full history, `toDo.md` item 6 content
   fixes — e.g. the misfiled 2020-trip article under "2026" — applied
   during the port)

## Implementation workflow

- All implementation happens on the **`feat/react-migration`** branch,
  not directly on `main`. This spec is committed to that branch and
  lives alongside the code it describes; it stays in the repo after
  the migration lands rather than being deleted.
- Before merging to `main`, Joe reviews the site **running locally in
  Chrome** (`npm run dev`, and a `npm run build` + preview pass) —
  golden path and the fixed edge cases (cert image sizing, writing log
  grouping) — same bar as any UI change per the project's testing
  guidance.
- Only after that local review passes does the branch merge to `main`,
  at which point the GitHub Actions deploy workflow (below) takes
  over and publishes the live site.

## Deployment

GitHub Actions workflow, triggered on push to `main`:

1. Checkout
2. Setup Node
3. `npm ci`
4. `npm run build`
5. Upload `dist/` as a Pages artifact
6. Deploy via `actions/deploy-pages`

**Manual prerequisite (outside git, requires repo admin access):** the
repo's **Settings → Pages → Source** must be switched from "Deploy
from a branch" to "GitHub Actions" before the workflow's deploy step
will take effect. This is a one-time manual step for Joe to perform.

## Testing

A handful of Vitest + RTL smoke tests:

- Each major section renders its expected heading
- Social/profile links resolve to the correct URLs
- Certification badge links/images render with correct alt text

Not exhaustive coverage — this is a static content site with minimal
logic.

## Cleanup

- **Delete `_config.yml`** — Jekyll theme config, unused once the site
  is a built React app.
- **Rewrite `README.md`** — becomes plain repository documentation
  (what this repo is, tech stack, how to run locally, link to the live
  site) instead of the rendered page content.
- **Update `.gitignore`** — add `node_modules/` and `dist/`.
- **Update `CLAUDE.md`** — its current claim that "`README.md` is the
  rendered homepage content" becomes false after this migration and
  needs correcting.
- **No change** to `LICENSE`, the cert images, the PluralSight PDF, or
  `toDo.md` (its Projects item stays as a deferred future task, not
  deleted).

## Open follow-up (explicitly deferred, not part of this migration)

- `toDo.md` item 1: add a real Projects section (3-5 projects with
  description, stack, links).
