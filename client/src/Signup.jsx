import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function Signup() {
    const [name,setname]=useState('');
    const [email,setemail]=useState('');
    const [password,setpassword]=useState('');
    const navigate = useNavigate();
 
    const handleSubmit= async (e)=>{
        e.preventDefault();
        await axios.post('http://localhost:5000/signup',{name,email,password})
        navigate('/login')
    }

 return(
        <div className="container mt-5">
            <h2 className="text-center mb-4">Signup</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group mb-3">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" name="name" value={name} onChange={(e)=>setname(e.target.value)}/>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" id="email" name="email" value={email} onChange={(e)=>setemail(e.target.value)}/>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" name="password" value={password} onChange={(e)=>setpassword(e.target.value)}/>
                </div>
                <button type="submit" className="btn btn-primary">Signup</button>
            </form>
            <div className="mt-3">
                <span>Already have an account? </span>
                <Link to="/login" className='btn btn-success'>Login</Link>
            </div>
        </div>
 )
}

export default Signup;
