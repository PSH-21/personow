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
    axios.delete(`/api/v1/shift/${shift_id}`, {'headers': {'token': token}})
  }

  shiftOnClick = (id, e) => {
    e.preventDefault();
    const shift_id = id;
    const token = localStorage.getItem('token');
    axios.post(`/api/v1/shift/${shift_id}`, {}, {'headers': {'token': token}})
    .then( res => {
      this.setState({

      });
      this.render()
    })
    .catch( error => {
      this.setState({ error })
    })
  }


  render() {
    const { allshifts, creator, error} = this.props;

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
                    { moment(shift.start_time).format("hh:mm A") } -
                    { moment(shift.end_time).format("hh:mm A") },
                    { shift.user_name ? (
                      <span>{shift.user_name}
                        <button onClick={(e) => this.shiftlOnClick(shift.id, e)}>CANCEL</button>
                      </span>

                    ) : (
                      <span>OPEN
                        <button onClick={(e) => this.shiftOnClick(shift.id, e)}>CLAIM</button>
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