import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";
import './signup.css'
import Footer from "../../assets/footer";

function Signup() {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({
        first_name: '',
        family_name: '',
        email: '',
        cellphone_number: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (inputs.password !== inputs.confirmPassword) {
            alert("Passwords don't match!");
            return;
        }

        const dataToSend = {
            first_name: inputs.first_name,
            family_name: inputs.family_name,
            email: inputs.email,
            cellphone_number: inputs.cellphone_number,
            password: inputs.password
        };

        axios.post('http://127.0.0.1/demo/api/server.php', dataToSend)
    .then(function(response){
        console.log(response.data);
        if(response.data.message) {
            alert(response.data.message);
            navigate('/login');
        } else if(response.data.error) {
            alert(response.data.error);
        }
    })
    .catch(function(error) {
        console.error("Error:", error);
        alert("An error occurred while registering.");
    });
    }

    return (
        <>
        <div className="contair">
            <div className="wrapper">
                <form onSubmit={handleSubmit}>
                    <h1>Register</h1>
                    
                    <div className="input-box">
                        <input type='text' name="first_name" placeholder="First Name(s)" required onChange={handleChange}/>
                        <FaUser className="icon"/>
                    </div><br></br>
                    
                    <div className="input-box">
                        <input type='text' name="family_name" placeholder="Family Name" required onChange={handleChange}/>
                        <FaUser className="icon"/>
                    </div><br></br>

                    <div className="input-box">
                        <input type='email' name="email" placeholder="Email Address" required onChange={handleChange}/>
                        <FaUser className="icon"/>
                    </div><br></br>
                    
                    <div className="input-box">
                        <input type='tel' name="cellphone_number" placeholder="Cellphone Number" required onChange={handleChange}/>
                        <FaUser className="icon"/>
                    </div><br></br>

                    <div className="input-box">
                        <input type='password' name="password" placeholder="Password" required onChange={handleChange}/>
                        <FaLock className="icon"/>
                    </div><br></br>
                    
                    <div className="input-box">
                        <input type='password' name="confirmPassword" placeholder="Confirm Password" required onChange={handleChange}/>
                        <FaLock className="icon"/>
                    </div><br></br>

                    <button type="submit" className="btn">Register</button>

                    <div className="register-link">
                        <p>Already have an account? <a href="/login">Login</a></p>
                    </div>
                </form>
            </div>
        </div>
        <Footer/>
        </>
    );
}

export default Signup;