import React from 'react'
import style from '../Landing_components/button.module.css'

const Button = ({changePage, buttonText, display, margin, type, value}) => {
  return (
    <button type={type} value={value}  style={{display: display, margin: margin}} className={style.readMore} role="button" onClick={changePage}>{buttonText}</button>
  )
}

export default Button