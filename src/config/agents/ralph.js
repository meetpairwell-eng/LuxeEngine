/**
 * AGENT CONFIGURATION: RALPH RANDALL
 */

const R2_BASE_URL = "https://pub-322e1afeb2fc45c38f52428d0a3aca9b.r2.dev";
const getGlobalUrl = (path) => `${R2_BASE_URL}/${path}`;

export const ralphAgent = {
    name: "Ralph Randall",
    title: "Global Real Estate Advisor",
    phone: "214.533.8355",
    email: "rrandall@briggsfreeman.com",
    brokerage: "Briggs Freeman Sotheby's International Realty",
    brokerageLogo: getGlobalUrl("randall_r/main_agent/Logo_BFSIR.png"), // Placeholder path
    officePhone: "214-350-0400",
    address: "3131 Turtle Creek 5th Floor, Dallas, Texas 75219",
    headshot: getGlobalUrl("agents/ralph-randall.png"), // Placeholder path
    website: "https://www.briggsfreeman.com",
    socialMedia: {
        facebook: "#",
        instagram: "#"
    },
    // Brokerage Docs URLs
    docs: {
        consumerProtection: "https://www.trec.texas.gov/sites/default/files/pdf-forms/CN%201-5_0.pdf",
        iabs: "https://d1e1jt2fj4r8r.cloudfront.net/938208c7-113c-4b76-96bb-f65cefa93252/pkR5n4vC6/trec.pdf",
        disclaimer: "https://d1e1jt2fj4r8r.cloudfront.net/938208c7-113c-4b76-96bb-f65cefa93252/pkR5n4vC6/trec.pdf"
    }
};
