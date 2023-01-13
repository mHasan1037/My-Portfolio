import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import style from '../Landing_components/contactMe.module.css'
import Button from './Button'

const ContactMe = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_qpz6shv', 'template_qcvw9v9', form.current, 'qG5Y8efyq_TOUSS_Z')
        .then((result) => {
        }, (error) => {
        });

        setName('')
        setEmail('')
        setMessage('')
        };

  return (
    <div className={style.contactContainer}>
        <div className={style.heading}>
           <h5>How can you communicate?</h5>
           <h1>Contact Me</h1>
        </div>

        <form className={style.form} ref={form} onSubmit={sendEmail} >
            <div className={style.formControl}>
                <input type="text" value={name} onChange={(e)=> setName(e.target.value)} name="to_name" placeholder="Your Name" required/>
                <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} name="from_name" placeholder="Your Email" required/>
            </div>
            <textarea name="message" value={message} onChange={(e)=> setMessage(e.target.value)} required/>
            {
                <Button type="submit" value="Send" buttonText="Send Message" display="block" margin="20px auto" />
            }
        </form>
    </div>
  )
}

export default ContactMe