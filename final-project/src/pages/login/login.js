import { FaUser, FaLock } from "react-icons/fa";
import Signup from "../signup/signup";
import './login.css'
import Footer from "../../assets/footer";
function Login() {
  return (
    <div className="contair">
        <div className="Wrapper">
            <form action="">
                <h1>User's Login</h1>
              
                <div className="input-box">
                    <input type='text' placeholder="username" required/>
                    <FaUser className="icon"/>
                 </div><br></br>
                 
                  <div className="input-box">
                    <input type='password' placeholder="password" required/>
                    <FaLock className="icon"/>
                 </div>

                 <div className="remember-forgot">
                    <label><input type="checkbox" />Remember me</label>
                    <a href="#">forgot password?</a>
                 </div>
                 <button type="submit" className="btn">Login</button>

                 <div className="register-link">
                    <p>Don't have an account?<a href="/Signup">Register</a></p>
                 </div>
            </form>
        </div>
        <Footer/>
    </div>
  );
}

export default Login;
