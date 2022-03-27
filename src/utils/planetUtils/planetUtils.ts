import { Planet, PlanetData, View, ViewInfo } from '../../type';

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

const getData = async (planet: string) => {
    return fetch('/json/data.json', {
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
        const percentage = Math.round((parseInt(radius) / 70) * 100);
        if (percentage > 90) {
            return percentage;
        } else if (percentage < 10) {
            return percentage * 5 + 20;
        } else {
            return percentage * 1.2 + 30;
        }
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
};
