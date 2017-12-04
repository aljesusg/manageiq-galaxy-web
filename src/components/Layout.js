'use strict';

import React from 'react';
import Menu from './Nav/Menu';

const urlForApiVersion =`${ process.env.API_BACKEND}/api/version`

export default class Layout extends React.Component {
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
            Contribute on <a href="https://github.com/miq-consumption/manageiq-galaxy-web">ManageIQ Galaxy Repo</a>
          </p>
        </footer>
      </div>
    );
  }
}
