
import React from 'react';
import { Route, Switch } from 'react-router';

/**
 * Import all page components here
 */

import Main from './main.jsx'
import Login from './user/login.jsx'
import Org from './group/org.jsx'
import User from './user/user.jsx'
import Eventid1 from './event/eventid1.jsx'
import Eventid2 from './event/eventid2.jsx'
import Eventform from './event/eventform.jsx'
import AllEvents from './event/AllEvents.jsx'
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
      <Route path='/events' component={AllEvents} />
      <Route component={() => <div>404 not found</div>}/>
    </Switch>
  )
}