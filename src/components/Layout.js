'use strict';

import React from 'react';
import { Link } from 'react-router';

export default class Layout extends React.Component {
  render() {
    return (
      <div className="app-container">
        <header>
          <Link to="/">
            <img className="logo" src="/img/logo-judo-heroes.png"/>
          </Link>
        </header>
        <div className="app-content">{this.props.children}</div>
        <footer>
          <p>
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
