# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **multi-property luxury real estate listing engine** built with React + Vite. It's a config-driven template that powers hundreds of individual property domains from a single codebase. Each property website is generated from a configuration file, allowing new listings to be created without touching the core code.

**Key Architecture Principle**: One engine, many configs. Update the core once, and every property site inherits the change.

## Development Commands

```bash
# Start development server (defaults to lobello5610)
npm run dev

# Start dev server for a specific property
VITE_PROPERTY_ID=brickellia5168 npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## Project Architecture

### Config-Driven System

The entire system is driven by `VITE_PROPERTY_ID` environment variable:

1. **Property Selection**: `src/config/propertyConfig.js` acts as the "switchboard"
   - Imports all property configs from `src/config/properties/`
   - Uses `VITE_PROPERTY_ID` to select active property
   - Exports the active config for use throughout the app

2. **Property Config Structure** (`src/config/properties/*.js`):
   - `propertyInfo` - address, price, specs, map coordinates, SEO metadata
   - `agentInfo` - imported from shared `src/config/agents/` directory
   - `images` - cover, hero, gallery images (uses R2_BASE_URL helper)
   - `detailSections` - narrative content sections
   - `theme` - colors, fonts, UI overrides (applied via CSS variables in App.jsx)
   - `layout` - feature toggles (e.g., `showWelcomeScreen`, `showFloorPlans`)
   - `galleryConfig` - gallery image configuration
   - `imageOptimization` - Cloudflare optimization settings

3. **Theme System**:
   - Global styles in `src/index.css` define CSS variables
   - Each property can override via `theme` object in config
   - Property-specific CSS can be added to `src/styles/properties/{propertyId}.css`
   - CSS is dynamically loaded in `App.jsx` based on `activeId`

### Image Optimization

- **Storage**: Cloudflare R2 bucket at `https://pub-0a14d2bf83cc482ab589da588a45c6b0.r2.dev`
- **Optimization**: Cloudflare Image Resizing via `/cdn-cgi/image/` prefix (see `src/utils/imageOptimizer.js`)
- **Profiles**: HERO, GALLERY, THUMBNAIL profiles defined in imageOptimizer
- **Opt-out**: Set `imageOptimization.enabled = false` in property config to disable

### SEO & Meta Tags

- `vite.config.js` includes custom plugin that injects SEO data at build time
- Extracts property data using regex from config files
- Replaces placeholders in `index.html`: `%PROPERTY_TITLE%`, `%PROPERTY_DESCRIPTION%`, etc.
- `src/components/SEO.jsx` handles runtime meta tags using react-helmet-async

### Directory Structure

```
src/
├── config/
│   ├── properties/        # Property configs (one file per listing)
│   ├── agents/           # Shared agent information
│   └── propertyConfig.js # Central switchboard
├── components/           # Reusable UI components
├── pages/               # Route pages (Home, FullGallery, PrivacyPolicy)
├── styles/
│   └── properties/      # Property-specific CSS overrides
└── utils/               # Utilities (imageOptimizer, etc.)
```

## Adding a New Property

**Full guide**: See `ADDING_NEW_PROPERTY.md`

Quick steps:
1. Create config file in `src/config/properties/{propertyId}.js`
2. Register in `src/config/propertyConfig.js` by importing and adding to `properties` object
3. (Optional) Add custom CSS in `src/styles/properties/{propertyId}.css`
4. Test locally: `VITE_PROPERTY_ID={propertyId} npm run dev`
5. Deploy to Dokploy with `VITE_PROPERTY_ID` environment variable

## Deployment

**Platform**: Dokploy (VPS deployment tool) - see `DEPLOYMENT_INFO.md`

Each property is deployed as a separate service:
- All services point to the same GitHub repository
- Each service has its own `VITE_PROPERTY_ID` environment variable
- Each service has its own custom domain
- Start command: `npm run preview -- --port 3000 --host`

**Important**: Cloudflare SSL must be set to "Full" or "Full (Strict)" to avoid redirect loops.

## Key Files to Understand

- `src/App.jsx` - Main app component, handles theme injection, welcome screen, routing
- `src/config/propertyConfig.js` - Property selection logic
- `vite.config.js` - Build-time SEO injection plugin
- `src/components/SEO.jsx` - Runtime meta tag management
- `src/utils/imageOptimizer.js` - Cloudflare Image Resizing integration

## Code Conventions

- Property IDs should be lowercase with numbers (e.g., `lobello5610`, `brickellia5168`)
- Agent configs are shared across properties and live in `src/config/agents/`
- Images must use the `getUrl()` or `getGlobalUrl()` helpers in property configs
- Theme overrides are applied via CSS variables at runtime in `App.jsx`
- Property-specific styles use scoped class `.property-{propertyId}`

## Important Notes

- **DO NOT** modify core components for property-specific needs - use theme overrides or property-specific CSS instead
- **DO NOT** hard-code property data in components - always import from `propertyConfig`
- **DO** use the template.js as a starting point for new properties
- **DO** test with multiple property IDs to ensure changes work across all sites
