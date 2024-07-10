import React from 'react';
import './about.css';
import Footer from '../../assets/footer';


const About = () => {
  return (
    <>
      <div className="about-container">
        <h1>About Us</h1>
        <p>
          Welcome to Job Portal, your number one source for all things job-related. We're dedicated to providing you the very best of job listings, with an emphasis on reliability, customer service, and uniqueness.
        </p>
        <p>
          Founded in 2023 by John Doe, Job Portal has come a long way from its beginnings in a home office. When John first started out, his passion for helping others find their dream jobs drove him to start his own business.
        </p>
        <p>
          We hope you enjoy our job portal as much as we enjoy offering it to you. If you have any questions or comments, please don't hesitate to contact us.
        </p>
        <h2>Our Mission</h2>
        <p>
          Our mission is to make the job search process as easy and efficient as possible for job seekers, while providing companies with the best talent to meet their hiring needs.
        </p>
        <h2>Our Values</h2>
        <ul>
          <li>Integrity</li>
          <li>Customer Commitment</li>
          <li>Quality</li>
          <li>Teamwork</li>
          <li>Respect for People</li>
          <li>Good Citizenship</li>
          <li>A Will to Win</li>
          <li>Personal Accountability</li>
        </ul>
        <Footer/>
      </div>
  
    </>
  );
}

export default About;
