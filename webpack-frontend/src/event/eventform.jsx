import React, { Component } from 'react';
import { Button, FormGroup, ControlLabel, FormControl, ButtonToolbar, HelpBlock } from 'react-bootstrap';

export default class Eventform extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  clicked = (event) => {
    console.log("clicked!")
  }

  getInitialState() {
    return {
      value: ''
    };
  }



  handleChange(e) {
    this.setState({ value: e.target.value });
  }


  render() {
    return (
      <div>
        <div>
          <form>
            <FormGroup
              controlId="formBasicText"
            >
              <ControlLabel>Working example with validation</ControlLabel>
              <FormControl
                type="text"
                value={this.state.value}
                placeholder="Enter text"
              />
              <FormControl.Feedback />
              <div> </div>
              <ControlLabel>Working example with validation</ControlLabel>
              <FormControl
                type="text"
                value={this.state.value}
                placeholder="Enter text"
              />
              <FormControl.Feedback />
              <HelpBlock>we can add text here</HelpBlock>
            </FormGroup>
          </form>
        </div>
        <div>
          <ButtonToolbar>
            <Button bsStyle="primary" bsSize="large" onClick={this.clicked} >Submit</Button>
          </ButtonToolbar>
        </div>
      </div>
    );
  }
}


