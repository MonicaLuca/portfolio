import React, { Component } from 'react'
import '../intro.css'
export default class Introduction extends Component {
  render() {
    return (

    <div>
      <section>
        <div className="intro">
          <div className="container_left_img">
          <img className="left_img" src="https://www.shillingtoneducation.com/content-blog/uploads/2017/11/photo-of-designer-creating-a-website.jpg" alt="Profile Image of Monica Lucarini" height='850px' width="100%"></img>
          <h1 class="left_img_header">Hi, I'm Monica!</h1>
          <p class="left_img_text"> I am a <strong> Full Stack Web Developer</strong></p>
          </div>
          <img src="https://www.shillingtoneducation.com/content-blog/uploads/2017/11/photo-of-designer-creating-a-website.jpg" alt="Profile Image of Monica Lucarini" height='850px' width="50%"></img>
        </div>
      </section>
    </div>
  )

  }
}