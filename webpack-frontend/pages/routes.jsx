
import React from 'react';
import { Route, Switch } from 'react-router';

/**
 * Import all page components here
 */

import Main from './main.jsx'
import Login from './login.jsx'
import Org from './org.jsx'
import User from './user.jsx'
import Eventid1 from './eventid1.jsx'
import Eventid2 from './eventid2.jsx'
import Eventform from './eventform.jsx'
/**
 * All routes go here.
 * Don't forget to import the components above after adding new route.
 */
export default function Routes(props) {
  return (
    <Switch>
      <Route exact path='/' component={Main} />
      <Route path='/login' component={Login} />
      <Route path='/org' component={Org} />
      <Route path='/user' component={User} />
      <Route path='/eventid1' component={Eventid1} />
      <Route path='/eventid2' component={Eventid2} />
      <Route path='/eventform' component={Eventform} />
      <Route component={() => <div>404 not found</div>}/>
    </Switch>
  )
}