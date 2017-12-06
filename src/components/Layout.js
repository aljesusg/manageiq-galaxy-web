'use strict';

import React from 'react';
import Menu from './Nav/Menu';
import axios from 'axios';
import config from '../config'
import { Glyphicon } from 'react-bootstrap';
import { GetApiVersion } from '../service/Api'

const urlForApiVersion =`${ config[process.env.NODE_ENV].API_BACKEND }/api/version`

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {version: 'Version ', backend: 'triying'};
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
  render() {
    return (
      <div className="app-container">
        <header>
          <Menu/>
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
