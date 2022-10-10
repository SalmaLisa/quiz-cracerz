import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className='text-center mt-48'>
      <h1 className='text-7xl font-bold text-slate-700'>Oops !</h1>
      <p className='text-2xl font-bold text-slate-700 mt-5 mb-4'>404 - Page Not Found </p>
      <small className='text-slate-400'>
      <i>The page you looking for might have been removed <br /> had its name changed or is temporarily unavailable.</i>
      </small>
      <Link className='px-4 py-2 bg-fuchsia-800 text-white font-semibold rounded-lg block w-40 mx-auto mt-5' to ='/home'> Go to home page</Link>
    </div>
  );
};

export default ErrorPage;