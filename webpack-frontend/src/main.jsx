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
      axios.get('/events.json'),  
      axios.get('/groups.json')
    ])
    .then(axios.spread((events, groups) => {
      this.setState({
        events: events.data,
        groups: groups.data
      });
    }))
    .catch((error) => {
      this.setState({
        error
      });
    })


  }

  render() {
    return (
      <div>
        <Link to={'/login'} > LOGIN </Link>
        <h1>Main Page</h1>

        <h1>Personow MainPage</h1>

        <h2>All Events</h2>
        <AllEvents { ...this.state  } />

        <h2>All Groups</h2>
        <AllGroups { ...this.state  } />
      </div>
    );
  }
}
