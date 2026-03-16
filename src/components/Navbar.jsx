// Navbar.jsx - Updated with Theme Toggle and Animations
import React, { useState, useEffect } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { Link } from "react-scroll";
import { FaSun, FaMoon } from "react-icons/fa";

const Navbar = ({ theme, toggleTheme }) => {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Projects" },
    { id: 4, text: "Experience" },
    { id: 5, text: "Contact" }
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'glass-effect shadow-lg py-2' 
          : 'bg-transparent py-4'
      }`}>
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex space-x-3 items-center">
            <div className="relative">
              <img 
                src="../../public/p1.jpeg" 
                className="h-12 w-12 rounded-full border-2 border-accent-primary object-cover" 
                alt="Profile" 
              />
              <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-accent-secondary animate-spin-slow"></div>
            </div>
            <div>
              <h2 className="font-bold text-xl cursor-pointer">
                <span className="text-red-500 text-2xl">N</span>ikhil{" "}
                <span className="text-blue-500">S</span>hinde
              </h2>
              <p className="text-sm text-text-secondary">
                Full Stack Developer
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="flex items-center space-x-6">
            <ul className="hidden md:flex space-x-2">
              {navItems.map(({ id, text }) => (
                <li key={id}>
                  <Link
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="text-accent-primary"
                    className="px-4 py-2 cursor-pointer transition-all duration-300 hover:text-accent-primary relative group"
                  >
                    {text}
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-accent-primary to-accent-secondary group-hover:w-full transition-all duration-300"></span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Theme Toggle Button */}
            <button 
              onClick={toggleTheme} 
              className="w-10 h-10 rounded-full glass-effect flex items-center justify-center hover:scale-110 transition-all duration-300 hover-glow"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <FaSun className="text-yellow-500 text-lg" />
              ) : (
                <FaMoon className="text-blue-500 text-lg" />
              )}
            </button>

            {/* Mobile Menu Button */}
            <div 
              onClick={() => setMenu(!menu)} 
              className="md:hidden cursor-pointer hover:text-accent-primary transition-colors p-2"
            >
              {menu ? <IoClose size={24} /> : <HiMenuAlt2 size={24} />}
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {menu && (
          <div className="md:hidden glass-effect mt-2 mx-4 rounded-lg animate-fadeIn">
            <ul className="flex flex-col py-4">
              {navItems.map(({ id, text }) => (
                <li key={id}>
                  <Link
                    to={text}
                    onClick={() => setMenu(false)}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="text-accent-primary"
                    className="block px-6 py-3 cursor-pointer transition-all duration-300 hover:text-accent-primary hover:bg-bg-secondary"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;