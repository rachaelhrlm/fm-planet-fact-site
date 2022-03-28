import React, { FunctionComponent } from 'react';
import { PlanetData, View } from '../../type';
import { PlanetUtils } from '../../utils';

export interface DetailImageProps {
    isVisible: boolean;
    planetData?: PlanetData;
    view: View;
}

export const DetailImage: FunctionComponent<DetailImageProps> = ({ isVisible, planetData, view }) => {
    if (!isVisible) return null;

    return (
        <img
            className="absolute top-[60%] h-[25%] w-auto"
            alt={`${planetData?.name} ${view} detail`}
            src={`${process.env.PUBLIC_URL}${PlanetUtils.getSurfaceImage(view, planetData)}`}
        />
    );
};
