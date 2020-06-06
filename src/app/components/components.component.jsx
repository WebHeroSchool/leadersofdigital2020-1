import React from 'react';


import { Bar} from './shared/bar/bar';
import {Subtitle} from './shared/subtitle/subtitle';
import { Button } from './shared/button/button';
export const Components = () => {
    return (
        <div>
            <div>
                <Bar></Bar>
            </div>
            <div>
                <Subtitle></Subtitle>
            </div>
            <div>
                <Button></Button>
            </div>
        </div>
       

    );
}