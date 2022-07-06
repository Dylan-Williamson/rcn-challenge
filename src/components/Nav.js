import React from 'react';
import {
  NavLink
} from "react-router-dom";
import logo from '../assets/logo.png';

const Nav = () => {
  return (
    <nav className='w-screen fixed'>
      <div className='flex gap-8 h-full px-10'>
        <div className='navItem flex items-center'>
          <NavLink className="hover:opacity-60" to="/" end>
            <img src={logo} alt='logo' className='w-12 h-12' />
          </NavLink>
        </div>
        <div className='navItem flex items-center'>
          <NavLink className="hover:opacity-60 font-teko text-lg" to="/dashboard" end>
            DASHBOARD
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Nav