import React from 'react';


import { Bar} from './shared/bar/bar';
import {Subtitle} from './shared/subtitle/subtitle';
import { Button } from './shared/button/button';
import { Videoframe } from './shared/videoframe/videoframe';
import { Contact} from './shared/contact/contact';
import { Important} from './shared/important/important';
import { Search} from './shared/search/search';

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
            <div>
                <Important></Important>
            </div>

            <div>
                <Search></Search>
            </div>

        </div>

           
    );
}