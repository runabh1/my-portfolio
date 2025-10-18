import React, { useEffect } from 'react';
import { GitHubUser } from '../types';
import { TypeAnimation } from 'react-type-animation';

// Add type declaration for the global tsParticles object from the CDN script
declare global {
  interface Window {
    tsParticles: any;
  }
}

interface HeroProps {
  user: GitHubUser;
}

const Hero: React.FC<HeroProps> = ({ user }) => {
   useEffect(() => {
    if (window.tsParticles) {
      window.tsParticles.load({
        id: "tsparticles",
        options: {
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: {
                enable: true,
              }
            },
            modes: {
              repulse: {
                distance: 100,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#4fd1c5", // teal-400
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        },
      });
    }
  }, []);

  const fullName = user.name || user.login;
  const nameParts = fullName.split(' ');
  const firstName = nameParts[0] || '';
  const lastName = nameParts.slice(1).join(' ') || '';


  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center bg-gray-900 overflow-hidden p-4 text-center">
      <div id="tsparticles" className="absolute inset-0 z-0" />
      
      <div className="z-10 relative">
        <div className="mb-8">
            <div className="w-40 h-40 border-4 border-teal-400 rounded-full p-1 mx-auto">
                <img
                  src="https://ik.imagekit.io/0hygozmgt/WhatsApp%20Image%202025-10-19%20at%203.44.08%20AM.jpeg?updatedAt=1760825672180"
                  alt={user.name || 'Arunabh Bhattacharyya'}
                  className="w-full h-full object-cover rounded-full"
                />
            </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-8 leading-tight">
          Hi, I'm{' '}
          <TypeAnimation
            sequence={[
              `${firstName.toLowerCase()}`,
              1500,
              `${firstName.toLowerCase()} ${lastName.toLowerCase()}`,
              3000,
            ]}
            wrapper="span"
            className="text-teal-400"
            repeat={Infinity}
          />
        </h1>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href="#projects"
            className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
          >
            View My Work
          </a>
          <a
            href={user.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white font-bold py-3 px-8 rounded-full transition-all duration-300 w-full sm:w-auto"
          >
            GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;