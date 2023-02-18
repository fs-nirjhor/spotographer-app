import React from 'react';
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="m-auto h-100 text-center ">
      <h1 className="display-1 fw-bold font-monospace">4 0 4</h1>
      <p className="display-6">Oops! The page you requested could not be found.</p>
      <Link to="/" className="fw-bold text-decoration-none">Back to home</Link>
    </div>
  );
};

export default NotFound;
