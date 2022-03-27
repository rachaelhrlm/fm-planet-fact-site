import React, { FunctionComponent } from 'react';
import { Source } from '../icons';

export interface SourceLinkProps {
    link?: string;
}

export const SourceLink: FunctionComponent<SourceLinkProps> = ({ link }) => {
    return (
        <p className="font-sans text-xs text-white/50">
            {`Source : `}
            <span>
                <a href={link} target={'_blank'} rel="noreferrer">
                    <span className="font-bold underline">Wikipedia</span> <Source className="h-4 w-4 inline" />
                </a>
            </span>
        </p>
    );
};
