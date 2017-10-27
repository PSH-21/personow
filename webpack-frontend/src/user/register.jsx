import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import axios from 'axios';
import { Redirect } from 'react-router-dom';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
      fireRedirect: false,
      error: ''
    }
  }

  submitNewUser = (e) => {
    e.preventDefault();
    console.log('state is: ', this.state, 'Event is: ', e);
    const { name, email, password, password_confirmation } = this.state;
    const data = { name, email, password, password_confirmation }
    axios.post('/api/v1/register', data)
    .then( res => {
      console.log('response from rails: ', res);
      this.setState({
        fireRedirect: true
      });

    })
    .catch( error => {
      this.setState({ error })
    })

  // this.setState({
  //   EventName: '',
  //   EventDescription: '',
  //   EventFrom: '',
  //   EventTo: '',
  //   fireRedirect: true
  // });

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
        <h1>Regular old Register form</h1>
        <form>
          <label>Name:</label>
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange} placeholder="" />
           <label>
            Email:
           <input type="email" name="email" value={this.state.email} onChange={this.handleChange} placeholder="" />
          </label>
          <label>
            Password
           <input type="password" name="password" value={this.state.password} onChange={this.handleChange} placeholder="" />
          </label>
          <label>
            Password Confirmation
           <input type="password" name="password_confirmation" value={this.state.password_confirmation} onChange={this.handleChange} placeholder="" />
          </label>
          <input type="submit" onClick={this.submitNewUser} value="Submit"/>
          {fireRedirect && (<Redirect to={'/'} />)}
        </form>
        <Link to='/'>
          <Button bsStyle='success'>Back</Button>
        </Link>
      </div>
    );
  }
}