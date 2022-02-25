import React from 'react';
import logo from '../img/logo50.png';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import { RiFacebookBoxLine } from 'react-icons/ri';
import { HiOutlineMail } from 'react-icons/hi';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

  const [ showNav, setShowNav ] = useState (false);
  const [ navbar, setNavbar ] = useState (false);

  const chanageBackground = () => {
    if(window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener('scroll', chanageBackground);
  
  const phoneMenuOpen = () => {
    // console.log('menu is - first', showNav);
    if (showNav == true) {
      setShowNav(false);
    } else {
      setShowNav(true);
    }
    // console.log('menu last - first', showNav);
  };



  return (
    <nav className={navbar ? 'header active' : 'header'}>
      <div className='header-container'>
        <div className='hamburger-container'>
          <HiOutlineMenuAlt2 className='hamburger-icon' onClick={phoneMenuOpen}/>
        </div>
        <div className={showNav ? 'menu menu-left active' : 'menu menu-left'} >  {/* id={showNav ? 'menu-left active' : 'menu-left'} */}
          <p><Link to="/react-test/" className='menu-tag'>Home</Link></p>
          <p><Link to="/react-test/new-anime" className='menu-tag'>Add anime</Link></p>
          {/* <p><a className='menu-tag'>Home</a></p> */}
        </div>
        <div className='header-logo'>
          <img src={logo} alt='' />
        </div>
        <div className='menu menu-right'>
          <RiFacebookBoxLine className='social-icons'/>
          <HiOutlineMail  className='social-icons'/>
        </div>
      </div>
    </nav>

  )
}

export default Navbar
