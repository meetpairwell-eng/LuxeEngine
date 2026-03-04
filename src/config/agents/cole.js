/**
 * AGENT CONFIGURATION: COLE SWEARINGEN
 */

const R2_BASE_URL = "https://pub-0a14d2bf83cc482ab589da588a45c6b0.r2.dev";
const getGlobalUrl = (path) => `${R2_BASE_URL}/${path}`;

import { compass } from '../brokerages/compass';

export const coleAgent = {
    ...compass,
    name: "Cole Swearingen",
    phone: "972.971.9586",
    email: "cole.swearingen@compass.com",
    headshot: getGlobalUrl("cole-swearingen-headshot.webp"),
    socialMedia: {
        facebook: "https://www.facebook.com/cole.swearingen.35/",
        instagram: "https://www.instagram.com/coleswear/?hl=en"
    },
    docs: {
        ...compass.docs,
        iabs: "swearingen_IABS.webp",
    }
};
