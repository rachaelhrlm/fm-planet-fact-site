import React, { FunctionComponent } from 'react';
import { Planet, View } from '../../type';
import { PlanetUtils } from '../../utils';
import { ViewBarButton } from '../viewBarButton';

export interface ViewBarProps {
    onClick: (view: View) => void;
    planet: Planet;
    view: View;
}

export const ViewBar: FunctionComponent<ViewBarProps> = ({ onClick, planet, view: selectedView }) => {
    return (
        <nav className="w-full border-b border-white/10 pt-24 pb-5 px-5 flex justify-between bg-black-500 z-10 bg-starry-pattern fixed md:hidden">
            {PlanetUtils.viewOptions.map((view) => (
                <ViewBarButton key={view} isSelected={selectedView === view} onClick={() => onClick(view)} planet={planet} view={view} />
            ))}
        </nav>
    );
};
