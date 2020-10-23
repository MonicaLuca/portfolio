import React, { Component } from 'react'
import '../styles/skills.css'

export default class Skills extends Component {
  render() {
    return (
      <div className='skills'>
        <h2 className='skills_title'>Skills</h2>
        <div>
          <h3 className='skills_subtitle'>Web Front-End</h3>
          <div className='back_end'>
            <div className="skill_container">
              <img className='img_skills' src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS7RLUZItnGkvLOjNESThsW4gwNNB9ot5jodg&usqp=CAU" alt="Bootstrap" height='180px' width="180px"></img>
              <div className='skill_name_position'>
                <div className='skill_name'> Bootstrap</div>
              </div>
            </div>
            <div className="skill_container">
              <img className='img_skills' src="https://miro.medium.com/max/500/1*cPh7ujRIfcHAy4kW2ADGOw.png" alt="React" height='180px' width="180px"></img>
              <div className='skill_name_position'>
                <div className='skill_name'>React</div>
              </div>
            </div>
            <div className="skill_container">
              <img className='img_skills' src='https://technologyoutfitter.com/wp-content/uploads/2020/07/HTML5.png' alt="HTML5" height='180px' width="180px"></img>
              <div className='skill_name_position'>
                <div className='skill_name'>HTML5</div>
              </div>
            </div>
            <div className="skill_container">
              <img className='img_skills' src='https://coryrylan.com/assets/images/posts/types/css.svg' alt="CSS" height='180px' width="180px"></img>
              <div className='skill_name_position'>
                <div className='skill_name'>CSS</div>
              </div>
            </div>
          </div>
          <div className='back_end'>
            <div className="skill_container">
              <img className='img_skills' src="https://www.pngkey.com/png/full/377-3771917_scss-logo.png" alt="Sass" height='180px' width="180px"></img>
              <div className='skill_name_position'>
                <div className='skill_name'> Sass</div>
              </div>
            </div>
            <div className="skill_container">
              <img className='img_skills' src="https://openjsf.org/wp-content/uploads/sites/84/2019/10/jquery-logo-vertical_large_square.png" alt="JQuery" height='180px' width="180px"></img>
              <div className='skill_name_position'>
                <div className='skill_name'>JQuery</div>
              </div>
            </div>
            <div className="skill_container">
              <img className='img_skills' src='https://material-ui.com/static/logo.png' alt="Material UI" height='180px' width="180px"></img>
              <div className='skill_name_position'>
                <div className='skill_name'>Material UI</div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 className='skills_subtitle'>Web Back-End</h3>
          <div className='back_end'>
            <div className="skill_container">
              <img className='img_skills' src="https://t1.daumcdn.net/cfile/tistory/996A4F355BC12F782C" alt="NodeJS" height='180px' width="180px"></img>
              <div className='skill_name_position'>
                <div className='skill_name'> NodeJS</div>
              </div>
            </div>
            <div className="skill_container">
              <img className='img_skills' src="https://www.kindpng.com/picc/m/12-120961_logo-ruby-on-rails-hd-png-download.png" alt="Rails" height='180px' width="180px"></img>
              <div className='skill_name_position'>
                <div className='skill_name'>Rails</div>
              </div>
            </div>
            <div className="skill_container">
              <img className='img_skills' src="https://s3-us-west-2.amazonaws.com/assets.blog.serverless.com/express_js.png" alt="Express" height='180px' width="180px"></img>
              <div className='skill_name_position'>
                <div className='skill_name'>Express</div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 className='skills_subtitle'>Languages</h3>
          <div className='back_end'>
            <div className="skill_container">
              <img className='img_skills' src="https://symbols-electrical.getvecta.com/stencil_25/41_javascript.4ce34e7594.png" alt="JavaScript" height='180px' width="180px"></img>
              <div className='skill_name_position'>
                <div className='skill_name'> JavaScript</div>
              </div>
            </div>
            <div className="skill_container">
              <img className='img_skills' src="https://seeklogo.net/wp-content/uploads/2016/07/ruby-vector-logo.png" alt="Ruby" height='180px' width="180px"></img>
              <div className='skill_name_position'>
                <div className='skill_name'>Ruby</div>
              </div>
            </div>
            <div className="skill_container">
              <img className='img_skills' src="https://thumbs.dreamstime.com/b/sql-database-icon-logo-design-ui-ux-app-orange-inscription-shadow-96841969.jpg" alt="SQL" height='180px' width="180px"></img>
              <div className='skill_name_position'>
                <div className='skill_name'>SQL</div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 className='skills_subtitle'>Database</h3>
          <div className='back_end'>
            <div className="skill_container">
              <img className='img_skills' src="https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg" alt="PostgreSQL" height='180px' width="180px"></img>
              <div className='skill_name_position'>
                <div className='skill_name'>PostgreSQL</div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 className='skills_subtitle'>Languages</h3>
          <div className='back_end'>
            <div className="skill_container">
              <img className='img_skills' src="https://aflux.org/images/aflux/git.png" alt="Git" height='180px' width="180px"></img>
              <div className='skill_name_position'>
                <div className='skill_name'>Git</div>
              </div>
            </div>
            <div className="skill_container">
              <img className='img_skills' src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRWcOKzG_8zXwcK-bt1xus_1LCH0xuxM7Xwgg&usqp=CAU" alt="Github" height='180px' width="180px"></img>
              <div className='skill_name_position'>
                <div className='skill_name'>Github</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )

  }
}