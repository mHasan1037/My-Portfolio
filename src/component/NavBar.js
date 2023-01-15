import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { BiMenuAltRight } from 'react-icons/bi'
import { RxCross2 } from 'react-icons/rx'
import { AiFillTwitterSquare, AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import './navBar.css'

const NavBar = () => {
   const [active, setActive] = useState(false)
   const [navbar, setNavbar] = useState(false)
   const [file, setFile] = useState(null)

   const handleActive = () => setActive(!active)
   const closeMobileMenu = () => setActive(false)

   const changeBackground = () =>{
      if(window.scrollY >= 80){
        setNavbar(true)
      }else{
        setNavbar(false)
      }
   }

   window.addEventListener('scroll', changeBackground)

   const handleDownload = () =>{
      const blob = new Blob([file], {type: "application/pdf"}); 
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a")
      a.href = url;
      a.download = "Mahmudul Hasan.pdf";
      a.click();
      URL.revokeObjectURL(url)
   }

   useEffect(()=>{
      fetch('../MahmudulHasan.pdf')
      .then(res => res.blob())
      .then(blob => setFile(blob))
   },[])
  
  return (
    <>
      <nav className={navbar ? 'active' : ''}>
        <NavLink to="/" className="logo">Portfolio.</NavLink>
        <ul className={active ? 'navMenu active' : 'navMenu'}>
            <NavLink to="/herosection" className="navLink" onClick={closeMobileMenu}>Home</NavLink>
            <NavLink to="/about" className="navLink" onClick={closeMobileMenu}>About</NavLink>
            <NavLink to="/projects" className="navLink" onClick={closeMobileMenu}>Projects</NavLink>
            <NavLink to="/testimonial" className="navLink" onClick={closeMobileMenu}>Testimonial</NavLink>
            <NavLink to="/contact" className="navLink" onClick={closeMobileMenu}>Contact</NavLink> 
            <button onClick={handleDownload}>Resume</button> 

            <div className='nav-social-link'>
                <a target='_blank' onClick={closeMobileMenu} href='https://www.linkedin.com/in/front-end-webdeveloper/'><AiFillLinkedin /></a>
                <a target='_blank' onClick={closeMobileMenu} href='https://github.com/mHasan1037'><AiFillGithub /></a>
                <a target='_blank' onClick={closeMobileMenu} href='https://twitter.com/Hasan_1037'><AiFillTwitterSquare /></a>
            </div>       
        </ul>
        <div className='navIcon' onClick={handleActive}>
          {active ? <RxCross2 /> : <BiMenuAltRight />}
        </div>
      </nav>
    </>
  )
}

export default NavBar