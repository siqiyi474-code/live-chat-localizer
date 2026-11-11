"""Inline siqi/*.js into one self-contained HTML file: dist/live-chat-localizer.html
Usage: python build.py   (no dependencies)"""
import pathlib, re
root = pathlib.Path(__file__).parent
html = (root / "index.html").read_text(encoding="utf-8")
def inline(m):
    src = (root / m.group(1)).read_text(encoding="utf-8")
    return "<script>\n" + src.replace("</script", "<\\/script") + "\n</script>"
html = re.sub(r'<script src="(siqi/[^"]+)"></script>', inline, html)
out = root / "dist" / "live-chat-localizer.html"
out.parent.mkdir(exist_ok=True)
out.write_text(html, encoding="utf-8")
print("wrote", out, len(html.encode()) // 1024, "KB")
