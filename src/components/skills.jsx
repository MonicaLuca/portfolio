import React, { Component } from 'react'
import '../styles/skills.css'

export default class Skills extends Component {
  render() {
    return (
    <div className='skills'>
     <h2 className='skills_title'>Skills</h2>
     <div>
       <h3 className='skills_subtitle'>Web Front-End</h3>
     </div>
     <div>
       <h3 className='skills_subtitle'>Web Back-End</h3>
       <div className='back_end'>
         <div class="skill_container">
       <img className='img_skills'src="https://docs.bit.dev/img/nodejs.svg" alt="NodeJS" height='180px' width="180px"></img>
        <div className='skill_name_position'>
          <div className='skill_name'> NodeJS</div>
        </div>
       </div>
       <div class="skill_container">
       <img className='img_skills'src="https://www.kindpng.com/picc/m/12-120961_logo-ruby-on-rails-hd-png-download.png" alt="Rails" height='180px' width="180px"></img>
        <div className='skill_name_position'>
          <div className='skill_name'>Rails</div>
        </div>
       </div>
       <div class="skill_container">
       <img className='img_skills'src="https://expressjs.com/images/express-facebook-share.png" alt="Express" height='180px' width="180px"></img>
        <div className='skill_name_position'>
          <div className='skill_name'>Express</div>
        </div>
       </div>
       </div>
     </div>
      <div>
       <h3 className='skills_subtitle'>Languages</h3>
       <div className='back_end'>
         <div class="skill_container">
       <img className='img_skills'src="https://miro.medium.com/max/1052/1*wF-Gv5GJep4Xszk9_zzJng.jpeg" alt="JavaScript" height='180px' width="180px"></img>
        <div className='skill_name_position'>
          <div className='skill_name'> JavaScript</div>
        </div>
       </div>
       <div class="skill_container">
       <img className='img_skills'src="https://i.dlpng.com/static/png/192335_preview.png" alt="Ruby" height='180px' width="180px"></img>
        <div className='skill_name_position'>
          <div className='skill_name'>Ruby</div>
        </div>
       </div>
       <div class="skill_container">
       <img className='img_skills'src="https://thumbs.dreamstime.com/b/sql-database-icon-logo-design-ui-ux-app-orange-inscription-shadow-96841969.jpg" alt="SQL" height='180px' width="180px"></img>
        <div className='skill_name_position'>
          <div className='skill_name'>SQL</div>
        </div>
       </div>
       </div>
     </div>
    </div>
  )

  }
}