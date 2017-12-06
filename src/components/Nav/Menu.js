'use strict';

import React from 'react';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router';
import GitHubLogin from 'react-github-login';
import config from '../../config'
import axios from 'axios';

const urlbaseForApi =`${ config[process.env.NODE_ENV].API_BACKEND }/${ config[process.env.NODE_ENV].API_VERSION }`
const urlForApiSignin =`${ urlbaseForApi}/users/sign_in`

const onSuccess = response => {
  console.log(response.code)
    axios.post(urlForApiSignin,{},{ headers: { code: response.code}})
    .then(response => {
      sessionStorage.setItem('authentication_token', response.data.authentication_token);
    })
    .catch(error => {
      console.log(error)
    });
    
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
          <GitHubLogin clientId={ config[process.env.NODE_ENV].GITHUB_OAUTH_ID }
                redirectUri= { config[process.env.NODE_ENV].GITHUB_REDIRECTUI }
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
