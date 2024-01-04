import React, { useState } from 'react';
import { RiUser3Line, RiLock2Line, RiEyeOffLine, RiEyeLine } from 'react-icons/ri';
import SocialIcons from './SocialIcons';
import ForgetPassword from './ForgetPassword';
import { Link, useNavigate } from 'react-router-dom'; // Import Link from react-router-dom
import './App.css';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [signup, setSignup] = useState(false);
  const navigate = useNavigate();
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleForgotPassword = () => {
    navigate('/ForgetPassword'); // Use navigate to go to the forgetpassword page
  };

  return (
    <div className="login">
      <br></br>
      <form action="" className="form">
        <h1 className="head">Login</h1>

        <div className="content">
          {/* Email Input */}
          <div className="box">
            <RiUser3Line className="login__icon" />
            <div className="box-input">
              <input
                type="email"
                required
                className="input"
                id="login-email"
                placeholder=" "
              />
              <label htmlFor="login-email" className="login__label">
                Email
              </label>
            </div>
          </div>

          {/* Password Input */}
          <div className="box">
            <RiLock2Line className="login__icon" />
            <div className="box-input">
              <input
                type={showPassword ? "text" : "password"}
                required
                className="input"
                id="login-pass"
                placeholder=" "
              />
              <label htmlFor="login-pass" className="login__label">
                Password
              </label>
              {showPassword ? (
                <RiEyeLine
                  className="login__eye"
                  id="login-eye"
                  onClick={handleTogglePassword}
                />
              ) : (
                <RiEyeOffLine
                  className="login__eye"
                  id="login-eye"
                  onClick={handleTogglePassword}
                />
              )}
            </div>
          </div>
        </div>

        {/* Remember me and Forgot Password */}
        <div className="tick">
          <div className="tick-group">
            <input type="checkbox" className="tick-input" id="login-check" />
            <label htmlFor="login-check" className="tick-label">
              Remember me
            </label>
          </div>
          {/* Use Link instead of anchor tag for navigation */}
          <Link to="/ForgetPassword" className="forgot" onClick={handleForgotPassword}>
            Forgot Password?
          </Link>
        </div>

        {/* Social Icons */}
        {/* ... Your social icons component */}

        {/* Login Button */}
        <button type="submit"  className="button">
          Login
        </button>

        {/* Register Link */}
        <p className="register">
          Don't have an account? <a href="signup" onClick={() => setSignup(true)}>Register</a>
        </p>
      </form>
      <div>
        <br />
        <h2 className='register'>Visit us on:</h2>
        <br />
        <SocialIcons />
      </div>

      {/* Render ForgetPassword component conditionally */}
      {signup && <ForgetPassword />}
    </div>
  );
};

export default Login;
