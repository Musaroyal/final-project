import './App.css';
import React from 'react';
import Home from './pages/home/home';
import Login from './pages/login/login';
import Signup from './pages/signup/signup';
import About from './pages/About/about';
import AdminLogin from './pages/dashboard/adminlogin';
import Dashboard from './pages/dashboard/dashboard';
import Navbar from './assets/navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
      <div className='App'>
        <Navbar/>
        <Routes>
          <Route path="/" element={ <Home/>} />
          <Route path="/login" element={ <Login/>} />
          <Route path="/signup" element={ <Signup/>} />
          <Route path="/about" element= { <About/> } />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/adminlogin" element={ <AdminLogin/>} />
        </Routes>
        
      </div>
    </Router>
    </div>
  );
}

export default App;
