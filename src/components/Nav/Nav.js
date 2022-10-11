import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Nav.css";
import Lottie from "lottie-react";
import logo from "../../assets/Animation/logo.json";
import { Bars3Icon } from "@heroicons/react/24/solid";

const Nav = () => {
  const [open, setOpen] = useState(true);
  return (
    <div>
      <div className="top-header bg-blue-500 flex justify-between px-5 md:px-32 py-3">
        <div>
          <small>
            <i className="text-white">Have any questions ? +0067850 987-67 </i>
          </small>
        </div>
        <div>
          <ul className="flex text-white">
            <li>
              <i>
                <small>
                  <Link>Sign Up</Link>
                </small>
              </i>
            </li>
            <li className="mx-2 md:mx-4">|</li>
            <li>
              <i>
                <small>
                  <Link>Sign In</Link>
                </small>
              </i>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar flex items-center justify-between py-4 px-5 md:px-0 relative">
        <div className="logo-container flex items-center md:ml-20">
          <Lottie className="logo" animationData={logo} />
          <h2 className="logo-title text-2xl md:text-4xl font-bold ">uiz Masters</h2>
        </div>
        <nav>
        <Bars3Icon onClick={()=>setOpen(!open)} className=" w-10 mt-1 ml-2 text-blue-800 md:hidden" />
          <ul className={`md:flex mr-20 w-[100%] bg-white absolute right-[-80px] top-20 md:static pl-20 md:pl-0 shadow-lg shadow-blue-200 md:shadow-none ${open ?'open':'close'}`}>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : undefined)}
                to="/home"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/statistics">Statistics</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
