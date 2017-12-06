'use strict';

import React from 'react';
import Menu from './Nav/Menu';
import axios from 'axios';
import config from '../config';
import { Link } from 'react-router';
import { Glyphicon, Modal, Button, Media, Image } from 'react-bootstrap';
import { GetApiVersion } from '../service/Api'

const urlForApiVersion =`${ config[process.env.NODE_ENV].API_BACKEND }/api/version`

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.UserProfile = this.UserProfile.bind(this);
    this.state = {
      version: 'Version ', 
      backend: 'triying',
      showProfile: false
    };
    
  }

  componentDidMount() {
      axios.get(urlForApiVersion)
      .then(response => {
        this.setState({version: 'Version '+response.data.data.version, backend: 'ok'});
      })
      .catch(error => {
        console.log(error)
        this.setState({version: '', backend: 'error'});
      });     
  }

  UserProfile(){
    this.setState({showProfile: true})
  }


  render() {
    
    return (
      <div className="app-container">
        <header>
          <Menu showProfile={this.UserProfile}/>
        </header>
        <div className="app-content">{this.props.children}</div>                
        <footer>
          <p>
            This is a demo app to showcase manageiq galaxy web with <strong>React</strong> and <strong>Express</strong>.
          </p>
          <p>The connection to backend is in { this.state.backend } state. Playing with version { this.state.version }<br/>
          { process.env.NODE_ENV }<br/>
          { urlForApiVersion }<br/>
          { config[process.env.NODE_ENV].GITHUB_REDIRECTUI }<br/>
          </p>  
          <p>
            Contribute on <a href="https://github.com/miq-consumption/manageiq-galaxy-web">ManageIQ Galaxy Repo</a>
          </p>
        </footer>
      </div>
    );
  }
}


/*
<Modal
          show={this.state.showProfile}
          onHide={() => this.setState({ showProfile: false })}
          container={this}
          aria-labelledby="contained-modal-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">{ sessionStorage.getItem('name') }</Modal.Title>
          </Modal.Header>
          <Modal.Body>
                <Media>
            <Media.Left>
              <img width={64} height={64} src={sessionStorage.getItem('github_avatar_url')} alt="Image" />
            </Media.Left>
            <Media.Body>
              <Media.Heading>
                <Link to={ sessionStorage.getItem('github_html_url') }>
                    { sessionStorage.getItem('github_id') }
                </Link>
              </Media.Heading>
              <p>{!!(sessionStorage.getItem('github_bio'))?sessionStorage.getItem('github_bio'):"No BIO in profile"}</p>
            </Media.Body>
          </Media>
            <b>Company : {!!(sessionStorage.getItem('github_company'))?sessionStorage.getItem('github_company'):"No Company in profile"}</b>

          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => this.setState({ showProfile: false })}>Close</Button>
          </Modal.Footer>
        </Modal>
*/