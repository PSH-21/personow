import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
export default class YourGroups extends Component {
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
    const { yourGroups = [], error = '' } = this.props;
    return (
      <div>
        {
          yourGroups.length === 0 ? <div>You have not created or are a part of any groups</div> :
            <table>
              <thead>
                <th></th>
              </thead>
              <tbody>
                {
                  yourGroups.map(group => {
                    return (
                      <div key={group.id}>
                        <tr>
                          <td><Link to={`/groups/${group.id}`} params={{id: group.id}}>{group.name}</Link></td>
                          <td>
                            <div>
                              { group.creator ? (
                              <div>
                                <span>  Creator </span>
                                <span onClick={(e) => this.deleteOnClick(shift.id, e)}>Close Group</span>
                              </div> ) : (
                              <div>
                                <span>  Member  </span>
                                <span onClick={(e) => this.deleteOnClick(shift.id, e)}>Close Group</span>
                              </div> )
                              }
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td></td>
                        </tr>
                      </div>

                    )
                  })
                }
              </tbody>
            </table>

        }
        {error && <div>{error}</div>}
      </div>
    );
  }
}