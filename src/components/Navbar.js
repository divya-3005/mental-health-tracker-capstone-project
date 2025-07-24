import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { AiFillHome } from 'react-icons/ai';
import { MdMiscellaneousServices } from 'react-icons/md';
import { FaBlog, FaBook, FaSmile, FaTachometerAlt, FaSignInAlt, FaUserPlus, FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuToggle = () => setMenuOpen(m => !m);
  const handleNavClick = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <span className="navbar-title">MindCare</span>
      <button className="navbar-hamburger" onClick={handleMenuToggle} aria-label="Toggle menu">
        {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>
      <div className={`navbar-menu${menuOpen ? ' open' : ''}`}>
        <div className="navbar-links">
          <NavLink to="/" className={({ isActive }) => isActive ? 'navbar-link active' : 'navbar-link'} end onClick={handleNavClick}><AiFillHome />Home</NavLink>
          <NavLink to="/services" className={({ isActive }) => isActive ? 'navbar-link active' : 'navbar-link'} onClick={handleNavClick}><MdMiscellaneousServices />Services</NavLink>
          <NavLink to="/blog" className={({ isActive }) => isActive ? 'navbar-link active' : 'navbar-link'} onClick={handleNavClick}><FaBlog />Blog</NavLink>
          <NavLink to="/journal" className={({ isActive }) => isActive ? 'navbar-link active' : 'navbar-link'} onClick={handleNavClick}><FaBook />Journal</NavLink>
          <NavLink to="/mood" className={({ isActive }) => isActive ? 'navbar-link active' : 'navbar-link'} onClick={handleNavClick}><FaSmile />Mood</NavLink>
          <NavLink to="/dashboard" className={({ isActive }) => isActive ? 'navbar-link active' : 'navbar-link'} onClick={handleNavClick}><FaTachometerAlt />Dashboard</NavLink>
        </div>
        <div className="navbar-auth">
          <button className="navbar-auth-btn" onClick={() => { navigate('/login'); setMenuOpen(false); }}><FaSignInAlt />Login</button>
          <button className="navbar-auth-btn navbar-auth-signup" onClick={() => { navigate('/signup'); setMenuOpen(false); }}><FaUserPlus />Sign Up</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar; 
