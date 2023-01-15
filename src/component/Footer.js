import React from 'react'
import style from './footer.module.css'
import { AiFillTwitterSquare, AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { BsStackOverflow } from 'react-icons/bs'
import { Tooltip } from 'react-tooltip'

const Footer = () => {
  return (
    <div className={style.container}>
        <div>Copyright {new Date().getFullYear()} &copy; Mahmudul Hasan</div>
        <div className={style.social}>
                <a target='_blank' id='linkedIn' href='https://www.linkedin.com/in/front-end-webdeveloper/'><AiFillLinkedin /></a>
                <Tooltip anchorId='linkedIn'><span>LinkedIn</span></Tooltip>
                <a target='_blank' id='github' href='https://github.com/mHasan1037'><AiFillGithub /></a>
                <Tooltip anchorId='github'><span>GitHub</span></Tooltip>
                <a target='_blank' id='twitter' href='https://twitter.com/Hasan_1037'><AiFillTwitterSquare /></a>
                <Tooltip anchorId='twitter'><span>Twitter</span></Tooltip>
                <a target='_blank' id='stackoverflow' href='https://stackoverflow.com/users/10482324/m-hasan'><BsStackOverflow /></a>
                <Tooltip anchorId='stackoverflow'><span>Stack Overflow</span></Tooltip>
        </div>  
    </div>
  )
}

export default Footer