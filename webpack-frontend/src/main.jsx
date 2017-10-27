import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import AllEvents from './event/AllEvents.jsx';
import AllGroups from './group/AllGroups.jsx';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
      events: [],
      groups: []
    }
  }
  componentWillMount() {

    axios.all([
      axios.get('/api/v1/events'),
      axios.get('/api/v1/groups')
    ])
    .then(axios.spread((events, groups) => {
      const token = localStorage.getItem('token');
      this.setState({
        events: events.data,
        groups: groups.data,
        token
      });
    }))
    .catch((error) => {
      this.setState({
        error
      });
    })

  }

  render() {
    const { events, groups, error } = this.state;
    return (
      <div>
        <h6>User {this.state.token}</h6>
        <Link to={'/login'} > LOGIN </Link>
        <Link to={'/register'} > REGISTER </Link>
        <h1>Main Page</h1>

        <h1>Personow MainPage</h1>

        <h2>All Events</h2>
        <AllEvents events={ events } error={ error } />


        <h2>All Groups</h2>
        <AllGroups groups={ groups } error={ error } />

        <Link to={'/EventForm'} ><button>Create Event</button></Link>

      </div>
    );
  }
}
