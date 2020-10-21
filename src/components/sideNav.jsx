import React, { Component } from 'react'
import '../styles/sideNav.css'

export default class SideNav extends Component {
  render() {
    return (
      <div className="sideNav">
        <img className="nav_img" src="https://www.shillingtoneducation.com/content-blog/uploads/2017/11/photo-of-designer-creating-a-website.jpg" alt="Profile Image of Monica Lucarini" height='250px' width="60%"></img>
        <div>
        <h2 className='nav_name'> Monica Lucarini </h2>
        <h3 className='nav_email'>monica.lucarini28@gmail.com</h3>
        </div>
        <button>Introduction</button>
        <button>About</button>
        <button>Skills</button>
        <button>My TimeLine</button>
        <button>Projects</button>
        <button>My Resume</button>
      </div>
    )
  }
}