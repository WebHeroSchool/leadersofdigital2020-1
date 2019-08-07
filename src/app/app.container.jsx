import { hot } from 'react-hot-loader/root';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import React, { PureComponent } from 'react';

import routes from './app.routes';
import * as appActions from './app.actions';

import './app.container.scss';
import bagImage from 'assets/images/bag.png'

class App extends PureComponent {
  render() {
    const { title, updateTitle, history } = this.props;
  
    return (
      <div className="app">
        <p>
          {title}
        </p>

        <img src={bagImage} alt="Bag Logo" />

        <div>
          <button onClick={() => updateTitle('Updated application title')}>
            Update application title
          </button>
        </div>

        <ul className="app__nav">
          <li>
            <Link className="app__nav-item"  to="/">Home</Link>
            <Link className="app__nav-item" to="/contacts">Contacts</Link>
          </li>
        </ul>

        <ConnectedRouter history={history}>
          {routes}
        </ConnectedRouter>
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
