import React, { Component } from 'react';
import Eventform from './Eventform.jsx'


export default class Org extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div>
        <div>
          <Eventform />
        </div>
      </div>
    );
  }
}


