import React from 'react'
import './Section5.scss'
import { call } from '../../assets'
export default function Section5() {
  return (
    <>
        <section className='section5'>
            <div className="container">


                <div className="section5__left">
                    <h1>Contact Us</h1>
                    <h5>
                        In dignissim euismod pretium amet enim a eu nam 
                        ut urna accumsan pellentesque lacus duis pharetra eutortor.
                    </h5>
                    <div className="call">
                        <img className='call' src={call} alt="" />
                        <h2>(414) 567 - 2109</h2>
                    </div>
                    <h2>Not convinced yet?</h2>
                    <h5>
                        Massa bibendum consectetur maurisid gravida purus, dolor dui
                         amet morbi non nunc urna purus diam
                    </h5>
                    <button>Browse our packages</button>
                </div>





                <div className="section5__right">
                    <div className="div">
                        <h4>Full name</h4>
                        <input type="text" />
                    </div>

                    <div className="div">
                        <h4>Phone number</h4>
                        <input type="text" />
                    </div>

                    <div className="div">
                        <h4>Address</h4>
                        <input type="text" />
                    </div>


                    <div className="div">
                        <h4>Email</h4>
                        <input type="text" />
                    </div>


                    <div className="div">
                        <h4>Requested service</h4>
                        <input type="text" />
                    </div>


                    <div className="div">
                        <h4>Day of service</h4>
                        <input type="text" />
                    </div>


                    <div className="divv">
                        <h4>Add a note</h4>
                        <input className='inp' type="text" />
                    </div>
                    
                    <button className='al'>Submit message</button>
                </div>
                

            </div>
        </section>
    </>
      
  )
}
