import React, { Component } from 'react'
import '../styles/about.css'
import AboutNav from './aboutNav';

export default class About extends Component {
  render() {
    return (
    <div>
      <section className="about">
        <div>
          <h1 className="about_title">About</h1>
          <h2 className="about_subtitle">A Little About Me ...</h2>
          <p className="about_desc">Educator turned full-stack Web Developer, with a passion for building user-friendly web applications. Highly motivated and
resourceful team player who is interested in applying experience derived from the field of Education to kickstart a career in Web
Development. Possesses a strong desire to continuously learn and an eagerness to discover new technical skills in the world of
Web Development.<br/> <br/> Educator turned full-stack Web Developer, with a passion for building user-friendly web applications. Highly motivated and
resourceful team player who is interested in applying experience derived from the field of Education to kickstart a career in Web
Development. Possesses a strong desire to continuously learn and an eagerness to discover new technical skills in the world of
Web Development. </p>
        </div>
      </section>
      <section> 
        <AboutNav></AboutNav>
      </section>
    </div>
  )

  }
}