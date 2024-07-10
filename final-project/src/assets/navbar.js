import './navbar.css'
import Home from '../pages/home/home';
import About from '../pages/About/about';
import Login from '../pages/login/login';
import Profile from '../pages/profile/profile';
import DashboardSidebar from '../pages/dashboard/dashboard';
import AdminLogin from '../pages/dashboard/adminlogin';
import Dashboard from '../pages/dashboard/dashboard';
const Navbar = ()=> {
  return (
    <header className="header">
        <a href='/' className="logo">Stud Job Connect</a>

        <nav className="navbar">
            <a href="/">Home</a>
            <a href="/About">About Us</a>
            <a href="/AdminLogin">Dashboard</a>
            <a href="/Login">Login</a>
        </nav>
    </header>
  );
}

export default Navbar;
