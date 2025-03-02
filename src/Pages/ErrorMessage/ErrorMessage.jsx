import React from 'react';
import { Link } from 'react-router-dom';
import './ErrorMessage.css';
import { FaHome } from 'react-icons/fa';

const ErrorMessage = () => {
  return (
    <div className='error-container'>
      <h1 className='error-code'>404</h1>
      <h2 className='error-text'>Oops! Page Not Found</h2>
      <p className='error-description'>The page you are looking for might have been removed or is temporarily unavailable.</p>
      <Link to='/' className='home-button'>
        <FaHome className='home-icon' /> Go Home
      </Link>
    </div>
  );
};

export default ErrorMessage;
