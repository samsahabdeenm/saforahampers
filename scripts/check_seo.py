from pathlib import Path
root = Path(__file__).resolve().parents[1]
html = (root / "index.html").read_text(encoding="utf-8")
checks = {
    "title": "<title>Safora Hampers" in html,
    "meta description": 'name="description"' in html,
    "canonical": 'rel="canonical" href="https://saforahampers.store/"' in html,
    "FAQ": 'id="faq"' in html and "FAQ" in html,
    "structured data": 'application/ld+json' in html,
    "mobile viewport": 'name="viewport"' in html,
    "social profile": "instagram.com/safora.hampers" in html,
}
failed = [name for name, ok in checks.items() if not ok]
for name, ok in checks.items():
    print(f"{'PASS' if ok else 'FAIL'}: {name}")
if failed:
    raise SystemExit(1)
