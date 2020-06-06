import React from 'react';

import { Button } from './shared/button/button';
import { Button1 } from './shared/button1/button1';

export const Components = () => {
    return (
        <div>
            My awesome first component!
            <hr/>
            <div>
                <p>Компонента кнопки:</p>
                <Button></Button>
            </div>

            <div>
            <p>Компонента кнопки:</p>
                <Button1></Button1>
            </div>
        </div>
    );
}