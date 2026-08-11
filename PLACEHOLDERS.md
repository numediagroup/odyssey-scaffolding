# PLACEHOLDERS — Odyssey Scaffolding homepage

Everything a stand-in was used for. Search the code for `PLACEHOLDER` to jump to each one.

| # | What | Where (file · section) | Replace with / what's needed |
|---|------|------------------------|------------------------------|
| 1 | **Hero background image** | `index.html` · Hero section (`.hero__media`, `assets/images/hero.jpg`) | A proper "building wrapped in scaffold" photo (landscape, lots of sky for the text). Currently one of your real job photos standing in. Swap the file `assets/images/hero.jpg`. |
| 2 | **Commercial section image** | `index.html` · Commercial panel (`assets/images/commercial.jpg`) | A genuine **commercial/construction** scaffolding photo. Right now it's a real domestic/roofing job used as a stand-in (all 27 photos were domestic roofing). |
| 3 | **Testimonials (2 cards)** | `index.html` · "What clients say" section | **Real, attributable client reviews.** The two quotes + "Placeholder name" attributions are invented so the layout is ready — **do not publish them as real.** Give me real reviews, or say the word and I'll remove the section. |
| 4 | **Domestic / Commercial nav links** | `index.html` · header + footer nav | They currently jump to on-page sections (`#domestic`, `#commercial`). When those dedicated pages are built, repoint them to the real page URLs. |
| 5 | **Website link in footer** | `index.html` · footer contact (`www.odysseyscaffolding.co.uk`) | Confirm the live domain once it's up (link points to `https://odysseyscaffolding.co.uk`). |
| 6 | **Contact form — submission method** | `index.html` · Contact "Quick enquiry" form + handler in `main.js` (section 5) | The form (Name, Phone, Email, Enquiry type, Message) works now by composing a pre-filled email to info@odysseyscaffolding.co.uk and opening the visitor's mail app — **no backend needed locally.** When hosting, swap it for a real endpoint (Formspree / Netlify Forms / Web3Forms): give the `<form>` an `action`/`method` and delete the mailto handler in `main.js`. See the comment above the form in `index.html`. |

## Real data used (NOT placeholders — confirmed from your brief/assets)
- **Phone:** 07351 009255 · **Email:** info@odysseyscaffolding.co.uk · **WhatsApp:** → 07351 009255
- **Area:** Greater London, Surrey & surrounding areas
- **Logo, brand colours (navy #282E6A / amber #FFB613), favicons** — from your real logo file
- **All body copy** — from the brief you supplied
- **The 6 service tiles** — the same six as the reference site (MKR)
- **Showcase photos + section images** — your own real job photos (localised from the BLP site)

## Things I intentionally did NOT invent
- **No physical/street address** — the brief didn't give one, so none is shown (only the service area). Add one if you'd like it in the footer/contact.
- **No social media links** — per the brief (none exist); WhatsApp is the direct-message channel instead.
- **No made-up stats, awards, review scores or "trusted by…" claims.**
