'use strict';

import React from 'react';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router';
import GitHubLogin from 'react-github-login';
import config from '../../config'
import axios from 'axios';

const urlbaseForApi =`${ config[process.env.NODE_ENV].API_BACKEND }/${ config[process.env.NODE_ENV].API_VERSION }`
const urlForApiSignin =`${ urlbaseForApi}/users/sign_in`

function sessionSave(data){
  sessionStorage.setItem('authentication_token', data.authentication_token);
  sessionStorage.setItem('github_id', data.user.github_id);
  sessionStorage.setItem('github_login', data.user.github_login);
  sessionStorage.setItem('github_bio', data.user.github_bio);
  sessionStorage.setItem('github_location', data.user.github_location);
  sessionStorage.setItem('github_company', data.user.github_company);
  sessionStorage.setItem('github_avatar_url', data.user.github_avatar_url);
  sessionStorage.setItem('github_html_url',data.user.github_html_url)
  sessionStorage.setItem('karma', data.user.karma);
  sessionStorage.setItem('name', data.user.name);  
}

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginSuccess = this.handleLoginSuccess.bind(this);
    this.handleLogoutSuccess = this.handleLogoutSuccess.bind(this);
    this.onFailure = this.onFailure.bind(this);
    this.state = {
      logged: false,
      username: "",
      avatar: ""
    };
  }

  handleLoginSuccess(response){
    console.log(response.code)
      axios.post(urlForApiSignin,{},{ headers: { code: response.code}})
      .then(response => {
        sessionSave(response.data.data)
        console.log(response.data.data.user)
        this.setState({logged: true});
        this.setState({username: sessionStorage.getItem('github_login')});
        this.setState({avatar: sessionStorage.getItem('github_avatar_url')});
      })
      .catch(error => {
        console.log(error)
      });
      
  };
  handleLogoutSuccess(response){
    console.log("logout")
  }
  onFailure(response){
    console.error(response)
  };

  render() {
    const isLoggedIn = this.state.logged
    const img =   this.state.username
    const buttonlogged = <span> <Image height="10%" width="10%" src={this.state.avatar} circle/>  { this.state.username } </span>
    return (
      <div>
        <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/">
            ManageIQ Galaxy
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
          { isLoggedIn ? (
            <NavDropdown eventKey={3} title={buttonlogged} id="basic-nav-dropdown">
            <MenuItem eventKey={3.1} onClick={ () => this.props.showProfile()}>Profile</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.2}>Logout</MenuItem>
          </NavDropdown>
          ) : (
            <GitHubLogin clientId={ config[process.env.NODE_ENV].GITHUB_OAUTH_ID }
                redirectUri= { config[process.env.NODE_ENV].GITHUB_REDIRECTUI }
                onSuccess={this.handleLoginSuccess}
                onFailure={this.onFailure} buttonText="Login"/>
          )}
          
        </Nav>
      </Navbar.Collapse>
    </Navbar>
        
    MiQ Galaxy
    
      </div>
    );
  }
}
