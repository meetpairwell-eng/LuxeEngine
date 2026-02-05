/**
 * PROPERTY CONFIGURATION: 3711 Lexington Avenue
 * 
 * This is the single source of truth for all property data.
 */

// ============================================
// BASE CONFIGURATION
// ============================================

// R2 Storage Configuration
const R2_BASE_URL = "https://pub-322e1afeb2fc45c38f52428d0a3aca9b.r2.dev";
const FOLDER_NAME = "randall_r/Lexington3711";

// Helper function to build full image URLs
const getUrl = (filename) => `${R2_BASE_URL}/${FOLDER_NAME}/${filename}`;

// ============================================
// PROPERTY INFORMATION
// ============================================

export const propertyInfo = {
    address: "3711 Lexington Avenue",
    city: "Highland Park",
    state: "TX",
    zip: "75205",
    price: "$29,900,000",

    // Property Specifications
    specs: {
        sqft: "20,485",
        lotSize: "1.057 Acres",
        beds: 5,
        baths: 7,
        powder: 6,
        garage: "6-Car",
    },

    // Additional Features (for stats display)
    features: [
        "Natatorium",
        "Commercial Elevator",
        "Fitness Room",
        "Guest Apartment",
    ],

    // Marketing Copy
    tagline: "The Masterwork of Cole Smith",

    // Meta Description for SEO
    metaDescription: "Exquisite 20,485 sq ft estate in Old Highland Park. A masterwork of Classicist Cole Smith featuring a Natatorium, Guest Apartment, and unparalleled craftsmanship.",

    // Full Description
    description: "Sited along serpentine St. Johns Drive and Hackberry Creek, this legacy estate is the final work of master Classicist Cole Smith. The residence exudes stately elegance with commercial-grade structure and design by Sherry Hayslip Interiors. From the two-story Great Room to the near Olympic-sized Natatorium and private guest wing, every detail is engineered for a magnificent living experience on a rare Highland Park acre.",

    // Map Configuration
    map: {
        lat: 32.8258,
        lng: -96.7937
    }
};

// ============================================
// AGENT INFORMATION
// ============================================

import { ralphAgent } from '../agents/ralph';
export const agentInfo = ralphAgent;

// ============================================
// IMAGE CONFIGURATION
// ============================================

export const images = {
    // Hero Section Images
    cover: getUrl("Lexington3711-1.webp"),
    hero: getUrl("Lexington3711-2.webp"),

    // Lifestyle/Hallway Section
    lifestyle: getUrl("Lexington3711-3.webp"),

    // Detail Section Images (4 panels)
    panel1: getUrl("Lexington3711-7.webp"), // Exquisite Living
    panel2: getUrl("Lexington3711-4.webp"), // Masterful Detail
    panel3: getUrl("Lexington3711-22.webp"),  // Serene Grounds
    panel4: getUrl("Lexington3711-10.webp"),  // Cole Smith Legacy

    // Floor Plans (Assuming these might have different names or be numbered)
    floorPlanBackground: getUrl("Lexington3711-9.webp"),
    floorPlan1: getUrl("Lexington3711-fp1.png"),
    floorPlan2: getUrl("Lexington3711-fp2.png")
};

// ============================================
// GALLERY CONFIGURATION
// ============================================

export const galleryConfig = {
    useBulk: true,
    bulkSettings: {
        baseUrl: `${R2_BASE_URL}/${FOLDER_NAME}`,
        filePrefix: "Lexington3711-",
        extension: ".webp",
        count: 40,
        excludeIndices: []
    },

    // Manual Image List (used if useBulk is false)
    manualImages: [
        "Lexington3711-1.webp",
    ].map(getUrl),

    homePageLimit: 20,
    randomize: true
};

// ============================================
// PROPERTY DETAILS SECTIONS
// ============================================

export const detailSections = [
    {
        title: "Exquisite Living",
        imageKey: "panel1",
        features: [
            "Primary wing featuring bed chambers and private living area",
            "Gentleman's study opening to screened balcony with park views",
            "Expansive bath with multiple-head shower and garden tub",
            "Couture closet with rows of wardrobes and curio cabinets",
            "Private elevator from primary closet directly to pool area",
            "Private fitness room and nearby Guest Apartment"
        ]
    },
    {
        title: "Masterful Detail",
        imageKey: "panel2",
        features: [
            "Professional food preparation kitchen and Butler's pantry",
            "Breakfast room and Conservatory with views of Hackberry Creek",
            "Beautiful formal Dining Room surveying the rear grounds",
            "Basement level Pub and Playroom for large scale entertaining",
            "Dual sinks, custom cabinetry, and walk-in pantry",
            "Natural stone and granite countertops throughout"
        ]
    },
    {
        title: "Serene Grounds",
        imageKey: "panel3",
        features: [
            "Sited on a rare 1.057-acre corner lot along Hackberry Creek",
            "Near Olympic-sized Natatorium with dedicated cabana area",
            "Picturesque screened porch with fireplace and creek views",
            "Oversized pool and spa perfect for swim or recreation",
            "6-car garage with porte-cochère and street-to-alley access",
            "Lushly landscaped grounds bordering Highland Park trails"
        ]
    },
    {
        title: "Cole Smith Legacy",
        imageKey: "panel4",
        features: [
            "Designed by master Classicist Cole Smith (Smith-Ekblad & Assoc.)",
            "Consultation by award-winning Sherry Hayslip Interiors",
            "Commercial-grade structure with master-crafted carpentry",
            "Two-story Great Room with brilliantly engineered acoustics",
            "Brilliantly engineered acoustics and hand-carved millwork",
            "Four-floor commercial elevator serving all levels"
        ]
    }
];

// ============================================
// LAYOUT & FEATURES
// ============================================

export const layout = {
    showWelcomeScreen: true, // Enabled for this premium off-market feel
};

// ============================================
// THEME OVERRIDES
// ============================================

export const theme = {
    colors: {
        bg: "#F8F7F3", // Slightly warmer cream for classic luxury
        text: "#1C1C1C",
        textLight: "#6B6B6B",
        accent: "#8B735B", // More muted, sophisticated bronze/brown
        border: "#E8E6E1",
        overlay: "rgba(0, 0, 0, 0.3)"
    },
    fonts: {
        heading: "'Marcellus', serif",
        body: "'Outfit', sans-serif"
    },
    ui: {
        borderRadius: "0px", // Sharper, more architectural corners
        letterSpacing: "0.15em"
    }
};

// ============================================
// LEGACY EXPORT
// ============================================

export const galleryConfig_LEGACY = {
    coverImage: images.cover,
    heroImage: images.hero,
    staticImage: images.hero,
    lifestyleImage: images.lifestyle,
    detailsLiving: images.detailsArchitecture,
    detailsBath: images.detailsPrimary,
    detailsFinishes: images.detailsCulinary,
    detailsOutdoor: images.detailsOutdoor,

    useBulk: galleryConfig.useBulk,
    bulkSettings: galleryConfig.bulkSettings,
    manualImages: galleryConfig.manualImages,

    floorPlanConfig: {
        background: images.floorPlanBackground,
        floor1: images.floorPlan1,
        floor2: images.floorPlan2
    }
};
