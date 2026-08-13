# Sama Ahmed — Portfolio

A dark-first personal portfolio built with React, Vite, Tailwind CSS, Framer Motion, and Lucide icons.

## 1. Running locally

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview   # preview the production build locally
```

## 2. Replacing the CV

Your real CV is already included at `public/Sama_Ahmed_CV.pdf` and wired up — the "Download CV" buttons point at `/Sama_Ahmed_CV.pdf` (set in `src/data/portfolio.js` under `profile.cvPath`). Vite copies everything in `public/` into the production build automatically, so this works after `npm run build` too.

To update it later, just replace `public/Sama_Ahmed_CV.pdf` with a new PDF of the same filename.

## 2b. Project screenshots

Real screenshots are already in place for 6 of the 8 projects, sourced from your provided dashboard images, at `public/projects/`. Each project's `images` array in `src/data/portfolio.js` lists its screenshot path(s) — add more by dropping a file in `public/projects/` and pushing its path into that array.

Titanic Classification and Inventory Management System still have no screenshots (`images: []`) — add yours the same way when you have them.

## 3. Adding project GitHub links

Open `src/data/portfolio.js` and find the `projects` array. Each project has a `github` field — set it to your repo URL, e.g.:

```js
github: 'https://github.com/sama13212/hr-attrition-analysis',
```

Projects with `github: null` currently show a "repo soon" state on the card and "Repository link coming soon" in the details modal.

## 4. LinkedIn

Already set in `src/data/portfolio.js`:

```js
linkedin: 'https://www.linkedin.com/in/sama-ahmed-mohamed',
```

It's used (with `target="_blank"`) in the Hero social icons, the Contact section, and the Footer.

## 5. Email

Already set in `src/data/portfolio.js`:

```js
email: 'sama.ahmedzzz.13@gmail.com',
```

## 6. Deploying

### Vercel
1. Push this project to a GitHub repo.
2. Import the repo at vercel.com — it auto-detects Vite. No config needed.

### GitHub Pages
1. Install the Pages helper: `npm install -D gh-pages`
2. In `vite.config.js`, add `base: '/<your-repo-name>/'`
3. Add to `package.json` scripts: `"deploy": "vite build && gh-pages -d dist"`
4. Run `npm run deploy`, then enable Pages in the repo settings (source: `gh-pages` branch).

## Notes

- All content lives in `src/data/portfolio.js` — edit copy, projects, experience, and certifications there rather than inside components.
- Placeholders (CV file, GitHub links, LinkedIn URL, email) are clearly marked with `PLACEHOLDER_*` comments in `src/data/portfolio.js` and render as honest "coming soon" states rather than fake data.
- Dark/light mode, scroll progress, project filtering, and the project details modal are all functional out of the box.
