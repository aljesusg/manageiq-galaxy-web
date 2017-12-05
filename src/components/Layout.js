'use strict';

import React from 'react';
import Menu from './Nav/Menu';
import axios from 'axios';

const urlForApiVersion =`${ process.env.API_BACKEND}/api/version`

export default class Layout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {version: '_'};
  }

  componentDidMount() {
    console.log(process.env.API_BACKEND)
    console.log(process.env.GITHUB_OAUTH_ID)
    console.log(process.env.GITHUB_REDIRECTUI)
    axios.get(process.env.API_BACKEND)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
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
          { process.env.GITHUB_OAUTH_ID }
          { process.env.GITHUB_REDIRECTUI }
            This is a demo app to showcase manageiq galaxy web with <strong>React</strong> and <strong>Express</strong>.
          </p>
          <p>
            Version { this.state.version }
          </p>  
          <p>
            Contribute on <a href="https://github.com/miq-consumption/manageiq-galaxy-web">ManageIQ Galaxy Repo</a>
          </p>
        </footer>
      </div>
    );
  }
}
