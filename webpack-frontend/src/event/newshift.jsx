import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

export default class NewShift extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
        start_time: '',
        end_time: '',
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

  render() {
    const { fireRedirect } = this.state;
    debugger;
    return (
      <div>
        <div>
          <form>
            <label>
              Shift Start Time:
            <input type="time" name="start_time" value={this.state.start_time} onChange={this.handleChange} />
            </label>
             <label>
              Shift End Time:
             <input type="time" name="end_time" value={this.state.end_time} onChange={this.handleChange}  />
            </label>
            <input type="submit" value="Submit" onClick={this.submitNewShift}/>
            {fireRedirect && (<Redirect to={'/'} />)}
          </form>
        </div>
      </div>
    );
  }
}