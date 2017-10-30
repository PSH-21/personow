import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
export default class AllShifts extends Component {
  // static PropTypes = {
  //  shifts: PropTypes.array
  // }
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     error: '',
  //     events: props.events || []
  //   }
  // }

  render() {
    const { allshifts = [], error = '' } = this.props;
    //console.log(allshifts);
    return (
      <div>

      </div>
    );
  }
}