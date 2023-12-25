import React from 'react';
// import './Header.scss';
import appStyles from '../../Header.module.css';
import { logo,call ,ish} from '../../assets';


const Header = () => {
  return (
    <>
      <header className={appStyles.header}>
       <div className={appStyles.container}>
       <nav className={appStyles.nav}>
          <ul className={appStyles.ul}>
            <img className={appStyles.img} src={logo} alt="" />
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Articles</li>
            <li>Contact</li>
          </ul>
          <ul className={appStyles.ul}>
            <li>cart (0)</li>
            <button className={appStyles.button}>Get a free quote</button>
          </ul>
        </nav>


      <div className={appStyles.div}>
      <div className={appStyles.left}>
        <h1 className={appStyles.clean}>Quality cleaning for your home</h1>
        <h3>
          Condimentum mauris sit cursus amet id non 
          neque pharetra nulla ornare sed facilisis senectus dapibus nibh ultrices 
          eget suscipit aliquet et nulla magna lacus penatibus.
        </h3>
        <div className={appStyles.info}>
          <button className={appStyles.button}>Get a free quote</button>
         <div className={appStyles.bir}>
         <img className={appStyles.logos} src={call} alt="" />
          <h2 className={appStyles.number}>(414) 567 - 2109</h2>
         </div>
        </div>
      </div>




      <div className={appStyles.right}>
       <img className={appStyles.ish} src={ish} alt="" />
        
      </div>

      </div>


       </div>
      </header>
    </>
      
  );
};

export default Header;