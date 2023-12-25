import React from 'react'
import { left ,right } from '../../assets'
import './Section4.scss'

export default function Section4() {
  return (
    <>
        <section className='section4'>
            <div className="container">
                <div className="hero">
                    <h1>Articles & resources</h1>
                    <ul>
                        <button className='btn1'>Get a free quote</button>
                        <button className='btn2'>Browse articles</button>

                    </ul>
                </div>




               <div className="divs">
               <div className="left">
                    <img src={left} alt="" />
                    <div className="card">
                        <h2>8 best vacuum cleaners to clean any mess for your home in 2022</h2>
                        <h4>Lorem ipsum dolor sit amet conse ctetur adip 
                            iscing elit justo quis odio sit sit ac port titor sit males.
                        </h4>
                        <div className="abich">
                        <h4>Jan 28, 2022</h4>
                        <div className="tor"></div>
                        </div>
                       
                    </div>
                </div>
                <div className="right">
                    <img src={right} alt="" />
                    <div className="card">
                    <h2>How to properly disinfect your phone and other electronics</h2>
                        <h4>Lorem ipsum dolor sit amet conse ctetur adip 
                            iscing elit justo quis odio sit sit ac port titor sit males.
                        </h4>
                        <div className="abich">
                        <h4>Feb 1, 2022</h4>
                        <div className="tor"></div>
                        </div>
                       
                    </div>

                </div>
               </div>


            </div>
        </section>
    </>
  )
}
