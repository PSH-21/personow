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
      upcomginEvents: [],
      shifts: [],
      yourEvents: []
    }
  }
  componentWillMount() {
    const token = localStorage.getItem('token');
    axios.all([
      axios.get('/api/v1/events-upcoming', {headers: {'token': token}}),
      axios.get('/api/v1/your-events', {headers: {'token': token}}),
      axios.get('/api/v1/your-shifts', {headers: {'token': token}})
      // axios.get('/api/v1/user', { 'headers': { 'token': token }})
    ])
    .then(axios.spread((upcomingEvents, yourEvents, shifts ) => {
      const token = localStorage.getItem('token');
      const email = localStorage.getItem('email');
      const name = localStorage.getItem('name');
      const user_id = localStorage.getItem('user_id');
      this.setState({
        upcomingEvents: upcomingEvents.data,
        shifts: shifts.data,
        yourEvents: yourEvents.data,
        token,
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
    return (
      <div>
        <h6>Logged in as {this.state.name}</h6>
        <Link to={'/login'} > LOGIN </Link>
        <Link to={'/'}  > LOGOUT </Link>
        <Link to={'/register'} > REGISTER </Link>
        <Link to={'/user'} > USER </Link>
        <Link to={'/events'} >EVENTS</Link>
        <Link to={'/groups'} > GROUPS</Link>
        <Link to={'/GroupForm'} ><button>Create Group</button></Link>
        <Link to={'/EventForm'} ><button>Create Event</button></Link>
        <h1>Dashboard</h1>
        <h2>Your Events</h2>
        <YourEvents yourEvents={ yourEvents } error={ error } />

        <h2>Your Shifts</h2>
        <YourShifts shifts={ shifts } error={ error } />

        <h2>Upcoming Events in the Next 7 Days</h2>
        <UpcomingEvents upcomingEvents={ upcomingEvents } error={ error } />

      </div>
    );
  }
}