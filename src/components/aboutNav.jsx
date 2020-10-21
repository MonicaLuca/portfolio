import React, { Component } from 'react'
import '../styles/aboutNav.css'

export default class AboutNav extends Component {
  render() {
    return (
    <div>
      <nav className='about_nav'>
        <a href="#" className="about_button">Education</a>
        <a href="#" className="about_button">Skills</a>
        <a href="https://resume.creddle.io/resume/2qaapzqnnps" className="about_button">Resume</a>
      </nav>
    </div>
  )

  }
}