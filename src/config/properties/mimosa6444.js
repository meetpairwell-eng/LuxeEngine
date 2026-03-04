/**
 * PROPERTY: 6444 Mimosa Lane, Dallas TX
 * Created via CS Upload Dashboard on 2026-03-03
 */

// ============================================
// BASE CONFIGURATION
// ============================================

const R2_BASE_URL = "https://pub-0a14d2bf83cc482ab589da588a45c6b0.r2.dev";
const AGENT_ID = "hector-meza";
const PROPERTY_SLUG = "6444-mimosa-lane";
const FOLDER_PATH = `agents/${AGENT_ID}/properties/${PROPERTY_SLUG}`;

const getUrl = (filename) => `${R2_BASE_URL}/${FOLDER_PATH}/${filename}`;
const getGlobalUrl = (path) => `${R2_BASE_URL}/${path}`;

// ============================================
// PROPERTY INFORMATION
// ============================================

export const propertyInfo = {
    address: "6444 Mimosa Lane",
    city: "Dallas",
    state: "TX",
    zip: "75230",
    price: "$3495000",
    specs: {
        sqft: "5774",
        beds: 5,
        baths: 4.1,
        garage: "3",
    },
    map: {
        lat: 32.7767,
        lng: -96.7970
    },
    features: [
        "Chef's kitchen with commercial-grade appliances",
        "Built-in coffee maker, wet bar & butler's pantry",
        "Four wood-burning fireplaces",
        "Private office with coffered ceiling",
        "Detached flex space (610 sq ft) — heated, cooled & separate electrical panel",
        "Pool & spa with new tile and metallic fleck finish",
        "Mosquito misting system",
        "3-car attached garage",
        "Primary bath fully renovated (2024–2025)",
        "Hardwood floors refinished throughout",
        "0.43-acre interior lot (125 × 150)",
    ],
    tagline: "Offered Quietly. Shared Selectively.",
    description: "This thoughtfully designed Preston Hollow residence blends refined living with everyday functionality. Positioned on a 0.43-acre interior lot, the home offers privacy, scale, and an exceptional layout suited for both family living and entertaining. The chef's kitchen is equipped with commercial-grade appliances, built-in coffee maker, wet bar, and butler's pantry. Four wood-burning fireplaces anchor multiple living spaces throughout. The five-bedroom floor plan includes a private office with coffered ceiling and a detached flex structure with full climate control and dedicated electrical panel. Outdoor amenities include a pool and spa, landscaped grounds, and mosquito misting system.",
    metaDescription: "Private luxury offering in Preston Hollow — 5 bed, 4.5 bath, 5,774 sq ft on 0.43 acres. Offered at $3,495,000."
};

// ============================================
// AGENT INFORMATION
// ============================================

import { hectorMezaAgent } from '../agents/hector-meza';
export const agentInfo = hectorMezaAgent;

// ============================================
// LAYOUT
// ============================================

export const layout = {
    showFloorPlans: false,
    showGallery: true,
    showDetails: true,
    showWelcomeScreen: false,
};

// ============================================
// IMAGE CONFIGURATION
// ============================================

export const images = {
    cover: getUrl("6444-mimosa-lane-1.webp"),
    hero: getUrl("6444-mimosa-lane-2.webp"),
    lifestyle: getUrl("6444-mimosa-lane-3.webp"),
    detailsLiving: getUrl("6444-mimosa-lane-4.webp"),
    detailsBath: getUrl("6444-mimosa-lane-5.webp"),
    detailsFinishes: getUrl("6444-mimosa-lane-6.webp"),
    detailsOutdoor: getUrl("6444-mimosa-lane-7.webp"),
    detailsLocation: "/images/dallas-skyline.png",
};

// ============================================
// GALLERY CONFIGURATION
// ============================================

export const galleryConfig = {
    useBulk: true,
    bulkSettings: {
        baseUrl: `${R2_BASE_URL}/${FOLDER_PATH}`,
        filePrefix: "6444-mimosa-lane-",
        extension: ".webp",
        count: 47,
        excludeIndices: []
    },
    manualImages: [],
    homePageLimit: 30,
    randomize: false
};

// ============================================
// DETAIL SECTIONS
// ============================================

export const detailSections = [
    {
        title: "Living & Entertaining",
        imageKey: "detailsLiving",
        features: [
            "Three living areas — 20×15, 22×16, and 18×16",
            "Four wood-burning fireplaces throughout",
            "Chef's kitchen with commercial-grade appliances and butler's pantry",
            "Built-in coffee maker, wet bar, and wine refrigeration",
            "Game room (24×15) and private office with coffered ceiling",
            "Detached flex space — 610 sq ft, heated & cooled, separate electrical panel",
        ]
    },
    {
        title: "Primary Suite & Baths",
        imageKey: "detailsBath",
        features: [
            "Primary suite (20×16) with fully renovated bath (2024–2025)",
            "New custom cabinetry, soaking tub, walk-in shower, and designer finishes",
            "Upstairs Jack-and-Jill bath renovated with new tub, fixtures, and surround",
            "Guest/pool bath updated with refreshed fixtures and finishes",
            "5 bedrooms, 4 full baths, 1 half bath",
        ]
    },
    {
        title: "Exquisite Finishes",
        imageKey: "detailsFinishes",
        features: [
            "Hardwood flooring refinished and refreshed throughout — upstairs and downstairs",
            "Entire interior professionally repainted",
            "Designer lighting installed throughout including added recessed lighting",
            "Designer cabinet hardware installed throughout",
            "All fireplace surrounds updated and refinished",
            "Private office in monochromatic palette with custom stained coffered ceiling",
        ]
    },
    {
        title: "Outdoor Living",
        imageKey: "detailsOutdoor",
        features: [
            "Pool and spa with new tile, metallic fleck finish, and updated bar seating",
            "Replaced pool mechanical equipment",
            "Mosquito misting system",
            "New landscaping added to front and rear yards",
            "0.43-acre interior lot (125 × 150) in Preston Hollow",
            "3-car attached garage with workshop and workbench",
        ]
    },
];

// ============================================
// THEME
// ============================================

export const theme = {
    colors: {
        bg: "#FCFCFC",
        text: "#1A1A1A",
        textLight: "#666666",
        accent: "#C7A17A",
        border: "#E5E5E5",
        overlay: "rgba(0, 0, 0, 0.4)"
    },
    fonts: {
        heading: "'Marcellus', serif",
        body: "'Outfit', sans-serif"
    },
    ui: {
        borderRadius: "0px",
        buttonPadding: "1rem 2.5rem",
        letterSpacing: "0.2em",
        heroTextAlign: "center",
        heroTextTop: "48%"
    }
};

// ============================================
// ANALYTICS
// ============================================

export const analytics = {
    umamiWebsiteId: ""
};

export const imageOptimization = {
    enabled: true
};

// ============================================
// LEGACY EXPORT
// ============================================

export const galleryConfig_LEGACY = {
    coverImage: images.cover,
    heroImage: images.hero,
    staticImage: images.hero,
    lifestyleImage: images.lifestyle,
    detailsLiving: images.detailsLiving,
    detailsBath: images.detailsBath,
    detailsFinishes: images.detailsFinishes,
    detailsOutdoor: images.detailsOutdoor,
    useBulk: galleryConfig.useBulk,
    bulkSettings: galleryConfig.bulkSettings,
    manualImages: galleryConfig.manualImages,
    floorPlanConfig: {
        background: images.cover,
        floor1: images.cover,
        floor2: images.cover
    }
};
