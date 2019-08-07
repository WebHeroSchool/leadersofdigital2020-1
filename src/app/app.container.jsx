import React, { PureComponent } from 'react';
import { hot } from 'react-hot-loader/root';
import { connect } from 'react-redux';

import * as appActions from './app.actions';

import Home from './home/home';

import bagImage from 'assets/images/bag.png'

class App extends PureComponent {
  render() {
    const { title, updateTitle } = this.props;
  
    return (
      <div>
        <p>
          {title}
        </p>

        <img src={bagImage} alt="Bag Logo" />

        <div>
          <button onClick={() => updateTitle('Updated application title')}>
            Update application title
          </button>
        </div>

        <Home />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    title: state.app.title,
  };
}

const mapDispathToProps = (dispatch) => {
  return {
    updateTitle: title => dispatch(appActions.updateTitle(title)),
  }
}

const AppContainer = connect(mapStateToProps, mapDispathToProps)(App);

export default hot(AppContainer);
