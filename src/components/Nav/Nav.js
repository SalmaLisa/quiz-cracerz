import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Nav.css';
import Lottie from "lottie-react";
import logo from '../../assets/Animation/logo.json'

const Nav = () => {
  return (
    <div>
      <div className='top-header bg-blue-500 flex justify-between px-32 py-3'>
        <div>
          <small>
            <i className='text-white'>Have any questions ? +0067850 987-67 </i>
          </small>
        </div>
        <div>
          <ul className='flex text-white'>
            <li>
              <i>
                <small><Link>Sign Up</Link></small>
              </i>
            </li>
            <li className='mx-4'>
             |
            </li>
            <li>
              <i>
                <small><Link>Sign In</Link></small>
              </i>
            </li>
          </ul>
        </div>
      </div>
      <div  className='navbar flex items-center justify-between py-4'>
        <div className='logo-container flex items-center ml-20'>
        <Lottie className='logo' animationData={logo} />
          <h2 className='logo-title text-4xl font-bold '>uiz Masters</h2>
        </div>
        <nav>
          <ul className='flex mr-20 '>
            <li>
              <NavLink className={({isActive})=>isActive? 'active':undefined} to='/home'>Home</NavLink>
            </li>
            <li>
              <NavLink to='/statistics'>Statistics</NavLink>
            </li>
            <li>
              <NavLink to='/blog'>Blog</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Nav;