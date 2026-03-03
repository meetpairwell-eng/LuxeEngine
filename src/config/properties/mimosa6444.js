/**
 * PROPERTY: 6444 Mimosa Lane, Dallas TX
 * Created via CS Upload Dashboard on 2026-03-03
 */

// ============================================
// BASE CONFIGURATION
// ============================================

const R2_BASE_URL = "https://pub-0a14d2bf83cc482ab589da588a45c6b0.r2.dev";
const AGENT_ID = "hector-meza";
const PROPERTY_SLUG = "mimosa6444";
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
    zip: "",
    price: "$3495000",
    specs: {
        sqft: "5775",
        beds: 5,
        baths: 4.1,
        garage: "",
    },
    map: {
        lat: 32.7767,
        lng: -96.7970
    },
    features: [],
    tagline: "6444 Mimosa Lane",
    description: "",
    metaDescription: ""
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
    showDetails: false,
    showWelcomeScreen: false,
};

// ============================================
// IMAGE CONFIGURATION
// ============================================

export const images = {
    cover: getUrl("mimosa6444-1.webp"),
    hero: getUrl("mimosa6444-2.webp"),
    lifestyle: getUrl("mimosa6444-3.webp"),
    detailsLiving: getUrl("mimosa6444-4.webp"),
    detailsBath: getUrl("mimosa6444-5.webp"),
    detailsFinishes: getUrl("mimosa6444-6.webp"),
    detailsOutdoor: getUrl("mimosa6444-7.webp"),
    detailsLocation: "/images/dallas-skyline.png",
};

// ============================================
// GALLERY CONFIGURATION
// ============================================

export const galleryConfig = {
    useBulk: true,
    bulkSettings: {
        baseUrl: `${R2_BASE_URL}/${FOLDER_PATH}`,
        filePrefix: "mimosa6444-",
        extension: ".webp",
        count: 1,
        excludeIndices: []
    },
    manualImages: [],
    homePageLimit: 30,
    randomize: false
};

// ============================================
// DETAIL SECTIONS
// ============================================

export const detailSections = [];

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
