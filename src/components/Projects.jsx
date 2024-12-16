import React from 'react';
import { FaReact, FaNodeJs, FaCss3Alt } from 'react-icons/fa'; // Import icons as needed
import { FaJava } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";
import { SiHibernate } from "react-icons/si";
import { FaAngular } from "react-icons/fa";
import { SiJavascript, SiMongodb, SiTailwindcss } from 'react-icons/si'; // Additional icons

const projectData = [
  {
    title: 'Employee Management System',
    description: 'Developed a fully functional system enabling CRUD operations on employee records with secure database integration.',
    technologies: [<SiHibernate className="text-black" />, <FaJava className="text-black" />, <SiSpringboot className="text-black" />, <FaAngular className='text-black'/>],
    demoLink: '#',
    codeLink: '#',
  },
  {
    title: 'Project Two',
    description: 'This is a brief description of Project Two.',
    technologies: [<SiJavascript className="text-black" />, <FaNodeJs className="text-black" />, <SiTailwindcss className="text-black" />],
    demoLink: '#',
    codeLink: '#',
  },
  {
    title: 'Project Three',
    description: 'This is a brief description of Project Three.',
    technologies: [<FaReact className="text-black" />, <SiMongodb className="text-black" />, <FaCss3Alt className="text-black" />],
    demoLink: '#',
    codeLink: '#',
  },
  {
    title: 'Project Four',
    description: 'This is a brief description of Project Four.',
    technologies: [<FaReact className="text-black" />, <FaNodeJs className="text-black" />, <SiTailwindcss className="text-black" />],
    demoLink: '#',
    codeLink: '#',
  },
  {
    title: 'Project Five',
    description: 'This is a brief description of Project Five.',
    technologies: [<SiJavascript className="text-black" />, <SiMongodb className="text-black" />, <FaCss3Alt className="text-black" />],
    demoLink: '#',
    codeLink: '#',
  },
  {
    title: 'Project Six',
    description: 'This is a brief description of Project Six.',
    technologies: [<FaReact className="text-black" />, <FaNodeJs className="text-black" />, <SiTailwindcss className="text-black" />],
    demoLink: '#',
    codeLink: '#',
  },
];

const Projects = () => {
  return (
    <div name="Projects" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 mt-10">
      <h1 className='text-3xl font-bold mb-5'>Projects</h1>
      <span className='underline font-semibold'>Featured Projects</span>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {projectData.map((project, index) => (
          <div key={index} className="bg-sky-500 text-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
            <div className="p-5">
              <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
              <p className="mb-4">{project.description}</p>
              <div className="flex space-x-2 mb-4">
                {project.technologies.map((icon, idx) => (
                  <span key={idx} className="text-2xl">{icon}</span>
                ))}
              </div>
              <div className="flex space-x-4">
                <a href={project.demoLink} className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded ">
                  Demo
                </a>
                <a href={project.codeLink} className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded">
                  Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;