// Loader.js
import React from 'react';
import { PacmanLoader } from 'react-spinners';

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <PacmanLoader color={'#123abc'} loading={true} size={50} />
      <h2 className="mt-4 text-xl">Loading...</h2>
    </div>
  );
};

export default Loader;
