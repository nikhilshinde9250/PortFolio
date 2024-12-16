import React from 'react';

const Experience = () => {
  return (
    <div name="Experience" className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8 space-y-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">My Experience</h1>
      <div className="flex flex-wrap justify-center gap-8">
        {/* Card 1 */}
        <div className="relative w-80 h-56 bg-sky-500 text-white rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-sky-400 p-6">
          {/* Logo */}
          <img
            src="https://via.placeholder.com/40"
            alt="Logo"
            className="absolute top-4 right-4 w-10 h-10"
          />
          <h2 className="text-2xl font-bold mb-2">ABC Tech</h2>
          <p className="text-sm mb-1">6-Month Internship</p>
          <p className="text-sm">Worked on a project: **E-Commerce Dashboard**, developing an analytics dashboard for sales tracking using React and Tailwind CSS.</p>
        </div>

        {/* Card 2 */}
        <div className="relative w-80 h-56 bg-black text-white rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-gray-800 p-6">
          {/* Logo */}
          <img
            src="https://via.placeholder.com/40"
            alt="Logo"
            className="absolute top-4 right-4 w-10 h-10"
          />
          <h2 className="text-2xl font-bold mb-2">XYZ Solutions</h2>
          <p className="text-sm mb-1">1-Year Junior Developer Role</p>
          <p className="text-sm">Contributed to building **Task Manager App** using React, integrating RESTful APIs for task management and user authentication.</p>
        </div>

        {/* Card 3 */}
        <div className="relative w-80 h-56 bg-indigo-500 text-white rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-indigo-400 p-6">
          {/* Logo */}
          <img
            src="https://via.placeholder.com/40"
            alt="Logo"
            className="absolute top-4 right-4 w-10 h-10"
          />
          <h2 className="text-2xl font-bold mb-2">PQR Innovations</h2>
          <p className="text-sm mb-1">3-Month Internship</p>
          <p className="text-sm">Developed a prototype **Portfolio Website** for showcasing company projects using React and deployed it with Netlify.</p>
        </div>

        {/* Card 4 */}
        <div className="relative w-80 h-56 bg-green-500 text-white rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-green-400 p-6">
          {/* Logo */}
          <img
            src="https://via.placeholder.com/40"
            alt="Logo"
            className="absolute top-4 right-4 w-10 h-10"
          />
          <h2 className="text-2xl font-bold mb-2">LMN Corp</h2>
          <p className="text-sm mb-1">Freelance Project</p>
          <p className="text-sm">Designed and implemented **Blogging Platform** with custom CMS features, allowing dynamic content updates and analytics.</p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
