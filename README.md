# portfolio-game

Personal portfolio website with a retro/gamer visual style.

## Stack

- HTML
- CSS (custom properties, no frameworks)
- JavaScript (ES Modules, no bundler)
- GitHub Pages deployment

## Project structure

```text
.
├── index.html
├── CNAME
├── .gitignore
├── assets
│   ├── css
│   │   ├── variables.css   # design tokens & theme definitions (dark / light)
│   │   ├── base.css        # reset, html/body, bg-grid, scanlines
│   │   ├── animations.css  # @keyframes
│   │   ├── components.css  # nav, buttons, cards, badges, social links
│   │   └── sections.css    # hero, experience, projects, about, footer + media queries
│   ├── img
│   │   └── favicon.svg
│   └── js
│       ├── main.js         # entry point – imports & initialises all modules
│       └── modules
│           ├── theme-toggle.js     # dark / light theme switch + localStorage persistence
│           ├── nav-visibility.js   # hide nav on scroll-down, reveal on scroll-up
│           ├── smooth-scroll.js    # anchor click → scrollIntoView
│           ├── typewriter.js       # character-by-character subtitle animation
│           ├── reveal-on-scroll.js # IntersectionObserver fade-in for cards
│           ├── project-hover.js    # glitch animation on project card hover
│           └── konami.js           # ↑↑↓↓←→←→ easter egg
└── README.md
```

## Local preview

Run a simple local server from the project root:

```bash
python3 -m http.server 8080
```

Then open:

```text
http://localhost:8080
```

## Validate JS syntax

```bash
node --check assets/js/main.js
node --check assets/js/modules/*.js
```

## Workflow

1. Work on a feature branch.
2. Validate changes locally (desktop **and** mobile, min 360 px width).
3. Open PR to `main`.
4. Merge to trigger GitHub Pages deployment → `https://alexpinto.is-a.dev/`
