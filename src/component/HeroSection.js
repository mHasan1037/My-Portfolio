import React from 'react'
import heroSection from './heroSection.module.css'
import heroImg from '../Assets/Developer.gif'
import AboutMe from '../Landing_components/AboutMe'
import Skills from '../Landing_components/Skills'
import { useNavigate } from 'react-router-dom'
import Portfolio from '../Landing_components/Portfolio'
import ContactMe from '../Landing_components/ContactMe'
import Footer from './Footer'

const HeroSection = () => {

  let navigate = useNavigate()

  const routeChange = () =>{
      let path = "contact";
      navigate(path)
  }

  return (
    <>
       <div className={heroSection.hero}>
          <div className={heroSection.desc}>
            <div>
                <h2>Hi! I Am</h2>
                <h1>Mahmudul Hasan</h1>
                <h4>Front End developer</h4>
                <button onClick={routeChange} className={heroSection.heroButton} role="button">Hire Me</button>
            </div>
          </div>
          <div>
            <img className={heroSection.heroImgStyle} src={heroImg} alt="Hero Image" />
          </div>
      </div>
      {
        <>
            <AboutMe />
            <Skills />
            <Portfolio />
            <ContactMe question="How can you communicate?" headline="Contact Me" />
            <Footer />
        </>
      }
    </>
  )
}

export default HeroSection