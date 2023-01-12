import React from 'react'
import style from '../Landing_components/skill.module.css'
import html from '../Assets/html.webp'
import css from '../Assets/css.png'
import js from '../Assets/javascript.png'
import react from '../Assets/React.png'
import bootstrap from '../Assets/bootstrap.png'
import gitHub from '../Assets/GitHub.png'

const Skills = () => {
  return (
    <div className={style.skills}>
       <div className={style.heading}>
           <h5>What is my strength?</h5>
           <h1>Skills</h1>
       </div>
       <div className={style.techContainer}>
          <div>
              <img className={style.techImg} src={html} />
              <img className={style.techImg} src={css} />
              <img className={style.techImg} src={js} />
          </div>
          <div>
              <img className={style.techImg} src={react} />
              <img className={style.techImg} src={bootstrap} />
              <img className={style.techImg} src={gitHub} />
          </div>
       </div>
    </div>
  )
}

export default Skills