import React, { Component } from 'react'

import Navigationbar from './pages/navigationbar.jsx'

export default class App extends Component {
  constructor() {
    super();
    this.state = {}
  }

  render() {
    return (
      <div>
        <Navigationbar />
        {this.props.children}
      </div>
    );
  }
}