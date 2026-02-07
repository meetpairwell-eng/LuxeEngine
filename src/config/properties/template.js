/**
 * NEW PROPERTY TEMPLATE
 * 
 * Copy this file to create a new property listing.
 * Search for "FILL_ME" to find all fields that require data.
 */

// 1. Basic Property Information
export const propertyInfo = {
    address: "1234 Template Avenue",
    city: "City Name",
    state: "TX",
    zip: "00000",
    price: "$5,000,000",

    specs: {
        sqft: "5,000",
        lotSize: "0.50 Acre",
        beds: 5,
        baths: 5,
        powder: 1,
        garage: "3-Car",
    },

    features: ["Feature One", "Feature Two", "Feature Three"],
    tagline: "A Stunning Architectural Masterpiece Awaiting Your Vision",
    metaDescription: "This is a placeholder description for your new property listing."
};

// 2. Real Estate Agent Contact Info
import { coleAgent } from '../agents/cole';
export const agentInfo = coleAgent;


// 3. Media Assets (Using Lobello images as placeholders)
const R2_BASE_URL = "https://pub-0a14d2bf83cc482ab589da588a45c6b0.r2.dev";
const FOLDER_NAME = "5610Lobello";

const getUrl = (filename) => `${R2_BASE_URL}/${FOLDER_NAME}/${filename}`;

export const images = {
    cover: getUrl("5610Lobello-34.webp"),
    hero: getUrl("5610Lobello-5.webp"),
    lifestyle: getUrl("5610Lobello-11.webp"),

    detailsLiving: getUrl("5610Lobello-10.webp"),
    detailsBath: getUrl("5610Lobello-25.webp"),
    detailsFinishes: getUrl("5610Lobello-17.webp"),
    detailsOutdoor: getUrl("5610Lobello-30.webp"),

    floorPlanBackground: getUrl("5610Lobello-37.webp"),
    floorPlan1: getUrl("5610LobelloFP.pdf"),
    floorPlan2: getUrl("5610LobelloFP.pdf"),
};

// 4. Component Visibility & Layout
export const layout = {
    showDetails: true,
    showGallery: true,
    showFloorPlans: true,
};

// 5. Theme & Branding (Blueprint/Draft Theme)
export const theme = {
    colors: {
        bg: "#F0F4F8",          // Very light blue "Blueprint" vibe
        text: "#102A43",        // Deep Navy text
        textLight: "#486581",   // Slate Gray
        accent: "#243B53",      // Strong Navy accent
        border: "#D9E2EC",      // Blueprint grid lines vibe
        overlay: "rgba(16, 42, 67, 0.4)"
    },
    fonts: {
        heading: "'Marcellus', serif",
        body: "'Outfit', sans-serif"
    },
    ui: {
        borderRadius: "4px",
        buttonPadding: "1rem 2.5rem",
        letterSpacing: "0.2em",
        heroTextAlign: "center",
        heroTextTop: "35%"
    }
};

// 6. Narrative Content Sections
export const detailSections = [
    {
        title: "Main Living Area",
        imageKey: "detailsLiving",
        features: ["Describe the open floor plan", "Mention ceiling heights", "Highlight natural light"]
    },
    {
        title: "Chef's Kitchen",
        imageKey: "detailsFinishes",
        features: ["Mention premium appliances", "Describe the island/prep space", "Custom cabinetry details"]
    },
    {
        title: "Primary Sanctuary",
        imageKey: "detailsBath",
        features: ["Spa-like bathroom features", "Walk-in closet description", "Private terrace access"]
    },
    {
        title: "Outdoor Oasis",
        imageKey: "detailsOutdoor",
        features: ["Pool and landscaping details", "Outdoor kitchen info", "Entertaining space capacity"]
    }
];

// 7. Gallery Settings
export const galleryConfig = {
    useBulk: true,
    bulkSettings: {
        baseUrl: `${R2_BASE_URL}/${FOLDER_NAME}`,
        filePrefix: "5610Lobello-",
        extension: ".webp",
        count: 10,
        excludeIndices: []
    },
    homePageLimit: 5,
    randomize: false
};

export const imageOptimization = {
    enabled: false // Disabled by default for new listings
};

// Legacy Export (DO NOT REMOVE)
export const galleryConfig_LEGACY = {
    coverImage: images.cover,
    heroImage: images.hero,
    lifestyleImage: images.lifestyle,
    useBulk: galleryConfig.useBulk,
    bulkSettings: galleryConfig.bulkSettings,
    floorPlanConfig: { background: images.floorPlanBackground, floor1: images.floorPlan1, floor2: images.floorPlan2 }
};
