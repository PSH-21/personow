
import React from 'react';
import { Route, Switch } from 'react-router';

/**
 * Import all page components here
 */
import Main from './main.jsx';
import Login from './login.jsx';
import Org from './org.jsx';

/**
 * All routes go here.
 * Don't forget to import the components above after adding new route.
 */
export default function Routes(props) {
  return (
    <Switch>
      <Route exact path='/' component={Main} />
      <Route path="/login" component={Login} />
      <Route path="/org" component={Org} />
      <Route component={() => <div>404 not found</div>}/>
    </Switch>
  )
};