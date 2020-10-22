import React, { Component } from 'react'
import '../styles/sideNav.css'
import IconButton from '@material-ui/core/IconButton';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import CreateIcon from '@material-ui/icons/Create';

export default class SideNav extends Component {
  render() {
    return (
      <div className="sideNav">
        <img className="nav_img" src="https://www.shillingtoneducation.com/content-blog/uploads/2017/11/photo-of-designer-creating-a-website.jpg" alt="Profile Image of Monica Lucarini" height='250px' width="60%"></img>
        <div>
        <h2 className='nav_name'> Monica Lucarini </h2>
        <h3 className='nav_email'>monica.lucarini28@gmail.com</h3>
        </div>
        <div className="nav_button_group">
        <a href="#" className="nav_button">Introduction</a>
        <a href="#" className="nav_button">About</a>
        <a href="#" className="nav_button">Projects</a>
        <a href="#" className="nav_button">My Timeline</a>
        </div>
        <div className="icon_button_group">
        <IconButton href='https://www.linkedin.com/in/monica-lucarini/' aria-label="LinkedIn Link">
        <LinkedInIcon fontSize="large"></LinkedInIcon>
        </IconButton>
        <IconButton className="social_icon" href='https://github.com/MonicaLuca' aria-label="Github Link">
        <GitHubIcon fontSize="large"></GitHubIcon>
        </IconButton>
        <IconButton className="social_icon" href='https://medium.com/@monica.lucarini28' aria-label="Medium Link">
        <CreateIcon fontSize="large"></CreateIcon>
        </IconButton>
        </div>
      </div>

      
    )
  }
}