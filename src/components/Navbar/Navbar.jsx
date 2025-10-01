import React from "react";
import { Link, NavLink } from "react-router";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="text-black md:w-[90%] w-[95%] mx-auto py-3">
      <div className="navbar bg-gray-100">
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
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-gray-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/booking">My Bookings</NavLink>
              </li>
              <li>
                <NavLink to="/blogs">Blogs</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact Us</NavLink>
              </li>
            </ul>
          </div>
          <Link
            to="/"
            className="flex items-center justify-center gap-2 lg:text-3xl md:text-2xl text-lg font-bold"
          >
            <img src={logo} className="lg:h-12 md:h-10 h-7" alt="" />
            DocTime
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu-horizontal px-1 text-lg font-semibold">
            <li className="hover:text-blue-600 hover:text-xl">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="pl-4 hover:text-blue-600 hover:text-xl">
              <NavLink to='/booking'>My Bookings</NavLink>
            </li>
            <li className="pl-4 hover:text-blue-600 hover:text-xl">
              <NavLink to='/blogs'>Blogs</NavLink>
            </li>
            <li className="pl-4 hover:text-blue-600 hover:text-xl">
              <NavLink to='/contact'>Contact Us</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="text-white font-semibold bg-blue-500 lg:p-3 md:p-3 p-2 rounded-4xl lg:text-lg md:text-lg text-sm lg:px-5 md:px-5 px-4">Emergency</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
