# Safora Hampers

A responsive brand and enquiry website for Safora Hampers, a gifting brand based in Chennai.

## Brand direction
- Royal purple, white and restrained gold accents.
- Premium editorial typography and mobile-first layouts.
- Gifting collections, custom creations, corporate gifting and bulk-order enquiry.
- No product prices are published; pricing is handled through enquiries.
- Instagram: https://www.instagram.com/safora.hampers/

## Pages and structure
- `index.html` — brand homepage, collections, corporate gifting, enquiry and FAQ.
- `privacy.html` — privacy notice.
- `terms.html` — terms and conditions.
- `style.css` — responsive design system.
- `script.js` — accessible mobile navigation and enquiry preparation.
- `assets/images/brand/` — approved brand assets.
- `assets/images/products/` — original product photography, grouped by collection.
- `llms.txt`, `robots.txt`, `sitemap.xml`, structured data and social metadata support discovery.

## Product photography
Only original, client-approved photography should be added to `assets/images/products/`. Do not use generated or substitute product photos. Add a descriptive filename and approved product title, category and alt text for every photo before publishing the catalogue.

## Run locally
This is a static website. Run any local static server from the repository root, for example:
`python3 -m http.server 4173`

## Deployment
The repository is configured for the custom domain in `CNAME`. Confirm DNS and HTTPS settings in GitHub Pages after deployment.

## Contact handling
The enquiry form prepares a message for the official Instagram conversation. No server-side storage or third-party form backend is configured.
