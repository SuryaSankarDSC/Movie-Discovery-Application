import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiUser3Line, RiLock2Line, RiEyeOffLine, RiEyeLine } from 'react-icons/ri';
import './App.css';
import { CiMail } from 'react-icons/ci';

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    mobileNumber: '',
  });

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your signup logic here using formData
    console.log(formData);

    // Simulate successful signup with an alert
    alert('Signed up successfully!'); // You can customize this message
  };

  return (
    <div className="signup">
      <form onSubmit={handleSubmit} className="form">
        <h1 className="head">Sign Up</h1>

        {/* First Name Input */}
        <div className="box">
          <RiUser3Line className="login__icon" />
          <div className="box-input">
            <input
              type="text"
              required
              className="input"
              id="signup-firstName"
              placeholder=" "
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
            <label htmlFor="signup-firstName" className="login__label">
              First Name
            </label>
          </div>
        </div>
        <br/>
        {/* Last Name Input */}
        <div className="box">
          <RiUser3Line className="login__icon" />
          <div className="box-input">
            <input
              type="text"
              required
              className="input"
              id="signup-lastName"
              placeholder=" "
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
            <label htmlFor="signup-lastName" className="login__label">
              Last Name
            </label>
          </div>
        </div>
        <br/>
        {/* Email Input */}
        <div className="box">
          <CiMail className="login__icon" />
          <div className="box-input">
            <input
              type="email"
              required
              className="input"
              id="signup-email"
              placeholder=" "
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <label htmlFor="signup-email" className="login__label">
              Email
            </label>
          </div>
        </div>
        <br/>
        {/* Password Input */}
        <div className="box">
          <RiLock2Line className="login__icon" />
          <div className="box-input">
            <input
              type={showPassword ? "text" : "password"}
              required
              className="input"
              id="signup-pass"
              placeholder=" "
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            <label htmlFor="signup-pass" className="login__label">
              Password
            </label>
            {showPassword ? (
              <RiEyeLine
                className="login__eye"
                id="signup-eye"
                onClick={handleTogglePassword}
              />
            ) : (
              <RiEyeOffLine
                className="login__eye"
                id="signup-eye"
                onClick={handleTogglePassword}
              />
            )}
          </div>
        </div>
        <br/>
        {/* Confirm Password Input */}
        <div className="box">
          <RiLock2Line className="login__icon" />
          <div className="box-input">
            <input
              type={showPassword ? "text" : "password"}
              required
              className="input"
              id="signup-confirm-pass"
              placeholder=" "
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            <label htmlFor="signup-confirm-pass" className="login__label">
              Confirm Password
            </label>
          </div>
        </div>
        <br/>
        {/* Mobile Number Input */}
        <div className="box">
          <RiUser3Line className="login__icon" />
          <div className="box-input">
            <input
              type="tel"
              required
              className="input"
              id="signup-mobile"
              placeholder=" "
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
            />
            <label htmlFor="signup-mobile" className="login__label">
              Mobile Number
            </label>
          </div>
        </div>
        <br/>
        {/* Signup Button */}
        <button type="submit" className="button">
          Sign Up
        </button>

        {/* Already have an account? Redirect to login */}
        <p className="login-link">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
