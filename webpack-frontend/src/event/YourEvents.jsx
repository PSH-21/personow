import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
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
    console.log(yourEvents);
    return (
      <div>
        {
          !!yourEvents.length ?
            <table>
              <tbody>
                {
                  yourEvents.map(event => {
                    return (
                      <tr key={event.id}>
                        <td><Link to={`/events/${event.id}`} params={{id: event.id}}>{event.name}</Link>:  {event.group}</td>
                      </tr>
                      <tr>
                        <td>{event.avail} of {event.total} shifts have yet to be filled.</td>
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