import React, { Component } from 'react';
import { Button, FormGroup, ControlLabel, FormControl, ButtonToolbar, HelpBlock } from 'react-bootstrap';

export default class EventForm extends Component {
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
            <label>
              Event Name:
            <input type="text" name="EventName" placeholder="Event Name.." />
            </label>           
             <label>
              Event Description:
             <input type="text" name="EventName" placeholder="Event Description" />
            </label>
            <label>
              From:
             <input type="text" name="EventName" placeholder="MM/DD/YYYY" />
            </label>
            <label>
              To:
             <input type="text" name="EventName" placeholder="MM/DD/YYYY" />
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
