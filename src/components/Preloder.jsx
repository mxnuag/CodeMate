import React from 'react';

const Preloader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Typing Effect */}
      <div className="z-10">
        <h1 className="text-4xl sm:text-6xl font-bold text-white typing-effect">
          Loading Your Code Editor...
        </h1>
      </div>

      {/* Moving Blocks */}
      <div className="absolute inset-0 flex justify-around items-center">
        <div className="block w-12 h-12 bg-white rounded-full animate-bounce delay-150"></div>
        <div className="block w-8 h-8 bg-white rounded-full animate-bounce delay-300"></div>
        <div className="block w-10 h-10 bg-white rounded-full animate-bounce delay-450"></div>
      </div>

      {/* Background Gradient Movement */}
      <div className="absolute inset-0 bg-gradient-to-r from-grey-300 via-blue-700 to-white-500 opacity-30 animate-pulse"></div>
    </div>
  );
};

export default Preloader;
