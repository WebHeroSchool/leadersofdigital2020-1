import React from 'react';
import { Route, Switch, Redirect } from 'react-router';

import Home from './home/home.component';
import Contacts from './contacts/contacts.component';
import { Login } from './login/login.compnent';
import { Components } from './components/components.component';

export const AppRoutes = ({ auth }) => {
  return (
    <div>
      <Switch>
        <Route exact path="/" render={() => (
          auth
            ? <Redirect to="/login" />
            : <Redirect to="/home" />
        )} />

        <Route path="/home" component={Home} />
        <Route path="/login" component={Login} /> 
        <Route path="/contacts" component={Contacts} />
        <Route path="/components" component={Components} />
      </Switch>
    </div>
  );
};
