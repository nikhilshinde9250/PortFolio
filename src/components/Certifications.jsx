// // Certifications.jsx - Dedicated certifications page with cards
// import React, { useEffect, useRef, useState } from "react";
// import { FaAward, FaCertificate, FaTrophy, FaMedal, FaCalendarAlt, FaExternalLinkAlt } from "react-icons/fa";
// import { SiOracle } from "react-icons/si";

// const Certifications = () => {
//   const [visibleItems, setVisibleItems] = useState([]);
//   const certificationRef = useRef([]);

//   const certifications = [
//     {
//       title: "Oracle Cloud Infrastructure Classic 2025 Certified Associate Architect",
//       issuer: "Oracle University",
//       period: "2025",
//       status: "Certified",
//       description: "Comprehensive certification covering Oracle Cloud Infrastructure services, architecture design, and cloud deployment strategies.",
//       skills: ["Cloud Architecture", "Infrastructure Design", "Oracle Cloud Services", "Security", "Networking"],
//       icon: <SiOracle />,
//       color: "from-red-500 to-orange-500",
//       badge: "🏆",
//       credentialId: "OCI-2025-AA-001",
//       validUntil: "2028",
//       verifyLink: "#"
//     },
//     {
//       title: "Full Stack Java Course",
//       issuer: "Seed InfoTech",
//       period: "2024",
//       status: "Completed",
//       description: "Intensive full-stack development program covering Java backend development, Spring Boot, React frontend, and modern web technologies.",
//       skills: ["Java", "Spring Boot", "React", "REST APIs", "Database Design", "Full Stack Development"],
//       icon: <SiJava />,
//       color: "from-blue-500 to-indigo-500",
//       badge: "📚",
//       credentialId: "SEED-FSJ-2024-001",
//       validUntil: "Lifetime",
//       verifyLink: "#"
//     },
//     {
//       title: "Spring Boot Microservices",
//       issuer: "Config Server LLP (Internal)",
//       period: "2025",
//       status: "Certified",
//       description: "Advanced training in microservices architecture using Spring Boot, including service discovery, API gateway, and distributed systems.",
//       skills: ["Microservices", "Spring Boot", "Service Discovery", "API Gateway", "Distributed Systems"],
//       icon: <SiSpring />,
//       color: "from-green-500 to-emerald-500",
//       badge: "⚡",
//       credentialId: "CSL-SBM-2025-001",
//       validUntil: "2027",
//       verifyLink: "#"
//     },
//     {
//       title: "React Advanced Development",
//       issuer: "Self-Paced Learning",
//       period: "2024",
//       status: "Completed",
//       description: "Advanced React concepts including hooks, context API, state management, performance optimization, and modern React patterns.",
//       skills: ["React Hooks", "Context API", "State Management", "Performance Optimization", "Modern React"],
//       icon: <SiReact />,
//       color: "from-cyan-500 to-blue-500",
//       badge: "⚛️",
//       credentialId: "REACT-ADV-2024",
//       validUntil: "Lifetime",
//       verifyLink: "#"
//     }
//   ];

//   const achievements = [
//     {
//       title: "Rising Star Award",
//       organization: "Config Server LLP",
//       year: "2025",
//       description: "Recognized for high performance, rapid learning, and impactful contributions to production systems.",
//       icon: <FaTrophy />,
//       color: "from-yellow-400 to-orange-500"
//     },
//     {
//       title: "Best Project Award",
//       organization: "Tulsi College",
//       year: "2024",
//       description: "Awarded for outstanding college website development project with modern technologies.",
//       icon: <FaMedal />,
//       color: "from-purple-500 to-pink-500"
//     },
//     {
//       title: "Technical Excellence",
//       organization: "Seed InfoTech",
//       year: "2024",
//       description: "Recognition for exceptional performance in Full Stack Java development course.",
//       icon: <FaAward />,
//       color: "from-indigo-500 to-purple-500"
//     }
//   ];

//   // Intersection Observer for smooth scroll animations
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             const index = certificationRef.current.indexOf(entry.target);
//             setVisibleItems((prev) => [...new Set([...prev, index])]);
//           }
//         });
//       },
//       { threshold: 0.3, rootMargin: '0px 0px -100px 0px' }
//     );

//     certificationRef.current.forEach((item) => {
//       if (item) observer.observe(item);
//     });

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section id="Certifications" name="Certifications" className="min-h-screen relative overflow-hidden bg-bg-primary py-20">
//       {/* Background */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute w-96 h-96 rounded-full opacity-20 blur-3xl bg-gradient-to-r from-accent-primary to-transparent animate-float" style={{ top: '20%', left: '10%' }} />
//         <div className="absolute w-96 h-96 rounded-full opacity-20 blur-3xl bg-gradient-to-r from-accent-secondary to-transparent animate-float" style={{ bottom: '20%', right: '10%', animationDelay: '2s' }} />
//       </div>

//       <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-16 relative z-10">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <h1 className="text-5xl font-bold glitch-text" data-text="Certifications">
//             My <span className="text-accent-primary">Certifications</span>
//           </h1>
//           <div className="w-24 h-1 bg-gradient-to-r from-accent-primary to-accent-secondary mx-auto mt-4 rounded-full"></div>
//           <p className="text-text-secondary mt-4 max-w-2xl mx-auto">
//             Professional certifications, courses, and achievements that validate my expertise and commitment to continuous learning
//           </p>
//         </div>

//         {/* Certifications Grid */}
//         <div className="mb-20">
//           <h2 className="text-3xl font-bold text-text-primary mb-8 flex items-center">
//             <FaCertificate className="mr-3 text-accent-primary" />
//             Professional Certifications
//           </h2>
          
//           <div className="grid md:grid-cols-2 gap-8">
//             {certifications.map((cert, index) => (
//               <div
//                 key={index}
//                 ref={(el) => (certificationRef.current[index] = el)}
//                 className={`glass-effect rounded-2xl p-8 hover:scale-105 transition-all duration-500 hover-glow ${
//                   visibleItems.includes(index) ? 'animate-slideUp opacity-100' : 'opacity-0 translate-y-10'
//                 }`}
//                 style={{ animationDelay: `${index * 0.1}s` }}
//               >
//                 {/* Header */}
//                 <div className="flex items-start justify-between mb-6">
//                   <div className="flex items-center space-x-4">
//                     <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${cert.color} flex items-center justify-center text-white text-2xl`}>
//                       {cert.icon}
//                     </div>
//                     <div>
//                       <div className="text-3xl mb-2">{cert.badge}</div>
//                       <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
//                         cert.status === 'Certified' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : 
//                         'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
//                       }`}>
//                         {cert.status}
//                       </div>
//                     </div>
//                   </div>
                  
//                   <div className="text-right text-sm text-text-secondary">
//                     <div className="flex items-center mb-1">
//                       <FaCalendarAlt className="mr-2" />
//                       {cert.period}
//                     </div>
//                     <div>Valid until: {cert.validUntil}</div>
//                   </div>
//                 </div>

//                 {/* Content */}
//                 <div className="mb-6">
//                   <h3 className="text-xl font-bold text-text-primary mb-2">{cert.title}</h3>
//                   <h4 className="text-lg text-accent-primary font-semibold mb-3">{cert.issuer}</h4>
//                   <p className="text-text-secondary text-sm mb-4">{cert.description}</p>
//                 </div>

//                 {/* Skills */}
//                 <div className="mb-6">
//                   <h5 className="font-semibold text-text-primary mb-3">Skills Covered:</h5>
//                   <div className="flex flex-wrap gap-2">
//                     {cert.skills.map((skill, idx) => (
//                       <span
//                         key={idx}
//                         className="px-3 py-1 bg-accent-primary/10 text-accent-primary rounded-full text-xs font-medium"
//                       >
//                         {skill}
//                       </span>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Footer */}
//                 <div className="flex justify-between items-center pt-4 border-t border-card-border">
//                   <div className="text-xs text-text-secondary">
//                     ID: {cert.credentialId}
//                   </div>
//                   <a
//                     href={cert.verifyLink}
//                     className="flex items-center space-x-2 text-accent-primary hover:text-accent-secondary transition-colors text-sm"
//                   >
//                     <span>Verify</span>
//                     <FaExternalLinkAlt />
//                   </a>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Achievements Section */}
//         <div className="mb-20">
//           <h2 className="text-3xl font-bold text-text-primary mb-8 flex items-center">
//             <FaTrophy className="mr-3 text-accent-primary" />
//             Awards & Achievements
//           </h2>
          
//           <div className="grid md:grid-cols-3 gap-8">
//             {achievements.map((achievement, index) => (
//               <div
//                 key={index}
//                 ref={(el) => (certificationRef.current[certifications.length + index] = el)}
//                 className={`glass-effect rounded-2xl p-6 text-center hover:scale-105 transition-all duration-500 hover-glow ${
//                   visibleItems.includes(certifications.length + index) ? 'animate-slideUp opacity-100' : 'opacity-0 translate-y-10'
//                 }`}
//                 style={{ animationDelay: `${index * 0.1}s` }}
//               >
//                 <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${achievement.color} flex items-center justify-center text-white text-2xl mx-auto mb-4`}>
//                   {achievement.icon}
//                 </div>
//                 <h3 className="text-xl font-bold text-text-primary mb-2">{achievement.title}</h3>
//                 <h4 className="text-lg text-accent-primary font-semibold mb-2">{achievement.organization}</h4>
//                 <p className="text-text-secondary text-sm mb-3">{achievement.description}</p>
//                 <div className="px-3 py-1 bg-accent-primary/10 text-accent-primary rounded-full text-xs inline-block">
//                   {achievement.year}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Skills Progress */}
//         <div className="glass-effect rounded-2xl p-8">
//           <h2 className="text-3xl font-bold text-text-primary mb-8 text-center">
//             Certification Progress
//           </h2>
          
//           <div className="grid md:grid-cols-2 gap-8">
//             <div>
//               <h3 className="text-xl font-semibold text-text-primary mb-4">Completed</h3>
//               <div className="space-y-3">
//                 <div className="flex justify-between items-center">
//                   <span className="text-text-secondary">Oracle Cloud Infrastructure</span>
//                   <span className="text-green-500 font-semibold">✓ Certified</span>
//                 </div>
//                 <div className="flex justify-between items-center">
//                   <span className="text-text-secondary">Full Stack Java Development</span>
//                   <span className="text-green-500 font-semibold">✓ Completed</span>
//                 </div>
//                 <div className="flex justify-between items-center">
//                   <span className="text-text-secondary">Spring Boot Microservices</span>
//                   <span className="text-green-500 font-semibold">✓ Certified</span>
//                 </div>
//               </div>
//             </div>
            
//             <div>
//               <h3 className="text-xl font-semibold text-text-primary mb-4">In Progress</h3>
//               <div className="space-y-3">
//                 <div className="flex justify-between items-center">
//                   <span className="text-text-secondary">AWS Solutions Architect</span>
//                   <span className="text-yellow-500 font-semibold">📚 Studying</span>
//                 </div>
//                 <div className="flex justify-between items-center">
//                   <span className="text-text-secondary">Docker & Kubernetes</span>
//                   <span className="text-yellow-500 font-semibold">📚 Learning</span>
//                 </div>
//                 <div className="flex justify-between items-center">
//                   <span className="text-text-secondary">System Design</span>
//                   <span className="text-yellow-500 font-semibold">📚 Preparing</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Certifications;