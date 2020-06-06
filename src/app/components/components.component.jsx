import React from 'react';


import { Bar} from './shared/bar/bar';
import {Subtitle} from './shared/subtitle/subtitle';
import { Button } from './shared/button/button';
import { Videoframe } from './shared/videoframe/videoframe';
import { Contact} from './shared/contact/contact';

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
            <div>
                <Contact></Contact>
            </div>
        </div>

           
    );
}