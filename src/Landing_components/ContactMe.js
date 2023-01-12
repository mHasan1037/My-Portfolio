import React from 'react'
import style from '../Landing_components/contactMe.module.css'
import Button from './Button'

const ContactMe = () => {
  return (
    <div className={style.contactContainer}>
        <div className={style.heading}>
           <h5>How can you communicate?</h5>
           <h1>Contact Me</h1>
        </div>

        <form className={style.form}>
            <div className={style.formControl}>
                <input type="text" placeholder="Your Name" />
                <input type="email" placeholder="Your Email" />
            </div>
            <textarea />
            {
                <Button buttonText="Send Message" display="block" margin="20px auto" />
            }
        </form>
    </div>
  )
}

export default ContactMe