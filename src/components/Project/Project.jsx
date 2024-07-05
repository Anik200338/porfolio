import React, { useEffect, useState } from 'react';
import Loader from '../Loader';

const Project = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://porfolio-server-ivory.vercel.app/Projects')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(result => {
        if (result && result.projects) {
          setData(result.projects);
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

  return (
    <div className="container mx-auto p-4 min-h-screen">
      <h2 className="text-5xl font-bold my-20 text-center">Projects List</h2>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {data.map(project => (
          <div
            key={project._id.$oid}
            className="bg-white rounded-lg shadow-xl p-4"
          >
            <img
              src={project.image}
              alt={project.name}
              className="mb-4 rounded-lg"
              style={{ width: '100%', height: 'auto' }}
            />
            <h3 className="text-lg font-semibold mb-2">{project.name}</h3>

            <p className="text-gray-700 mb-4">{project.description}</p>
            <ul className="mb-4">
              {project.features.map((feature, index) => (
                <li
                  key={index}
                  className="text-sm text-gray-600 font-bold mb-3"
                >
                  {feature}
                </li>
              ))}
            </ul>
            <p className="text-xl text-blue-500 mb-2">
              <strong>Technologies:</strong> {project.technologies.join(', ')}
            </p>
            <div className=" flex flex-col lg:flex-row gap-5">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn text-sm text-blue-500 w-44"
              >
                Live Link
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn text-sm text-blue-500 w-44"
              >
                GitHub Link
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
