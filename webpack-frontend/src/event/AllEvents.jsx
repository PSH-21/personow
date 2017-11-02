import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class AllEvents extends Component {
  // static PropTypes = {
  // 	shifts: PropTypes.array
  // }
  constructor(props) {
    super(props);
    this.state = {
       events: [],
      error: ''
    }
  }

  componentDidMount() {
    const token = localStorage.getItem('token');
    axios.get('/api/v1/events', {headers: {'token': token}})
      .then(({ data }) => {
        this.setState({
          events: data
        })
      })
      .catch((error) => {
        this.setState({
          error
        })
      })
  }


  render() {

    const { events, error } = this.state;
    return (
      <div>
        {
          events.length === 0 ? <div>No Events Are Currently Scheduled</div> :
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
                  events.map(event => {
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
            </table>

        }
        {error && <div>{error}</div>}
      </div>
    );
  }
}