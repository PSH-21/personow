import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { Button, FormGroup, ControlLabel, FormControl, ButtonToolbar, HelpBlock } from 'react-bootstrap';
import axios from 'axios';

export default class EventForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      EventName: '',
      EventDescription: '',
      EventFrom: '',
      EventTo: '',
      fireRedirect: false,
      error: ''
    }
  }
  submitNewEvent = (e) => {
    e.preventDefault();
    console.log('state is: ', this.state, 'Event is: ', e);
    const { EventName, EventDescription, EventFrom, EventTo } = this.state;
    const data = { EventName, EventDescription, EventFrom, EventTo }
    axios.post('/api/v1/NewEvent', data)
    .then( res => {
      console.log('response from rails: ', res);
    })
    .catch( error => {
      this.setState({ error })
    })

    this.setState({
      EventName: '',
      EventDescription: '',
      EventFrom: '',
      EventTo: '',
      fireRedirect: true
    });

  }

  getInitialState() {
    return {
      value: ''
    };
  }

  handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    console.log('value is: ', value);
    console.log('name is: ', name);
    this.setState({ [name]: value });
  }

  render() {
    const { fireRedirect } = this.state;
    return (
      <div>
        <div>
          <form>
            <label>
              Event Name:
            <input type="text" name="EventName" value={this.state.EventName} onChange={this.handleChange} placeholder="Event Name.." />
            </label>
             <label>
              Event Description:
             <input type="text" name="EventDescription" value={this.state.EventDescription} onChange={this.handleChange} placeholder="Event Description" />
            </label>
            <label>
              Event From:
             <input type="date" name="EventFrom" value={this.state.EventFrom} onChange={this.handleChange} placeholder="MM/DD/YYYY" />
            </label>
            <label>
              Event To:
             <input type="date" name="EventTo" value={this.state.EventTo} onChange={this.handleChange} placeholder="MM/DD/YYYY" />
            </label>
            <input type="submit" onClick={this.submitNewEvent} value="Submit" />
          </form>
        </div>
        {fireRedirect && (<Redirect to={'/'} />)}
      </div>
    );
  }
}


//<ButtonToolbar>
  //<Button bsStyle="primary" bsSize="large" onClick={this.clicked} >Submit</Button>
//</ButtonToolbar>
