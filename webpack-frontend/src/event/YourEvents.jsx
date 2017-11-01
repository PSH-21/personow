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
              <tbody>
                {
                  yourEvents.map(event => {
                    return (
                      <div key={event.id}>
                        <tr>
                          <td><Link to={`/events/${event.id}`} params={{id: event.id}}>{event.name}</Link>,
                            {event.group},
                            { moment(event.start_date).format("hh:mm A, MMM Do") }
                            { ( moment(event.start_date).format("MMM Do") !==
                                moment(event.end_date).format("MMM Do")
                              ) && (` to ${moment(event.end_date).format("MMM Do")}`)
                            }
                          </td>
                        </tr>
                        <tr>
                          <td>{event.avail} of {event.total} shifts have yet to be filled.</td>
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