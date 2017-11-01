import React, { Component } from 'react'
import axios from 'axios';

export default class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // user: '',
      // error: ''
    }
  }
  componentDidMount() {
    const token = localStorage.getItem('token');
    console.log(token);
    axios.get('/api/v1/user', { 'headers': { 'token': token }})
    .then((user) => {
      // const token = localStorage.getItem('token');
      console.log(user.data);
      this.setState({
        user: user.data,
        // token
      });
    })
    .catch((error) => {
      this.setState({
        error
      });
    })

  }

  // componentDidMount() {
  //   console.log('user is: ', this.state.user);
  //   //axios.get(`/api/v1/groups/${this.props.match.params.id}`)
  // //     .then(({ data }) => {
  // //       debugger;
  // //       this.setState({
  // //         group: data
  // //       })
  // //     })
  // //     .catch((error) => {
  // //       this.setState({
  // //         error
  // //       })
  // //     })
  // }
  // User {this.state.token}, Email: {this.state.email},User_id: {this.state.user_id}
  render() {
    console.log('user is: ', this.state.user);
    return (

      <div>
        <h1>Profile</h1>
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