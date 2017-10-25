import React, { Component } from 'react'

export default class User extends Component {
  render() {
    return (
      <div>
        <h1>Regular old Profile</h1>
        <p>Edit Name:</p>
        <p>Change Password:</p>
        <p>Change PW Confirm:</p>
        <p>Global Notification Settings:</p>
        <ul>
          <li>Y/N - Send email with event notices</li>
          <li>Y/N - Send email with schedule changes</li>
        </ul>
        <p><a href="index.html">"Back"</a></p>

        <h3>Your groups and events</h3>
        <p>Group Name - <a href="#">Leave Group</a></p>
        <ul>
          <li>Individual Notification settings</li>
        </ul>
        <p>Group Name - Creator <a href="#">Leave Group</a> <a href="#">Close Group</a></p>
        <ul>
          <li>Individual Notification settings</li>
        </ul>
        <p>Event Name - <a href="#">Leave Event</a></p>
        <ul>
          <li>Individual Notification settings</li>
        </ul>
        <p>Event Name - <a href="#">Leave Event</a></p>
        <ul>
          <li>Individual Notification settings</li>
        </ul>
      </div>
    );
  }
}