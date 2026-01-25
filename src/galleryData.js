/**
 * GALLERY CONFIGURATION
 */

// --- 1. SETUP YOUR R2 INFO HERE ---
const R2_BASE_URL = "https://pub-0a14d2bf83cc482ab589da588a45c6b0.r2.dev";
const FOLDER_NAME = "5610Lobello";

// Helper function to build the full URL (Don't touch this)
const getUrl = (filename) => `${R2_BASE_URL}/${FOLDER_NAME}/${filename}`;


export const galleryConfig = {

    // --- 2. SINGLE IMAGES (For Hero & Static Sections) ---
    // "coverImage" -> The FIRST image you see (before scrolling)
    coverImage: getUrl("5610Lobello-34.webp"),

    // "heroImage" -> The SECOND image (revealed after scrolling)
    heroImage: getUrl("5610Lobello-5.webp"),
    staticImage: getUrl("5610Lobello-4.webp"),
    // --- DETAILED SECTIONS IMAGES ---
    detailsLiving: getUrl("5610Lobello-10.webp"), // Kitchen/Living area
    detailsBath: getUrl("5610Lobello-25.webp"),   // Primary Bath
    detailsFinishes: getUrl("5610Lobello-17.webp"), // Interior/Hallway details
    detailsOutdoor: getUrl("5610Lobello-30.webp"),   // Pool/Exterior

    // New Fullscreen Section
    lifestyleImage: getUrl("5610Lobello-11.webp"),

    // --- 3. GALLERY LIST ---
    // Just list your filenames below. The code will handle the R2 link for you.
    manualImages: [
        "5610Lobello-5.webp",
        "5610Lobello-2.webp",
        "5610Lobello-3.webp",
        "5610Lobello-4.webp",
        "5610Lobello-5.webp",

        // Add more images here:
        // "5610Lobello-6.webp",
    ].map(getUrl), // This magical line converts them all to full URLs

    // (Ignore this, used for fallback logic)
    useBulk: false,
    bulkSettings: {}
};
