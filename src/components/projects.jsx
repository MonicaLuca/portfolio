import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ProjectsNav from './projectsNav';
import Project from './project';
import '../styles/projects.css'


export default class Projects extends Component {
  render() {
    return (
    <div>
      <section className="projects">
        <div>
          <h1 className="projects_title">Projects</h1>
          <h2 className="projects_subtitle">What's New?</h2>
          <p className="projects_desc"> Insert Description of current projectInsert Description of current projectInsert Description of current projectInsert Description of current projectInsert Description of current projectInsert Description of current projectInsert Description of current projectInsert Description of current projectInsert Description of current projectInsert Description of current projectInsert Description of current project </p>
          <p className="projects_desc"> Insert TECH STACK OF CURRENT PROJECT </p>
        </div>
      </section>
      <section> 
      <h2 className='project_label'>Education</h2>
      <Router>
        <ProjectsNav/>
        <Route exact path="/projects">
          <Project/>
        </Route>
        <Route exact path="/GoodBuy">
          <Project/>
        </Route>
        <Route exact path="/Jungle">
          <Project/>
        </Route>
        <Route exact path="/Tweeter">
          <Project/>
        </Route>
        <Route exact path="/Scheduler">
          <Project/>
        </Route>
        <Route exact path="/TinyApp">
          <Project/>
        </Route>
      </Router>
    
      
      </section>
    </div>
  )

  }
}