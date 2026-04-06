import { appLocations } from './location.js';
import { routeColors, appGuides } from './config.js';
import { route11 } from './routes/11.js';
import { route11P } from './routes/11P.js';
import { route11Q } from './routes/11Q.js';
import { route4F } from './routes/4F.js';
import { route7P } from './routes/7P.js';
import { routeJAK02 } from './routes/JAK02.js';
import { routeJAK85 } from './routes/JAK85.js';
import { routeKRLC } from './routes/KRLC.js';
import { routeLRTJB } from './routes/LRTJB.js';

export { routeColors };

export const appData = {
    locations: appLocations,
    routes: [
        route11,
        route11P,
        route11Q,
        route4F,
        route7P,
        routeJAK02,
        routeJAK85,
        routeKRLC,
        routeLRTJB
    ],
    guides: appGuides
};
