import React, { Component } from 'react';

import styles from './Home.module.scss';

class Home extends Component {
  render() {
    return(
      <div className={styles.page}>
      <div className={styles.page_background}></div>
      <div className={styles.page__content}>
        <h1>
          <div style={{ fontWeight: '700' }}>F<span className="with--accent">r</span>ont-end develope<span className="with--accent">r</span></div>
          <div style={{marginTop: '30px'}} className="home--text">Building use<span className="with--accent">r</span> expe<span className="with--accent">r</span>ience</div>
          <div className="home--text">and</div>
          <div className="home--text"><span className="with--accent">r</span>esponsive websites</div>
        </h1>
      </div>
      </div>
    );
  }
}

export default Home
