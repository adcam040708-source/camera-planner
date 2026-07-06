"""
Update .tsx components to use CSS Modules import (s.camelCase).
"""
import re, os

SRC = "src"
COMP_DIR = os.path.join(SRC, "components")

def to_camel(name):
    parts = name.split("-")
    return parts[0] + "".join(p.capitalize() for p in parts[1:])

# Build full mapping from styles.css
with open(os.path.join(SRC, "styles.css"), "r", encoding="utf-8") as f:
    css_text = f.read()

all_classes = set(re.findall(r'\.([a-zA-Z][\w-]*[\w])', css_text))
mapping = {}
for cls in all_classes:
    camel = to_camel(cls)
    mapping[cls] = camel  # include ALL, even if same

def resolve(name):
    """Resolve class name to s.camelCase."""
    camel = mapping.get(name, to_camel(name))
    return f"s.{camel}"

def process_file(filepath):
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()
    original = content

    # 1. Add import
    if "styles.module.css" not in content:
        lines = content.split("\n")
        last_import = -1
        for i, line in enumerate(lines):
            if line.startswith("import "):
                last_import = i
        if last_import >= 0:
            lines.insert(last_import + 1, "import s from '../styles.module.css'")
        else:
            lines.insert(0, "import s from '../styles.module.css'")
        content = "\n".join(lines)

    # 2. Simple className="class-a class-b"
    def repl_simple(m):
        val = m.group(1)
        classes = val.strip().split()
        if not classes:
            return m.group(0)
        refs = [resolve(c) for c in classes]
        if len(refs) == 1:
            return f"className={{{refs[0]}}}"
        else:
            return f"className={{[{', '.join(refs)}].join(' ')}}"

    content = re.sub(r'className="([^"]+)"', repl_simple, content)

    # 3. Template literal className={`...`}
    def repl_template(m):
        inner = m.group(1)
        # Split by ${...} preserving delimiters
        segments = re.split(r'(\$\{.*?\})', inner)
        result = []
        for seg in segments:
            if seg.startswith('${') and seg.endswith('}'):
                # Expression segment - process class refs inside
                expr = seg[2:-1]
                # Replace quoted class names: 'active' → s.active
                def repl_quoted(qm):
                    name = qm.group(1)
                    if name in mapping:
                        return resolve(name)
                    return qm.group(0)
                expr = re.sub(r"'([a-zA-Z][\w-]*)'", repl_quoted, expr)
                result.append(f"${{{expr}}}")
            else:
                # Text segment - replace class names
                words = seg.split()
                new_words = []
                for w in words:
                    if w in mapping:
                        new_words.append(f"${{{resolve(w)}}}")
                    else:
                        new_words.append(w)
                result.append(" ".join(new_words))
        return f"className={{`{''.join(result)}`}}"

    content = re.sub(r'className=\{`([^`]+)`\}', repl_template, content)

    # 4. Remove old styles.css import
    content = content.replace("import '../styles.css'\n", "")
    content = content.replace("import './styles.css'\n", "")

    if content != original:
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(content)
        return True
    return False

# Process all .tsx files
for f in sorted(os.listdir(COMP_DIR)):
    if f.endswith(".tsx"):
        fpath = os.path.join(COMP_DIR, f)
        changed = process_file(fpath)
        status = "Updated" if changed else "No change"
        print(f"  {status}: {f}")

# Update index.ts
idx_path = os.path.join(SRC, "index.ts")
with open(idx_path, "r", encoding="utf-8") as f:
    idx = f.read()
idx = idx.replace("import './styles.css'", "import './styles.module.css'")
with open(idx_path, "w", encoding="utf-8") as f:
    f.write(idx)
print("  Updated: index.ts")
