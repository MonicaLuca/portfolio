import { IconButton } from '@material-ui/core'
import React, { Component } from 'react'
import '../styles/project.css'
import GitHubIcon from '@material-ui/icons/GitHub';

export default class Project extends Component {
  render() {
    return (
      <div className='project'>
        <h1 className='project_title'>Name of Project</h1>
        <div className='project_container'>
          <img className="project_img" src="https://www.shillingtoneducation.com/content-blog/uploads/2017/11/photo-of-designer-creating-a-website.jpg" alt="project" height='400px' width="60%"></img>
          <div className='project_stack_position'>
            <div className='project_stack'> Front-End: </div>
            <div className='project_stack'> Back-End: </div>
          </div>
        </div>
        <p className='project_desc'>INSERT DESCINSERT DESCINSERT DESCINSERT DESCINSERT DESCINSERT DESCINSERT DESCINSERT DESCINSERT DESCINSERT DESCINSERT DESCINSERT DESCINSERT DESCINSERT DESCINSERT DESCINSERT DESCINSERT DESCINSERT DESCINSERT DESCINSERT DESCINSERT DESCINSERT DESCINSERT DESCINSERT DESCINSERT DESC</p>
        <div className='project_icon' >
        <IconButton href='https://github.com/MonicaLuca' aria-label="Github Link">
            <GitHubIcon fontSize="large"> </GitHubIcon>
          </IconButton>
        </div>
      </div>
    )
  }
}