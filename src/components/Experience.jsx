// Experience.jsx - Clean card-based work experience layout
import React, { useEffect, useRef, useState } from "react";
import { FaBriefcase, FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt, FaBuilding } from "react-icons/fa";
import { MdWork } from "react-icons/md";

const Experience = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const experienceRef = useRef([]);

  const workExperience = [
    {
      title: "Software Engineer",
      company: "Config Server LLP",
      location: "Pune, India",
      period: "April 2025 - Present",
      type: "Full-time",
      description: "Working on backend services in a microservice-based application supporting daily business workflows and internal operations.",
      responsibilities: [
        "Worked on backend services in a microservice-based application supporting daily business workflows and internal operations.",
        "Designed and maintained RESTful APIs using Spring Boot, consumed by web applications and internal services.",
        "Implemented Spring Security with JWT-based authentication to secure application endpoints.",
        "Developed and maintained unit tests using JUnit to ensure reliability of core backend services.",
        "Performed database operations and debugging across services to resolve functional and integration issues.",
        "Collaborated with the frontend team during integration testing and assisted in fixing minor ReactJS UI issues.",
        "Followed Git-based version control and agile development practices while coordinating with cross-functional teams."
      ],
      technologies: ["Java", "Spring Boot", "Spring Security", "JWT", "RESTful APIs", "JUnit", "Git", "ReactJS", "Microservices", "Agile"],
      icon: <MdWork />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Software Engineer Trainee",
      company: "Config Server LLP",
      location: "Pune, India", 
      period: "Jan 2025 - March 2025",
      type: "Training",
      description: "Assisted in developing RESTful services and microservices-based features under senior developer guidance.",
      responsibilities: [
        "Assisted in developing RESTful services and microservices-based features.",
        "Supported debugging and issue resolution under senior developer guidance.",
        "Gained hands-on exposure to agile methodology (sprint planning, stand-ups).",
        "Learned and implemented version control (Git/GitHub/BitBucket) and DevOps workflows, including code deployment and environment configuration.",
        "Assisted in API testing and validation using tools like Postman, ensuring endpoints responded correctly during development.",
        "Supported database-related tasks such as writing basic SQL queries and verifying data during feature development and debugging."
      ],
      technologies: ["RESTful APIs", "Microservices", "Git", "GitHub", "BitBucket", "Postman", "SQL", "DevOps", "Agile", "Sprint Planning"],
      icon: <FaBriefcase />,
      color: "from-green-500 to-emerald-500"
    }
  ];

  const education = [
    {
      title: "B.Sc. in Computer Science",
      institution: "Tulsi College of Computer Science and Information Technology",
      location: "BEED, Maharashtra",
      period: "July 2022 - May 2025",
      percentage: "83.8%",
      description: "Completed Bachelor's degree in Computer Science with focus on Software Development and Web Technologies.",
      highlights: [
        "Strong foundation in programming and software development",
        "Participated in various technical projects and competitions",
        "Developed practical skills in Java, web development, and database management",
        "Built college website as major project"
      ],
      icon: <FaGraduationCap />,
      color: "from-orange-500 to-red-500"
    }
  ];

  // Intersection Observer for smooth scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = experienceRef.current.indexOf(entry.target);
            setVisibleItems((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.3, rootMargin: '0px 0px -100px 0px' }
    );

    experienceRef.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="Experience" name="Experience" className="min-h-screen relative overflow-hidden bg-bg-primary py-20">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 rounded-full opacity-20 blur-3xl bg-gradient-to-r from-accent-primary to-transparent animate-float" style={{ top: '30%', left: '20%' }} />
        <div className="absolute w-96 h-96 rounded-full opacity-20 blur-3xl bg-gradient-to-r from-accent-secondary to-transparent animate-float" style={{ bottom: '20%', right: '10%', animationDelay: '2s' }} />
      </div>

      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-16 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold glitch-text" data-text="Experience">
            My Professional <span className="text-accent-primary">Experience</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary mx-auto mt-4 rounded-full"></div>
          <p className="text-text-secondary mt-4 max-w-2xl mx-auto">
            A journey through my professional career, showcasing growth, achievements, and technical expertise
          </p>
        </div>

        {/* Work Experience Cards */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-text-primary mb-8 flex items-center">
            <MdWork className="mr-3 text-accent-primary" />
            Work Experience
          </h2>
          
          <div className="grid gap-8">
            {workExperience.map((exp, index) => (
              <div
                key={index}
                ref={(el) => (experienceRef.current[index] = el)}
                className={`glass-effect rounded-2xl p-8 hover:scale-[1.02] transition-all duration-500 hover-glow ${
                  visibleItems.includes(index) ? 'animate-slideUp opacity-100' : 'opacity-0 translate-y-10'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="grid lg:grid-cols-4 gap-6">
                  {/* Left Column - Company Info */}
                  <div className="lg:col-span-1">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${exp.color} flex items-center justify-center text-white text-3xl mb-4`}>
                      {exp.icon}
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center text-sm text-text-secondary">
                        <FaBuilding className="mr-2 text-accent-primary" />
                        <span className="font-semibold">{exp.company}</span>
                      </div>
                      <div className="flex items-center text-sm text-text-secondary">
                        <FaCalendarAlt className="mr-2 text-accent-primary" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center text-sm text-text-secondary">
                        <FaMapMarkerAlt className="mr-2 text-accent-primary" />
                        <span>{exp.location}</span>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-xs font-semibold inline-block ${
                        exp.type === 'Full-time' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : 
                        'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                      }`}>
                        {exp.type}
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Job Details */}
                  <div className="lg:col-span-3">
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-text-primary mb-2">{exp.title}</h3>
                      <p className="text-text-secondary">{exp.description}</p>
                    </div>

                    {/* Responsibilities */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-text-primary mb-3 flex items-center">
                        <span className="w-2 h-2 bg-accent-primary rounded-full mr-2"></span>
                        Key Responsibilities
                      </h4>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((responsibility, idx) => (
                          <li key={idx} className="flex items-start space-x-3 text-sm text-text-secondary">
                            <span className="text-accent-primary mt-1 flex-shrink-0">•</span>
                            <span>{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold text-text-primary mb-3 flex items-center">
                        <span className="w-2 h-2 bg-accent-secondary rounded-full mr-2"></span>
                        Technologies & Tools
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-accent-primary/10 text-accent-primary rounded-full text-xs font-medium hover:bg-accent-primary/20 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Card */}
        <div>
          <h2 className="text-3xl font-bold text-text-primary mb-8 flex items-center">
            <FaGraduationCap className="mr-3 text-accent-primary" />
            Education
          </h2>
          
          {education.map((edu, index) => (
            <div
              key={index}
              ref={(el) => (experienceRef.current[workExperience.length + index] = el)}
              className={`glass-effect rounded-2xl p-8 hover:scale-[1.02] transition-all duration-500 hover-glow ${
                visibleItems.includes(workExperience.length + index) ? 'animate-slideUp opacity-100' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="grid lg:grid-cols-4 gap-6">
                {/* Left Column - Institution Info */}
                <div className="lg:col-span-1">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${edu.color} flex items-center justify-center text-white text-3xl mb-4`}>
                    {edu.icon}
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm text-text-secondary">
                      <FaCalendarAlt className="mr-2 text-accent-primary" />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center text-sm text-text-secondary">
                      <FaMapMarkerAlt className="mr-2 text-accent-primary" />
                      <span>{edu.location}</span>
                    </div>
                    <div className="px-3 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded-full text-xs font-semibold inline-block">
                      {edu.percentage}
                    </div>
                  </div>
                </div>

                {/* Right Column - Education Details */}
                <div className="lg:col-span-3">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-text-primary mb-2">{edu.title}</h3>
                    <h4 className="text-xl text-accent-primary font-semibold mb-2">{edu.institution}</h4>
                    <p className="text-text-secondary">{edu.description}</p>
                  </div>

                  {/* Highlights */}
                  <div>
                    <h4 className="font-semibold text-text-primary mb-3 flex items-center">
                      <span className="w-2 h-2 bg-accent-primary rounded-full mr-2"></span>
                      Academic Highlights
                    </h4>
                    <ul className="space-y-2">
                      {edu.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start space-x-3 text-sm text-text-secondary">
                          <span className="text-accent-primary mt-1 flex-shrink-0">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;