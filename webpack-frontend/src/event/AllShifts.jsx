import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
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

  cancelOnClick = (e) => {
    e.preventDefault();
    const { title, description } = this.state;
    const event_id = this.props.match.params.id;
    const data = { title, description, event_id };
    axios.post(`/api/v1/shift/:id_here`, data)
    .then( res => {
      this.setState({
        title: '',
        description: '',
        fireRedirect: true
      });
    })
    .catch( error => {
      this.setState({ error })
    })
  }

  render() {
    const { allshifts = [], error= '' } = this.props;
    return (
      <div>
        {
          !!allshifts.length ?
            (
              allshifts.map(shift => {
                return (
                  <ul>
                    <li>{shift.date}
                      <ul>
                        <li>{shift.role_name}, {shift.start_time}, {shift.end_time},
                          {shift.user_name ? shift.user_name : 'AVAILABLE' }
                          <text onClick={this.cancelOnClick}>CANCEL</text>
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