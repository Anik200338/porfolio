import React, { useEffect, useState } from 'react';
import Loader from '../Loader';

const Skills = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true); // Set loading state to true before fetch

    fetch('https://porfolio-server-ivory.vercel.app/skills')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(result => {
        setData(result);
        setLoading(false); // Set loading state to false after data is fetched
      })
      .catch(error => {
        setError(error);
        setLoading(false); // Set loading state to false if there's an error
      });
  }, []);

  if (loading) {
    return (
      <p>
        <Loader />
      </p>
    ); // Display a loading message or spinner
  }

  if (error) {
    return <p>Error fetching skills data: {error.message}</p>; // Display an error message if fetch fails
  }

  return (
    <div className=" h-auto">
      <h2 className="text-5xl font-bold mt-28 text-center">Skills</h2>
      <p className="text-xl font-bold text-center my-6 ">
        Here are some of my skills on which I have been working on for the past
        6 years
      </p>
      <div className="flex flex-col lg:flex-row justify-center gap-32 mt-40">
        {data.technical.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="h-28">
              <img src={item.skill_image} alt={item.skill} className="w-24" />
            </div>
            <span className="text-center text-xl font-bold">{item.skill}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
