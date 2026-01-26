import * as lobello from './properties/lobello';
import * as template from './properties/template';

// Add new properties here as you create them:
// import * as oaklawn from './properties/oaklawn';

const properties = {
    'lobello': lobello,
    'template': template,
    // 'oaklawn': oaklawn,
};

// VITE_PROPERTY_ID is set in your Dokploy Environment Variables
// If not set, it defaults to 'lobello'
const activeId = import.meta.env.VITE_PROPERTY_ID || 'lobello';

const config = properties[activeId] || properties['lobello'];

export const { propertyInfo, agentInfo, images, galleryConfig, detailSections, theme, layout, galleryConfig_LEGACY } = config;
