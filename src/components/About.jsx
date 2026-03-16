// About.jsx - Updated with proper Tailwind classes
import React, { useState, useEffect, useRef } from "react";
import { FaJava, FaReact, FaHtml5, FaCss3Alt, FaJs, FaDatabase } from "react-icons/fa";
import { SiSpringboot, SiMongodb, SiPostman, SiTailwindcss } from "react-icons/si";

const About = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Advanced skills data
  const skills = [
    { name: "Java", icon: <FaJava />, color: "#007396", description: "Expert in Java, OOP, Collections, Multithreading" },
    { name: "Spring Boot", icon: <SiSpringboot />, color: "#6DB33F", description: "Microservices, Security, JPA, REST APIs" },
    { name: "SQL", icon: <FaDatabase />, color: "#4479A1", description: "Complex queries, Optimization, Database Design" },
    { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26", description: "Semantic HTML, Accessibility, SEO" },
    { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6", description: "Flexbox, Grid, Animations, Responsive Design" },
    { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E", description: "ES6+, Async/Await, DOM Manipulation" },
    { name: "React", icon: <FaReact />, color: "#61DAFB", description: "Hooks, Context API, Redux, Next.js" },
    { name: "MongoDB", icon: <SiMongodb />, color: "#47A248", description: "NoSQL, Aggregation Pipeline, Indexing" },
    { name: "Postman", icon: <SiPostman />, color: "#FF6C37", description: "API Testing, Automation, Collections" },
    { name: "Tailwind", icon: <SiTailwindcss />, color: "#06B6D4", description: "Utility-first CSS, Custom Configurations" },
  ];

  // Mouse move handler for background effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="About" name="About" className="min-h-screen relative overflow-hidden bg-bg-primary py-20">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute w-96 h-96 rounded-full opacity-20 blur-3xl animate-float"
          style={{ 
            background: 'radial-gradient(circle, var(--accent-primary) 0%, transparent 70%)',
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            top: '10%',
            left: '5%'
          }}
        />
        <div 
          className="absolute w-96 h-96 rounded-full opacity-20 blur-3xl animate-float"
          style={{ 
            background: 'radial-gradient(circle, var(--accent-secondary) 0%, transparent 70%)',
            transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
            bottom: '10%',
            right: '5%',
            animationDelay: '2s'
          }}
        />
      </div>

      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-16 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold glitch-text" data-text="About Me">
            About <span className="text-accent-primary">Me</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary mx-auto mt-4 rounded-full"></div>
          <p className="text-text-secondary mt-4 max-w-2xl mx-auto">
            Let me introduce myself and showcase my skills
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Left Column - Personal Info Flip Card */}
          <div className="lg:col-span-1">
            <div className="group perspective-1000 cursor-pointer">
              <div className="relative w-full h-96 transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                {/* Front of card */}
                <div className="absolute inset-0 glass-effect rounded-2xl p-8 backface-hidden">
                  <div className="flex flex-col items-center h-full justify-center">
                    <div className="relative mb-6">
                      <img
                        src="../../public/p1.jpeg"
                        alt="Profile"
                        className="w-32 h-32 rounded-full border-4 border-accent-primary object-cover"
                      />
                      <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-accent-secondary animate-spin-slow"></div>
                    </div>
                    <h2 className="text-2xl font-bold text-text-primary">Nikhil Babasaheb Shinde</h2>
                    <p className="text-accent-primary font-semibold">Full Stack Developer</p>
                    <p className="text-sm text-text-secondary mt-2">Hover to see personal info →</p>
                  </div>
                </div>
                
                {/* Back of card */}
                <div className="absolute inset-0 glass-effect rounded-2xl p-8 backface-hidden rotate-y-180 bg-gradient-to-br from-accent-primary to-accent-secondary text-white">
                  <h3 className="text-2xl font-bold mb-6 text-center">Personal Information</h3>
                  <ul className="space-y-4">
                    <li className="flex items-center space-x-3">
                      <span className="text-2xl">👤</span>
                      <div>
                        <div className="font-semibold">Full Name</div>
                        <div className="text-sm opacity-90">Nikhil Babasaheb Shinde</div>
                      </div>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="text-2xl">🎂</span>
                      <div>
                        <div className="font-semibold">Date of Birth</div>
                        <div className="text-sm opacity-90">20/11/2004</div>
                      </div>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="text-2xl">📍</span>
                      <div>
                        <div className="font-semibold">Location</div>
                        <div className="text-sm opacity-90">Pune, Maharashtra</div>
                      </div>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="text-2xl">📞</span>
                      <div>
                        <div className="font-semibold">Contact</div>
                        <div className="text-sm opacity-90">+91 9022629250</div>
                      </div>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="text-2xl">🎓</span>
                      <div>
                        <div className="font-semibold">Education</div>
                        <div className="text-sm opacity-90">B.Sc Computer Science (83.8%)</div>
                      </div>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="text-2xl">💼</span>
                      <div>
                        <div className="font-semibold">Current Role</div>
                        <div className="text-sm opacity-90">Software Engineer at Config Server LLP</div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Skills Grid */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-6 text-center text-text-primary">Technical Arsenal</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="glass-effect p-6 rounded-2xl transition-all duration-300 hover:scale-105 hover-glow"
                >
                  <div className="relative z-10">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="text-3xl" style={{ color: skill.color }}>
                        {skill.icon}
                      </div>
                      <h3 className="text-xl font-bold text-text-primary">{skill.name}</h3>
                    </div>
                    
                    {/* Description */}
                    <p className="text-sm text-text-secondary">
                      {skill.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Counter */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <div className="text-center p-6 glass-effect rounded-xl hover:scale-105 transition-all duration-300">
            <div className="text-4xl font-bold text-accent-primary animate-pulse">1.3+</div>
            <div className="text-text-secondary">Years Experience</div>
          </div>
          <div className="text-center p-6 glass-effect rounded-xl hover:scale-105 transition-all duration-300">
            <div className="text-4xl font-bold text-accent-secondary animate-pulse">5+</div>
            <div className="text-text-secondary">Projects Completed</div>
          </div>
          <div className="text-center p-6 glass-effect rounded-xl hover:scale-105 transition-all duration-300">
            <div className="text-4xl font-bold text-green-500 animate-pulse">10+</div>
            <div className="text-text-secondary">Technologies Mastered</div>
          </div>
          <div className="text-center p-6 glass-effect rounded-xl hover:scale-105 transition-all duration-300">
            <div className="text-4xl font-bold text-purple-500 animate-pulse">2+</div>
            <div className="text-text-secondary">Certifications</div>
          </div>
        </div>

        {/* Certifications Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-text-primary">Professional Certifications</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Oracle Cloud Certification */}
            <div className="group perspective-1000 cursor-pointer">
              <div className="relative w-full h-80 transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                {/* Front of card */}
                <div className="absolute inset-0 glass-effect rounded-2xl p-8 backface-hidden">
                  <div className="flex flex-col items-center h-full justify-center">
                    <div className="relative mb-6">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-r from-red-500 to-orange-500 flex items-center justify-center text-white text-3xl font-bold">
                        OCI
                      </div>
                      <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-red-500 animate-spin-slow"></div>
                    </div>
                    <h3 className="text-xl font-bold text-text-primary text-center">Oracle Cloud Infrastructure</h3>
                    <p className="text-accent-primary font-semibold">Classic 2025 Certified Associate Architect</p>
                    <p className="text-sm text-text-secondary mt-2">Hover to see details →</p>
                  </div>
                </div>
                
                {/* Back of card */}
                <div className="absolute inset-0 glass-effect rounded-2xl p-8 backface-hidden rotate-y-180 bg-gradient-to-br from-red-500 to-orange-500 text-white">
                  <h3 className="text-xl font-bold mb-4 text-center">Certification Details</h3>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-center space-x-3">
                      <span className="text-lg">🏆</span>
                      <span>Oracle University Certified</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="text-lg">📅</span>
                      <span>Issued: 2025</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="text-lg">⏰</span>
                      <span>Valid Until: 2028</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="text-lg">🔧</span>
                      <span>Cloud Architecture & Design</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="text-lg">🛡️</span>
                      <span>Security & Networking</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="text-lg">☁️</span>
                      <span>Infrastructure Services</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Full Stack Java Certification */}
            <div className="group perspective-1000 cursor-pointer">
              <div className="relative w-full h-80 transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                {/* Front of card */}
                <div className="absolute inset-0 glass-effect rounded-2xl p-8 backface-hidden">
                  <div className="flex flex-col items-center h-full justify-center">
                    <div className="relative mb-6">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center text-white text-2xl font-bold">
                        ☕
                      </div>
                      <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-500 animate-spin-slow"></div>
                    </div>
                    <h3 className="text-xl font-bold text-text-primary text-center">Full Stack Java Course</h3>
                    <p className="text-accent-primary font-semibold">Seed InfoTech</p>
                    <p className="text-sm text-text-secondary mt-2">Hover to see details →</p>
                  </div>
                </div>
                
                {/* Back of card */}
                <div className="absolute inset-0 glass-effect rounded-2xl p-8 backface-hidden rotate-y-180 bg-gradient-to-br from-blue-500 to-indigo-500 text-white">
                  <h3 className="text-xl font-bold mb-4 text-center">Course Details</h3>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-center space-x-3">
                      <span className="text-lg">🎓</span>
                      <span>Seed InfoTech Certified</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="text-lg">📅</span>
                      <span>Completed: 2024</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="text-lg">⏰</span>
                      <span>Lifetime Validity</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="text-lg">☕</span>
                      <span>Java & Spring Boot</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="text-lg">⚛️</span>
                      <span>React Frontend</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="text-lg">🔗</span>
                      <span>REST APIs & Database</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;