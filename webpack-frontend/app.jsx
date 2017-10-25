import React, { Component } from 'react'

import Navigationbar from './src/navigationbar.jsx'
import Users from './src/user/users.jsx'
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