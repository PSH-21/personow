import React, { Component, PropTypes } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';


export default class AllShifts extends Component {
    static defaultProps = {
      allshifts: [],
      creator: '',
      event_id: '',
      error: '',
  }
  // static PropTypes = {
  //  shifts: PropTypes.array
  // }
  constructor(props) {
    super(props);
    this.state = {
      allshifts: [],
      error: '',
      fireRedirect: false
    }
  }
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
    axios.delete(`/api/v1/shift/${shift_id}`, {'headers': {'token': token}});
    this.props.deleteShiftFromState(shift_id);
  }

  shiftOnClick = (id, evt_id, e) => {
    e.preventDefault();
    const shift_id = id;
    const event_id = evt_id;
    const token = localStorage.getItem('token');
    axios.post(`/api/v1/shift/${shift_id}`, {}, {'headers': {'token': token}})
    .then( res => {
      axios.get(`/api/v1/shifts/${res.data.event_id}`, {headers : {'token': token}})
      .then(({ data }) => {
        this.setState({
          allshifts: data,
          fireRedirect: true
        });
      })
      .catch((error) => {
        this.setState({
          error
        })
      })
    })
    .catch( error => {
      this.setState({ error })
    })
  }


  render() {
    const { allshifts, creator, event_id, token, error} = this.props;
    const name = localStorage.getItem('name');
    const days=[];
    function findIndex(datadate, data){
        for (var i=0; i < data.length; i++) {
            if (data[i].date === datadate) {
                return i;
            }
        }
    }

    for (var i = 0; i < allshifts.length; i++) {
        const index = findIndex(allshifts[i].date, days);
        if (index === undefined) {
            days.push(
                {'date' : allshifts[i].date,
                'shifts' : [ allshifts[i] ] }
                );
        } else {

            days[index]['shifts'].push(allshifts[i]);
        }
    }

    const shifts = days.map(day => {
      return (
        <ul>
          <li>{day.date}
            <ul>
              { day.shifts.map(shift => {
                return (
                  <li key={shift.id}>
                    { shift.role_name },
                    { moment(shift.start_time).format('hh:mm A') } -
                    { moment(shift.end_time).format('hh:mm A') },
                    { shift.user_name ? (
                      <span>{shift.user_name}
                        { shift.user_name === name &&  <button onClick={(e) => this.shiftOnClick(shift.id, event.id, e)}>CANCEL</button>}
                      </span>

                    ) : (
                      <span><p className={'danger'}>OPEN</p>
                        { token && <button onClick={(e) => this.shiftOnClick(shift.id, event.id, e)}>CLAIM</button> }
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
        { shifts }
        { this.state.fireRedirect && <Redirect to={'/'} /> }
        {error && <div>{error}</div>}
      </div>
    );
  }


}