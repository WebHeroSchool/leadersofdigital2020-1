import React from 'react';


import { Bar} from './shared/bar/bar';
import {Subtitle} from './shared/subtitle/subtitle';
import { Button } from './shared/button/button';
import { Contact} from './shared/contact/contact';


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
       

            <div>
                <Contact></Contact>
            </div>

         </div>
    );
}