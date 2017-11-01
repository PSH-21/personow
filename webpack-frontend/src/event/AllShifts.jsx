import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';


export default class AllShifts extends Component {
    static defaultProps = {
      allshifts: [],
      creator: '',
      error: ''
  }
  // static PropTypes = {
  //  shifts: PropTypes.array
  // }
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     error: '',
  //     events: props.events || []
  //   }
  // }
  // componentDidMount() {
  //   const token = localStorage.getItem('token');

  //    axios.post(`/api/v1/shift/:id_here`, data)
  //   .then( res => {
  //     this.setState({
  //       title: '',
  //       description: '',
  //       fireRedirect: true
  //     });
  //   })
  //   .catch( error => {
  //     this.setState({ error })
  //   })
  // }
  deleteOnClick = (id, e) => {
    e.preventDefault();
    const shift_id = id;
    const token = localStorage.getItem('token');
    axios.delete(`/api/v1/shift/${shift_id}`, {headers: {'token': token}})
  }

  cancelOnClick = (id, e) => {
    e.preventDefault();
    const shift_id = id;
    const token = localStorage.getItem('token');
    axios.post(`/api/v1/shift/${shift_id}`, {headers: {'token': token}})
    .then( res => {
      this.setState({

      });
    })
    .catch( error => {
      this.setState({ error })
    })
  }

// [
//   {
//     end_time: "2017-11-02T17:00:00.000Z"
//     event_id: 1
//     id: 1
//     role_id: 4
//     role_name: "MC"
//     start_time: "2017-11-02T13:00:00.000Z"
//     user_id: 2
//     user_name: "Bob McRobert"
//   },
//   {
//     end_time: "2017-11-02T17:00:00.000Z"
//     event_id: 1
//     id: 1
//     role_id: 4
//     role_name: "MC"
//     start_time: "2017-11-02T13:00:00.000Z"
//     user_id: 2
//     user_name: "Bob McRobert"
//   }
// ]




  render() {
    const { allshifts, creator, error} = this.props;

    console.log(allshifts);
    const days = [
    {
      date: 'oct 1',
      shifts: [
        { start: '2017-11-02T13:00:00.000Z', end: '2017-11-02T17:00:00.000Z', role_name: 'test', id: 1, user_name: 'name' },
        { start: '2017-11-02T13:00:00.000Z', end: '2017-11-02T17:00:00.000Z', role_name: 'test', id: 1, user_name: 'name' }
      ]
    },
    {
      date: 'oct 2',
      shifts: [
        { start: '2017-11-02T13:00:00.000Z', end: '2017-11-02T17:00:00.000Z', role_name: 'test', id: 1, user_name: 'name' },
        { start: '2017-11-02T13:00:00.000Z', end: '2017-11-02T17:00:00.000Z', role_name: 'test', id: 1, user_name: 'name' }
      ]
    },
    {
      date: 'oct 3',
      shifts: [
        { start: '2017-11-02T13:00:00.000Z', end: '2017-11-02T17:00:00.000Z', role_name: 'test', id: 1, user_name: 'name' },
        { start: '2017-11-02T13:00:00.000Z', end: '2017-11-02T17:00:00.000Z', role_name: 'test', id: 1, user_name: 'name' }
      ]
    }
  ]

    const shifts = days.map(day => {
      return (
        <ul>
          <li>{day.date}
            <ul>
              { day.shifts.map(shift => {
                return (
                  <li key={shift.id}>
                    { shift.role_name },
                    { moment(shift.start_time).format("hh:mm A") } -
                    { moment(shift.end_time).format("hh:mm A") },
                    { shift.user_name ? (
                      <span>shift.user_name
                        <button onClick={(e) => this.cancelOnClick(shift.id, e)}>CANCEL</button>
                      </span>

                    ) : (
                      <span>OPEN
                        <button onClick={(e) => this.cancelOnClick(shift.id, e)}>CLAIM</button>
                      </span>
                    )}
                    { creator && (<button onClick={(e) => this.deleteOnClick(shift.id, e)}>DELETE</button>) }
                  </li>
                  )
              })}
            </ul>
          </li>
        </ul>
      )
    });

    return (

      <div>
        { /* allshifts.length === 0 ? <div>Loading</div> : shifts */ }
        { shifts }
        {error && <div>{error}</div>}
      </div>
    );
  }


}