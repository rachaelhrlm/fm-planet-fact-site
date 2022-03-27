import React, { FunctionComponent } from 'react';
import { Planet, View } from '../../type';
import { PlanetUtils } from '../../utils';
import { ViewButton } from '../viewButton';

export interface ViewSelectProps {
    onClick: (view: View) => void;
    planet: Planet;
    view: View;
}

export const ViewSelect: FunctionComponent<ViewSelectProps> = ({ onClick, planet, view: selectedView }) => {
    return (
        <section className="grid-cols-1 gap-3 p-5 w-1/2 hidden md:grid md:text-left xl:gap-3 xl:w-full">
            {PlanetUtils.viewOptions.map((view, index) => (
                <ViewButton
                    key={view}
                    isSelected={selectedView === view}
                    number={`0${index + 1}`}
                    onClick={() => onClick(view)}
                    planet={planet}
                    view={view}
                />
            ))}
        </section>
    );
};
