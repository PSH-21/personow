import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router-dom'
import { Table, Button } from 'react-bootstrap'

export default class Eventid1 extends Component {
  // static PropTypes = {
	// 	shifts: PropTypes.array
	// }
  constructor(props) {
    super(props);
    this.state = {
      shifts: [
        {
        id: 1,
        name: 'Mark',
        title: 'door',
        from: 5,
        to: 8
      }
    ] 
    }
  }


  render() {
    let shift = this.state.shifts.map(shift => {
      return (
        <tr>
          <td>{shift.id}</td>
          <td>{shift.name}</td>
          <td>{shift.title}</td>
          <td>{shift.from}</td>
          <td>{shift.to}</td>
        </tr>
      );
    });
    return (
      <div>
        <p><i>As viewed by event owner.</i></p>
        <h1>Hamlet</h1>
        <h4>A LHTheatre Event.</h4>
        <p>Description of the event, whatever the coordinator
          wishes to share with volunteers / potential volunteers.
        </p>
        <p><Button bsStyle='primary'>Edit/Update</Button> (button switches description to editable field and back.)</p>

        <p>
          <Link to={'/eventform'}><Button bsStyle={'primary'}>Create shifts</Button></Link> <i>Opens form on page to add a shift.</i>
        </p>
        
        <h2>Shifts</h2>

        <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Title</th>
              <th>From</th>
              <th>to</th>
            </tr>
          </thead>
          <tbody>
            {shift}
            <Link to={'#'}><Button bsStyle='danger'> Cancel </Button></Link>
            <tr>
              <td>1</td>
              <td>Zac</td>
              <td>Door</td>
              <td>8:00</td>
              <td>8:00</td>
            </tr>
              <Link to={'#'}><Button bsStyle='danger'> Cancel </Button></Link>
            <tr>
              <td>1</td>
              <td>|--OPEN--|</td>
              <td>Door</td>
              <td>8:00</td>
              <td>8:00</td>
              <Link to={'#'}><Button bsStyle='danger'> Cancel </Button></Link>
            </tr>
          </tbody>
        </Table>
        <Link to={'/'}><Button bsStyle='primary'>Back</Button></Link>
      </div>
    );
  }
}