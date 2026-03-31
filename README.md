# portfolio-game

Personal portfolio website with a retro/gamer visual style.

## Stack

- HTML
- CSS
- JavaScript (ES Modules)
- GitHub Pages deployment

## Project structure

```text
.
├── index.html
├── assets
│   ├── css
│   │   ├── animations.css
│   │   ├── base.css
│   │   ├── components.css
│   │   ├── sections.css
│   │   └── variables.css
│   ├── img
│   └── js
│       ├── main.js
│       └── modules
│           ├── konami.js
│           ├── parallax.js
│           ├── project-hover.js
│           ├── reveal-on-scroll.js
│           ├── smooth-scroll.js
│           └── typewriter.js
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

## Workflow

1. Work on a feature branch.
2. Validate changes locally.
3. Open PR to `main`.
4. Merge to trigger GitHub Pages deployment.
