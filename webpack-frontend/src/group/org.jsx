import React, { Component } from 'react'
import EventForm from '../event/EventForm.jsx'
// import Yourevents from './Yourevents.jsx'
import { Link } from 'react-router-dom'


export default class Org extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
        <div>
          <Link to={'/your-events'} > Click Me! </Link>
            {/* <Yourevents /> */}
            <EventForm />
        </div>
    );
  }
}