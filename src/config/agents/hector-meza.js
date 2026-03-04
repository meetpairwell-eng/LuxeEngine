/**
 * AGENT CONFIGURATION: HECTOR MEZA
 * Created via CS Upload Dashboard on 2026-03-04
 */

const R2_BASE_URL = "https://pub-0a14d2bf83cc482ab589da588a45c6b0.r2.dev";
const getGlobalUrl = (path) => `${R2_BASE_URL}/${path}`;

export const hectorMezaAgent = {
    name: "Hector Meza",
    title: "Real Estate Agent",
    phone: "214.686.5641",
    email: "hmeza@briggsfreeman.com",
    brokerage: "Briggs Freeman Sothebys INT",
    brokerageLogo: "", // Upload brokerage logo to R2 and update this path
    officePhone: "",
    address: "3131 Turtle Creek Blvd 5th floor Dallas TX 75019",
    headshot: getGlobalUrl("agents/hector-meza/profile/headshot.webp"), // Upload headshot via dashboard then this will resolve
    socialMedia: {
        facebook: "https://www.facebook.com/hectormeza7/",
        instagram: "https://www.instagram.com/hectormeza.z/?hl=en"
    },
    docs: {
        consumerProtection: "https://www.trec.texas.gov/sites/default/files/pdf-forms/CN%201-5_0.pdf",
        iabs: "", // Add IABS URL
        disclaimer: "" // Add disclaimer URL
    }
};
