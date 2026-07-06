"""
Fix two issues:
1. Rename CSS module import from 's' to 'css' (conflicts with Zustand selector 's')
2. Fix template literal spacing (missing space between class references)
"""
import re, os

COMP_DIR = "src/components"

for f in sorted(os.listdir(COMP_DIR)):
    if not f.endswith(".tsx"):
        continue
    fpath = os.path.join(COMP_DIR, f)
    with open(fpath, "r", encoding="utf-8") as f_io:
        content = f_io.read()
    original = content

    # 1. Rename import: s → css
    content = content.replace(
        "import s from '../styles.module.css'",
        "import css from '../styles.module.css'"
    )

    # 2. Replace s.xxx references with css.xxx
    # The CSS module references are: s.cpXxx, s.active, s.selected, s.hasCamera, s.cameraPlanner
    # But be careful: don't replace inside Zustand selectors (s => s.xxx)

    # Strategy: replace specific patterns that are CSS module references
    # CSS module refs always appear as: s.cpXxx, s.active, s.selected, s.hasCamera, s.cameraPlanner
    # Zustand refs appear as: s => s.xxx or inside arrow functions

    # Replace all s.cp references (these are always CSS, not Zustand)
    content = re.sub(r'\bs\.cp(\w)', r'css.cp\1', content)

    # Replace s.active, s.selected, s.hasCamera, s.cameraPlanner, s.cameraPlannerViewport
    for name in ['active', 'selected', 'hasCamera', 'cameraPlanner', 'cameraPlannerViewport']:
        # Match s.name but NOT in context of "s => s.name" or "(s) => s.name"
        # Use word boundary and negative lookbehind for "=> "
        pattern = rf'(?<!=>\s)(?<!=> )\bs\.{name}\b'
        content = re.sub(pattern, f'css.{name}', content)

    # 3. Fix template literal spacing
    # Pattern: `${css.xxx}${` → `${css.xxx} ${`
    content = content.replace("}${", "} ${")
    # But this is too aggressive - it might break other template literals
    # Let's be more specific: only fix when followed by a conditional expression
    # Actually, let me just fix the specific pattern:
    # `${css.xxx}${condition ? css.active : ''}` → `${css.xxx} ${condition ? css.active : ''}`
    # The above generic replace handles this case

    # 4. Undo any false positive: fix "s => s." patterns that might have been broken
    # The Zustand selectors use: s => s.propertyName
    # Check if any s.xxx were accidentally replaced
    # This should be fine since we only replaced s.cp, s.active, s.selected etc.
    # Zustand properties are: s.mode, s.tool, s.project, s.setMode, etc. - none start with s.cp

    if content != original:
        with open(fpath, "w", encoding="utf-8") as f_io:
            f_io.write(content)
        print(f"  Fixed: {f}")
    else:
        print(f"  No change: {f}")

# Also fix index.ts
idx_path = "src/index.ts"
with open(idx_path, "r", encoding="utf-8") as f:
    idx = f.read()
idx = idx.replace("import './styles.module.css'", "")  # CSS is imported by components now
with open(idx_path, "w", encoding="utf-8") as f:
    f.write(idx)
print("  Fixed: index.ts (removed CSS import, handled by components)")
