import React from 'react';

import './demo-component.scss';
import githubImage from './iamges/github.jpg';

export const DemoComponent = () => {
    return (
        <div className="ui-demo-component">
            Развернуть кнопку
            <img className="ui-demo-component__image" src={githubImage} alt=""/>
        </div>
    );
};