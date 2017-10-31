import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


export default class AllShifts extends Component {
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
  deleteOnClikc = (id, e) => {
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

  render() {
    const { allshifts = [], creator= '', error= '' } = this.props;
    return (

      <div>
        {
          !!allshifts.length ?
            (
              allshifts.map(shift => {
                return (
                  <ul>
                    <li>Date
                      <ul>
                        <li key={shift.id}>
                          {shift.role_name}, {shift.start_time}, {shift.end_time}
                          { !!shift.user_name ? (
                            <span>shift.user_name
                              <button onClick={(e) => this.cancelOnClick(shift.id, e)}>CANCEL</button>
                            </span>

                          ) : (
                            <span>OPEN
                              <button onClick={(e) => this.cancelOnClick(shift.id, e)}>CLAIM</button>
                            </span>
                          )}
                          { !!creator ? (
                          <button onClick={(e) => this.deleteOnClick(shift.id, e)}>DELETE</button>) :
                          '' }
                        </li>
                      </ul>
                    </li>
                  </ul>
                )
              })
            ) :
          <div>Loading</div>
        }
        {error && <div>{error}</div>}
      </div>
    );
  }
}