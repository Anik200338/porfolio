import React, { useState, useEffect } from 'react';
import Loader from '../Loader';

const Education = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://porfolio-server-ivory.vercel.app/Education')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(result => {
        console.log('Fetched data:', result);
        if (result && result.Education) {
          // Flatten the ssc and hsc objects into an array
          const flattenedData = [
            { type: 'ssc', ...result.Education[0].ssc },
            { type: 'hsc', ...result.Education[1].hsc },
          ];
          setData(flattenedData);
          setLoading(false);
        } else {
          throw new Error('Invalid data format from server');
        }
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

  console.log('Data:', data); // Check the structure of data here

  return (
    <div className="container mx-auto ">
      <h2 className="text-5xl font-bold my-20 text-center">Education</h2>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        {data.map((item, index) => (
          <li key={index} className="">
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className=" text-primary h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div
              className={`timeline-${index % 2 === 0 ? 'start' : 'end'} mb-10 ${
                index % 2 === 0 ? 'md:text-end ' : ''
              }`}
            >
              <time className="font-bold text-xl italic">{item.year}</time>
              <div className="text-4xl font-black">
                {item.type ? item.type.toUpperCase() : ''}
              </div>
              <div>
                <h2 className="text-xl font-bold">{item.description}</h2>
              </div>
              <div>
                <h2 className="text-3xl font-bold">{item.institution}</h2>
              </div>
            </div>
            <hr className="bg-primary" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Education;
