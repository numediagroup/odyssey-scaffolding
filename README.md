# Odyssey Scaffolding — Website

A static site. Plain HTML + CSS + a little vanilla JS. No frameworks, no build step, no backend. Fully responsive (mobile / tablet / desktop).

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
├── index.html                    ← homepage (all content + sections)
├── domestic-scaffolding.html     ← Domestic Scaffolding page
├── commercial-scaffolding.html   ← Commercial Scaffolding page
├── contact.html                  ← Contact page
├── privacy-policy.html           ← Privacy policy (linked from every footer)
│                                  The site sets NO cookies and uses no analytics.
├── styles.css                    ← all styling + responsive rules (all pages)
├── main.js                       ← mobile menu, scroll-reveal, header, footer year (all pages)
└── assets/images/
    ├── brand/          ← logo + favicons (from your real logo)
    ├── reliable-domestic-scaffolding.jpg          ← domestic page hero
    ├── domestic-scaffolding-solutions.jpg         ← domestic page, services section
    ├── domestic-scaffolding-residential-homes.jpg ← domestic page, homeowners & trades band
    ├── professional-commercial-scaffolding.jpg    ← commercial page hero
    ├── large-scaffolding-projects.jpg             ← commercial page, services section
    ├── commercial-scaffolding.jpg                 ← commercial page + homepage showcase
    ├── scaffolding-project-commercial-and-domestic.jpg  ← homepage hero
    ├── scaffolding-projects-near-me.jpg           ← homepage showcase
    ├── scaffolding-materials.jpg                  ← homepage showcase
    │
    │   The nine files above are the CLIENT-SUPPLIED photos — every page uses only these.
    └── gallery/        ← the full library of 27 real job photos (localised from BLP), for future use
```

## Notes
- Fonts: **Saira** (headings) + **Barlow** (body) — loaded from Google Fonts.
- Brand colours are taken from the real logo: navy `#282E6A`, amber `#FFB613`.
- Search the code for the word **PLACEHOLDER** to find every stand-in — see `PLACEHOLDERS.md`.
- The Domestic and Commercial pages reuse the homepage's exact tokens, buttons, eyebrows,
  section titles and card grid. Their own components live in one clearly-marked block at the
  bottom of `styles.css` (`.hero--page`, `.dom-intro`, `.dom-services`, `.band`, `.standards`,
  `.area`, `.steps`).
- All four pages are cross-linked in the header, mobile drawer and footer. "Contact Us" in the
  nav goes to `contact.html`; the in-page "Get a Free Quote" / "Arrange a quotation" buttons
  still scroll to each page's own contact section.
- `contact.html` reuses photos already on the site (`hero.jpg`, `domestic.jpg`, `commercial.jpg`)
  — it adds no new image files.
