import '../css/Navbar.css';
import React, { useState } from 'react';


const Navbar = ()=> {
  const [isOpen, setIsOpen] = useState(false);
  return(
    <header className='navbar'>
      <div className='nav-logo'>GRDDev</div>
      <div className={`nav-items ${isOpen && "open"}`}>
        <a href='#'>INICIO</a>
        <a href='#'>BIO</a>
        <a href='#'>PORFOLIO</a>
        <a href='#'>CONTACTO</a>
      </div>  
      <div className={`nav-toggle ${isOpen && "open"}`} onClick={()=> {
        setIsOpen(!isOpen)
      }}>
      <span></span>
      <span></span>
      <span></span>
      </div>
    </header>
  )
}

export default Navbar;