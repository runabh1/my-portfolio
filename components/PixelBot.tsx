import React, { useState } from 'react';

const PixelBot: React.FC = () => {
  const [isJumping, setIsJumping] = useState(false);

  const handleJump = () => {
    if (isJumping) return; // Prevent re-triggering during a jump
    setIsJumping(true);
    setTimeout(() => {
      setIsJumping(false);
    }, 800); // Must match the animation duration in CSS
  };

  return (
    <div className="relative w-full h-24 flex justify-center items-end">
      <div
        className="cursor-pointer"
        onClick={handleJump}
        title="Click me!"
      >
        {/* Bot Container */}
        <div className={`relative w-20 h-24 ${isJumping ? 'animate-jump' : ''}`}>
          {/* Head */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-12 bg-gray-700 rounded-t-lg flex flex-col justify-center items-center pt-2">
            {/* Eyes */}
            <div className="flex space-x-3">
              <div className="w-2 h-2 bg-teal-400 rounded-full animate-blink"></div>
              <div className="w-2 h-2 bg-teal-400 rounded-full animate-blink [animation-delay:-0.5s]"></div>
            </div>
            {/* Mouth */}
            <div className="w-6 h-3 mt-2 border-b-2 border-l-2 border-r-2 border-teal-400 rounded-b-full"></div>
            {/* Cheeks */}
            <div className="absolute bottom-2.5 flex w-full justify-between px-3">
              <div className="w-3 h-1.5 bg-pink-400/60 rounded-full"></div>
              <div className="w-3 h-1.5 bg-pink-400/60 rounded-full"></div>
            </div>
          </div>
          {/* Body */}
          <div className="absolute top-12 left-1/2 -translate-x-1/2 w-12 h-9 bg-gray-600"></div>
          {/* Legs */}
          <div className="absolute bottom-0 left-0 w-full h-3 flex justify-around pt-1">
            {/* Left Leg */}
            <div className="w-4 h-5 bg-gray-700"></div>
            {/* Right Leg */}
            <div className="w-4 h-5 bg-gray-700"></div>
          </div>
          {/* Antenna */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-1.5 h-3 bg-gray-500"></div>
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-pink-400 rounded-full animate-soft-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default PixelBot;