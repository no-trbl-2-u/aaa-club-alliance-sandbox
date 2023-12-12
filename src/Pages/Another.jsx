import React from 'react';
import { Link } from 'react-router-dom';

function Another() {
  return (
    <>
      <h1>Another Page but no new Title</h1>
      <Link to="/">Go Back</Link>
    </>
  );
}

export default Another;
