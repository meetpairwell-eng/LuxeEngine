/**
 * BROKERAGE CONFIGURATION: BRIGGS FREEMAN SOTHEBY'S INTERNATIONAL REALTY
 * Shared config — all BF agents spread from this object and override per-agent fields.
 */

const R2_BASE_URL = "https://pub-0a14d2bf83cc482ab589da588a45c6b0.r2.dev";
const getGlobalUrl = (path) => `${R2_BASE_URL}/${path}`;

export const briggsFreeman = {
    brokerage: "Briggs Freeman Sotheby's International Realty",
    brokerageLogo: getGlobalUrl("randall_r/main_agent/Logo_BFSIR.png"),
    officePhone: "214-350-0400",
    address: "3131 Turtle Creek Blvd, 5th Floor, Dallas, Texas 75219",
    website: "https://www.briggsfreeman.com",
    disclaimer: "...is a real estate agent affiliated with Briggs Freeman Sotheby's International Realty, a licensed real estate broker and abides by all applicable equal housing opportunity laws. All material presented herein is intended for informational purposes only. Information is compiled from sources deemed reliable but is subject to errors, omissions, changes in price, condition, sale, or withdrawal without notice. No statement is made as to accuracy of any description. All measurements and square footages are approximate. This is not intended to solicit property already listed. Nothing herein shall be construed as legal, accounting or other professional advice outside the realm of real estate brokerage.",
    docs: {
        consumerProtection: "https://www.trec.texas.gov/sites/default/files/pdf-forms/CN%201-5_0.pdf",
        disclaimer: "https://d1e1jt2fj4r8r.cloudfront.net/938208c7-113c-4b76-96bb-f65cefa93252/pkR5n4vC6/trec.pdf",
        // iabs is NOT here — it is per-agent
    }
};
