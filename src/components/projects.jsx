import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ProjectsNav from './projectsNav';
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
      <Router>
        <ProjectsNav/>
        <Route path="/Kitchionary">
        </Route>
        <Route path="/GoodBuy">
        </Route>
        <Route path="/Jungle">
        </Route>
        <Route path="/Tweeter">
        </Route>
        <Route path="/Scheduler">
        </Route>
        <Route path="/TinyApp">
        </Route>
      </Router>
      <section> 
      
      </section>
    </div>
  )

  }
}