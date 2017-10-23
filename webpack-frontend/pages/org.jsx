import React, { Component, PropTypes } from 'react';
import {  Button, ButtonToolbar } from 'react-bootstrap';
import Form, {input} from 'react-bootstrap-form';

export default class Org extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  clicked = (event) => {
    console.log("clicked!")
  }

  render() {
    return (
      <div>
        <p>button is here</p>
        <div>
          <ButtonToolbar>
            <Button bsStyle="primary" bsSize="large" onClick={this.clicked} >Primary button</Button>
          </ButtonToolbar>
        </div>
        <div>
          <Form>
            <Input />


          </Form>
        </div>
      </div>
        );
  }
}
