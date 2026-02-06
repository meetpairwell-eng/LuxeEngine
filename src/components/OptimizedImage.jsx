import React from 'react';
import { getOptimizedImageUrl, PROFILES } from '../utils/imageOptimizer';

/**
 * OptimizedImage Component
 * 
 * A replacement for the standard <img> tag that automatically applies 
 * Cloudflare Image Resizing transformations.
 */
const OptimizedImage = ({
    src,
    alt,
    className,
    isHero = false,
    width,
    quality,
    loading = 'lazy',
    ...props
}) => {
    if (!src) return null;

    // For Hero images, we provide a srcset that includes a 2000px version for high-res screens
    if (isHero) {
        // Hero images always use the high-res srcset
        const url1000 = getOptimizedImageUrl(src, PROFILES.STANDARD);
        const url2000 = getOptimizedImageUrl(src, PROFILES.HERO);

        return (
            <img
                src={url1000}
                srcSet={`${url1000} 1000w, ${url2000} 2000w`}
                sizes="(max-width: 1000px) 100vw, 2000px"
                alt={alt}
                className={className}
                loading={props.priority ? 'eager' : loading}
                {...props}
            />
        );
    }

    // For standard listing images, we use the requested defaults
    // width=1000, quality=80, format=auto
    const optimizedUrl = getOptimizedImageUrl(src, {
        width: width || PROFILES.STANDARD.width,
        quality: quality || PROFILES.STANDARD.quality,
        format: 'auto'
    });

    return (
        <img
            src={optimizedUrl}
            alt={alt}
            className={className}
            loading={loading}
            {...props}
        />
    );
};


export default OptimizedImage;
