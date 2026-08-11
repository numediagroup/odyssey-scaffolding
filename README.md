# Odyssey Scaffolding — Homepage

A single-page, static homepage. Plain HTML + CSS + a little vanilla JS. No frameworks, no build step, no backend. Fully responsive (mobile / tablet / desktop).

## How to preview locally

**Option A — simplest:** double-click `index.html` to open it in your browser. Everything is local and relative, so it just works.

**Option B — local server (recommended, matches how it'll behave when hosted):**
```bash
cd "Odyssey Scaffolding/website"
python3 -m http.server 8777
```
Then open **http://localhost:8777** in your browser. Stop the server with `Ctrl+C`.

## Structure
```
website/
├── index.html          ← the page (all content + sections)
├── styles.css          ← all styling + responsive rules
├── main.js             ← mobile menu, scroll-reveal, header, footer year
└── assets/images/
    ├── brand/          ← logo + favicons (from your real logo)
    ├── hero.jpg, domestic.jpg, commercial.jpg, about.jpg, g1–g8.jpg  ← optimised web images
    └── gallery/        ← the full library of 27 real job photos (localised from BLP), for future use
```

## Notes
- Fonts: **Saira** (headings) + **Barlow** (body) — loaded from Google Fonts.
- Brand colours are taken from the real logo: navy `#282E6A`, amber `#FFB613`.
- Search the code for the word **PLACEHOLDER** to find every stand-in — see `PLACEHOLDERS.md`.
- Built for more pages to be added later (Domestic / Commercial), but only the homepage is built for now.
