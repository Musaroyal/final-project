// src/pages/homePage/Home.js

import React from 'react';
import './home.css';
import Navbar from '../../assets/navbar';
import Footer from '../../assets/footer';
import Signup from '../signup/signup';
import { useNavigate } from 'react-router-dom';
const Home = () => {
    const navigate = useNavigate();
  const opportunities = [
    { title: "Software Engineer", description: "Join our team as a Software Engineer to build amazing applications." },
    { title: "Product Manager", description: "We are looking for a Product Manager to oversee our product development." },
    { title: "Data Scientist", description: "Become a Data Scientist and help us make data-driven decisions." },
    { title: "UX/UI Designer", description: "We need a UX/UI Designer to create user-friendly interfaces." },
    // Add more opportunities as needed
  ];

  const handleButtonClick = () => {
    navigate('/Signup'); // Navigate to the Login page or any other page you desire
  };

  return (
    <>
    <Navbar />
    <div className="container">

    <h1>Don't wait for opportunity to knock. Create your own path and secure your employment today!</h1>
      <p>
        This is the home page. We are excited to share our content with you. Explore our website to learn more about what we have to offer!
      </p>
      
      <button onClick={handleButtonClick}>Join Now</button>
      <div className="opportunities">
        <h2>Opportunities</h2>
        {opportunities.map((opportunity, index) => (
          <div className="opportunity" key={index}>
            <h3>{opportunity.title}</h3>
            <p>{opportunity.description}</p>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
    
    </>
  );
}

export default Home;
