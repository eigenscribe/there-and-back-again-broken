#!/bin/bash

# Build the PreTeXt project
echo "Building PreTeXt project..."
pretext build web

# Copy custom CSS to output directory
echo "Copying custom CSS..."
mkdir -p output/web/external
cp assets/custom-theme.css output/web/external/

# Inject CSS link into all HTML files
echo "Injecting custom CSS into HTML files..."
for file in output/web/*.html; do
  # Check if the file already has the custom CSS link
  if ! grep -q "custom-theme.css" "$file"; then
    # Insert the link tag after the existing CSS links in the <head>
    sed -i 's|</head>|<link rel="stylesheet" type="text/css" href="external/custom-theme.css">\n</head>|' "$file"
  fi
done

echo "Build complete! Custom styling applied."
