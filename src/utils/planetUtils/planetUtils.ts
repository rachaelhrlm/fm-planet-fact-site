import { Planet } from '../../type';

const colors: Record<Planet, Record<string, string>> = {
    mercury: { accent: 'bg-mercury-500', nav: 'bg-mercury-600' },
    venus: { accent: 'bg-venus-500', nav: 'bg-venus-600' },
    earth: { accent: 'bg-earth-500', nav: 'bg-earth-600' },
    mars: { accent: 'bg-mars-500', nav: 'bg-mars-600' },
    jupiter: { accent: 'bg-jupiter-500', nav: 'bg-jupiter-600' },
    saturn: { accent: 'bg-saturn-500', nav: 'bg-saturn-600' },
    uranus: { accent: 'bg-uranus-500', nav: 'bg-uranus-600' },
    neptune: { accent: 'bg-neptune-500', nav: 'bg-neptune-600' },
};

const options = Object.values(Planet);

export const PlanetUtils = {
    colors,
    options,
};
