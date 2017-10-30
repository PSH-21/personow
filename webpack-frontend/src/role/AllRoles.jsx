import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
export default class AllRoles extends Component {
  // static PropTypes = {
  //  shifts: PropTypes.array
  // }
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     error: '',
  //     events: props.events || []
  //   }
  // }

  render() {
    console.log('Arrived');
    const { roles = [], error = '' } = this.props;
    console.log(roles);
    return (
      <div>
        {
          !!roles.length ?
            <table>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {
                  roles.map(role => {
                    return (
                      <tr>
                        <td>{role.title}</td>
                        <td>{role.description}</td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table> :
            <div>Loading</div>
        }
        {error && <div>{error}</div>}
      </div>
    );
  }
}