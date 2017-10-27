import React, { Component } from 'react';
import EventForm from '../event/EventForm.jsx';
// import Yourevents from './Yourevents.jsx'
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Org extends Component {
  constructor(props) {
    super(props);
    // this.id = this.props.params.orgid;
    this.state = {
      group: '',
      error: ''
    }
  }
  componentDidMount() {
    axios.get('/api/v1/group/:id')
      .then(({ data }) => {
        this.setState({
          group: data
        })
      })
      .catch((error) => {
        this.setState({
          error
        })
      })
  }


  render() {
    const { group } = this.state;
    return (
      <div>
        <Link to={'/'} > Go Back </Link>
        <div>
          {
            !!group.length ?
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{group.name}</td>
                    <td>{group.description}</td>
                  </tr>
                </tbody>
              </table> :
              <div>Loading</div>
          }
          {error && <div>{error}</div>}
        </div>
      </div>
    );
  }
}