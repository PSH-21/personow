import React, { Component } from 'react'

import Navigationbar from './src/navigationbar.jsx'
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      renderAll: false
    }
  }


  render() {
    return (
      <div>
        <Navigationbar  />
        
        {this.props.children}
      </div>
    );
  }
}