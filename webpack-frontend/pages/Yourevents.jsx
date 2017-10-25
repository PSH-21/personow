import React, { Component } from 'react';


export default class Yourevents extends Component {
  
  render() {
    return (
      <div>
        <p><i>As viewed by anonymous visitor.</i></p>
        <h1>Hamlet</h1>
        <h4>A LHTheatre Event.</h4>
        <p>Description of the event, whatever the coordinator
          wishes to share with volunteers / potential volunteers.
        </p>
        <h2>Shifts</h2>
        <p>
          Sign in or Sign up to join our event!
        </p>  
        <ul>
          <li>
            Oct 23
            <ul>
              <li>Door: 6pm - 10pm: |--OPEN--|</li>
            </ul>
          </li>
          <li>
            Oct 24
            <ul>
              <li>Bar: 6pm - 10pm: |--OPEN--|</li>
              <li>Door: 6pm - 10pm: |--OPEN--|</li>
              <li>Door: 6pm - 10pm: |--OPEN--|</li>
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}