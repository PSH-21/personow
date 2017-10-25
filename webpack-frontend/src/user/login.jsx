import React, { Component } from 'react'

import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

export default class Login extends Component {
  render() {
    return (
      <div>
        <h1>Regular old Login form</h1>
        <p>Email:</p>
        <p>Password:</p>
        <p><a href="index.html">"Login"</a></p>
        <Link to='/'> 
          <Button bsStyle='success'>Back</Button>
        </Link>
      </div>
    );
  }
}