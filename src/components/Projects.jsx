// Projects.jsx - Updated with proper Tailwind classes
import React, { useState } from "react";
import { FaReact, FaJava, FaWordpress, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { SiSpringboot, SiHibernate, SiAngular, SiTailwindcss, SiJavascript, SiMongodb, SiPostman } from "react-icons/si";

const Projects = () => {
  const [filter, setFilter] = useState("all");
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      title: "MediMart",
      description: "Developed a specialized web-based e-commerce platform dedicated to healthcare products, enabling efficient browsing, management, and secure transactions for medical supplies and equipment.",
      longDescription: "Developed microservices architecture where product, cart, order and user modules implemented as independent services enabling scalability and maintainability. Integrated PostgreSQL with Spring Data JPA for data persistence and created dynamic UI using React and Spring MVC.",
      technologies: [
        { icon: <FaJava />, name: "Java", color: "#007396" },
        { icon: <SiSpringboot />, name: "Spring Boot", color: "#6DB33F" },
        { icon: <SiHibernate />, name: "JPA (Hibernate)", color: "#59666C" },
        { icon: <FaReact />, name: "React", color: "#61DAFB" },
        { icon: <SiMongodb />, name: "PostgreSQL", color: "#336791" }
      ],
      codeLink: "https://github.com/nikhilshinde9250/MediMart",
      liveLink: "#",
      category: "fullstack",
      image: "/projects/medimart.jpg",
      featured: true,
      completionDate: "Feb 2025 - Nov 2025",
      highlights: ["Microservices Architecture", "PostgreSQL Integration", "React UI", "Spring MVC"]
    },
    {
      title: "AutoQA - Config-Driven Test Automation Framework",
      description: "Developed a Java Spring Boot–based Selenium automation framework enabling QA teams to run data-driven test cases from Excel/CSV without code changes.",
      longDescription: "Built a dynamic execution engine with Excel reporting to track results and support faster defect analysis. Implemented environment-based execution through centralized configuration for multiple deployments with data-driven testing capabilities.",
      technologies: [
        { icon: <FaJava />, name: "Java", color: "#007396" },
        { icon: <SiSpringboot />, name: "Spring Boot", color: "#6DB33F" },
        { icon: <SiPostman />, name: "Selenium WebDriver", color: "#43B02A" },
        { icon: <FaReact />, name: "Apache POI", color: "#D14836" },
        { icon: <SiJavascript />, name: "TestNG/JUnit", color: "#F7DF1E" }
      ],
      codeLink: "https://github.com/nikhilshinde9250/AutoQA-Framework",
      liveLink: "#",
      category: "backend",
      image: "/projects/autoqa.jpg",
      featured: true,
      completionDate: "Dec 2025 - Present",
      highlights: ["Data-Driven Testing", "Excel/CSV Integration", "Environment-Aware Execution", "Dynamic Reporting"]
    },
    {
      title: "Employee Management System",
      description: "A comprehensive system enabling CRUD operations on employee records with secure database integration, role-based access control, and real-time updates.",
      longDescription: "Built with Spring Boot backend and Angular frontend. Features include JWT authentication, department management, attendance tracking, and report generation. Implemented RESTful APIs with proper error handling and validation.",
      technologies: [
        { icon: <FaJava />, name: "Java", color: "#007396" },
        { icon: <SiSpringboot />, name: "Spring Boot", color: "#6DB33F" },
        { icon: <SiHibernate />, name: "Hibernate", color: "#59666C" },
        { icon: <SiAngular />, name: "Angular", color: "#DD0031" },
        { icon: <SiMongodb />, name: "MongoDB", color: "#47A248" }
      ],
      codeLink: "https://github.com/nikhilshinde9250/Employee-Management-System",
      liveLink: "#",
      category: "backend",
      image: "/projects/ems.jpg",
      featured: true,
      completionDate: "2024",
      highlights: ["JWT Authentication", "Role-based Access", "Real-time Updates"]
    },
    {
      title: "JWT Authentication Service",
      description: "Secure authentication microservice with JWT token generation, validation, and role-based authorization.",
      longDescription: "Built a robust authentication service using Spring Security with JWT. Features include login/signup, token refresh, password encryption using BCrypt, and comprehensive API security. Tested thoroughly with Postman.",
      technologies: [
        { icon: <SiSpringboot />, name: "Spring Boot", color: "#6DB33F" },
        { icon: <FaJava />, name: "Java", color: "#007396" },
        { icon: <SiPostman />, name: "Postman", color: "#FF6C37" }
      ],
      codeLink: "https://github.com/nikhilshinde9250/JWT-Authentication.git",
      liveLink: "#",
      category: "backend",
      image: "/projects/jwt.jpg",
      featured: false,
      completionDate: "2024",
      highlights: ["JWT Tokens", "Spring Security", "BCrypt Encryption"]
    },
    {
      title: "Tulsi College Website",
      description: "Professional WordPress website for Tulsi Computer Science College with dynamic content management.",
      longDescription: "Designed and developed a fully functional college website using WordPress. Implemented custom theme, plugin integrations, student portal, and event management system. Optimized for SEO and mobile responsiveness.",
      technologies: [
        { icon: <FaWordpress />, name: "WordPress", color: "#21759B" },
        { icon: <FaReact />, name: "Elementor", color: "#61DAFB" },
        { icon: <SiJavascript />, name: "JavaScript", color: "#F7DF1E" }
      ],
      codeLink: "https://tulsicollegeit.in/",
      liveLink: "https://tulsicollegeit.in/",
      category: "frontend",
      image: "/projects/tulsi.jpg",
      featured: false,
      completionDate: "2023",
      highlights: ["Custom Theme", "Student Portal", "SEO Optimized"]
    },
    {
      title: "Weather App",
      description: "Real-time weather application with 5-day forecast and interactive weather maps.",
      longDescription: "Built a responsive weather app using vanilla JavaScript. Features include current weather conditions, 5-day forecast, search by city, geolocation support, and interactive weather maps using OpenWeatherMap API.",
      technologies: [
        { icon: <SiJavascript />, name: "JavaScript", color: "#F7DF1E" },
        { icon: <FaReact />, name: "React", color: "#61DAFB" },
        { icon: <SiTailwindcss />, name: "Tailwind", color: "#06B6D4" }
      ],
      codeLink: "https://nikhilshinde9250.github.io/Weather-App2nd/",
      liveLink: "https://nikhilshinde9250.github.io/Weather-App2nd/",
      category: "frontend",
      image: "/projects/weather.jpg",
      featured: false,
      completionDate: "2023",
      highlights: ["Weather API", "Geolocation", "Interactive Maps"]
    }
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="Projects" name="Projects" className="min-h-screen relative overflow-hidden bg-bg-primary py-20">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 rounded-full opacity-20 blur-3xl animate-float bg-gradient-to-r from-accent-primary to-transparent" style={{ top: '20%', right: '10%' }} />
        <div className="absolute w-96 h-96 rounded-full opacity-20 blur-3xl animate-float bg-gradient-to-r from-accent-secondary to-transparent" style={{ bottom: '10%', left: '5%', animationDelay: '2s' }} />
      </div>

      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-16 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold glitch-text" data-text="Projects">
            My <span className="text-accent-primary">Projects</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary mx-auto mt-4 rounded-full"></div>
          <p className="text-text-secondary mt-4 max-w-2xl mx-auto">
            Showcasing my best work and innovative solutions
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center flex-wrap gap-4 mb-10">
          {["all", "frontend", "backend", "fullstack"].map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full capitalize transition-all duration-300 ${
                filter === category
                  ? "bg-gradient-to-r from-accent-primary to-accent-secondary text-white scale-110"
                  : "glass-effect hover:border-accent-primary hover:scale-105"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="glass-effect rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 hover-glow animate-slideUp"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image || "https://via.placeholder.com/400x200"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                    ⭐ Featured
                  </div>
                )}

                {/* Action Links */}
                <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-accent-primary text-white flex items-center justify-center hover:scale-110 transition-transform"
                    title="View Code"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-accent-secondary text-white flex items-center justify-center hover:scale-110 transition-transform"
                    title="Live Demo"
                  >
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-text-primary">{project.title}</h3>
                <p className="text-text-secondary text-sm mb-4">
                  {hoveredProject === index ? project.longDescription : project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <div
                      key={idx}
                      className="w-8 h-8 rounded-full glass-effect flex items-center justify-center hover:scale-110 transition-transform"
                      style={{ color: tech.color }}
                      title={tech.name}
                    >
                      {tech.icon}
                    </div>
                  ))}
                </div>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.highlights.map((highlight, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-1 bg-accent-primary/10 text-accent-primary rounded-full"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

                {/* Completion Date */}
                <div className="text-sm text-text-secondary mt-3">
                  Completed: {project.completionDate}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;