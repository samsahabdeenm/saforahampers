from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlparse

class LinkParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.refs = []
    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        for key in ("href", "src"):
            if key in attrs:
                self.refs.append(attrs[key])

root = Path(__file__).resolve().parents[1]
parser = LinkParser()
parser.feed((root / "index.html").read_text(encoding="utf-8"))
missing = []
for ref in parser.refs:
    if ref.startswith(("http://", "https://", "mailto:", "tel:", "#")):
        continue
    path = urlparse(ref).path
    if path.startswith("/"):
        path = path[1:]
    if path and not (root / path).exists():
        missing.append(ref)
if missing:
    raise SystemExit("Missing local references: " + ", ".join(missing))
print(f"Checked {len(parser.refs)} references; all local assets exist.")
