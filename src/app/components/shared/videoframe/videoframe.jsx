import React from 'react';

import './videoframe.scss';
import videoBgimage from './img/videobg1.png';
export const Videoframe = () => {
    return (
        <img className="ui-videoframe" src={videoBgimage} alt="">
        </img>
    );
};