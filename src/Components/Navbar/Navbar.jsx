import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useRef } from 'react';
import './Navbar.css';
import LogoBPP from '../../assets/LogoBPP.png'; // Correct import statement

const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav');
  };

  return (
    <header>
      <img src={LogoBPP} alt="BoraPraPraia Logo" className="logo" />
      <nav ref={navRef}>
        <a href='#'>Home</a>
        <a href='#'>Sobre</a>
        <a href='#'>Login</a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
};

export default Navbar;
