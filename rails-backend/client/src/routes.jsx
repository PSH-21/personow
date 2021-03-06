import React from 'react';
import { Route, Switch } from 'react-router';

/**
 * Import all page components here
 */

import Main from './main.jsx';
import Register from './user/register.jsx';
import Login from './user/login.jsx';
import Group from './group/group.jsx';
import OneEvent from './event/OneEvent.jsx';
import NewShift from './event/newshift.jsx';
import NewRole from './role/newrole.jsx';
import YourEvents from './event/YourEvents.jsx';
import YourShifts from './event/YourShifts.jsx';
import User from './user/user.jsx';
import EventForm from './event/EventForm.jsx';
import GroupForm from './group/GroupForm.jsx';
import AllEvents from './event/AllEvents.jsx';
import AllGroups from './group/AllGroups.jsx';
/**
 * All routes go here.
 * Don't forget to import the components above after adding new route.
 */
export default function Routes(props) {
  return (
    <Switch>
      <Route exact path='/' component={Main} />
      <Route path='/login' component={Login} />
      <Route path='/register' component={Register} />
      <Route path='/groups/:id' component={Group} />
      <Route path='/events/:id' component={OneEvent} />
      <Route path='/your-shifts' component={YourShifts} />
      <Route path='/newshift/:id' component={NewShift} />
      <Route path='/newrole/:id' component={NewRole} />
      <Route path='/user' component={User} />
      <Route path='/EventForm' component={EventForm} />
      <Route path='/GroupForm' component={GroupForm} />
      <Route path='/your-events' component={YourEvents} />
      <Route path='/events' component={AllEvents} />
      <Route path='/groups' component={AllGroups} />
      <Route component={() => <div>404 not found</div>}/>
    </Switch>
  )
}