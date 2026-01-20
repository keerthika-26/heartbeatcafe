// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">Heartbeat Café</h2>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
        <Link to="/order-dashboard">Place Order</Link>
         <Link to="/profile">profile</Link>
      </div>
    </nav>
  );
};

export default Navbar;
