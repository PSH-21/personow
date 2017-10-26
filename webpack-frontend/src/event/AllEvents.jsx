import React, { Component, PropTypes } from 'react';

export default class AllEvents extends Component {
  // static PropTypes = {
  // 	shifts: PropTypes.array
  // }
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     error: '',
  //     events: props.events || []
  //   }
  // }
  
  render() {

    const { events = [], error = '' } = this.props;

    return (
      <div>
        {
          !!events.length ?
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {
                  events.map(event => {
                    return (
                      <tr>
                        <td>{event.title}</td>
                        <td>{event.description}</td>
                        <td>{event.start_date}</td>
                        <td>{event.end_date}</td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table> :
            <div>Loading</div>
        }
        {error && <div>{error}</div>}
      </div>
    );
  }
}