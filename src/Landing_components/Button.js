import React from 'react'
import style from '../Landing_components/button.module.css'

const Button = ({changePage, buttonText, display, margin}) => {
  return (
    <button style={{display: display, margin: margin}} className={style.readMore} role="button" onClick={changePage}>{buttonText}</button>
  )
}

export default Button