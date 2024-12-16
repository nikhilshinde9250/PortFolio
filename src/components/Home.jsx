import React from "react";
import { TbBrandLinkedinFilled } from "react-icons/tb";
// import { FaHackerrank } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
// import { SiLeetcode } from "react-icons/si";
import { SiGmail } from "react-icons/si";
import { FaSquareWhatsapp } from "react-icons/fa6";

import { FaJava } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";
import { SiHibernate } from "react-icons/si";
import { FaAngular } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiPostman } from "react-icons/si";

import { ReactTyped } from "react-typed";
const Home = () => {
  return (
    <>
      <div name="Home" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl">Welcome In My PortFolio</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello, I am a </h1>
              {/* <span className="text-blue-800 font-bold">Developer</span> */}
              <ReactTyped className="text-blue-800 font-bold"
          // typedRef={setTyped}
          strings={["Developer","Programmer", "Coder"]}
          typeSpeed={40}
          backSpeed={60}
          loop={true}
        />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
           I am a Computer Science student pursuing a Bachelor's degree with a strong foundation in Java development, Angular, and Spring Boot. Experienced in building dynamic applications, including Employee Management Systems and award-winning WordPress websites. Skilled in SQL, NoSQL (MongoDB), and RESTful APIs, with expertise in tools like GitHub, IntelliJ IDEA, and VS Code. Passionate about web development and delivering user-centric solutions while continuously enhancing my coding and problem-solving skills.
            </p>
            <br />
            {/* social media Icos */}
            <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
            <div className="space-y-3">
              <h1 className="font-bold">Availale On</h1>
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
            {/* currently working on below*/}
            <div className="space-y-3">
              <h1 className="font-bold">Currently Working On</h1>
              <div className="flex space-x-5">
                <FaJava className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                <SiSpringboot className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                <SiHibernate className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                <FaAngular className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                <FaReact className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                <SiPostman className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
              </div>
            </div>
            </div>
          </div>
          
          <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1">
          <img src="/photo.png" className="rounded-full md:w-[400px]  md:h-[400px]"   alt="" />
          </div>
        </div>
      </div>
      
      <hr />
    </>
  );
};

export default Home;
