import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-container">
      <header>
        <h1>Home Page</h1>
      </header>
      <h2>Testing anchor tags</h2>
      <ul className="home-links">
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/link-2">Link Two</Link>
        </li>
        <li>
          <Link to="/link-3">Link Three</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;
