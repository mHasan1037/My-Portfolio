import React from 'react'
import style from '../Landing_components/portfolio.module.css'
import portfolioData from '../Data/portfolioData'
import Button from './Button'
import { useNavigate } from 'react-router-dom'



const Portfolio = () => {
    const navigate = useNavigate()
    const changePage = () =>{
        let path = "Projects"
        navigate(path)
    }
  return (
    <div className={style.portContainer}>
        <div className={style.heading}>
           <h5>What is my strength?</h5>
           <h1>Portfolio</h1>
        </div>

       <div className={style.details}>
            {
                portfolioData.slice(0, 3).map((port)=>{
                    const {id, name, webLink, codeLink, img, techs} = port
                    return (
                        <div className={style.portElem} key={id}>
                             <img src={img} className={style.img} />
                             <div className={style.portContent}>
                                <h2 className={style.title}>{name}</h2>
                                <div className={style.techContainer}>
                                    {techs.map((tech, idx) =>{
                                        return (
                                            <span key={idx} className={style.technology}>{tech}</span>
                                        )
                                    })}
                                </div>
                                <div className={style.btns}>
                                    <a href={codeLink} target="_codeLink">Code</a>
                                    <a href={webLink} target="_blank">Live</a>
                                </div>
                             </div>
                        </div>
                    )
                })
            }
       </div>

       {
        <Button buttonText="See More" display="block" margin="10px auto" changePage={changePage}/>
       }
    </div>
  )
}

export default Portfolio