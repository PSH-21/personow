/* eslintrc: { 'children' is missing in props validation = false } */
import React, { Component } from 'react'

import Navigationbar from './pages/navigationbar.jsx'

export default class App extends Component {
  render() {
    return (
      <div>
        <Navigationbar />
        {this.props.children}
      </div>
    );
  }
}