import React, { useEffect } from 'react'
import portfolioData from '../Data/portfolioData'
import Footer from './Footer'
import style from './Projects.module.css'

const Projects = () => {

  return (
    <>
       <div className='project-container'>
          <div>
              <h1 style={{textAlign: 'center', margin: '20px 0'}}>Front End Projects</h1>
              <div className={style.details}>
              {
                    portfolioData
                    .filter(port => port.type === 'frontEnd')
                    .map((port)=>{
                        const {id, name, webLink, codeLink, img, techs, type} = port
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
          </div>
          <div>
              <h1 style={{textAlign: 'center', margin: '20px 0'}}>React Projects</h1>
              <div className={style.details}>
              {
                    portfolioData
                    .filter(port => port.type === 'react')
                    .map((port)=>{
                      const {id, name, webLink, codeLink, img, techs, type} = port
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
          </div>
       </div>
    </>
  )
}

export default Projects