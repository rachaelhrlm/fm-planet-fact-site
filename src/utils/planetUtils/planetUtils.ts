import { Planet, PlanetData, View } from '../../type';

const colors: Record<Planet, Record<string, string>> = {
    mercury: { accent: 'bg-mercury-500 border-white/0', nav: 'bg-mercury-600' },
    venus: { accent: 'bg-venus-500 border-white/0', nav: 'bg-venus-600' },
    earth: { accent: 'bg-earth-500 border-white/0', nav: 'bg-earth-600' },
    mars: { accent: 'bg-mars-500 border-white/0', nav: 'bg-mars-600' },
    jupiter: { accent: 'bg-jupiter-500 border-white/0', nav: 'bg-jupiter-600' },
    saturn: { accent: 'bg-saturn-500 border-white/0', nav: 'bg-saturn-600' },
    uranus: { accent: 'bg-uranus-500 border-white/0', nav: 'bg-uranus-600' },
    neptune: { accent: 'bg-neptune-500 border-white/0', nav: 'bg-neptune-600' },
};

const options = Object.values(Planet);

const viewOptions = Object.values(View);

const getData = async (planet: string) => {
    return fetch(`${window.location.host.includes('localhost') ? '' : '/fm-planet-fact-site'}/json/data.json`, {
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
    })
        .then((response) => response.json())
        .then((data) => data.find((planetData: PlanetData) => planetData.name.toLowerCase() === planet));
};

const getImage = (view: View, planetData?: PlanetData) => {
    let image;

    if (view === View.STRUCTURE) {
        image = planetData?.images.internal;
    } else {
        image = planetData?.images.planet;
    }

    if (image) {
        return image.replace('.', '');
    }
};

const getSurfaceImage = (view: View, planetData?: PlanetData) => {
    return planetData?.images.geology?.replace('.', '');
};

const getRadius = (planetData?: PlanetData) => {
    const radius = planetData?.radius.match(/\d+/g)?.[0];

    if (radius) {
        let percentage = Math.round((parseInt(radius) / 70) * 100);
        if (percentage > 90) {
            percentage = percentage * 0.95;
        } else if (percentage > 80) {
            percentage = percentage * 1.3;
        } else if (percentage < 10) {
            percentage = percentage * 4 + 25;
        } else {
            percentage = percentage * 1.3 + 30;
        }

        return percentage > 100 ? 100 : percentage;
    }
};

const getViewInfo = (view: View, planetData?: PlanetData) => {
    if (view === View.SURFACE) {
        return planetData?.geology;
    }
    return planetData?.[view];
};

export const PlanetUtils = {
    colors,
    getData,
    getImage,
    getRadius,
    getSurfaceImage,
    getViewInfo,
    options,
    viewOptions,
};
