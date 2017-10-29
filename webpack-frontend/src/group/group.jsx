import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

export default class Group extends Component {
  constructor(props) {
    super(props);
    this.state = {
      group: '',
      error: '',
      fireRedirect: false,
    }
  }
  componentDidMount() {
    const token = localStorage.getItem('token');
    axios.get(`/api/v1/groups/${this.props.match.params.id}`, {headers: {'token': token}})
      .then(({ data }) => {
        this.setState({
          group: data
        })
      })
      .catch((error) => {
        this.setState({
          error
        })
      })
  }
  joinGroup = (e) => {
    e.preventDefault();
    // const user_id = localStorage.getItem('user_id');
    const token = localStorage.getItem('token')
    // const { group_id } = this.state;
    // const data = { user_id, group_id };
    console.log('stop');
    axios.post(`/api/v1/group-members/${this.props.match.params.id}`, {headers : {'token': token}})
    .then( res => {
      console.log('success');
      this.setState({
        fireRedirect: true
      });
    })
    .catch( error => {
      this.setState({ error })
    })
  }

  render() {
    const { group, fireRedirect, error } = this.state;
    return (
      <div>
        <h1>Hello from Group</h1>
        <Link to={'/'} > Go Back </Link>
        <div>
          {
            !!group ?
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Member?</th>
                  </tr>
                </thead>
                <tbody>
                  <tr key={group.id}>
                    <td>{group.name}</td>
                    <td>{group.description}</td>
                    <td><button type="submit" onClick={this.joinGroup}>Join</button></td>
                    {fireRedirect && (<Redirect to={'/'} />)}
                  </tr>
                </tbody>
              </table> :
              <div>Loading</div>
          }
          {error && <div>{error}</div>}
        </div>
      </div>
    );
  }
}