import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import UpcomingEvents from './event/UpcomingEvents.jsx';
import YourEvents from './event/YourEvents.jsx';

import YourShifts from './event/YourShifts.jsx';
export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
      upcomingEvents: [],
      shifts: [],
      yourEvents: [],
      fireRerender: false
    }
  }
  componentWillMount() {
    const token = localStorage.getItem('token');
    axios.all([
      axios.get('/api/v1/events-upcoming'),
      axios.get('/api/v1/your-events', {headers: {'token': token}}),
      axios.get('/api/v1/your-shifts', {headers: {'token': token}})
      // axios.get('/api/v1/user', { 'headers': { 'token': token }})
    ])
    .then(axios.spread((upcomingEvents, yourEvents, shifts ) => {
      const email = localStorage.getItem('email');
      const name = localStorage.getItem('name');
      const user_id = localStorage.getItem('user_id');
      this.setState({
        upcomingEvents: upcomingEvents.data,
        shifts: shifts.data,
        yourEvents: yourEvents.data,
        email,
        name,
        user_id
      });
    }))
    .catch((error) => {
      this.setState({
        error
      });
    })
  }

  render() {
    const { upcomingEvents, shifts, yourEvents, error } = this.state;
    const token = localStorage.getItem('token');    
    return (
      <div>

        
        
        <div>
        { token && (<div><h1>Dashboard</h1><h2>Your Events</h2><YourEvents yourEvents={ yourEvents } error={ error } token={token}/></div>)  }
        </div>
        <div>
          
          { token && (<div><h2>Your Shifts</h2><YourShifts shifts={ shifts } error={ error } token={ token } /></div>)}
        </div>
        <h2>Current & Upcoming Events</h2>
        { upcomingEvents.length === 0 ? <div>No Events Currently Scheduled</div> :
          <UpcomingEvents upcomingEvents={ upcomingEvents } error={ error } />
        }

      </div>
    );
  }
}

/*
        <h6>Logged in as {this.state.name}</h6>
        <Link to={'/login'} > LOGIN </Link>
        <Link to={'/'}  ><button onClick={(e) => this.logoutOnClick(e)}>LOGOUT</button> </Link>
        <Link to={'/register'} > REGISTER </Link>
        <Link to={'/user'} > USER </Link>
        <Link to={'/events'} >EVENTS</Link>
        <Link to={'/groups'} > GROUPS</Link>
        <Link to={'/GroupForm'} ><button>Create Group</button></Link>
        <Link to={'/EventForm'} ><button>Create Event</button></Link> 
        
 */