import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

// Helper to extract property info for SEO
function getPropertySEOInfo() {
  const activeId = process.env.VITE_PROPERTY_ID || 'lobello5610';
  const configPath = path.resolve(`./src/config/properties/${activeId}.js`);

  if (!fs.existsSync(configPath)) return null;

  const content = fs.readFileSync(configPath, 'utf-8');

  // Extract fields using Regex (safe for build-time)
  const getString = (regex) => {
    const match = content.match(regex);
    return match ? match[1] : '';
  };

  const address = getString(/address:\s*["'](.*?)["']/);
  const tagline = getString(/tagline:\s*["'](.*?)["']/);
  const desc = getString(/metaDescription:\s*["'](.*?)["']/);
  const r2Base = getString(/const R2_BASE_URL\s*=\s*["'](.*?)["']/);
  const folder = getString(/const FOLDER_NAME\s*=\s*["'](.*?)["']/);
  const coverFile = getString(/cover:\s*getUrl\(["'](.*?)["']\)/);
  const shareFile = getString(/share:\s*getUrl\(["'](.*?)["']\)/) || getString(/share:\s*["'](.*?)["']/);
  const heroFile = getString(/hero:\s*getUrl\(["'](.*?)["']\)/);

  const selectedImage = shareFile || coverFile || heroFile;
  const imageUrl = selectedImage
    ? (selectedImage.startsWith('http') ? selectedImage : `${r2Base}/${folder}/${selectedImage}`)
    : '/vite.svg';

  return {
    title: `${address} | ${tagline}`,
    description: desc,
    image: imageUrl,
    url: `https://www.${address.toLowerCase().replace(/\s+/g, '')}.com`
  };
}

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'html-transform',
      transformIndexHtml(html) {
        const info = getPropertySEOInfo();
        if (!info) return html;

        return html
          .replace(/%PROPERTY_TITLE%/g, info.title)
          .replace(/%PROPERTY_DESCRIPTION%/g, info.description)
          .replace(/%PROPERTY_IMAGE%/g, info.image)
          .replace(/%PROPERTY_URL%/g, info.url);
      }
    }
  ],
  server: {
    host: true
  },
  preview: {
    host: true
  }
})
