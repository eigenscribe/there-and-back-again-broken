#!/bin/bash

# Cross-platform sed function - works on both macOS and Linux
sedi() {
    if [[ "$OSTYPE" == "darwin"* ]]; then
        # macOS
        sed -i '' "$@"
    else
        # Linux
        sed -i "$@"
    fi
}

# Build the PreTeXt project
echo "Building PreTeXt project..."
pretext build web

# Copy custom CSS and assets to output directory
echo "Copying custom CSS and assets..."
mkdir -p output/web/external
cp assets/custom-theme.css output/web/external/
cp assets/wisp.jpg output/web/external/
cp assets/logo.png output/web/external/
cp assets/favicon.png output/web/

# Copy graph module files
echo "Copying graph module files..."
mkdir -p output/web/graph
cp graph-module/graph.js output/web/graph/
cp graph-module/graph.css output/web/graph/
cp graph-module/notes-graph.json output/web/graph/
cp assets/graph-toggle.js output/web/graph/
cp assets/d3.min.js output/web/graph/

# Also add override to ALL CSS files including runestone
for rcss in output/web/_static/prefix-*.css output/web/_static/pretext/css/*.css; do
  if [ -f "$rcss" ]; then
    cat >> "$rcss" << 'RUNESTONEFIX'
/* FIX: Override frontmatter/backmatter TOC colors */
.toc-frontmatter.contains-active,
.toc-backmatter.contains-active,
.toc-frontmatter.contains-active .toc-title-box,
.toc-backmatter.contains-active .toc-title-box,
.toc-frontmatter.contains-active .toc-title-box a,
.toc-backmatter.contains-active .toc-title-box a,
.toc-frontmatter.contains-active a.internal,
.toc-backmatter.contains-active a.internal {
  background: linear-gradient(135deg, rgba(20, 181, 255, 0.3), rgba(121, 82, 245, 0.2)) !important;
  background-color: rgba(20, 181, 255, 0.25) !important;
  background-image: linear-gradient(135deg, rgba(20, 181, 255, 0.3), rgba(121, 82, 245, 0.2)) !important;
}
RUNESTONEFIX
  fi
done

# Add override to theme.css directly
echo "Injecting overrides into theme.css..."
cat >> output/web/_static/pretext/css/theme.css << 'CSSOVERRIDE'

/* FINAL OVERRIDE - added by build.sh */
.ptx-toc li.toc-frontmatter.contains-active,
.ptx-toc li.toc-frontmatter.active,
.ptx-toc li.toc-backmatter.contains-active,
.ptx-toc li.toc-backmatter.active,
.ptx-toc li.toc-chapter.contains-active,
.ptx-toc li.toc-item.contains-active,
.ptx-toc li.toc-item.active {
  background: linear-gradient(135deg, rgba(20, 181, 255, 0.22), rgba(121, 82, 245, 0.16)) !important;
  background-color: rgba(20, 181, 255, 0.2) !important;
  border-color: rgba(20, 181, 255, 0.4) !important;
  border-radius: 16px !important;
}
.ptx-toc li.toc-item.contains-active > .toc-title-box,
.ptx-toc li.toc-item.active > .toc-title-box,
.ptx-toc .toc-title-box {
  background: transparent !important;
  background-color: transparent !important;
}
/* CRITICAL: Override anchor element background in frontmatter/backmatter */
.ptx-toc .toc-frontmatter.contains-active .toc-title-box a,
.ptx-toc .toc-frontmatter.contains-active .toc-title-box .internal,
.ptx-toc .toc-frontmatter.active .toc-title-box a,
.ptx-toc .toc-backmatter.contains-active .toc-title-box a,
.ptx-toc .toc-backmatter.contains-active .toc-title-box .internal,
nav.ptx-toc .toc-frontmatter.contains-active .toc-title-box a.internal,
nav.ptx-toc .toc-backmatter.contains-active .toc-title-box a.internal,
.toc-frontmatter.contains-active a.internal,
.toc-backmatter.contains-active a.internal,
.toc-frontmatter.contains-active a,
.toc-backmatter.contains-active a {
  background: transparent !important;
  background-color: transparent !important;
  background-image: none !important;
}
CSSOVERRIDE

# Inject CSS link and favicon into all HTML files - SIMPLIFIED VERSION
echo "Injecting custom CSS and favicon into HTML files..."
for file in output/web/*.html; do
  # Skip if file doesn't exist or is too large (> 2MB)
  if [ ! -f "$file" ] || [ $(stat -f%z "$file" 2>/dev/null || stat -c%s "$file" 2>/dev/null) -gt 2097152 ]; then
    continue
  fi
  
  # Combine all injections into a single sed pass to avoid multiple rewrites
  # Check if already customized (quick check)
  if ! grep -q "custom-theme.css" "$file"; then
    # Create a temporary file with all stylesheet/script injections at once
    sedi 's|</head>|<link rel="stylesheet" type="text/css" href="external/custom-theme.css">\n<link rel="icon" type="image/png" href="favicon.png">\n</head>|' "$file"
  fi
  
  # Inject scripts before closing body tag (single operation)
  if ! grep -q "graph-toggle.js" "$file"; then
    sedi 's|</body>|<script src="graph/d3.min.js"><\/script>\n<script src="graph/graph-toggle.js"><\/script>\n</body>|' "$file"
  fi
done

echo "Build complete! Custom styling and assets applied."
