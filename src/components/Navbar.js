import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { AiFillHome } from 'react-icons/ai';
import { MdMiscellaneousServices } from 'react-icons/md';
import { FaBlog, FaBook, FaSmile, FaTachometerAlt, FaSignInAlt, FaUserPlus } from 'react-icons/fa';

function Navbar() {
  const navigate = useNavigate();
  return (
    <nav className="navbar">
      <span className="navbar-title">MindCare</span>
      <div className="navbar-links">
        <NavLink to="/" className={({ isActive }) => isActive ? 'navbar-link active' : 'navbar-link'} end><AiFillHome />Home</NavLink>
        <NavLink to="/services" className={({ isActive }) => isActive ? 'navbar-link active' : 'navbar-link'}><MdMiscellaneousServices />Services</NavLink>
        <NavLink to="/blog" className={({ isActive }) => isActive ? 'navbar-link active' : 'navbar-link'}><FaBlog />Blog</NavLink>
        <NavLink to="/journal" className={({ isActive }) => isActive ? 'navbar-link active' : 'navbar-link'}><FaBook />Journal</NavLink>
        <NavLink to="/mood" className={({ isActive }) => isActive ? 'navbar-link active' : 'navbar-link'}><FaSmile />Mood</NavLink>
        <NavLink to="/dashboard" className={({ isActive }) => isActive ? 'navbar-link active' : 'navbar-link'}><FaTachometerAlt />Dashboard</NavLink>
      </div>
      <div className="navbar-auth">
        <button className="navbar-auth-btn" onClick={() => navigate('/login')}><FaSignInAlt />Login</button>
        <button className="navbar-auth-btn navbar-auth-signup" onClick={() => navigate('/signup')}><FaUserPlus />Sign Up</button>
      </div>
    </nav>
  );
}

export default Navbar; 