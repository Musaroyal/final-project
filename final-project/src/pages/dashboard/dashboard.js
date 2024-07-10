import React from 'react';
import './dashb.css'
import Header from './dashboard pages/Header';
import Sidebar from './dashboard pages/Sidebar';
import Home from '../home/home';

function Dashboard() {
  return(
    <div className='grid-continer'>
      <Header/>
      <Sidebar/>
      <Home/>
    </div>
  );
}

export default Dashboard;
