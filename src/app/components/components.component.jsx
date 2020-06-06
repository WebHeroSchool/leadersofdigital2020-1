import React from 'react';

import { Button } from './shared/button/button';
import { DemoComponent } from './shared/demo-component/demo-component';

export const Components = () => {
    return (
        <div>
            My awesome first component!
            <hr/>
            <div>
                <p>Компонента кнопки:</p>
                <Button></Button>
            </div>

            <div style={{ marginTop: 13, border: '1px dashed #c6c6c6' }}>
                <DemoComponent></DemoComponent>
            </div>
        </div>
    );
}