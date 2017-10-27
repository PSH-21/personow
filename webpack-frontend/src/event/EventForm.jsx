import React, { Component } from 'react';
import { Button, FormGroup, ControlLabel, FormControl, ButtonToolbar, HelpBlock } from 'react-bootstrap';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

export default class EventForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      start_date: '',
      end_date: '',
      fireRedirect: false,
      error: ''
    }
  }
  submitNewEvent = (e) => {
    e.preventDefault();
    const { title, description, start_date, end_date } = this.state;
    const data = { title, description, start_date, end_date };
    axios.post('/api/v1/events', data)
    .then( res => {
      this.setState({
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

  handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
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
            <input type="text" name="title" value={this.state.title} onChange={this.handleChange} placeholder="Event Name.." />
            </label>
             <label>
              Event Description:
             <input type="text" name="description" value={this.state.description} onChange={this.handleChange} placeholder="Event Description" />
            </label>
            <label>
              Event From:
             <input type="datetime" name="start_date" value={this.state.start_date} onChange={this.handleChange} placeholder="YYYY-MM-DD 00:00:00" />
            </label>
            <label>
              Event To:
             <input type="datetime" name="end_date" value={this.state.end_date} onChange={this.handleChange} placeholder="YYYY-MM-DD 00:00:00" />
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
