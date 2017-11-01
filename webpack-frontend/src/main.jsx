import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import AllEvents from './event/AllEvents.jsx';
import YourEvents from './event/YourEvents.jsx';
import AllGroups from './group/AllGroups.jsx';
import YourShifts from './event/YourShifts.jsx';
export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
      events: [],
      groups: [],
      shifts: [],
      yourEvents: []
    }
  }
  componentWillMount() {
    const token = localStorage.getItem('token');
    axios.all([
      axios.get('/api/v1/events', {headers: {'token': token}}),
      axios.get('/api/v1/your-events', {headers: {'token': token}}),
      axios.get('/api/v1/your-shifts', {headers: {'token': token}})
      // axios.get('/api/v1/user', { 'headers': { 'token': token }})
    ])
    .then(axios.spread((events, yourEvents, shifts ) => {
      const token = localStorage.getItem('token');
      const email = localStorage.getItem('email');
      const name = localStorage.getItem('name');
      const user_id = localStorage.getItem('user_id');
      this.setState({
        events: events.data,
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
    const { events, shifts, yourEvents, error } = this.state;
    return (
      <div>
        <h6>User {this.state.token}, Email: {this.state.email}, Name: {this.state.name}, User_id: {this.state.user_id}</h6>
        <Link to={'/login'} > LOGIN </Link>
        <Link to={'/register'} > REGISTER </Link>
        <Link to={'/user'} > USER </Link>
        <h1>Dashboard</h1>
        <h2>Your Events</h2>
        <YourEvents yourEvents={ yourEvents } error={ error } />
        <Link to={'/EventForm'} ><button>Create Event</button></Link>
        <h2>Your Shifts</h2>
        <YourShifts shifts={ shifts } error={ error } />
        <h2>'Upcoming Events in the next 7 Days'</h2>
        <AllEvents events={ events } error={ error } />
        <Link to={'/events'} ><button>Events</button></Link>
        <Link to={'/groups'} ><button>Groups</button></Link>
        <Link to={'/GroupForm'} ><button>Create Group</button></Link>
      </div>
    );
  }
}