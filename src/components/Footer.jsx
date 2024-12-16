import React from "react";
import { TbBrandLinkedinFilled } from "react-icons/tb";
import { FaInstagramSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaSquareWhatsapp } from "react-icons/fa6";
const Footer = () => {
  return (
    <>
      <hr />
      <footer className="py-12">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className="flex flex-col items-center justify-center">
            {/* Social Media Icons */}
            <div className="flex space-x-4">
               <ul className="flex space-x-5">
                              <li>
                               <a href="https://www.linkedin.com/in/nikhilshinde9250/" target="_blank">
                                <TbBrandLinkedinFilled className="text-2xl cursor-pointer" />
                                </a>
                              </li>
                              <li>
                               <a href="nikhilshinde9250@gmail.com">
                                <SiGmail className="text-2xl cursor-pointer" />
                                </a>
                              </li>
                              {/* <li>{" "} <FaHackerrank className="text-xl cursor-pointer" /></li> */}
                              <li>
                                <a href="https://www.instagram.com/nikhil_shinde_2004/" target="_blank">
                                <FaInstagramSquare className="text-2xl cursor-pointer" /></a>
                              </li>
                              <li>
                              <a href="https://wa.me/9022629250" target="_blank">
                                <FaSquareWhatsapp className="text-2xl cursor-pointer" /></a>
                              </li>
                              {/* <li>{" "}<SiLeetcode  className="text-xl cursor-pointer"/></li> */}
                            </ul>
            </div>
            {/* Copyright Text */}
            <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
              <p className="text-sm">&copy; 2024 Your Company. All rights reserved.</p>
              <p className="text-sm">Supportive Partner ❤ Nikhil</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
