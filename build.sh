#!/bin/bash

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

# Inject CSS link and favicon into all HTML files
echo "Injecting custom CSS and favicon into HTML files..."
for file in output/web/*.html; do
  # Check if the file already has the custom CSS link
  if ! grep -q "custom-theme.css" "$file"; then
    # Insert the link tag after the existing CSS links in the <head>
    sed -i 's|</head>|<link rel="stylesheet" type="text/css" href="external/custom-theme.css">\n</head>|' "$file"
  fi
  
  # Check if the file already has the favicon
  if ! grep -q "favicon.png" "$file"; then
    # Insert the favicon link in the <head>
    sed -i 's|</head>|<link rel="icon" type="image/png" href="favicon.png">\n</head>|' "$file"
  fi
done

echo "Build complete! Custom styling and assets applied."
