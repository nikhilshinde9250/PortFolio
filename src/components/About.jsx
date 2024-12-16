import React from 'react';

const About = () => {
  return (
    <div
      name="About"
      className="bg-white text-black max-w-screen-2xl container mx-auto px-4 md:px-20 py-16"
    >
      {/* About Section Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold">
          About <span className="text-blue-600">Me</span>
        </h1>
        <hr className="w-16 mx-auto border-blue-500 mt-2" />
      </div>

      {/* Personal Information */}
      <div className="grid md:grid-cols-3 gap-8 items-center">
        {/* Left Image */}
        <div className="flex justify-center">
          <img
            src="https://via.placeholder.com/200" // Replace with your profile image link
            alt="Profile"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Middle Personal Details */}
        <div className="md:col-span-2">
          <h2 className="text-xl font-bold mb-4">Personal Infos</h2>
          <ul className="space-y-2">
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
              <strong>Degree:</strong> B.sc computer science
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
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-center mb-6">My Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Skill Item */}
          <div className="text-center">
            <p className="text-blue-600 font-bold text-lg">Java</p>
            <div className="w-full bg-gray-200 rounded-full h-3.5">
              <div
                className="bg-blue-600 h-3.5 rounded-full"
                style={{ width: "99%" }}
              ></div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-blue-600 font-bold text-lg">SpringBooot</p>
            <div className="w-full bg-gray-200 rounded-full h-3.5">
              <div
                className="bg-blue-600 h-3.5 rounded-full"
                style={{ width: "80%" }}
              ></div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-blue-600 font-bold text-lg">SQL</p>
            <div className="w-full bg-gray-200 rounded-full h-3.5">
              <div
                className="bg-blue-600 h-3.5 rounded-full"
                style={{ width: "99%" }}
              ></div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-blue-600 font-bold text-lg">HTML5</p>
            <div className="w-full bg-gray-200 rounded-full h-3.5">
              <div
                className="bg-yellow-500 h-3.5 rounded-full"
                style={{ width: "99%" }}
              ></div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-blue-600 font-bold text-lg">CSS3</p>
            <div className="w-full bg-gray-200 rounded-full h-3.5">
              <div
                className="bg-green-400 h-3.5 rounded-full"
                style={{ width: "75%" }}
              ></div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-blue-600 font-bold text-lg">JavaScript</p>
            <div className="w-full bg-gray-200 rounded-full h-3.5">
              <div
                className="bg-pink-500 h-3.5 rounded-full"
                style={{ width: "50%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
