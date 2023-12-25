import React from 'react'
import './Section2.scss'
import { img,imgg,imggg } from '../../assets'
export default function Section2() {
  return (
      <>
        <section className="section2">
            <div className="container">
                <div className="section2__info">
                <h1>Our Services</h1>
                <button className='section2__btn'>Explore services</button>
                </div>

                <div className="logos">
                    <div className='div'>
                        <img className='section2__img' src={img} alt="" />
                        <h2>House cleaning</h2>
                        <h3>Lorem ipsum dolor sit amet consecte tur adipiscing 
                            elit semper dalaracc lacus vel facilisis volutpat est.
                        </h3>
                        
                    </div>


                    <div className='div'>
                        <img className='section2__img' src={imgg} alt="" />
                        <h2>Office cleaning</h2>
                        <h3>Lorem ipsum dolor sit amet consecte tur adipiscing 
                            elit semper dalaracc lacus vel facilisis volutpat est.
                        </h3>
                        
                    </div>



                    <div className='div'>
                        <img className='section2__img' src={imggg} alt="" />
                        <h2>Industrial cleaning</h2>
                        <h3>Lorem ipsum dolor sit amet consecte tur adipiscing 
                            elit semper dalaracc lacus vel facilisis volutpat est.
                        </h3>
                        
                    </div>





                </div>

                
            </div>
        </section>
      </>
  )
}
