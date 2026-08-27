# joehoppe.github.io

Joseph Hoppe's personal developer portfolio — a small React + TypeScript
single-page site listing profile links, certifications, and writing.

**Live site:** https://joehoppe.github.io/

## Stack

- [Vite](https://vitejs.dev/) + [React](https://react.dev/) + TypeScript
- CSS Modules
- [Vitest](https://vitest.dev/) + [React Testing Library](https://testing-library.com/react)
- Deployed via GitHub Actions to GitHub Pages

## Development

```bash
npm install
npm run dev       # start local dev server
npm run build     # production build to dist/
npm run preview   # preview the production build locally
npm test          # run the smoke test suite
```

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the
site and publishes `dist/` to GitHub Pages.

## Content

Page content lives in typed data files under `src/content/` — edit those,
not the components, to update certifications or writing entries.
