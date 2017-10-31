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
      role_id: 3,
      event_id: '',
      fireRedirect: false,
      error: ''
    }
  }

  submitNewShift = (e) => {
    e.preventDefault();
    const { start_time, end_time, role_id } = this.state;
    const event_id = this.props.match.params.id;
    const data = { start_time, end_time, role_id, event_id };
    axios.post('/api/v1/shifts', data)
    .then( res => {
      this.setState({
        start_time: moment(),
        end_time: moment(),
        event_id: '',
        fireRedirect: true
      });
    })
    .catch( error => {
      this.setState({ error })
    })


  }

  handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({ [name]: value });
  }

  startTimeHandleChange = (time) => {
    this.setState({
      start_time: time
    });
  }

  endTimeHandleChange = (time) => {
    this.setState({
      end_time: time
    });
  }

  render() {
    const { fireRedirect } = this.state;
    return (
      <div>
        <div>
          <form>
            <label>Start Time</label>
            <DatePicker
              selected={this.state.start_time}
              onChange={this.startTimeHandleChange}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
              dateFormat="LLL"
            />;

            <label>End Time</label>
            <DatePicker
              selected={this.state.end_time}
              onChange={this.endTimeHandleChange}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
              dateFormat="LLL"
            />;
            <input type="submit" value="Submit" onClick={this.submitNewShift}/>
            {fireRedirect && (<Redirect to={'/'} />)}
          </form>
        </div>
      </div>
    );
  }
}