import React, { Component } from 'react';
import { Button, FormGroup, ControlLabel, FormControl, ButtonToolbar, HelpBlock } from 'react-bootstrap';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import moment from 'moment';

export default class EventForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groups: [],
      title: '',
      description: '',
      start_date: '',
      end_date: '',
      fireRedirect: false,
      error: ''
    }
  }

  componentDidMount() {
    axios.get(`/api/v1/user-groups`)
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
    const { title, description, start_date, end_date } = this.state;
    const data = { title, description, start_date, end_date };
    axios.post('/api/v1/events', data, {headers: {'token': token}})
    .then( res => {
      this.setState({
        groups: [],
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
    this.setState({ role_id: e.target.value });
  }

  textHandleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({ [name]: value });
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
    const { groups, fireRedirect } = this.state;

    return (
      <div>
        <div>
          <form>
            <label>
              Select Group
              <select value={this.state.value} onChange={this.dateHandleChange}>
                  <option value=''></option>
                {
                  groups.length === 0 ? <div>Loading</div> :
                    (
                        roles.map(role => {
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
                selected={this.state.start_time}
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
                selected={this.state.end_time}
                onChange={this.endTimeHandleChange}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                dateFormat="LLL"
              />
            </label>

            <input type="submit" value="Submit" onClick={this.submitNewEvent}/>
            {fireRedirect && (<Redirect to={'/'} />)}
          </form>
        </div>
      </div>
    );
  }
}


//<ButtonToolbar>
  //<Button bsStyle="primary" bsSize="large" onClick={this.clicked} >Submit</Button>
//</ButtonToolbar>
