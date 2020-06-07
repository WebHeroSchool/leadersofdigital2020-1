import React from 'react';
import { Route, Switch, Redirect } from 'react-router';

import Home from './home/home.component';
import Contacts from './contacts/contacts.component';
import { LoginComponent } from './login/login.component';
import { NotFound } from './not-found/not-found.component';
import { Components } from './components/components.component';

export const AppRoutes = ({ auth, login }) => {
  return (
    <div style={{ width: '100%' }}>
      <Switch>
        <Route exact path="/" render={() => (
          !auth
            ? <Redirect to="/login" />
            : <Redirect to="/home" />
        )} />

        <Route path="/home"  render={() => {
          return auth ? <Home /> : <Redirect to={'/login'} />
        }} />

        <Route path="/contacts"  render={() => {
          auth ? <Contacts /> : <Redirect to={'/login'} />
        }} />

        <Route path="/login" render={() => {
          return <LoginComponent login={login} />;
        }} />
        <Route path="/components" component={Components} />
        <Route path='*' exact={true} component={NotFound} />
      </Switch>
    </div>
  );
};
