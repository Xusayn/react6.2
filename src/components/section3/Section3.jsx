import React from 'react'
import { flower ,call } from '../../assets'
import './Section3.scss'
export default function Section3() {
  return (
    <>
        <section className='section3'>
            <div className="container">
               <div className="blue">
                <div className="section3__left">
                    <img className='section3__img' src={flower} alt="" />
                </div>

                <div className="section3__right">
                    <h3>Covid-19 sanitization</h3>
                    <h2>We follow guidelines to keep you safe from the COVID-19 virus</h2>
                    <h4>
                        Lobortis mattis odio leo eget mauris met aliquet semper
                         molestie 
                        sollicitudin congue massa mauris lectus.
                    </h4>
                    <div className="buttons">
                        <button>Get a free quote</button>
                        <img src={call} alt="" />
                        <h2>(414) 567 - 2109</h2>
                    </div>
                </div>

                
               </div>

            </div>
        </section>
    </>
      
  )
}
