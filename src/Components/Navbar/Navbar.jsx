import React from 'react'
import './Navbar.css'
import logo from '../../assests/logo.png'

const Navbar = () => {
  return (
    <nav className='container'>
     <img src= {logo} alt='' className='logo' />
      <ul>
        <li>Home</li>
        <li>Features</li>
        <li>Pricing</li>
        <li>About us</li>
        <li>Testimonials</li>
        <li> <button className='btn'>Login</button></li>
      </ul>
    </nav>
  )
}

export default Navbar
