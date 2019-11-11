import React, { Component } from 'react';

import './Home.module.scss';

class Home extends Component {
  render() {
    return(
      <div className="page">
      <div className="page_background"></div>
      <div className="page__content">
        <h1>
          <div>F<span className="with--accent">r</span>ont-end develope<span className="with--accent">r</span></div>
          <div style={{marginTop: '30px'}} className="home--text">Building user experience</div>
          <div className="home--text">and</div>
          <div className="home--text">responsive websites</div>
        </h1>
      </div>
      </div>
    );
  }
}

export default Home
