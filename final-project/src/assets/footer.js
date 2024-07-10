// src/components/Footer.js

import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-row">
        <div className="footer-col">
          <h4>Services</h4>
          <p>About</p>
          <p>Return Policy</p>
          <p>Customer Service</p>
        </div>
        <div className="footer-col">
          <h4>Quick Links</h4>
          <p>Home</p>
          <p>About</p>
          <p>Login</p>
          <p>Dashboard</p>
          <p>Register</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
