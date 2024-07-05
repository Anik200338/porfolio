import React, { useEffect, useState } from 'react';
import { FaFacebook, FaGithub } from 'react-icons/fa';
import Loader from '../Loader';

const About = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://porfolio-server-ivory.vercel.app/user')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(result => {
        setData(result);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <p>
        <Loader />
      </p>
    );
  }

  if (error) {
    return <p>Error fetching data: {error.message}</p>;
  }

  return (
    <div className="hero bg-base-200 min-h-screen ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={data.image}
          className="lg:max-w-sm rounded-lg shadow-2xl"
          alt="Example"
        />
        <div>
          <h1 className="text-5xl font-bold">Hi, I am</h1>
          <h1 className="text-5xl font-bold">{data.name}</h1>
          <h1 className="text-3xl py-6 font-bold">I am a web developer</h1>
          <h1 className="text-3xl py-2 font-bold">About-</h1>
          <p className="lg:text-2xl mb-10 ">{data.intro}</p>
          <a
            href="https://drive.google.com/file/d/1Kg02i52R0AJmGwTWHEteoSA6-v_Ispic/view"
            download="resume.txt"
            className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-red-500 rounded-xl group"
          >
            <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-red-700 rounded group-hover:-mr-4 group-hover:-mt-4">
              <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
            </span>
            <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-red-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
            <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
              Download resume
            </span>
          </a>
          <div className="mt-4 flex gap-7">
            <a
              href={data.contact.social.github}
              className="btn text-3xl w-36 btn-accent"
            >
              <FaGithub />
            </a>
            <a
              href={data.contact.social.facebook}
              className="btn btn-info text-3xl w-36"
            >
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
