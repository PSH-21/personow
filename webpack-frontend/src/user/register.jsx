import React, { Component } from 'react'

import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

export default class Register extends Component {
  render() {
    return (
      <div>
        <h1>Regular old Register form</h1>
        <form>
          <label>Name:</label>
          <input type="text" name="Name" placeholder="" />
           <label>
            Email:
           <input type="email" name="Email" placeholder="" />
          </label>
          <label>
            Password
           <input type="password" name="Password" placeholder="" />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <Link to='/'>
          <Button Style='success'>Back</Button>
        </Link>
      </div>
    );
  }
}