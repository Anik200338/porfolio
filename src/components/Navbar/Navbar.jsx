import React from 'react';

import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  return (
    <div className="navbar h-2 px-4 fixed z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <ScrollLink to="about" smooth={true} duration={500}>
                About
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="skills" smooth={true} duration={500}>
                Skills
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="Projects" smooth={true} duration={500}>
                Projects
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="Education" smooth={true} duration={500}>
                Education
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="Contact" smooth={true} duration={500}>
                Contact me
              </ScrollLink>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-2xl font-bold">Anik Sajib Sarkar</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="text-lg font-bold">
            <ScrollLink to="about" smooth={true} duration={500}>
              About
            </ScrollLink>
          </li>
          <li className="text-lg font-bold">
            <ScrollLink to="skills" smooth={true} duration={500}>
              Skills
            </ScrollLink>
          </li>
          <li className="text-lg font-bold">
            <ScrollLink to="Projects" smooth={true} duration={500}>
              Projects
            </ScrollLink>
          </li>
          <li className="text-lg font-bold">
            <ScrollLink to="Education" smooth={true} duration={500}>
              Education
            </ScrollLink>
          </li>
          <li className="text-lg font-bold">
            <ScrollLink to="Contact" smooth={true} duration={500}>
              Contact me
            </ScrollLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a
          href="https://github.com/Anik200338"
          className="relative px-5 py-2 font-medium text-white group w"
        >
          <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-purple-500 group-hover:bg-purple-700 group-hover:skew-x-12"></span>
          <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-purple-700 group-hover:bg-purple-500 group-hover:-skew-x-12"></span>
          <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-purple-600 -rotate-12"></span>
          <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-purple-400 -rotate-12"></span>
          <span className="relative">GitHub</span>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
