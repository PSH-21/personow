import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
export default class YourEvents extends Component {
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
    const { yourEvents = [], error = '' } = this.props;

    return (
      <div>
        {
          yourEvents.length === 0 ? <div>You have not created any events</div> :
            <table>
              <thead>
                <tr>
                  <th>Event</th>
                  <th>Group</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th>Shifts Status</th>
                </tr>
              </thead>
              <tbody>
                {
                  yourEvents.map(event => {
                    return (
                        <tr key={event.id}>
                          <td><Link to={`/events/${event.id}`} params={{id: event.id}}>{event.name}</Link></td>
                            <td>{event.group}</td>
                            <td>{ moment(event.start_date).format('hh:mm A, MMM Do') }</td>
                            <td>{ ( moment(event.start_date).format('hh:mm, MMM Do') !==
                                moment(event.end_date).format('MMM Do')
                              ) && (` to ${moment(event.end_date).format('MMM Do')}`)
                            }
                          </td>
                          <td>{event.avail} of {event.total} shifts have yet to be filled.</td>
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