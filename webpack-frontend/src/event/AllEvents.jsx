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
      error: '',
      events: []
    }
  }
  componentDidMount() {
    axios.get('/events.json')
      .then(({ data }) => { console.log('data check' + data);
        this.setState({
          events: data
        });
      })
      .catch((error) => {
        this.setState({
          error
        });
      });
  }
  render() {
    const events = this.state.events.map(event => {
      return (
        <tr>
            <td>{event.title}</td>
            <td>{event.description}</td>
            <td>{event.start_date}</td>
            <td>{event.end_date}</td>
        </tr>
      );
    });

    return (
      <div>
        {
          this.state.events.length === 0 ?
            <div>Loading</div> :
            <table>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Start Date</th>
                <th>End Date</th>
              </tr>
              {events}
            </table>
        }
        {this.state.error && <div>{error}</div>}
      </div>
    );
  }
}