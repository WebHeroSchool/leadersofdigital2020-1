import React from 'react';
import { hot } from 'react-hot-loader/root';

import Home from './home/home';

import bagImage from 'assets/images/bag.png'

const App = () => (
  <div>
    <p>
      Bag React application
    </p>

    <img src={bagImage} alt="Bag Logo" />

    <Home />
  </div>
);

export default hot(App);
