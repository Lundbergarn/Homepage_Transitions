import React, { Component } from 'react';

import './Projects.module.scss';
import img from '../img/project_comingsoon_page.jpg';

class Projects extends Component {
  render() {
    return (
      <div className="view">
        <h1>Projects</h1>
        <div className="project_items shadow content">
          <div className="content--inner">
            <a href="sites/Cykel_Nestor/index.html">
              <img className="slide-in align-left" alt="project" src={img} />
            </a>
            <p className="project_info">HTML, CSS</p>
          </div>
        </div>
        
      </div>
    );
  }
}

export default Projects
