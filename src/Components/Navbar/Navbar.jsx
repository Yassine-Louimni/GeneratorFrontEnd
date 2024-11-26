import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assests/logo.png'
import { Link } from 'react-scroll'
import menu_icon from '../../assests/menu-icon.png'

const Navbar = () => {

  const[sticky , setSticky] = useState(false);
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 500 ? setSticky(true) : setSticky(false);
    })
  },[]);
    

   const [mobileMenu, setMobileMenu] = useState(false);
   const toggleMenu = ()=>{
     mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
   }

  return (
    <nav className={`container ${sticky? 'dark-nav' : ``}`}>
     <img src= {logo} alt='' className='logo' />
      <ul className={mobileMenu?'':'hide-mobile-menu'}>
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='features' smooth={true} offset={-260} duration={500}>Features</Link></li>
        <li><Link to='pricing' smooth={true} offset={-260} duration={500}>Pricing</Link></li>
        <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
        <li><Link to='contact' smooth={true} offset={0} duration={-260}>Contact us</Link></li>
        <li> <button className='btn'>Login</button></li>
      </ul>
      <img src={menu_icon} alt=""  className='menu-icon' onClick={toggleMenu} />
    </nav>
  )
}

export default Navbar
