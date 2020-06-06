import React from 'react';


import { Bar} from './shared/bar/bar';
import {Subtitle} from './shared/subtitle/subtitle';
import { Button } from './shared/button/button';
import { DemoComponent } from './shared/demo-component/demo-component';


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
       

            <div style={{ marginTop: 13, border: '1px dashed #c6c6c6' }}>
                <DemoComponent></DemoComponent>
            </div>
            </div>
    );
}