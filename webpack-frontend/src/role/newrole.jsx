import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

export default class NewRole extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      fireRedirect: false,
      error: ''
    }
  }

  submitNewShift = (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    const { title, description } = this.state;
    const event_id = this.props.match.params.id;
    const data = { title, description, event_id };
    axios.post(`/api/v1/roles`, data, {headers: {'token': token}})
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

  handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({ [name]: value });
  }

  render() {
    const { fireRedirect } = this.state;
    return (
      <div>
        <Link to={`/events/${this.props.match.params.id}`} > Go Back </Link>
        <div>
          <form>
            <label>
              Role Title:
            <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
            </label>
             <label>
              Description:
             <input type="text" name="description" value={this.state.description} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" onClick={this.submitNewShift}/>
            {fireRedirect && (<Redirect to={'/'} />)}
          </form>
        </div>
      </div>
    );
  }
}