# Premium Real Estate Listing Engine

This is a high-performance, config-driven template designed for luxury real estate property listings. It is built using **React + Vite** and optimized for scalability across hundreds of individual property domains.

## 🚀 Quick Links
- **[How to add a new property](./ADDING_NEW_PROPERTY.md)** - Start here to add a new listing.
- **[Multi-Property Strategy](./multi_property_analysis.md)** - Analysis of cost and architecture at scale.

## 🛠 Features
- **Config-Driven:** Add new listings by creating a single `.js` file. No coding required for new properties.
- **Theme Overrides:** Every property can have its own colors, fonts, and layout vibes.
- **Dynamic SEO:** Schema.org and Meta tags are automatically generated per listing.
- **R2 Optimized:** Fast delivery of 4K images and PDF floor plans via Cloudflare R2.
- **Single Engine:** Update the core code once, and every listing gets the update.

## 💻 Local Development

### View Default Listing (Lobello)
```bash
npm run dev
```

### View a Specific Listing
```bash
VITE_PROPERTY_ID=test-id npm run dev
```

## 🏗 Deployment
Deploy to **Dokploy** or any VPS using Docker. Each listing is a separate service connecting to the same repository, differentiated by the `VITE_PROPERTY_ID` environment variable.

---
*Built for Pairwell Agents*
