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
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                </tr>
              </thead>
              <tbody>
                {
                  yourEvents.map(event => {
                    return (
                      <tr key={event.id}>
                        <td><Link to={`/events/${event.id}`} params={{id: event.id}}>{event.title}</Link></td>
                        <td>{event.description}</td>
                        <td>{event.start_date}</td>
                        <td>{event.end_date}</td>
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