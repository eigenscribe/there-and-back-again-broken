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
- **PreTeXt Integration**: Mathematical content in PreTeXt XML format rendered with MathJax
- **Component-based Structure**: Modular components for note display, navigation, and graph visualization
- **Styling Strategy**: TailwindCSS 4.x with custom academic design system for readable mathematical content
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
- **Glassmorphic Design**: Custom CSS classes for glass effects with backdrop blur
- **Responsive Design**: TailwindCSS responsive utilities for mobile-first approach
- **Custom Animations**: Gradient text animations and interactive hover effects

### Development Workflow
- **Client Development**: Vite dev server on port 3000 with HMR
- **Backend Development**: Flask development server with CORS for API testing
- **Code Quality**: ESLint configuration with React-specific rules and hooks linting

## External Dependencies

### Frontend Dependencies
- **React 19.1.1**: Core React library for UI components
- **React DOM 19.1.1**: React rendering for web browsers
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
- **Static Assets**: Custom favicon and images served from `/public/assets/`
- **Build Assets**: Compiled CSS and JavaScript served from `/client/dist/`
- **Font System**: System font stack with fallbacks for cross-platform compatibility