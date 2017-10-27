import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Group extends Component {
  constructor(props) {
    super(props);
    this.state = {
      group: '',
      error: ''
    }
  }
  componentDidMount() {
    console.log('id is: ', this.props.match.params.id);
    axios.get(`/api/v1/groups/${this.props.match.params.id}`)
      .then(({ data }) => {
        debugger;
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


  render() {
    const { group, error } = this.state;
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
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{group.name}</td>
                    <td>{group.description}</td>
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