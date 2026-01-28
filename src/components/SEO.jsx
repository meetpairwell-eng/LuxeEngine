import React from 'react';
import { Helmet } from 'react-helmet-async';
import { propertyInfo, agentInfo, images } from '../config/propertyConfig';

// Constants
const PROPERTY_TITLE = `${propertyInfo.address} | ${propertyInfo.tagline}`;
const PROPERTY_DESC = propertyInfo.metaDescription;
const PROPERTY_URL = `https://www.${propertyInfo.address.toLowerCase().replace(/\s+/g, '')}.com`;
const PROPERTY_PRICE = propertyInfo.price.replace(/[^0-9]/g, '');
const PROPERTY_CURRENCY = "USD";
const PROPERTY_IMAGE = images.hero;

const SEO = () => {
    // Construct Structured Data (JSON-LD)
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "SingleFamilyResidence",
        "name": PROPERTY_TITLE,
        "description": PROPERTY_DESC,
        "numberOfRooms": 15,
        "occupancy": {
            "@type": "QuantitativeValue",
            "value": 5,
            "unitCode": "ROM" // Bedrooms
        },
        "floorSize": {
            "@type": "QuantitativeValue",
            "value": parseInt(propertyInfo.specs.sqft.replace(/,/g, '')),
            "unitCode": "FTK"
        },
        "numberOfBedrooms": propertyInfo.specs.beds,
        "numberOfBathroomsTotal": propertyInfo.specs.baths,
        "address": {
            "@type": "PostalAddress",
            "streetAddress": propertyInfo.address,
            "addressLocality": propertyInfo.city,
            "addressRegion": propertyInfo.state,
            "postalCode": propertyInfo.zip,
            "addressCountry": "US"
        },
        "url": PROPERTY_URL,
        "image": [
            PROPERTY_IMAGE,
        ],
        "offers": {
            "@type": "Offer",
            "price": PROPERTY_PRICE,
            "priceCurrency": PROPERTY_CURRENCY,
            "availability": "https://schema.org/InStock",
            "url": PROPERTY_URL
        },
        "additionalProperty": [
            {
                "@type": "PropertyValue",
                "name": "Garage Spaces",
                "value": propertyInfo.specs.garage
            },
            {
                "@type": "PropertyValue",
                "name": "Lot Size",
                "value": propertyInfo.specs.lotSize
            }
        ],
        "agent": {
            "@type": "Person",
            "name": agentInfo.name,
            "jobTitle": "Real Estate Agent",
            "telephone": agentInfo.phone,
            "email": agentInfo.email,
            "worksFor": {
                "@type": "RealEstateAgent",
                "name": agentInfo.brokerage
            }
        }
    };

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
        </Helmet>
    );
};

export default SEO;
