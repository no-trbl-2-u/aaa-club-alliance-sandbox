import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function About() {
  useEffect(() => {
    document.title = 'About';
  }, []);

  return (
    <div className="about-container">
      <h1>About</h1>
      <Link to="/">Go Back</Link>
    </div>
  );
}

export default About;
