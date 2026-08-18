# AGENTS.md

## Stack

- Vanilla JS (ES modules), Vite 6, no framework
- No TypeScript, no linting, no tests, no formatter
- Package manager: **npm**

## Commands

```sh
npm install        # install deps
npm run dev        # local dev server (Vite)
npm run build      # production build -> dist/
npm run preview    # preview prod build locally
```

No test/lint/typecheck commands exist. Verify builds with `npm run build`.

## Project structure

- `src/` is the Vite root (configured in `vite.config.js` with `root: 'src'`, `base: './'`)
- `src/js/main.js` — entry point, wires up all sections + EmailJS form
- `src/data/content.js` — **all site content** (profile, experience, skills, projects); edit this to change content
- `src/data/config.js` — EmailJS keys (public key, service ID, template ID)
- `src/css/style.css` — all styles, dark/light theme via `[data-theme]` attribute
- `src/js/theme.js` — theme toggle with `localStorage` persistence
- `src/js/carousel.js` — hand-rolled carousel component (experience, education, projects sections)
- `dist/` — build output (gitignored, do not edit)

## Key conventions

- **Data-driven content**: all editable content lives in `src/data/content.js` as named exports. README confirms this is the intended edit point.
- **Relative asset paths**: assets use relative paths (`assets/images/...`) which work with Vite's `base: './'` for GitHub Pages.
- **ES modules only**: `"type": "module"` in package.json. All JS uses `import`/`export`.
- **No env files**: EmailJS keys are committed directly in `src/data/config.js` (client-side public key, not a secret).

## CI/CD

- `.github/workflows/deploy.yml`: pushes to `master` trigger build + deploy to GitHub Pages
- Uses Node.js 20, `npm ci`, `npm run build`
- Manual trigger via `workflow_dispatch` also supported

## Gotchas

- There is only a `master` branch (no `main`, no feature branches)
- No framework means no component model — content is rendered via `innerHTML` template strings in vanilla JS
- Images with spaces in filenames (e.g., `spasi indonesia.png`) exist in `src/assets/images/jobs/`; reference them carefully
