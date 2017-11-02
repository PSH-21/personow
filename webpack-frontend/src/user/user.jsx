import React, { Component } from 'react'
import axios from 'axios';
import YourGroups from '../group/YourGroups.jsx';

export default class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      yourGroups: [],
      error: ''
    }
  }
  componentDidMount() {
    const token = localStorage.getItem('token');
    console.log(token);
    axios.all([
      axios.get('/api/v1/user', { 'headers': { 'token': token }}),
      axios.get('/api/v1/your-groups', { 'headers': { 'token': token } }),
    ])
    .then(axios.spread((user, yourGroups ) => {
      console.log(user.data);
      this.setState({
        user: user,
        yourGroups: yourGroups.data
      });
    }))
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
    const { user = '', yourGroups= [], error = '' } = this.state;
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
        <h4>Your Groups</h4>
        { yourGroups.length === 0 ? <div>You are not currently a part of any groups!</div> :
          <YourGroups yourGroups={ yourGroups } error={ error } />
        }


      </div>
    );
  }
}