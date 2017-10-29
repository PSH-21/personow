import React, { Componenet } from 'react';

export default class AvailShifts extends Componenet {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    const { eventShifts = [], error = '' } = this.props;
    return (
      <div>
        {
          !!eventShifts.length ?
            <table>
              <thead>
                <tr>
                  <th>Available</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {
                  eventShifts.map(shiftsObj => {
                    return (
                      <tr key={shiftsObj.id}>
                        <td>{shiftsObj.availableShifts}</td>
                        <td>{shiftsObj.totalShifts}</td>
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