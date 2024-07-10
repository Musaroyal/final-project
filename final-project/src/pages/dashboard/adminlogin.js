import React from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import Footer from '../../assets/footer';
import About from '../About/about';
import Dashboard from '../dashboard/dashboard';
import { useNavigate } from 'react-router-dom';

function AdminLogin() {
const navigate = useNavigate();

  const handleLoginClick = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    navigate('/Home');
  };

  return (
    <div className="contair">
      <div className="Wrapper">
        <form onSubmit={handleLoginClick}>
          <h1>Admin Login</h1>
          <div className="input-box">
            <input type='text' placeholder="Username" required />
            <FaUser className="icon" />
          </div><br />
          <div className="input-box">
            <input type='password' placeholder="Password" required />
            <FaLock className="icon" />
          </div><br />
          <button type="submit" className="btn">Login</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default AdminLogin;
