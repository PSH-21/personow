import React, { Component } from 'react';
import { Button, FormGroup, ControlLabel, FormControl, ButtonToolbar, HelpBlock } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import moment from 'moment';

export default class EventForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groups: [],
      event_id: '',
      title: '',
      description: '',
      start_date: '',
      end_date: '',
      fireRedirect: false,
      error: ''
    }
  }

  componentWillMount() {
    const token = localStorage.getItem('token');
    axios.get(`/api/v1/user-groups`, {headers: {'token': token}})
      .then(({ data }) => {
        this.setState({
          groups: data
        })
      })
      .catch((error) => {
        this.setState({
          error
        })
      })
  }

  submitNewEvent = (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    const { title, description, start_date, end_date, group_id } = this.state;
    const data = { title, description, start_date, end_date, group_id };
    axios.post('/api/v1/events', data, {headers: {'token': token}})
    .then( res => {
      if (res.data.status === 'error') {
        console.log(res.data.message);
        next();
      }
      this.setState({
        event_id: res.data.event_id,
        groups: [],
        group_id: '',
        title: '',
        description: '',
        start_date: '',
        end_date: '',
        fireRedirect: true
      });
    })
    .catch( error => {
      this.setState({ error })
    })
  }

  dateHandleChange = (e) => {
    this.setState({ group_id: e.target.value });
  }

  textHandleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({ [name]: value });
  }


  startTimeHandleChange = (dateTime) => {
    this.setState({
      start_date: dateTime
    })
  }

  endTimeHandleChange = (dateTime) => {
    this.setState({
      end_date: dateTime
    })
  }

  render() {
    const { groups, fireRedirect, event_id } = this.state;

    return (
      <div>
        <div>
          <form>
            <label>
              Select Group
              <select value={this.state.value} onChange={this.dateHandleChange}>
                  <option value=''></option>
                {
                  ( groups.length === 0 ) ? <div>Loading</div> :
                    (
                        groups.map(group => {
                          return (
                            <option key={group.id} value={group.id}>{group.name}</option>
                          )
                        })
                    )
                }
              </select>
            </label>
            <label>
              Event Name:
            <input type="text" name="title" value={this.state.title} onChange={this.textHandleChange} placeholder="Event Name.." />
            </label>
             <label>
              Event Description:
             <input type="text" name="description" value={this.state.description} onChange={this.textHandleChange} placeholder="Event Description" />
            </label>
            <label>
              Event Time & Date
              <DatePicker
                selected={this.state.start_date}
                onChange={this.startTimeHandleChange}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                dateFormat="LLL"
              />
            </label>
            <label>
              Event End Time & Date
              <DatePicker
                selected={this.state.end_date}
                onChange={this.endTimeHandleChange}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                dateFormat="LLL"
              />
            </label>

            <input type="submit" value="Submit" onClick={this.submitNewEvent}/>
            {fireRedirect && (<Redirect to={`/events/${event_id}`} />)}
          </form>
        </div>
      </div>
    );
  }
}


//<ButtonToolbar>
  //<Button bsStyle="primary" bsSize="large" onClick={this.clicked} >Submit</Button>
//</ButtonToolbar>
