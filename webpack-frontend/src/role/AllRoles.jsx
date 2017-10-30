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
    const { allroles = [], error = '' } = this.props;
    return (
      <div>
        {
          !!allroles.length ?
            <table>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {
                  allroles.map(role => {
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