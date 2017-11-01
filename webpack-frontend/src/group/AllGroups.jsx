import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
export default class AllGroups extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groups: '',
      error: ''
    }
  }

  componentDidMount() {
    axios.get('/api/v1/groups')
      .then(({ data }) => {
        console.log(data);
        this.setState({
          groups: data
        })
      })
      .catch((error) => {
        this.setState({
          error
        })
      })
  }

  render() {

    const { groups, error } = this.props;

    return (
      <div>
        <h2>All Groups</h2>
        {
          !!groups.length ?
          <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {
                  groups.map(group => {
                    return (
                      <tr key={group.id}>
                        <td><Link to={`/groups/${group.id}`} params={{id: group.id}}>{group.name}</Link></td>
                        <td>{group.description}</td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>:
            <div>Loading</div>
        }
        {error && <div>{error}</div>}
      </div>
    );
  }
}