import React, { Component } from 'react'

import Navigationbar from './pages/navigationbar.jsx'
import Users from './pages/users.jsx'
export default class App extends Component {
  constructor() {
    super();
    this.state = {}
  }

  render() {
    return (
      <div>
        <Navigationbar />
        <Users />
        {this.props.children}
      </div>
    );
  }
}