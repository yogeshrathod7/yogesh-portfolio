# Yogesh Rathod — DevOps Engineer Portfolio

A premium, fully responsive single-page portfolio built with vanilla HTML, CSS, and JavaScript.
No build step, no dependencies — just open `index.html` or deploy the folder as-is.

## Sections
- **Hero** — intro, live status badge, key stats, CV download
- **Tech marquee** — auto-scrolling tool strip
- **About** — professional summary + quick facts
- **Experience** — vertical timeline covering all 4 roles with detailed bullets
- **Skills** — 8 categorized cards covering the complete tech stack
- **Projects** — 6 featured DevOps projects
- **Education & Certifications**
- **Contact** — email, phone, LinkedIn, GitHub

## Features
- Fully responsive (desktop / tablet / mobile)
- Sticky header with scroll-spy navigation
- Slide-in mobile menu (Esc to close)
- Scroll-reveal animations via IntersectionObserver
- Accessible: semantic HTML, ARIA labels, keyboard friendly
- Respects `prefers-reduced-motion`
- SEO meta tags + Open Graph
- Print stylesheet

## Structure
```
yogesh-portfolio/
├── index.html
├── favicon.svg
├── README.md
└── assets/
    ├── Yogesh_Rathod_DevOps_Resume.pdf
    ├── css/style.css
    ├── js/script.js
    └── images/
```

## Customizing
- **Colors** — edit the CSS custom properties in `:root` at the top of `assets/css/style.css`
  (`--accent` emerald, `--gold` accent, background surfaces).
- **Content** — all text lives directly in `index.html`; sections are clearly commented.
- **Resume** — replace `assets/Yogesh_Rathod_DevOps_Resume.pdf` with any updated file of the same name.

## Deploying
**GitHub Pages:** push the folder contents to a repo → Settings → Pages → deploy from `main` / root.

**Netlify / Vercel:** drag-and-drop the folder, or connect the repo. No build command needed;
publish directory is the project root.
