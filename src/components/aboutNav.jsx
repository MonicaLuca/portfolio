import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/aboutNav.css'

export default class AboutNav extends Component {
  render() {
    return (  
    <div>
      <nav className='about_nav'>
        <Link className="about_button" to="/education">Education</Link>
        <Link className="about_button" to="/">Skills</Link>
        <a href="https://resume.creddle.io/resume/2qaapzqnnps" className="about_button">Resume</a>
      </nav>
    </div>
  )

  }
}