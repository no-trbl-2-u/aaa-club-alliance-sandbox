import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="about-container">
      <h1>About</h1>
      <Link to="/">Go Back</Link>
    </div>
  );
}

export default About;
