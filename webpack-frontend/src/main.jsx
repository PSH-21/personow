import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

import AllEvents from './event/AllEvents.jsx';
import AllGroups from './group/AllGroups.jsx';
import AllShifts from './event/AllShifts.jsx';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
      events: [],
      groups: [],
      shifts: []
    }
  }
  componentWillMount() {
    const token = localStorage.getItem('token');
    axios.all([
      axios.get('/api/v1/events'),
      axios.get('/api/v1/groups'),
      axios.get('/api/v1/shifts')
      // axios.get('/api/v1/user', { 'headers': { 'token': token }})
    ])
    .then(axios.spread((events, groups, shifts) => {
      const token = localStorage.getItem('token');
      const email = localStorage.getItem('email');
      const name = localStorage.getItem('name');
      const user_id = localStorage.getItem('user_id');
      console.log(1);
      console.log(shifts.data);
      console.log(2);
      this.setState({
        events: events.data,
        groups: groups.data,
        shifts: shifts.data,
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
    const { events, shifts, groups, error } = this.state;
    return (
      <div>
        <h6>User {this.state.token}, Email: {this.state.email}, Name: {this.state.name}, User_id: {this.state.user_id}</h6>
        <Link to={'/login'} > LOGIN </Link>
        <Link to={'/register'} > REGISTER </Link>
        <Link to={'/user'} > USER </Link>
        <h1>Main Page</h1>

        <h1>Personow MainPage</h1>

        <h2>All Events</h2>
        <AllEvents events={ events } error={ error } />
        <Link to={'/EventForm'} ><button>Create Event</button></Link>

        <h2>All Shifts</h2>
        <AllShifts shifts={ shifts } error={ error } />


        <h2>All Groups</h2>
        <AllGroups groups={ groups } error={ error } />
        <Link to={'/GroupForm'} ><button>Create Group</button></Link>



      </div>
    );
  }
}
