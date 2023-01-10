import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { BiMenuAltRight } from 'react-icons/bi'
import { RxCross2 } from 'react-icons/rx'
import { ImLinkedin } from 'react-icons/im'
import { FaGithubSquare } from 'react-icons/fa'
import { AiFillTwitterSquare, AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import './navBar.css'

const NavBar = () => {
   const [active, setActive] = useState(true)
   const handleActive = () => setActive(!active)
   const closeMobileMenu = () => setActive(true)
  
  return (
    <>
      <nav>
        <NavLink to="/" className="logo">Portfolio.</NavLink>
        <ul className={active ? 'navMenu' : 'navMenu active'}>
            <NavLink to="/" className="navLink" onClick={closeMobileMenu}>Home</NavLink>
            <NavLink to="/about" className="navLink" onClick={closeMobileMenu}>About</NavLink>
            <NavLink to="/projects" className="navLink" onClick={closeMobileMenu}>Projects</NavLink>
            <NavLink to="/testimonial" className="navLink" onClick={closeMobileMenu}>Testimonial</NavLink>
            <NavLink to="/contact" className="navLink" onClick={closeMobileMenu}>Contact</NavLink>  

            <div className='nav-social-link'>
                <a target='_blank' href='https://www.linkedin.com/in/front-end-webdeveloper/'><AiFillLinkedin /></a>
                <a target='_blank' href='https://github.com/mHasan1037'><AiFillGithub /></a>
                <a target='_blank' href='https://twitter.com/Hasan_1037'><AiFillTwitterSquare /></a>
            </div>       
        </ul>
        <div className='navIcon' onClick={handleActive}>
          {active ? <BiMenuAltRight /> : <RxCross2 />}
        </div>
      </nav>
    </>
  )
}

export default NavBar