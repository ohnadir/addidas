"use client";
import React from 'react'
import { useEffect, useState } from 'react';
import "./authentication.css"


const Page = () => {
    const [login, setLogin] = useState("")
    const [regis, setRegis] = useState("")
    const [error, setError] = useState(null);

    useEffect(() => {
        const signUpButton = document.getElementById('signUp');
        const signInButton = document.getElementById('signIn');
        const container = document.getElementById('container');
    
        if(signUpButton){
            signUpButton.addEventListener('click', () => {
                container.classList.add("right-panel-active");
            });
        }
    
        if(signInButton){
            signInButton.addEventListener('click', () => {
                container.classList.remove("right-panel-active");
            });
        }
    }, [])

    const handleChangeRegis = (e)=>{
        setRegis(prev=>({...prev, [e.target.name] : e.target.value}))
    }
    const handleChangeLogin = (e)=>{
        setLogin(prev=>({...prev, [e.target.name] : e.target.value}))
    }
    const handleRegisOnSubmit = async(e) => {
        e.preventDefault();
        console.log(regis)
        try {
            const res = await fetch("/api/auth/registration", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(regis)
            });
            console.log(res)
        } catch (err) {
            setError(err);
            console.log(err);
        }
    }
    const handleLoginOnSubmit = async(e) => {
        e.preventDefault();
        try {
            const res = await fetch("/api/auth/login", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(login),
            });
        } catch (err) {
            setError(err);
            console.log(err);
        }
    }
    
  return (
    <div className='authentication'>
        <div className="container" id="container">
            <div className="form-container sign-up-container">
                <div className='form'>
                    <h1>Create Account</h1>
                    <div className="social-container">
                        <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                        <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                    <span>or use your email for registration</span>
                    <input onChange={handleChangeRegis} name='name' type="text" placeholder="Full Name" />
                    <input onChange={handleChangeRegis} name='email' type="email" placeholder="Email" />
                    <input onChange={handleChangeRegis} name='phone' type="text" placeholder="Phone Number" />
                    <input onChange={handleChangeRegis} name='password' type="password" placeholder="Password" />
                    <button onClick={handleRegisOnSubmit}>Sign Up</button>
                </div>
            </div>
            <div className="form-container sign-in-container">
                <div className='form' >
                    <h1>Sign in</h1>
                    <div className="social-container">
                        <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                        <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                    <span>or use your account</span>
                    <input onChange={handleChangeLogin} name="email" type="email" placeholder="Email" />
                    <input onChange={handleChangeLogin} name="password" type="password" placeholder="Password" />
                    <a href="#">Forgot your password?</a>
                    <button onClick={handleLoginOnSubmit}>Sign In</button>
                </div>
            </div>
            <div className="overlay-container">
                <div className="overlay">
                    <div className="overlay-panel overlay-left">
                        <h1>Welcome Back!</h1>
                        <p>To keep connected with us please login with your personal info</p>
                        <button className="ghost" id="signIn">Sign In</button>
                    </div>
                    <div className="overlay-panel overlay-right">
                        <h1>Hello, Friend!</h1>
                        <p>Enter your personal details and start journey with us</p>
                        <button className="ghost" id="signUp">Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Page