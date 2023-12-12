import React, { useEffect } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
  useEffect(() => {
    document.title = 'ACA Sandbox';

    console.log('Home Page rendered!');

    window.adobeDataLayer.push({
      event: 'page_view',
      page: {
        name: 'home',
        url: '/',
        server: '/server'
      }
    });
  }, []);

  return (
    <div className="home-container">
      <header>
        <h1>Home Page</h1>
      </header>
      <h2>Testing anchor tags</h2>
      <ul className="home-links">
        <li>
          <Link to="/about">About -- Link with Title Change</Link>
        </li>
        <li>
          <Link to="/another">Another -- Link without Title Change</Link>
        </li>
        <li>
          <Link to="/about">About -- Click Here</Link>
        </li>
        <li>
          <Link to="/about">About -- Click Here</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;
