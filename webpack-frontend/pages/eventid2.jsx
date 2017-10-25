import React, { Component } from 'react'

export default class Eventid2 extends Component {
  render() {
    return (
      <div>
        <p><i>As viewed by event owner.</i></p>
        <h1>Family Garage Sale</h1>
        <p>Description of the event, whatever the coordinator
    wishes to share with volunteers / potential volunteers.
  </p>
        <p><a href="#">Edit/Update</a> (button switches description to editable field and back.)</p>
        <h2>Shifts</h2>

        <ul>
          <li>
            Oct 22
      <ul>
              <li>General Volunteer: 10am - 6pm: Charlie Horse <a href="#">Cancel Shift</a></li>
              <li>General Volunteer: 10am - 6pm: Dan D. <a href="#">Cancel Shift</a></li>
            </ul>
          </li>
        </ul>


        <p>
          <a href="#">Create shifts </a><i>Opens form on page to add a shift.</i>
        </p>
        <p>
          <a href="#">Cancel Event</a><i>(Click: Confirmation? -yes- -no-)</i>
        </p>
        <p>
          <a href="../index.html">Back</a>
        </p>
      </div>
    );
  }
}