import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import AllEvents from './event/AllEvents.jsx';

export default class Main extends Component {

  render() {
    return (
        <div>
          <h1>Main Page</h1>

          <h1>Personow MainPage</h1>

          <h2>Events and Groups</h2>
          <AllEvents />
        </div>
    );
  }
}
