import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import AllShifts from './AllShifts.jsx';
import AllRoles from '../role/AllRoles.jsx';

export default class OneEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      event: [],
      allshifts: [],
      allroles: [],
      error: ''
    }
  }

  componentWillMount() {
    const token = localStorage.getItem('token');
    axios.all([
      axios.get(`/api/v1/events/${this.props.match.params.id}`),
      axios.get(`/api/v1/shifts/${this.props.match.params.id}`),
      axios.get(`/api/v1/roles/${this.props.match.params.id}`)
    ])
    .then(axios.spread((event, allshifts, allroles) => {
      this.setState({
          event: event.data,
          allshifts: allshifts.data,
          allroles: allroles.data
        })
      }))
      .catch((error) => {
        this.setState({
          error
        })
      })
  }

  render() {
    const { event, allshifts, allroles, error } = this.state;
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

        {
         !!allroles ? <AllRoles allroles={ allroles } error={ error } /> : <div>Loading</div>
        }
        {
         !!allshifts ? <AllShifts allshifts={ allshifts } error={ error } /> : <div>Loading</div>
        }
        {
        event.id ?
        (<Link to={`/newshift/${event.id}`} ><button>Add Shift</button></Link>)
        : <div>Loading</div>
        }
      </div>
    );
  }
}