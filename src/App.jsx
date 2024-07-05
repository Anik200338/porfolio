import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Particlesbg from './components/particles/Particlesbg';
import Skills from './components/Skill/Skills';
import Project from './components/Project/Project';
import Education from './components/Education/Education';
import Contact from './components/contact/Contact';
import Loader from './components/Loader';
import Footer from './components/Footer/Footer';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading process (you can replace with actual logic)
    setTimeout(() => setLoading(false), 2000); // Example: Loading for 2 seconds
  }, []);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <div className="relative" id="about">
            <Particlesbg
              options={{
                fpsLimit: 120,
                interactivity: {
                  events: {
                    onClick: {
                      enable: true,
                      mode: 'push',
                    },
                    onHover: {
                      enable: true,
                      mode: 'repulse',
                    },
                    resize: true,
                  },
                  modes: {
                    push: {
                      quantity: 4,
                    },
                    repulse: {
                      distance: 200,
                      duration: 0.4,
                    },
                  },
                },
                style: {
                  position: 'absolute',
                },
                particles: {
                  color: {
                    value: '#000000',
                  },
                  links: {
                    color: '#000000',
                    distance: 150,
                    enable: true,
                    opacity: 0.5,
                    width: 1,
                  },
                  move: {
                    direction: 'none',
                    enable: true,
                    outModes: {
                      default: 'bounce',
                    },
                    random: false,
                    speed: 6,
                    straight: false,
                  },
                  number: {
                    density: {
                      enable: true,
                      area: 800,
                    },
                    value: 80,
                  },
                  opacity: {
                    value: 0.5,
                  },
                  shape: {
                    type: 'circle',
                  },
                  size: {
                    value: { min: 1, max: 5 },
                  },
                },
                detectRetina: true,
              }}
            />
            <About />
          </div>
          <div id="skills">
            <Skills />
          </div>
          <div id="Projects">
            <Project />
          </div>
          <div id="Education">
            <Education />
          </div>
          <div className="min-h-screen my-10" id="Contact">
            <h2 className="text-5xl font-bold my-20 text-center">Contact ME</h2>
            <Contact />
          </div>
          <Footer></Footer>
        </>
      )}
    </div>
  );
};

export default App;
