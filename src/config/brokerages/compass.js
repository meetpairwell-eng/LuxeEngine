/**
 * BROKERAGE CONFIGURATION: COMPASS
 * Shared config — all Compass agents spread from this object and override per-agent fields.
 */

const R2_BASE_URL = "https://pub-0a14d2bf83cc482ab589da588a45c6b0.r2.dev";
const getGlobalUrl = (path) => `${R2_BASE_URL}/${path}`;

export const compass = {
    brokerage: "COMPASS",
    brokerageLogo: getGlobalUrl("main-page/compass-logo.webp"),
    officePhone: "(214) 814-8100",
    address: "5960 Berkshire Ln Ste 700, Dallas TX 75225",
    website: "https://www.compass.com",
    disclaimer: "...is a real estate agent affiliated with Compass. Compass is a licensed real estate broker and abides by all applicable equal housing opportunity laws. All material presented herein is intended for informational purposes only. Information is compiled from sources deemed reliable but is subject to errors, omissions, changes in price, condition, sale, or withdrawal without notice. No statement is made as to accuracy of any description. All measurements and square footages are approximate. This is not intended to solicit property already listed. Nothing herein shall be construed as legal, accounting or other professional advice outside the realm of real estate brokerage.",
    docs: {
        consumerProtection: "https://www.trec.texas.gov/sites/default/files/pdf-forms/CN%201-5_0.pdf",
        disclaimer: "https://d1e1jt2fj4r8r.cloudfront.net/938208c7-113c-4b76-96bb-f65cefa93252/pkR5n4vC6/trec.pdf",
        // iabs is NOT here — it is per-agent
    }
};
