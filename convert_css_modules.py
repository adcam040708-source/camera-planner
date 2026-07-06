"""
Generate styles.module.css from styles.css, converting class names to camelCase.
Preserves pseudo-classes/elements but converts real class names including modifiers.
"""
import re, os

SRC = "src"
css_path = os.path.join(SRC, "styles.css")

with open(css_path, "r", encoding="utf-8") as f:
    css_text = f.read()

def to_camel(name):
    parts = name.split("-")
    return parts[0] + "".join(p.capitalize() for p in parts[1:])

# Find all unique class names (after .)
all_classes = sorted(set(re.findall(r'\.([a-zA-Z][\w-]*[\w])', css_text)), key=len, reverse=True)

# Filter: only exclude things that are definitely NOT class names
# In CSS, pseudo-classes use : prefix (e.g. :hover), not . prefix
# So anything after . IS a class name
# But scrollbar pseudo-elements use :: and we might catch partial matches
skip = set()  # Don't skip anything - all . prefixed names are real classes

mapping = {}
for cls in all_classes:
    if cls in skip:
        continue
    camel = to_camel(cls)
    if camel != cls:
        mapping[cls] = camel

print(f"Found {len(all_classes)} unique class names, renaming {len(mapping)}:")
for old, new in sorted(mapping.items()):
    print(f"  .{old} → .{new}")

# Apply replacements (longest first to avoid partial matches)
new_css = css_text
for old in sorted(mapping.keys(), key=len, reverse=True):
    new_css = new_css.replace(f".{old}", f".{mapping[old]}")

out_path = os.path.join(SRC, "styles.module.css")
with open(out_path, "w", encoding="utf-8") as f:
    f.write(new_css)
print(f"\nWrote {out_path} ({len(new_css)} bytes)")

# Verify key classes exist
checks = ['active', 'selected', 'hasCamera', 'cpToolbarBtn', 'cameraPlanner']
for c in checks:
    if f".{c}" in new_css:
        print(f"  ✓ .{c} found")
    else:
        print(f"  ✗ .{c} NOT found")
