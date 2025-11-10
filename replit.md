# Zettelkasten-Dataxis Math Journal

## Overview

This is a Zettelkasten-Dataxis hybrid website for journaling self-study progress in mathematics. The project combines networked note-taking (Zettelkasten method) with PreTeXt-formatted mathematical content. Built with React 19, Vite, TailwindCSS, and Flask backend, it features MathJax for mathematical rendering, interactive graphs for data visualization, and BibTeX integration for citations.

## User Preferences

Preferred communication style: Simple, everyday language.
Content: No AI-generated content except layout and styling. Sample prototype notes include AI warnings.

## System Architecture

### Frontend Architecture
- **React 19 with Vite**: Modern React application with Vite for fast development
- **Zettelkasten Structure**: Networked note-taking with bidirectional links between mathematical concepts
- **Diataxis Organization**: Notes organized into collapsible groups following the Diataxis framework (Prototypes, Tutorials, How-to Guides, Explanations, Reference)
- **PreTeXt Integration**: Mathematical content in PreTeXt XML format rendered with MathJax
- **Component-based Structure**: Modular components for note display, navigation, and graph visualization
- **Styling Strategy**: Custom design system with Aclonica font for headings/UI, Merriweather for body text
- **Interactive Visualizations**: Chart.js for mathematical graphs and data visualization
- **Citation Management**: BibTeX integration for academic citations

### Backend Architecture  
- **Flask Server**: Lightweight Python web server handling both API endpoints and static file serving
- **Hybrid Routing**: Serves React build files while providing API endpoints under `/api/` prefix
- **Static Asset Management**: Handles assets from both public directory and React build output
- **CORS Configuration**: Enabled for seamless frontend-backend communication during development

### Build and Deployment
- **Vite Build Process**: Compiles React application to `/client/dist/` directory
- **Flask Integration**: Backend serves the built React app and handles client-side routing fallbacks
- **Asset Pipeline**: Serves static assets with fallback logic between public assets and build artifacts

### Styling Architecture
- **Design System**: Custom color palette with cyan-to-purple gradient scheme
- **Typography System**: Aclonica font for all headings, sidebar, and UI elements; Merriweather serif for body paragraphs (optimal readability for mathematical content)
- **Tag Styling**: Pill-style tags with 50px border radius, Aclonica font, gradient backgrounds, and hover effects
- **Glassmorphic Design**: Custom CSS classes for glass effects with backdrop blur
- **Responsive Design**: Custom responsive utilities for mobile-first approach
- **Custom Animations**: Gradient text animations and interactive hover effects
- **Collapsible Groups**: Smooth expand/collapse transitions for note category organization

### Development Workflow
- **Client Development**: Vite dev server on port 3000 with HMR
- **Backend Development**: Flask development server with CORS for API testing
- **Code Quality**: ESLint configuration with React-specific rules and hooks linting

## External Dependencies

### Frontend Dependencies
- **React 19.1.1**: Core React library for UI components
- **React DOM 19.1.1**: React rendering for web browsers
- **React Router DOM**: Client-side routing for navigation between pages
- **React Force Graph 2D**: Interactive force-directed graph visualization for knowledge networks
- **Chart.js**: Data visualization library for mathematical graphs
- **React-ChartJS-2**: React wrapper for Chart.js integration
- **Vite 7.1.2**: Build tool and development server
- **TailwindCSS 4.1.13**: Utility-first CSS framework with PostCSS integration
- **Autoprefixer**: CSS vendor prefixing for browser compatibility

### Backend Dependencies
- **Flask**: Python web framework for API and static file serving
- **Flask-CORS**: Cross-origin resource sharing for frontend integration
- **Werkzeug**: WSGI utility library for HTTP exception handling

### Development Tools
- **ESLint 9.33.0**: JavaScript/React code linting with custom rules
- **PostCSS**: CSS processing pipeline for TailwindCSS integration
- **Vite Plugins**: React plugin for JSX processing and fast refresh

### Asset Management
- **Custom Assets**: Dragon logo, triquetra favicon, wisp background with glowing orbs, and orb footer decoration
- **Static Assets**: Served from `/client/public/assets/` during development and `/public/assets/` in production
- **Build Assets**: Compiled CSS and JavaScript served from `/client/dist/`
- **Font System**: Aclonica for headings/UI, Merriweather for body text, Fira Code for code blocks

## Recent Changes (Nov 10, 2025)

### Tag System Enhancement
- Implemented pill-style tags with 50px border radius matching reference design
- Updated all tags to use Aclonica font for visual consistency
- Added gradient backgrounds and hover effects to tags throughout the application
- Sidebar tags reduced to minimal size (0.55rem) for clean, compact appearance
- Tags now have smooth transitions and subtle shadow effects

### Diataxis Note Grouping System
- Implemented collapsible note groups in sidebar following Diataxis framework
- Five category groups: Prototypes, Tutorials, How-to Guides, Explanations, Reference
- All groups show count including zeros for transparency (e.g., "PROTOTYPES (4)", "TUTORIALS (0)")
- All groups start collapsed by default for clean initial view
- Groups visually grouped with subtle background containers
- Tighter spacing between notes for cohesive appearance
- Empty groups show "No notes yet" placeholder to indicate available categories
- All groups expand/collapse independently with smooth animations
- Current sample notes categorized under "Prototypes" group

### Note Metadata Refinement
- Reorganized note header: title first, then tags (left) and ID (right)
- Note ID badge with magical purple glow effect and square corners for vintage indexing aesthetic
- ID displays as compact digital-style badge with subtle neon effect
- Tags positioned below title for better visual hierarchy
- Reduced metadata size for cleaner content presentation

### Linked Notes Enhancement
- Linked notes now display note titles instead of IDs for better readability
- Redesigned linked note buttons with subtle, minimal styling
- Buttons use muted colors and only highlight on hover
- Smooth horizontal slide animation on hover
- Changed from monospace to body font for natural reading

### User Assets Integration
- Integrated custom dragon logo in header
- Set triquetra knot as browser favicon
- Applied mystical wisp background with glowing cyan orbs
- Added orb decoration to footer with soft glow effect

### Knowledge Graph Visualization
- Implemented interactive knowledge graph page to visualize note network connections
- Physics-based force-directed graph shows all notes as nodes with bidirectional links as edges
- Nodes color-coded by Diataxis category (purple for prototypes, with distinct colors for other categories)
- Node sizes reflect connection count - more linked notes appear larger
- Custom canvas rendering with Aclonica font labels and glowing effects matching site aesthetics
- Click-to-navigate functionality - clicking any node navigates to that note in the main view
- Header navigation with "Notes" and "Graph" links for seamless page switching
- Legend showing category color mappings for easy interpretation
- Glassmorphic container with backdrop blur maintains visual consistency with rest of app
- Graph auto-zooms to fit all nodes on load for optimal initial view
- Responsive design with mobile-optimized layouts