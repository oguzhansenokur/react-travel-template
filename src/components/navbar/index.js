import React from 'react'
import { Link } from "react-router-dom";
import './index.scss';

export default function Navbar() {
  return (
    <div className='navbar' >
      <div className='navbar__logo' >
        Travel
      </div>
      <div className='navbar__nav-items' >
        <Link to='/' className='navbar__nav-items__nav-link' >Home</Link>
        <Link to='/about-us' className='navbar__nav-items__nav-link' >About Us</Link>
        <Link to='/gallery' className='navbar__nav-items__nav-link' >Gallery</Link>
        <Link to='/blog' className='navbar__nav-items__nav-link' >Blog</Link>
        <button   className='navbar__nav-items__sign-in-button' >Sign In</button>
      </div>
    </div>
  )
}
