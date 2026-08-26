# PLACEHOLDERS — Odyssey Scaffolding homepage

Everything a stand-in was used for. Search the code for `PLACEHOLDER` to jump to each one.

| # | What | Where (file · section) | Replace with / what's needed |
|---|------|------------------------|------------------------------|
| 1 | ~~Hero background image~~ | — | **Resolved.** Now `scaffolding-project-commercial-and-domestic.jpg` — a landscape scaffold-wrap with plenty of sky. See row 21 on resolution. |
| 2 | ~~Commercial section image~~ | — | **Resolved.** Now `large-scaffolding-projects.jpg` — a genuine commercial construction scaffold, replacing the domestic roofing job that stood in for it. |
| 3 | **Testimonials (2 cards)** | `index.html` · "What clients say" section | **Real, attributable client reviews.** The two quotes + "Placeholder name" attributions are invented so the layout is ready — **do not publish them as real.** Give me real reviews, or say the word and I'll remove the section. |
| 4 | ~~Domestic / Commercial nav links~~ | — | **Resolved.** Both pages now exist and every header, mobile-drawer and footer link points at the real page. |
| 5 | **Website link in footer** | all pages · footer contact | `odysseyscaffolding.co.uk` is **PARKED** — it returns the same blank 114-byte page for every path. The visible footer link therefore sends visitors to a blank page. Either remove the link until the domain is connected, or connect it. |
| 6 | **Contact form — submission method** | `index.html` · Contact "Quick enquiry" form + handler in `main.js` (section 5) | The form (Name, Phone, Email, Enquiry type, Message) works now by composing a pre-filled email to info@odysseyscaffolding.co.uk and opening the visitor's mail app — **no backend needed locally.** When hosting, swap it for a real endpoint (Formspree / Netlify Forms / Web3Forms): give the `<form>` an `action`/`method` and delete the mailto handler in `main.js`. See the comment above the form in `index.html`. |
| 7 | **Domestic + commercial page photography** | `domestic-scaffolding.html`, `commercial-scaffolding.html` | All six supplied images are **generic stock scaffolding photos, not Odyssey's own jobs** — unlike the homepage gallery, which is real client work. Swap for Odyssey's own photos when available. |
| 8 | **`domestic-scaffolding-solutions.jpg` looks non-UK** | `domestic-scaffolding.html` · "Scaffolding for all types of residential work" | The property (roller shutters, render detail, architecture) reads as continental European, not Greater London / Surrey. Weakens credibility on a page targeting those areas — **recommend replacing this one first.** |
| 9 | **Canonical URL** | `domestic-scaffolding.html` · `<head>` | Set to `https://odysseyscaffolding.co.uk/domestic-scaffolding` (Netlify strips the `.html`). Confirm once the live domain and hosting are settled. |
| 10 | **Schema on the homepage** | `index.html` | Both the Domestic and Commercial pages have JSON-LD (BreadcrumbList + Service). The homepage has none — worth adding a matching LocalBusiness block for consistency. |
| 11 | **`commercial-scaffolding.jpg` — old tube scaffold, non-UK building** | `commercial-scaffolding.html` · "Working with contractors, developers & businesses" | The ornate period building reads as continental European, and the tube scaffold looks rusty and dated. Weakest of the six new photos — **recommend replacing.** |
| 12 | **`large-scaffolding-projects.jpg` file size** | `assets/images/` | 312KB — the heaviest image on the site (others are 130–244KB). Fine as-is because it is lazy-loaded and highly detailed, but a WebP conversion would roughly halve it. |
| 13 | **Contact page copy — ALL of it is derived, none was supplied** | `contact.html` | No copy was provided for this page. Every sentence is either confirmed data (phone, email, WhatsApp, area) or a restatement of wording already approved on the other pages. **Read it through before publishing.** |
| 14 | **"From enquiry to quotation" 3 steps** | `contact.html` · What happens next | Restates the homepage line "we assess access, working requirements and site conditions before recommending the most suitable solution". Deliberately makes **no promise about response times or site-visit timing** — none were supplied. Add real ones if you have them. |
| 15 | **No opening hours anywhere on the site** | `contact.html` | A contact page normally states when you can be reached. None were supplied, so none are shown or claimed in the schema. Worth adding. |
| 17 | ~~Homepage photos the client did not supply~~ | — | **Resolved.** Every photo on every page is client-supplied. The 12 original files (`hero`, `domestic`, `commercial`, `about`, `g1`–`g8`) have been **deleted** — they remain in git history on `main` if ever needed. |
| 18 | **Photo reuse across pages** | all pages | Nine supplied photos cover four pages and 18 slots, so most appear twice. The homepage uses each of the nine exactly once; the three inner pages repeat them. Not a fault — just the arithmetic. |
| 19 | **Showcase section copy was changed** | `index.html` · showcase | Was "**Recent work** / On the job across the region / A selection of **recent projects**". The supplied photos are **stock, not Odyssey jobs**, so that wording would have been a false claim about work performed. Changed to "What we do / Scaffolding across Greater London & Surrey / Domestic and commercial access…". **Revert only if these become real Odyssey job photos.** |
| 20 | **Showcase is now 6 photos, was 8** | `index.html` · showcase | Nine supplied photos, and three are used elsewhere on the homepage, leaving six for the strip. It scrolls fine at six. Two more would restore the original eight. |
| 21 | **Homepage hero is 1000×548** | `assets/images/scaffolding-project-commercial-and-domestic.jpg` | The hero spans the full viewport, so this will look soft on large screens. **1600px+ wide recommended** for the hero specifically; the other slots are fine at 1000px. |
| 16 | **Invisible buttons on the homepage split panels** | `index.html` · Domestic + Commercial panels | `.btn--navy` sits on a navy panel — fill AND border are the identical colour, giving **1.00:1 contrast**: the button has no visible boundary, only its white label. Fixed on `contact.html` by using `.btn--ghost`; the homepage still has it. One-word fix on two buttons. |

## Real data used (NOT placeholders — confirmed from your brief/assets)
- **Phone:** 07351 009255 · **Email:** info@odysseyscaffolding.co.uk · **WhatsApp:** → 07351 009255
- **Area:** Greater London, Surrey & surrounding areas
- **Logo, brand colours (navy #282E6A / amber #FFB613), favicons** — from your real logo file
- **All body copy** — from the brief you supplied
- **The 6 service tiles** — the same six as the reference site (MKR)
- **Showcase photos + section images** — your own real job photos (localised from the BLP site)

| 22 | **Canonical URLs point at the Netlify host** | all 4 pages | Set to `https://odyssey-scaffolding.netlify.app/...` because that is where the site actually lives. Canonicalising to the parked `odysseyscaffolding.co.uk` would have told Google the real version of each page was a blank parked page, keeping them out of search. **These MUST be updated when the real domain is connected** — same for the JSON-LD `url`/`provider.url` values. |

## Domestic & commercial pages — how the supplied copy was used
(The contact page had no supplied copy at all — see rows 13–15.)
- **Every word of the supplied copy is on each page**, in the order it was given.
- Headings were converted from Title Case to **sentence case** to match the site's existing
  style (the homepage uses "Our scaffolding services", "Domestic scaffolding", etc.).
  The words themselves are unchanged.
- Each hero sub-line is condensed from that page's opening paragraph — the only sentence on
  either page written rather than supplied.
- The hero strip stats are all drawn from the supplied copy (15 years; homeowners & trades /
  contractors & developers; safety-led / reliable scheduling; competitive pricing). No new claims.
- The `.about__who` callout on each page restates a phrase from the supplied copy — it is a
  pull-quote of existing wording, not a new claim.
- Commercial page only: the "Safety & professional standards" section uses a new two-column
  editorial text component (`.standards`), because that section of the copy has no list or image.

## Things I intentionally did NOT invent
- **No physical/street address** — the brief didn't give one, so none is shown (only the service area). Add one if you'd like it in the footer/contact.
- **No social media links** — per the brief (none exist); WhatsApp is the direct-message channel instead.
- **No made-up stats, awards, review scores or "trusted by…" claims.**
