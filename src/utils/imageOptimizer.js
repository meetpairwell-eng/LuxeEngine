/**
 * Cloudflare Image Resizing Utility
 * 
 * This utility handles prefixing R2 image URLs with Cloudflare's /cdn-cgi/image/
 * transformation service to serve optimized versions of images.
 */

const CLOUDFLARE_PREFIX = '/cdn-cgi/image/';

/**
 * Generates an optimized Cloudflare Image Resizing URL.
 * 
 * @param {string} url - The original image URL (typically from R2)
 * @param {Object} options - Transformation options
 * @param {number} [options.width] - Targeted width in pixels
 * @param {number} [options.quality=80] - Image quality (1-100)
 * @param {string} [options.format='auto'] - Output format (auto, webp, avif, etc.)
 * @returns {string} The optimized URL
 */
export const getOptimizedImageUrl = (url, { width, quality = 80, format = 'auto' } = {}) => {
    if (!url) return '';

    // Only apply to external URLs (absolute URLs)
    // If it's already a Cloudflare-prefixed URL, don't double-prefix it
    if (!url.startsWith('http')) return url;
    if (url.includes('/cdn-cgi/image/')) return url;

    // Build transformation parameters
    const params = [];
    if (width) params.push(`width=${width}`);
    if (quality) params.push(`quality=${quality}`);
    if (format) params.push(`format=${format}`);

    // Construct the Cloudflare Resizing URL
    // Format: /cdn-cgi/image/<options>/<source-url>
    return `${CLOUDFLARE_PREFIX}${params.join(',')}/${url}`;
};

/**
 * Common optimization profiles
 */
export const PROFILES = {
    STANDARD: { width: 1000, quality: 80, format: 'auto' },
    HERO: { width: 2000, quality: 80, format: 'auto' },
    THUMBNAIL: { width: 500, quality: 70, format: 'auto' }
};

