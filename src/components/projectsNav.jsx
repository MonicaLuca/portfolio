import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/projectsNav.css'

export default class ProjectsNav extends Component {
  render() {
    return (  
    <div>
      <nav className='projects_nav'>
        <Link className="projects_button" to="/projects">Kitchionary</Link>
        <Link className="projects_button" to="/GoodBuy">GoodBuy</Link>
        <Link className="projects_button" to="/Jungle">Jungle</Link>
        <Link className="projects_button" to="/Scheduler">Scheduler</Link>
        <Link className="projects_button" to="/TinyApp">Tiny App</Link>
      </nav>
    </div>
  )

  }
}