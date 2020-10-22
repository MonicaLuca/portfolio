import React, { Component } from 'react'
import '../styles/education.css'

export default class AboutNav extends Component {
  render() {
    return (
    <div className='education'>
     <h2 className='ed_title'>Education</h2>
     <div className='ed_experience'>
     <div className='ed_school'>
     <img src="https://city.apps01.yorku.ca/wp-content/uploads/2013/02/yorkusmallogo1.jpg" alt="Profile Image of Monica Lucarini" height='250px' width="180px"></img>
     <div className='school'>
     <h3 className='school_name'>York University</h3>
     <p className='degree'>Honors Bachelor of<br/> Liberal Arts <br/> 2020 </p>
     <p className='degree'>Bachelor of<br/> Education <br/> 2020 </p>
     </div>
     </div>
     <div className='ed_school'>
     <img src="https://s3.amazonaws.com/f6s-public/profiles/673293_original.jpg" alt="Profile Image of Monica Lucarini" height='270px' width="250px"></img>
     <div className='school'>
     <h3 className='school_name'>Lighthouse Labs</h3>
     <p className='degree'>Full Stack Web <br/> Development Diploma <br/> 2020</p>
     </div>
     </div>
     </div>
    </div>
  )

  }
}