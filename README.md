# UlarSuvai Premium Single Page Website

A production-ready, SEO-first, AI-discoverable single-page website for **UlarSuvai**, a premium South Indian traditional dry food brand.

## Brand Positioning

UlarSuvai means **Ular** (dry / preserved) + **Suvai** (taste / flavor). The website presents the brand as authentic, Tamil heritage-led, family friendly and premium while keeping ordering simple through WhatsApp, phone and email.

## Product Coverage

- **Pickles / Oorugai:** Chicken, Mutton, Beef, Prawn, Squid / Kanava and Fish Pickle.
- **Panai Porul:** Karuppatti / Palm Jaggery and Panangarkandu / Palm Candy.
- **Uppukandam / Dry Meat:** Mutton Uppukandam and Beef Uppukandam.
- **Karuvadu / Dry Fish:** all types of traditional dry fish and dried seafood.

## Technical Features

- Single-page semantic HTML architecture.
- Responsive premium Tamil heritage-inspired UI.
- Accessible navigation, skip link, ARIA labels and semantic sections.
- JSON-LD for Organization, FoodEstablishment, WebSite and FAQPage.
- Open Graph, Twitter Cards, canonical, robots meta, manifest, sitemap, humans.txt and llms.txt.
- Direct conversion CTAs for WhatsApp, phone call and email.

## Local Development

```bash
python3 -m http.server 4173
```

Open `http://localhost:4173`.

## Quality Checks

```bash
python3 scripts/check_links.py
python3 scripts/check_seo.py
```

## Google Business Profile Draft

**Business description:** UlarSuvai is a premium South Indian traditional dry food brand offering authentic Tamil Oorugai pickles, Karuvadu dry fish, Uppukandam dry meat, Karuppatti palm jaggery and Panangarkandu palm candy. Customers can order directly through WhatsApp, phone or email.

**Product description:** Traditional South Indian dry foods including Chicken Pickle, Mutton Pickle, Beef Pickle, Prawn Pickle, Squid / Kanava Pickle, Fish Pickle, Karuvadu, Uppukandam, Karuppatti and Panangarkandu.

## Analytics and Webmaster Setup

Add production verification tags or scripts in `index.html` when account IDs are available for Google Search Console, Google Analytics and Bing Webmaster Tools. The current website is ready for those snippets without structural changes.
