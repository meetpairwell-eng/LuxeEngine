import * as lobello4610 from './properties/lobello4610';
import * as template from './properties/template';

import * as brickellia5168 from './properties/brickellia5168';

// Add new properties here as you create them:
// import * as oaklawn from './properties/oaklawn';

const properties = {
    'lobello4610': lobello4610,
    'template': template,

    'brickellia5168': brickellia5168,
};

// VITE_PROPERTY_ID is set in your Dokploy Environment Variables
// If not set, it defaults to 'lobello4610'
const activeId = import.meta.env.VITE_PROPERTY_ID || 'lobello4610';

const config = properties[activeId] || properties['lobello4610'];

export const { propertyInfo, agentInfo, images, galleryConfig, detailSections, theme, layout, analytics, galleryConfig_LEGACY } = config;
export { activeId };
