import React, { Component } from 'react';
import axios from 'axios';

export default class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: '',
      users: []
    };
  }

  componentDidMount() {
    axios.get('/users.json')
    .then( ({ data }) => {
      this.setState({
        users: data
      });
    })
    .catch( (error) => {
      this.setState({
        error
      });
    });
  }

  render() {
    const users = this.state.users.map(user => {
      return <li>{user.name}</li>
    });

    return (
      <div>
        {
          this.state.users.length === 0 ?
          <div>Loading</div> :
          <div>{ users }</div>
        }
        { this.state.error && <div>{ error }</div>}
      </div>
    );
  }
}