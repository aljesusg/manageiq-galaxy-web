'use strict';

import React from 'react';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router';
import GitHubLogin from 'react-github-login';


const onSuccess = response => {
    console.log(response)
};
const onFailure = response => {
    console.error(response)
};

export default class Menu extends React.Component {

  render() {
    return (
      <div>
        <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/">
            React-Bootstrap
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1} href="#">Link</NavItem>
          <NavItem eventKey={2} href="#">Link</NavItem>
          <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>Action</MenuItem>
            <MenuItem eventKey={3.2}>Another action</MenuItem>
            <MenuItem eventKey={3.3}>Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.3}>Separated link</MenuItem>
          </NavDropdown>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={1} href="#">Link Right</NavItem>
          <NavItem eventKey={2} href="#">Link Right</NavItem>
          <GitHubLogin clientId="f49137725fc5870b0104"
                redirectUri="http://localhost:8080/users/auth/github/callback"
                onSuccess={onSuccess}
            onFailure={onFailure} buttonText="User login"/>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
        
    MiQ Galaxy
    
      </div>
    );
  }
}
