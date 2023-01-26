import React from "react";
import '../css/logo.css';

const Logo = ({ imgSrc }) =>(
  <div className='logo-contenedor'>
    <img
      src={imgSrc}
      className='logo'
      alt='Logo calculadora'
       />
  </div>
);

export default Logo;