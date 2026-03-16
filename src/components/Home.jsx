// Home.jsx - Updated with proper Tailwind classes
import React, { useEffect, useState } from "react";
import { TbBrandLinkedinFilled } from "react-icons/tb";
import { FaInstagramSquare, FaGithub, FaCode } from "react-icons/fa";
import { SiGmail, SiLeetcode, SiHackerrank } from "react-icons/si";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaJava } from "react-icons/fa";
import { SiSpringboot, SiHibernate, SiAngular, SiReact, SiPostman, SiMongodb } from "react-icons/si";
import { ReactTyped } from "react-typed";
import { Link } from "react-scroll";

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);

  // Handle mouse move for parallax effect
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

  // Generate particles
  useEffect(() => {
    const newParticles = [];
    for (let i = 0; i < 50; i++) {
      newParticles.push({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: 5 + Math.random() * 10,
        delay: Math.random() * 5,
      });
    }
    setParticles(newParticles);
  }, []);

  // Handle resume download
  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/Java_Full_Stack_Nikhil_Shinde.pdf';
    link.download = 'Nikhil_Shinde_Resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const socialLinks = [
    { icon: <TbBrandLinkedinFilled />, url: "https://www.linkedin.com/in/nikhilshinde9250/", label: "LinkedIn", color: "#0077B5" },
    { icon: <SiGmail />, url: "mailto:nikhilshinde9250@gmail.com", label: "Email", color: "#EA4335" },
    { icon: <FaInstagramSquare />, url: "https://www.instagram.com/nikhil_shinde_2004/", label: "Instagram", color: "#E4405F" },
    { icon: <FaSquareWhatsapp />, url: "https://wa.me/9022629250", label: "WhatsApp", color: "#25D366" },
    { icon: <FaGithub />, url: "https://github.com/nikhilshinde9250", label: "GitHub", color: "#333" },
    { icon: <SiLeetcode />, url: "https://leetcode.com/nikhilshinde9250/", label: "LeetCode", color: "#FFA116" },
    { icon: <SiHackerrank />, url: "https://www.hackerrank.com/nikhilshinde9250", label: "HackerRank", color: "#00EA64" },
  ];

  const techStack = [
    { icon: <FaJava />, name: "Java", color: "#007396" },
    { icon: <SiSpringboot />, name: "Spring Boot", color: "#6DB33F" },
    { icon: <SiHibernate />, name: "Hibernate", color: "#59666C" },
    { icon: <SiAngular />, name: "Angular", color: "#DD0031" },
    { icon: <SiReact />, name: "React", color: "#61DAFB" },
    { icon: <SiMongodb />, name: "MongoDB", color: "#47A248" },
    { icon: <SiPostman />, name: "Postman", color: "#FF6C37" },
    { icon: <FaCode />, name: "Full Stack", color: "var(--accent-primary)" },
  ];

  return (
    <>
      <section id="Home" name="Home" className="min-h-screen relative overflow-hidden bg-bg-primary pt-20">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Gradient Spheres */}
          <div 
            className="absolute w-96 h-96 rounded-full opacity-30 blur-3xl animate-float"
            style={{ 
              background: 'radial-gradient(circle, var(--accent-primary) 0%, transparent 70%)',
              transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
              top: '20%',
              left: '10%'
            }}
          />
          <div 
            className="absolute w-96 h-96 rounded-full opacity-30 blur-3xl animate-float"
            style={{ 
              background: 'radial-gradient(circle, var(--accent-secondary) 0%, transparent 70%)',
              transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
              top: '60%',
              right: '10%',
              animationDelay: '2s'
            }}
          />
          
          {/* Particle System */}
          <div className="absolute inset-0">
            {particles.map((particle) => (
              <div
                key={particle.id}
                className="absolute w-0.5 h-0.5 bg-accent-primary rounded-full opacity-60"
                style={{
                  left: `${particle.left}%`,
                  top: `${particle.top}%`,
                  animation: `particleFloat ${particle.duration}s infinite`,
                  animationDelay: `${particle.delay}s`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 min-h-screen flex items-center relative z-10">
          <div className="grid md:grid-cols-2 gap-10 items-center w-full">
            {/* Left Content */}
            <div 
              className="space-y-6 animate-slideUp"
              style={{
                transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
                transition: 'transform 0.1s ease-out'
              }}
            >
              <div className="space-y-4">
                <span className="text-xl text-text-secondary animate-fadeIn">
                  Welcome To My Portfolio
                </span>
                <div className="flex flex-wrap items-center space-x-2 text-4xl md:text-6xl font-bold">
                  <h1 className="text-text-primary">I'm a</h1>
                  <ReactTyped
                    className="text-gradient"
                    strings={[
                      "Developer",
                      "Programmer", 
                      "Coder",
                      "Innovator",
                      "Problem Solver"
                    ]}
                    typeSpeed={50}
                    backSpeed={30}
                    loop={true}
                    smartBackspace={true}
                  />
                </div>
              </div>

              <p className="text-lg text-text-secondary leading-relaxed animate-slideUp" style={{ animationDelay: '0.2s' }}>
                I'm a passionate <span className="text-accent-primary font-semibold">Backend-focused Full Stack Java Developer</span> with 1.3 years of experience building scalable web applications using Java, Spring Boot, and React. Currently working at Config Server LLP, specializing in secure RESTful APIs and microservices architecture.
              </p>

              {/* Social Links */}
              <div className="space-y-3 animate-slideUp" style={{ animationDelay: '0.4s' }}>
                <h2 className="font-semibold text-lg text-text-primary">Connect With Me</h2>
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full glass-effect flex items-center justify-center hover:scale-110 transition-all duration-300 hover-glow group"
                      aria-label={social.label}
                      style={{ '--hover-color': social.color }}
                    >
                      <span className="text-xl group-hover:text-accent-primary transition-colors">
                        {social.icon}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="space-y-3 animate-slideUp" style={{ animationDelay: '0.6s' }}>
                <h2 className="font-semibold text-lg text-text-primary">Tech Stack</h2>
                <div className="flex flex-wrap gap-4">
                  {techStack.map((tech, index) => (
                    <div
                      key={index}
                      className="relative w-12 h-12 rounded-xl glass-effect flex items-center justify-center hover:scale-110 transition-all duration-300 hover-glow group animate-float"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="text-2xl" style={{ color: tech.color }}>
                        {tech.icon}
                      </div>
                      <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs glass-effect px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-4 animate-slideUp" style={{ animationDelay: '0.8s' }}>
                <Link
                  to="Experience"
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="relative px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold overflow-hidden group hover:scale-105 transition-all duration-300 cursor-pointer"
                >
                  <span className="relative z-10">View Experience</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
                <button
                  onClick={handleResumeDownload}
                  className="relative px-8 py-3 border-2 border-accent-primary text-accent-primary rounded-lg font-semibold overflow-hidden group hover:text-white transition-colors duration-300 hover:scale-105"
                >
                  <span className="relative z-10">Download Resume</span>
                  <div className="absolute inset-0 bg-accent-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </button>
              </div>
            </div>

            {/* Right Content - Profile Image */}
            <div className="flex justify-center items-center">
              <div 
                className="relative w-80 h-80 md:w-96 md:h-96 animate-float"
                style={{
                  transform: `translate(${-mousePosition.x * 0.3}px, ${-mousePosition.y * 0.3}px)`,
                  transition: 'transform 0.1s ease-out'
                }}
              >
                {/* Rotating Rings */}
                <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-accent-primary border-r-accent-secondary animate-spin"></div>
                <div className="absolute inset-2 rounded-full border-2 border-transparent border-b-accent-primary border-l-accent-secondary animate-spin" style={{ animationDirection: 'reverse', animationDuration: '4s' }}></div>
                <div className="absolute inset-4 rounded-full border-2 border-transparent border-t-accent-secondary border-r-accent-primary animate-spin" style={{ animationDuration: '6s' }}></div>
                
                {/* Profile Image */}
                <img
                  src="/p1.jpeg"
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full relative z-10 border-4 border-white dark:border-gray-800"
                />
                
                {/* Floating Badges */}
                <div className="absolute -right-4 top-1/4 glass-effect p-3 rounded-lg shadow-xl animate-float">
                  <span className="text-sm font-bold text-accent-primary">1.3+ Years</span>
                </div>
                <div className="absolute -left-4 bottom-1/4 glass-effect p-3 rounded-lg shadow-xl animate-float" style={{ animationDelay: '1s' }}>
                  <span className="text-sm font-bold text-accent-secondary">Rising Star</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-accent-primary rounded-full flex justify-center">
            <div className="w-1 h-2 bg-accent-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      <hr className="border-gray-300 dark:border-gray-700" />
    </>
  );
};

export default Home;