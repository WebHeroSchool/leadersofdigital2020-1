import React from 'react';

import { Button } from './shared/button/button';
import { Bar} from './shared/bar/bar';
import { Subtitle } from './shared/subtitle/subtitle';
import { Videoframe } from './shared/videoframe/videoframe'

export const Components = () => {
    return (
        <div>
            <div>
                <Button></Button>
            </div>

            <div>
                <Bar></Bar>
            </div>

            <div>
                <Subtitle></Subtitle>
            </div>

            <div>
                <Videoframe></Videoframe>
            </div>

        </div>
    );
}