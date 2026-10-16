from pathlib import Path

html = Path("index.html").read_text(encoding="utf-8")
required = [
    '<title>', 'name="description"', 'rel="canonical"', 'property="og:title"',
    'name="twitter:card"', 'application/ld+json', 'id="products"', 'id="contact"',
    'Chicken Oorugai', 'Karuvadu', 'Uppukandam', 'Karuppatti', 'Panangarkandu'
]
missing = [item for item in required if item not in html]
if missing:
    raise SystemExit("Missing SEO markers: " + ", ".join(missing))
for file_name in ["robots.txt", "sitemap.xml", "manifest.json", "llms.txt", "humans.txt"]:
    if not Path(file_name).exists():
        raise SystemExit(f"Missing {file_name}")
print("SEO, AI discovery and documentation markers are present.")
