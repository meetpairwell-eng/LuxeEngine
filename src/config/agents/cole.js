/**
 * AGENT CONFIGURATION: COLE SWEARINGEN
 */

const R2_BASE_URL = "https://pub-0a14d2bf83cc482ab589da588a45c6b0.r2.dev";
const getGlobalUrl = (path) => `${R2_BASE_URL}/${path}`;

export const coleAgent = {
    name: "Cole Swearingen",
    phone: "972.971.9586",
    email: "cole.swearingen@compass.com",
    brokerage: "COMPASS",
    brokerageLogo: getGlobalUrl("main-page/compass-logo.webp"),
    officePhone: "(214) 814-8100",
    address: "5960 Berkshire Ln Ste 700, Dallas TX 75225",
    headshot: getGlobalUrl("cole-swearingen-headshot.webp"),
    socialMedia: {
        facebook: "https://www.facebook.com/cole.swearingen.35/",
        instagram: "https://www.instagram.com/coleswear/?hl=en"
    },
    // Brokerage Docs URLs
    docs: {
        consumerProtection: "https://www.trec.texas.gov/sites/default/files/pdf-forms/CN%201-5_0.pdf",
        iabs: "swearingen_IABS.webp",
        disclaimer: "https://d1e1jt2fj4r8r.cloudfront.net/938208c7-113c-4b76-96bb-f65cefa93252/pkR5n4vC6/trec.pdf"
    }
};
