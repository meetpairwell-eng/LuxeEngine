import * as lobello5610 from './properties/lobello5610';
import * as template from './properties/template';

import * as brickellia5168 from './properties/brickellia5168';
import * as lexington3711 from './properties/lexington3711';

// Add new properties here as you create them:
// import * as oaklawn from './properties/oaklawn';

const properties = {
    'lobello5610': lobello5610,
    'template': template,

    'brickellia5168': brickellia5168,
    'lexington3711': lexington3711,
};

// VITE_PROPERTY_ID is set in your Dokploy Environment Variables
// If not set, it defaults to 'lobello5610'
const activeId = import.meta.env.VITE_PROPERTY_ID || 'lobello5610';

const config = properties[activeId] || properties['lobello5610'];

export const { propertyInfo, agentInfo, images, galleryConfig, detailSections, theme, layout, analytics, galleryConfig_LEGACY } = config;
export { activeId };
