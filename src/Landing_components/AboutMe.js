import React from 'react'
import style from '../Landing_components/aboutMe.module.css'
import aboutImg from '../Assets/man.png'
import { useNavigate } from 'react-router-dom'
import Button from './Button'

const AboutMe = () => {
  const navigate = useNavigate() 

  const changePage = () =>{
     let path = "About"
     navigate(path)
  }

  return (
    <div className={style.aboutMe}>
        <div>
            <img src={aboutImg} className={style.aboutImage} />
        </div>
        <div className={style.aboutDesc}>
           <h5>Who Am I?</h5>
           <h1>About Me</h1>
           <p>My name is Mahmudul Hasan. I am a front-end developer based in Dhaka, Bangladesh. I have developed many types of front-ends from Ecommerce websites to different applications</p>
           <br/>
           <p>I am passionate about cutting-edge, pixel-perfect, beautiful interfaces and intuitively implemented UX.</p>
           {
            <Button changePage={changePage} buttonText="Read More" />
           }
        </div>
    </div>
  )
}

export default AboutMe