import React, { Component } from 'react';

export default class AllGroups extends Component {

  // constructor(props) {
    // super(props);
    // this.state = {
    //   error: '',
    //   groups: props.groups
    // }
  // }

  render() {

    const { groups = [], error = '' } = this.props;

    return (
      <div>
        {
          !!groups.length ?
          <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {
                  groups.map(group => {
                    return (
                      <tr>
                        <td>{group.name}</td>
                        <td>{group.description}</td>
                    </tr>
                    )
                  })
                }
              </tbody>
            </table>:
            <div>Loading</div> 
        }
          
        {error && <div>{error}</div>}
      </div>
    );
  }
}