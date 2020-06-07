import { hot } from 'react-hot-loader/root';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import React, { PureComponent } from 'react';

import { AppRoutes } from './app.routes';
import * as appActions from './app.actions';

import './app.container.scss';
import bagImage from 'assets/images/bag.png'
import {AUTHENTICATE} from "app/app.constants";

class App extends PureComponent {
  render() {
    const { title, updateTitle, history, auth, login } = this.props;

    return (
      <div className="app">

        {/*<ul className="app__nav">*/}
        {/*  <li>*/}
        {/*    <Link className="app__nav-item"  to="/">Home</Link>*/}
        {/*    <Link className="app__nav-item" to="/contacts">Contacts</Link>*/}
        {/*  </li>*/}
        {/*</ul>*/}

        <ConnectedRouter history={history}>
          <AppRoutes auth={auth} login={login} />
        </ConnectedRouter>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.app.auth,
    title: state.app.title,
  };
}

const mapDispathToProps = (dispatch) => {
  return {
    login: (switchAuthTo) => dispatch(appActions.login(switchAuthTo)),
    updateTitle: title => dispatch(appActions.updateTitle(title)),
  }
}

const AppContainer = connect(mapStateToProps, mapDispathToProps)(App);

export default hot(AppContainer);
