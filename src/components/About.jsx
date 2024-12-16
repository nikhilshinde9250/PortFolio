import React from "react";

const About = () => {
  // Skill data with levels and colors
  const skills = [
    { name: "java", level: 99, color: "stroke-orange-500" },
    { name: "Springboot", level: 80, color: "stroke-blue-400" },
    { name: "SQL", level: 99, color: "stroke-purple-500" },
    { name: "HTML", level: 99, color: "stroke-yellow-400" },
    { name: "CSS", level: 75, color: "stroke-green-400" },
    { name: "JavaScript", level: 50, color: "stroke-pink-500" },
  ];

  // Component for circular progress bar
  const CircleProgress = ({ level, color, name }) => {
    const radius = 45; // Radius of the circle
    const strokeWidth = 8;
    const circumference = 2 * Math.PI * radius; // Circle's circumference
    const strokeDashoffset = circumference * ((100 - level) / 100); // Offset to represent progress

    return (
      <div className="flex flex-col items-center space-y-2">
        {/* SVG Circular Progress */}
        <svg
          className="w-28 h-28 transform rotate-[-90deg]"
          viewBox="0 0 100 100"
        >
          {/* Background Circle */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            strokeWidth={strokeWidth}
            className="stroke-gray-300"
            fill="none"
          />
          {/* Progress Circle */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            strokeWidth={strokeWidth}
            className={`${color} transition-all duration-500`}
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
          />
        </svg>
        {/* Skill Percentage and Name */}
        <div className="text-center">
          <p className="text-xl font-bold">{level}%</p>
          <p className="text-gray-700 font-medium">{name}</p>
        </div>
      </div>
    );
  };

  return (
    <div
      name="About"
      className="bg-gray-50 text-black max-w-screen-2xl container mx-auto px-6 py-16"
    >
      {/* Section Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">
          About <span className="text-blue-600">Me</span>
        </h1>
        <hr className="w-16 mx-auto border-blue-500 mt-2" />
      </div>

      {/* Personal Info Section */}
      <div className="grid md:grid-cols-3 gap-10 items-center mb-12">
        {/* Profile Image */}
        <div className="flex justify-center">
          <img
            src="/leet.jpg"
            alt="Profile"
            className="w-40 h-40 rounded-full shadow-lg"
          />
        </div>

        {/* Personal Information */}
        <div className="md:col-span-2 space-y-2">
          <h2 className="text-xl font-bold mb-4">Personal Information</h2>
          <ul className="text-gray-700 space-y-2">
            <li>
              <strong>Name:</strong> Nikhil Shinde
            </li>
            <li>
              <strong>Age:</strong> 21
            </li>
            <li>
              <strong>Birthday:</strong> 20 November 2004
            </li>
            <li>
              <strong>Phone:</strong> 9022629250
            </li>
            <li>
              <strong>Degree:</strong> B.Sc Computer Science
            </li>
            <li>
              <strong>Address:</strong> Beed
            </li>
            <li>
              <strong>Languages:</strong> English, Marathi, Hindi
            </li>
            <li>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:nikhilshinde9250@gmail.com"
                className="text-blue-500 hover:underline"
              >
                nikhilshinde9250@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Skills Section */}
      <div>
        <h2 className="text-2xl font-bold text-center mb-6">My Skills</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
          {skills.map((skill, index) => (
            <CircleProgress
              key={index}
              level={skill.level}
              color={skill.color}
              name={skill.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
