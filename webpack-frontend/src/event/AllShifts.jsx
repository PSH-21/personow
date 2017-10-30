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

  render() {
    const { allshifts = [], error = '' } = this.props;
    //console.log(allshifts);
    return (
      <div>

        // {
          // !!allshifts.length ?
          //   {
          //     allshifts.map(shift => {
          //       return (
          //         <ul>
          //           <li>{shift.date}
          //             <ul>
          //               <li>{shift.role_name}, {shift.start_time} - {shift.end_time}, {shift.user_name}, cancel_shift</li>
          //             </ul>
          //           </li>
          //         </ul>
          //       )
          //     })
          //   } :
          // <div>Loading</div>
        // }
        // {error && <div>{error}</div>}
      </div>
    );
  }
}