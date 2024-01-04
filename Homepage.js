import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import './Homepage.css';
import Footer from './Footer';
import './Footer.css';

const Homepage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="container mt-4">
        <center><h1>Welcome to Movie Page</h1></center>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Footer></Footer>
    </div>
  );
};

export default Homepage;
