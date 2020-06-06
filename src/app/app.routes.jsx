import React from 'react';
import { Route, Switch, Redirect } from 'react-router';

import Home from './home/home.component';
import Contacts from './contacts/contacts.component';
import { Login } from './login/login.compnent';
import { NotFound } from './not-found/not-found.component';
import { Components } from './components/components.component';

export const AppRoutes = ({ auth }) => {
  return (
    <div>
      <Switch>
        <Route exact path="/" render={() => (
          !auth
            ? <Redirect to="/login" />
            : <Redirect to="/home" />
        )} />

        {
          (() => {
            auth ?
              [
                <Route path="/home" component={Home} />, 
                <Route path="/contacts" component={Contacts} />,
              ]
              : null
          })()
        }      
        <Route path="/login" component={Login} />
        <Route path="/components" component={Components} />
        <Route path='*' exact={true} component={NotFound} />
      </Switch>
    </div>
  );
};
