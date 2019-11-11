import React, { Component } from 'react';

import styles from './Projects.module.scss';
import ProjectCards from '../components/ProjectCards';

import img_like from '../img/project_imagelike_page.jpg';
import img_react from '../img/project_react_page.jpg';
import img_expence from '../img/project_expence_tracker_page.jpg';
import img_snowboard from '../img/project_snowboard_page.jpg';
import img_stopwatch from '../img/project_stopwatch_page.jpg';
import img_salgado from '../img/project_salgado_page.jpg';
import img_cykel from '../img/project_cykelnestor_page.jpg';
import img_portfolio from '../img/project_portfolio_page.jpg';

const data = [
  {href: "https://lundberg-like-images.herokuapp.com/", img: img_like, alt: "projects", text: "ReactJS, Work In Progress"},
  {href: "https://lundberg-react-app.herokuapp.com/", img: img_react, alt: "projects", text: "ReactJS, Redux, Work In Progress"},
  {href: "https://lundberg-expence-tracker.herokuapp.com/", img: img_expence, alt: "projects", text: "ReactJS, Hooks, Context, Reducer"},
  {href: "sites/Snowboard/index.html", img: img_snowboard, alt: "projects", text: "HTML, CSS, Javascript, AJAX"},
  {href: "https://lundbergarn.github.io/Stopwatch-Deployed-Github/index.html", img: img_stopwatch, alt: "projects", text: "ReactJS, Hooks"},
  {href: "https://www.salgado.se", img: img_salgado, alt: "projects", text: "Wordpress, JavaScript, CSS"},
  {href: "https://www.cykelnestors.se/index.html", img: img_cykel, alt: "projects", text: "HTML, CSS, Bootstrap"},
  {href: "sites/Portfolio/index.html", img: img_portfolio, alt: "projects", text: "HTML, CSS, 3d-visualization"},
]

class Projects extends Component {
  render() {
    return (
      <div className="view">
        <h1>Projects</h1>
        <div className={styles.project__container}>

         {data.map(project => {
           return (
            <ProjectCards
            href={project.href}
            img={project.img}
            alt={project.alt}
            text={project.text}
            styles={styles}
          />
           )
         })}

        </div>
      </div>
    );
  }
}

export default Projects
