import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email,setemail]=useState('');
    const [password,setpassword]=useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const res = await axios.post("http://localhost:5000/login", { email, password });
          if (res.data.message === "success") {
            navigate("/home");
          } 
        } catch (error) {
          console.error("Login failed:", error);
        }
      };

 
  return (
    <div className="container mt-5">
        <h2 className="text-center mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
            <div className="form-group mb-3">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" id="email" name="email" value={email} onChange={(e)=>setemail(e.target.value)}/>
            </div>
            <div className="form-group mb-3">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" id="password" name="password" value={password} onChange={(e)=>setpassword(e.target.value)}/>
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
        </form>
        <div className="mt-3">
            <span>Don't have an account? </span>
            <Link to="/signup" className='btn btn-success'>Signup</Link>
        </div>
    </div>
  );
}

export default Login;
