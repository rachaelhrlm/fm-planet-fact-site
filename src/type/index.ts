export enum Planet {
    MERCURY = 'mercury',
    VENUS = 'venus',
    EARTH = 'earth',
    MARS = 'mars',
    JUPITER = 'jupiter',
    SATURN = 'saturn',
    URANUS = 'uranus',
    NEPTUNE = 'neptune',
}

export enum View {
    OVERVIEW = 'overview',
    STRUCTURE = 'structure',
    SURFACE = 'surface',
}

export interface ViewInfo {
    content: string;
    source: string;
}
export interface PlanetData {
    geology: ViewInfo;
    images: { planet: string; internal: string; geology: string };
    name: string;
    overview: ViewInfo;
    radius: string;
    revolution: string;
    rotation: string;
    structure: ViewInfo;
    temperature: string;
}
