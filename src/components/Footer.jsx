// Footer.jsx - Updated with proper Tailwind classes
import React from "react";
import { TbBrandLinkedinFilled } from "react-icons/tb";
import { FaInstagramSquare, FaGithub, FaHeart, FaPaperPlane, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { SiGmail, SiLeetcode, SiHackerrank } from "react-icons/si";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <TbBrandLinkedinFilled />, url: "https://www.linkedin.com/in/nikhilshinde9250/", label: "LinkedIn", color: "#0077B5" },
    { icon: <SiGmail />, url: "mailto:nikhilshinde9250@gmail.com", label: "Email", color: "#EA4335" },
    { icon: <FaInstagramSquare />, url: "https://www.instagram.com/nikhil_shinde_2004/", label: "Instagram", color: "#E4405F" },
    { icon: <FaSquareWhatsapp />, url: "https://wa.me/9022629250", label: "WhatsApp", color: "#25D366" },
    { icon: <FaGithub />, url: "https://github.com/nikhilshinde9250", label: "GitHub", color: "#333" },
    { icon: <SiLeetcode />, url: "https://leetcode.com/nikhilshinde9250/", label: "LeetCode", color: "#FFA116" },
    { icon: <SiHackerrank />, url: "https://www.hackerrank.com/nikhilshinde9250", label: "HackerRank", color: "#00EA64" },
  ];

  const quickLinks = [
    { name: "Home", to: "Home" },
    { name: "About", to: "About" },
    { name: "Projects", to: "Projects" },
    { name: "Experience", to: "Experience" },
    { name: "Certifications", to: "Certifications" },
    { name: "Contact", to: "Contact" },
  ];

  return (
    <footer className="relative overflow-hidden glass-effect border-t border-card-border">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 rounded-full opacity-10 blur-3xl bg-gradient-to-r from-accent-primary to-accent-secondary animate-float" style={{ top: '-50%', left: '-50%' }} />
      </div>

      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-12 relative z-10">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1">
            <h2 className="text-2xl font-bold mb-4 text-text-primary">
              <span className="text-red-500">N</span>ikhil{" "}
              <span className="text-blue-500">S</span>hinde
            </h2>
            <p className="text-text-secondary mb-4">
              Java Backend & Full-Stack Engineer crafting secure, scalable applications with modern technologies.
            </p>
            <div className="flex space-x-3">
              {socialLinks.slice(0, 4).map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full glass-effect flex items-center justify-center hover:scale-110 transition-all duration-300 hover-glow"
                  aria-label={social.label}
                >
                  <span className="hover:text-accent-primary transition-colors">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4 text-text-primary">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={`#${link.to}`}
                    className="text-text-secondary hover:text-accent-primary transition-colors duration-300 flex items-center space-x-2 group"
                  >
                    <span className="w-1 h-1 bg-accent-primary rounded-full group-hover:w-2 transition-all"></span>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4 text-text-primary">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 text-text-secondary">
                <MdEmail className="text-accent-primary" />
                <span>nikhilshinde9250@gmail.com</span>
              </li>
              <li className="flex items-center space-x-3 text-text-secondary">
                <FaPhone className="text-accent-primary" />
                <span>+91 9022629250</span>
              </li>
              <li className="flex items-center space-x-3 text-text-secondary">
                <FaMapMarkerAlt className="text-accent-primary" />
                <span>Pune, Maharashtra, India</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4 text-text-primary">Stay Updated</h3>
            <p className="text-text-secondary mb-4">
              Get notified about new projects and updates!
            </p>
            <div className="relative">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 glass-effect rounded-lg focus:outline-none focus:border-accent-primary transition-colors text-text-primary"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-accent-primary text-white p-1 rounded-lg hover:bg-accent-secondary transition-colors">
                <FaPaperPlane />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-card-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-text-secondary text-sm">
              © {currentYear} Nikhil Shinde. All rights reserved.
            </p>
            
            {/* Social Icons */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-accent-primary transition-all duration-300 hover:scale-125"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <p className="text-text-secondary text-sm flex items-center space-x-1">
              <span>Made with</span>
              <FaHeart className="text-red-500 animate-pulse" />
              <span>by Nikhil</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;