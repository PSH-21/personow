import React, { Component } from 'react';
import { Button, FormGroup, ControlLabel, FormControl, ButtonToolbar, HelpBlock } from 'react-bootstrap';

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
    console.log('state is: ', this.state, 'Event is: ', e);
    const { title, description, start_date, end_date } = this.state;
    const data = { title, description, start_date, end_date }
  axios.post('/api/v1/events/new', data)
  .then( res => {
    console.log('response from rails: ', res);
  })
  .catch( error => {
    this.setState({ error })
  })    
    
    // this.setState({       
    //   title: '',
    //   description: '',
    //   start_date: '',
    //   end_date: '',
    //   fireRedirect: true
    // });
  
  }

  handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    console.log('value is: ', value);
    console.log('name is: ', name);
    this.setState({ [name]: value });
  }

  render() {
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
             <input type="text" name="start_date" value={this.state.start_date} onChange={this.handleChange} placeholder="YYYY-MM-DD 00:00:00" />
            </label>
            <label>
              Event To:
             <input type="text" name="end_date" value={this.state.end_date} onChange={this.handleChange} placeholder="YYYY-MM-DD 00:00:00" />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}


//<ButtonToolbar>
  //<Button bsStyle="primary" bsSize="large" onClick={this.clicked} >Submit</Button>
//</ButtonToolbar>
