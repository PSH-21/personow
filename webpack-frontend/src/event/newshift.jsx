import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export default class NewShift extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: moment(),
      start_time: '',
      end_time: '',
      role_id: '',
      roles: [],
      event_id: '',
      fireRedirect: false,
      error: ''
    }
  }

  componentDidMount() {
    axios.get(`/api/v1/roles/${this.props.match.params.id}`)
      .then(({ data }) => {
        this.setState({
          roles: data
        })
      })
      .catch((error) => {
        this.setState({
          error
        })
      })
  }

  submitNewShift = (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    const { start_time, end_time, role_id } = this.state;
    const event_id = this.props.match.params.id;
    const data = { start_time, end_time, role_id, event_id };
    axios.post('/api/v1/shifts', data, {headers : {'token': token}})
    .then( res => {
      this.setState({
        start_time: moment(),
        end_time: moment(),
        role_id: '',
        event_id: '',
        fireRedirect: true
      });
    })
    .catch( error => {
      this.setState({ error })
    })
  }

  handleChange = (e) => {
    debugger;
    this.setState({ role_id: e.target.value });
  }

  startTimeHandleChange = (time) => {
    this.setState({
      start_time: time
    })
  }

  endTimeHandleChange = (time) => {
    this.setState({
      end_time: time
    })
  }

  render() {
    const { fireRedirect, roles } = this.state;
    return (
      <div>
        <Link to={`/events/${this.props.match.params.id}`} > Go Back </Link>
        <div>
          <form>
            <label>
              Select Role
              <select value={this.state.value} onChange={this.handleChange}>
                  <option value=''></option>
                {
                  !!roles.length ?
                    (
                        roles.map(role => {
                          return (
                            <option key={role.id} value={role.id}>{role.title}</option>
                          )
                        })
                    ) :
                  <div>Loading</div>
                }
              </select>
            </label>

            <label>
              Start Time
              <DatePicker
                selected={this.state.start_time}
                onChange={this.startTimeHandleChange}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                dateFormat="LLL"
              />
            </label>
            <label>
              End Time
              <DatePicker
                selected={this.state.end_time}
                onChange={this.endTimeHandleChange}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                dateFormat="LLL"
              />
            </label>
            <input type="submit" value="Submit" onClick={this.submitNewShift}/>
            {fireRedirect && (<Redirect to={'/'} />)}
          </form>
        </div>
      </div>
    );
  }
}