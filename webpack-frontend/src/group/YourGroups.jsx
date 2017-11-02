import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import axios from 'axios';
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
  deleteGroupOnClick = (id, e) => {
    e.preventDefault();
    const group_id = id;
    const token = localStorage.getItem('token');
    console.log(group_id);
    // axios.delete(`/api/v1/group/${group_id}`, {'headers': {'token': token}});
    // this.props.deleteShiftFromState(group_id);
  }

  leaveGroupOnClick = (id, e) => {
    e.preventDefault();
    const group_id = id;
    const token = localStorage.getItem('token');
    console.log(group_id);
    axios.post(`/api/v1/group-members/${group_id}`, {}, {'headers': {'token': token}})
    .then( res => {
      axios.get(`/api/v1/your-groups`, {headers : {'token': token}})
      .then(({ data }) => {
        this.setState({
          yourGroups: data
        })
      })
      .catch((error) => {
        this.setState({
          error
        })
      })
    })
    .catch( error => {
      this.setState({ error })
    })
  }

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
                                <Link to={`/user`} onClick={(e) => this.deleteGroupOnClick(group.id, e)}>Close Group</Link>
                              </div> ) : (
                              <div>
                                <span>  Member  </span>
                                <Link to={`/user`} onClick={(e) => this.leaveGroupOnClick(group.id, e)}>Leave Group</Link>
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