import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar'; // ⬅️ Import the Navbar
import './home.css';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home-container">
        <h1>Welcome to 💕Heartbeat Café ☕</h1>
        <p>Enjoy great food, cozy ambiance, and fast service.</p>

        <div className="home-buttons">
          <Link to="/menu"><button className="home-btn">Menu</button></Link>
          <Link to="/order-dashboard"><button className="home-btn">Place Order</button></Link>
        </div>
      </div>
    </>
  );
};

export default Home;


