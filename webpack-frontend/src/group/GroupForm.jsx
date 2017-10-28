import React, { Component } from 'react';
import { Button, FormGroup, ControlLabel, FormControl, ButtonToolbar, HelpBlock } from 'react-bootstrap';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

export default class EventForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      fireRedirect: false,
      error: ''
    }
  }
  submitNewGroup = (e) => {
    e.preventDefault();
    const { name, description } = this.state;
    const data = { name, description };
    axios.post('/api/v1/groups', data)
    .then( res => {
      this.setState({
        name: '',
        description: '',
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
              Group Name:
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} placeholder="Group Name.." />
            </label>
             <label>
              Group Description:
             <input type="text" name="description" value={this.state.description} onChange={this.handleChange} placeholder="Group Description" />
            </label>
            <input type="submit" value="Submit" onClick={this.submitNewGroup}/>
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
