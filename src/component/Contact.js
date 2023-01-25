import React from 'react'
import style from './contact.module.css'
import {AiOutlineMail, AiFillPhone, AiOutlineTwitter, AiOutlineSkype} from 'react-icons/ai'
import {FaLinkedinIn} from 'react-icons/fa'
import ContactMe from '../Landing_components/ContactMe'
import Footer from './Footer'

const Contact = () => {
  return (
    <div className={style.contactContainer}>
         <div className={style.headline}>
             <h1>Contact Me</h1>
             <p>Let's work together</p>
         </div>
         <div className={style.socialContainer}>
             <div className={style.iconBox}>
                  <div className={style.icon}>
                      <AiOutlineMail />
                  </div>
                  <p>Email</p>
                  <span class={style.address}>mhasan.bd.95@gmail.com</span>
             </div>
             <div className={style.iconBox}>
                  <div className={style.icon}>
                      <AiFillPhone />
                  </div>
                  <p>Phone</p>
                  <span class={style.address}>+880-130-260-9245</span>
             </div>
             <div className={style.iconBox}>
                  <div className={style.icon}>
                      <AiOutlineSkype />
                  </div>
                  <p>Skype</p>
                  <span class={style.address}>live:mhasan.bd.95</span>
             </div>
             <div className={style.iconBox}>
                  <div className={style.icon}>
                      <FaLinkedinIn />
                  </div>
                  <p>LinkedIn</p>
                  <a class={style.address} target="_blank" href='https://www.linkedin.com/in/front-end-webdeveloper/'>Click Here</a>
             </div>
             <div className={style.iconBox}>
                  <div className={style.icon}>
                      <AiOutlineTwitter />
                  </div>
                  <p>Twitter</p>
                  <a class={style.address} target="_blank" href='https://twitter.com/Hasan_1037'>Hasan_1037</a>
             </div>
         </div>
         <div style={{marginTop: '160px'}}>
             <ContactMe headline="Message Me" />
         </div>
         <Footer />
    </div>
  )
}

export default Contact