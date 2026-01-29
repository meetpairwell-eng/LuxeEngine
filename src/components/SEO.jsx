import React from 'react';
import { Helmet } from 'react-helmet-async';
import { propertyInfo, agentInfo, images, analytics } from '../config/propertyConfig';

// ... (existing constants)

const SEO = () => {
    // ... (existing schemaData)

    return (
        <Helmet>
            {/* Standard Meta Tags */}
            <title>{PROPERTY_TITLE}</title>
            <meta name="description" content={PROPERTY_DESC} />
            <link rel="canonical" href={PROPERTY_URL} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={PROPERTY_URL} />
            <meta property="og:title" content={PROPERTY_TITLE} />
            <meta property="og:description" content={PROPERTY_DESC} />
            <meta property="og:image" content={PROPERTY_IMAGE} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={PROPERTY_URL} />
            <meta name="twitter:title" content={PROPERTY_TITLE} />
            <meta name="twitter:description" content={PROPERTY_DESC} />
            <meta name="twitter:image" content={PROPERTY_IMAGE} />

            {/* Schema.org Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify(schemaData)}
            </script>

            {/* Analytics Integration */}
            {analytics?.umamiWebsiteId && (
                <script
                    defer
                    src="https://analytics.meetpairwell.com/script.js"
                    data-website-id={analytics.umamiWebsiteId}
                ></script>
            )}
        </Helmet>
    );
};

export default SEO;
