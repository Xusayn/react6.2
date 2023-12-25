import React from 'react'
import './Section1.scss'
import { div1,div2,div3 } from '../../assets'
export default function Section1() {
  return (
    <>
        <section className='section1'>
            <div className="container">
                <h1>About Us</h1>
                <h4>
                    Sagittis nibh scelerisque vitae
                     eget vulputate sem elementum sed neque 
                    nisi felis non ultrices massa id egestas quam velit pretium nu.
                </h4>

                <div className="logos">
                    <div className='div'>
                        <img className='div__img' src={div1} alt="" />
                        <h2>1. Schedule online</h2>
                        <h3>Sagittis nibh scelerisque vitae egetolment vulputate sem elementum sed n.</h3>
                        
                    </div>





                    <div className='div'>
                        <img className='div__img' src={div2} alt="" />
                        <h2>2. Pay online easily</h2>
                        <h3>Vitae ut accumsan blandit ullamcorperolm suscipit dui gravida amet at nunc.</h3>
                        
                    </div>




                    <div className='div'>
                        <img className='div__img' src={div3} alt="" />
                        <h2>3. Get your house cleaned</h2>
                        <h3>Nunc maecenas sollicitudin metus tellus mattis sed porttitor cursus eleifend.</h3>
                        
                    </div>
                </div>

                <div className="buttons">
                        <button className='button1'>Get a free quote</button>
                        <button className='button2'>Explore services</button>

                    </div>
            </div>
        </section>
    </>
      
  )
}
