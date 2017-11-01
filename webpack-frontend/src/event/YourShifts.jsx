import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
export default class YourShifts extends Component {
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

    const { shifts = [], error = '', token = '' } = this.props;
    return (
      <div>
        {
          shifts.length === 0 || !token ? <div>You currently have no shifts scheduled</div> :
            <table>
              <thead>
                <tr>
                  <th>Event</th>
                  <th>Role</th>
                  <th>Start Time</th>
                  <th>End Time</th>
                </tr>
              </thead>
              <tbody>
                {
                  shifts.map(shift => {
                    return (
                      <tr key={shift.id}>
                        <td><Link to={`/events/${shift.event_id}`} params={{id: shift.event_id}}>{shift.event_title}</Link></td>
                        <td>{shift.role_title}</td>
                        <td>{ moment(shift.start_time).format("hh:mm A, MMM Do") }</td>
                        <td>{ moment(shift.end_time).format("hh:mm A, MMM Do") }</td>
                      </tr>
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