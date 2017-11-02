import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

export default class Navigationbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fireRedirect: false
    }
  }

  logoutOnClick = (e) => {
    e.preventDefault();
    localStorage.clear();
    this.setState({
      fireRedirect: true
    });
  }
  
  render() {
    const token = localStorage.getItem('token');
    const name = localStorage.getItem('name');
    return (
      <div>
        <div>
          {token ? (<Navbar inverse collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <Link to={'/'}>HOME</Link>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
                <NavDropdown eventKey={3} title="Actions" id="basic-nav-dropdown">
                  <MenuItem eventKey={3.1}><Link to={'/GroupForm'} > New Group </Link></MenuItem>
                  <MenuItem eventKey={3.2}><Link to={'/EventForm'} > New Event </Link></MenuItem>
                </NavDropdown>
              </Nav>
              <Nav pullRight>
                <NavItem ><Link to={'/user'}> Welcome { name } </Link></NavItem>                
                <NavItem onClick={this.logoutOnClick}> Logout</NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          ) : (<Navbar inverse collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <Link to={'/'}>HOME</Link>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav pullRight>
                <NavItem eventKey={1} ><Link to={'/login'} > LOGIN </Link></NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
            )}
        </div>
        <div>
          {this.state.fireRedirect && (<Redirect to={`/`} />)}
        </div>
      </div>
    );
  }
}