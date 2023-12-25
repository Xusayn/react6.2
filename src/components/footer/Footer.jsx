import React from 'react';
import  style from'../../Footer.module.css' 
import { logo} from '../../assets';
const Footer = () => {
  return (
    <>
      <footer className={style.footer}>
          <div className={style.div}>
            <div className={style.card}>
              <h2 className={style.h2}>Quality cleaning for your home</h2>
              <h4 className={style.h4}>
                Lorem ipsum dolor sit amet cteturdo adipiscing 
                elit, sed do eiusmo.
              </h4>
              
            </div>



            <div className={style.card}>
              <h2 className={style.h2}>Contact us</h2>
              <h4 className={style.h4}>
              1827 Nickel Road, Los Angeles, CA, 90017, United States
              </h4>
              <h4 className={style.h4}>(414) 567 - 2109</h4>
              <h4 className={style.h4}>contact@cleaning.com</h4>
              
            </div>





            <div className={style.card}>
              <h2 className={style.h2}>Hours</h2>
              <h4 className={style.h4}>
              Monday to Friday
              </h4>
              <h4 className={style.h4}>
              6:00 AM - 9:00 PM
              </h4>
              <h2 className={style.h2}>Saturday & Sunday</h2>
              <h4 className={style.h4}>
              8:00 AM - 8:00 PM
              </h4>
            </div>





            <div className={style.card}>
              <h2 className={style.h2}>Get a free estimate</h2>
              <h1 className={style.h1}>(414) 567 - 2109</h1>
              <h4 className={style.h4}>
                Lorem ipsum dolor sit amet cteturdo adipiscing 
                elit, sed do eiusmo.
              </h4>
              <button className={style.button}>Request a free quote</button>
              
            </div>
          </div>

          <div className={style.items}>
            <img src={logo} alt="" />
            <div className={style.itemm}>
              <h4>Copyright © Cleaning X | Designed by <span className={style.item}>BRIX Templates</span>- Powered by <span className={style.item}>Webflow</span></h4>
            </div>
          </div>
      </footer>
    </>
  );
};

export default Footer;