/**
 * AGENT CONFIGURATION: RALPH RANDALL
 */

const R2_BASE_URL = "https://pub-0a14d2bf83cc482ab589da588a45c6b0.r2.dev";
const getGlobalUrl = (path) => `${R2_BASE_URL}/${path}`;

import { briggsFreeman } from '../brokerages/briggs-freeman';

export const ralphAgent = {
    ...briggsFreeman,
    name: "Ralph Randall",
    title: "Global Real Estate Advisor",
    phone: "214.533.8355",
    email: "rrandall@briggsfreeman.com",
    headshot: getGlobalUrl("randall_r/main_agent/ralph-randall.png"),
    socialMedia: {
        facebook: "#",
        instagram: "#"
    },
    docs: {
        ...briggsFreeman.docs,
        iabs: "", // Agent's personal IABS — fill in when available
    }
};
