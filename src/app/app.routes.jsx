import React from 'react';
import { Route, Switch } from 'react-router';

import Home from './home/home.component';
import Contacts from './contacts/contacts.component';

const routes = (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/contacts" component={Contacts} />
    </Switch>
  </div>
);

export default routes;
