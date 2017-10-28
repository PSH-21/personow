import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class OneEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      event: '',
      error: ''
    }
  }

  componentWillMount() {
    axios.get(`/api/v1/events/${this.props.match.params.id}`)
      .then(({ data }) => {
        this.setState({
          event: data
        })
      })
      .catch((error) => {
        this.setState({
          error
        })
      })
  }

  render() {
    const { event, error } = this.state;
    return (
      <div>
        <h1>Hello from event</h1>
        <Link to={'/'} > Go Back </Link>
        <div>
          {
            !!event ?
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
                  <tr>
                    <td>{event.title}</td>
                    <td>{event.description}</td>
                    <td>{event.start_date}</td>
                    <td>{event.end_date}</td>
                  </tr>
                </tbody>
              </table> :
              <div>Loading</div>
          }
          {error && <div>{error}</div>}
        </div>

      </div>
    );
  }
}