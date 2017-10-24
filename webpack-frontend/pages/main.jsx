import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import { Route, Link } from 'react-router-dom'
import Login from './login.jsx'

export default class Main extends Component {
  render() {
    console.log(this.props)
    return (
        <div>
          <h1>Main Page</h1>
          
          <span className="">
            <Link to='/login'>
              <Button bsStyle='success'>Login</Button>
            </Link>
                
            <a href='register.html'>Register</a> |
            <a href='user.html'>User Profile</a> |
          </span>
          <h1>Personow MainPage</h1>
          <h2>Your Events</h2>
          <span>
            <i>This section appears when logged in,
              and you are an administrator for events that have not ended.
              hidden for anonymous users.
            </i>
          </span>
          <h4><a href='events/eventid1.html'>Hamlet - LHTheatre</a></h4>
          <p>4 shifts of 12 have yet to be filled.</p>

          <h4><a href='events/eventid2.html'>Family Garage Sale</a></h4>
          <p>All shifts filled.</p>

          <h2>Your Scheduled Shifts</h2>
          <span>
            <i>This section appears when logged in,
              and you have scheduled shifts for today or in the future.
              hidden for anonymous users.
            </i>
          </span>

          <h4>Oct. 23</h4>
          <p>1pm - 5pm : <a href='events/eventid1v.html'>Hamlet - LHTheatre</a></p>
          <p>6pm - 10pm : <a href='events/eventid1v.html'>Hamlet - LHTheatre</a></p>

          <h4>Oct. 25</h4>
          <p>1pm - 5pm : <a href='events/eventid3v.html'>Demo Day - LHLabs</a></p>


          <h2>Events and Groups</h2>
          <span>
            <i>This section appears for everyone, to see
          details about groups and events they
          can join as users.</i>
          </span>
          <h4><a href='events/eventid1a.html'>Event: Hamlet - LHTheatre</a></h4>
          <p>4 shifts available</p>

          <h4><a href='groups/groupid1.html'>Group: The Code Nappers</a></h4>
          <p>Join to volnteer for future events</p>
        </div>
    );
  }
}

//<Route path='' component={} />
//<Link to={''} >" "</Link>
