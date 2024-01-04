import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { CiMail } from 'react-icons/ci';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic for handling the forget password submission here
    // For example, you can simulate a successful email sending with a setTimeout
    setTimeout(() => {
      console.log(`Password recovery email sent successfully to: ${email}`);
      // You can also show a pop-up or notification here
      alert(`Password recovery email sent successfully to: ${email}`);
      navigate('/login'); // Redirect to the login page after successful submission
    }, 1000); // Simulating a delay of 1 second
  };

  return (
    <div className="login">
      <form className="form" onSubmit={handleSubmit}>
        <h1 className="head">Forget Password</h1>

        <div className="box">
          <CiMail className="back-icon" />
          <div className="box-input">
            <input
              type="email"
              required
              className="input"
              id="forget-email"
              placeholder=" "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="forget-email" className="login__label">
              Email
            </label>
          </div>
        </div>
        <br />
        <button type="submit" className="button" onClick={handleSubmit}>
          Submit
        </button>

        {/* Back to Login Link using Link component */}
        <p className="back-to-login">
          <Link to="/login">Back to Login</Link>
        </p>
      </form>
    </div>
  );
};

export default ForgetPassword;
