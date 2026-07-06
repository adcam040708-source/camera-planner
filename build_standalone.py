"""Build standalone HTML from esbuild output."""
import os

js = open('demo/dist/standalone-react.js', 'r', encoding='utf-8').read()
css = open('demo/dist/standalone-react.css', 'r', encoding='utf-8').read()

html = f"""<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Camera Planner Pro v3 — React Demo</title>
  <style>
    * {{ margin: 0; padding: 0; box-sizing: border-box; }}
    html, body, #root {{ width: 100%; height: 100%; }}
    body {{ background: #0a0a14; }}
  </style>
  <style>
{css}
  </style>
</head>
<body>
  <div id="root"></div>
  <script>
{js}
  </script>
</body>
</html>"""

out = 'demo/camera-planner-v3.html'
with open(out, 'w', encoding='utf-8') as f:
    f.write(html)
size = os.path.getsize(out)
print(f'Wrote {out} ({size/1024:.1f} KB)')
