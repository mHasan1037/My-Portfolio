import React from 'react'
import style from '../Landing_components/aboutMe.module.css'
import aboutImg from '../Assets/man.png'

const AboutMe = () => {
  return (
    <div className={style.aboutMe}>
        <div>
            <img src={aboutImg} className={style.aboutImage} />
        </div>
        <div className={style.aboutDesc}>
           <h5>Who Am I?</h5>
           <h1>About Me</h1>
           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae aliquid ad provident aut fuga animi soluta quae eos non cupiditate voluptates dolorem, doloremque quos dicta quibusdam impedit iure nemo a iste</p>
           <br/>
           <p>culpa! Quasi quibusdam hic recusandae delectus velit officiis explicabo voluptatibus! Nemo esse similique, voluptates labore distinctio, placeat explicabo facilis molestias, blanditiis culpa iusto voluptatem ratione eligendi a, quia temporibus velit vero ipsa sint ex voluptatum expedita aliquid! Debitis, nam!</p>
           <button className={style.downloadBtn} role="button">Download CV</button>
        </div>
    </div>
  )
}

export default AboutMe