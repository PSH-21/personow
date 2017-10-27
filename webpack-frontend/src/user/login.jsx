import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import axios from 'axios';
import { Redirect } from 'react-router-dom';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      fireRedirect: false,
      error: ''
    }
  }

  submitLogin = (e) => {
    e.preventDefault();
    console.log('state is: ', this.state, 'Event is: ', e);
    const { email, password } = this.state;
    const data = { email, password }
    axios.post('/api/v1/login', data)
    .then( res => {
      console.log('response from rails: ', res);
      this.setState({
        fireRedirect: true
      });
    })
    .catch( error => {
      this.setState({ error })
    })
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
        <h1>Regular old Login form</h1>
        <form>
          <label>
            Email:
           <input type="email" name="email" value={this.state.email} onChange={this.handleChange} placeholder="" />
          </label>
          <label>
            Password
           <input type="password" name="password" value={this.state.password} onChange={this.handleChange} placeholder="" />
          </label>

          <input type="submit" onClick={this.submitLogin} value="Submit"/>
          {fireRedirect && (<Redirect to={'/'} />)}
        </form>
        <Link to='/'>
          <Button bsStyle='success'>Back</Button>
        </Link>
      </div>
    );
  }
}