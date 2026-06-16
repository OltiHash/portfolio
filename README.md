<div align="center">

# Olti Hashani — Developer Portfolio

**A cinematic, fully animated personal portfolio built with Next.js 16, Tailwind CSS v4, and Framer Motion.**

[![Next.js](https://img.shields.io/badge/Next.js-16-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38BDF8?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion)
[![Netlify](https://img.shields.io/badge/Netlify-deployed-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)](https://oltihash-portfolio.netlify.app)

**[Live Site →](https://oltihash-portfolio.netlify.app)**

</div>

---

## Features

- **Cinematic loading screen** — animated logo with progress bar before content reveals
- **Custom cursor** — dual-ring glow cursor that follows the mouse (hidden on touch devices)
- **Particle field** — floating ambient particles layered behind the Hero section
- **Glassmorphism UI** — `#060606` dark base with `backdrop-blur` glass cards and electric blue/purple accents
- **Framer Motion animations** — staggered entrance on every section, triggered on scroll with `viewport: once`
- **Interactive terminal** — functional CLI with `help`, `about`, `projects`, `skills`, `contact`, and `clear`
- **Animated stat counters** — numbers count up from zero when scrolled into view
- **Contact form** — powered by Netlify Forms; messages delivered directly to email
- **Fully responsive** — optimised for mobile, tablet, and desktop

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router, `output: 'export'`) |
| UI Library | React 19 |
| Language | TypeScript 5 (strict) |
| Styling | Tailwind CSS v4 (CSS-first config, no `tailwind.config`) |
| Animations | Framer Motion 11 |
| Icons | lucide-react + custom inline SVG brand icons |
| Deployment | Netlify — static export served from `out/` |

## Sections

`Hero` · `About` · `Skills` · `Projects` · `Experience` · `Stats` · `Terminal` · `Contact` · `Footer`

## Getting Started

```bash
git clone https://github.com/OltiHash/portfolio.git
cd portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

**To personalise the site** — edit one file only:

```
lib/data.ts   ← name, bio, skills, projects, experience, stats
```

## Project Structure

```
app/
  layout.tsx          # Root layout, metadata, scroll-fix inline script
  page.tsx            # Entry point — mounts <Portfolio />
  globals.css         # Tailwind v4 theme + global resets

components/
  Portfolio.tsx        # Client root; manages loading state
  ui/                  # CustomCursor, LoadingScreen, SocialIcons
  layout/              # Navbar, Footer
  sections/            # Hero, About, Skills, Projects, Experience,
                       #   Stats, Terminal, Contact

lib/
  data.ts              # Single source of truth for all content
hooks/                 # useMousePosition, useScrollProgress, useCountUp, useInView
types/index.ts         # Shared TypeScript interfaces
```

## Deployment

Exported as a static site via `next build` and hosted on Netlify.

```toml
# netlify.toml
[build]
  command = "npm run build"
  publish = "out"
```

Contact form submissions are captured by Netlify Forms — zero backend required.

---

<div align="center">

Made by [Olti Hashani](https://oltihash-portfolio.netlify.app) · Prishtina, Kosovo

</div>
