import React, { useState } from "react";
// import pic from "../../public/express";
import { HiMenuAlt2 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import {Link} from "react-scroll";
const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const navItems=[
    {
      id:1,
      text:"Home"
    },
    {
      id:2,
      text:"About"
    },
    {
      id:3,
      text:"Projects"
    },
    {
      id:4,
      text:"Experience"
    },
    {
      id:5,
      text:"Contact"
    }
  ]
  return (
    <>
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-lg fixed top-0 right-0 left-0 z-50 bg-white">
      <div className="flex justify-between items-center h-16">
        <div className="flex space-x-2">
          <img src="/leet.jpg" className="h-14 w-14 rounded-full" alt="" />
          <h2 className="font-bold text-xl cursor-pointer">
            <span className="text-red-500 text-2xl">N</span>ikhil <span className="text-blue-500">S</span>hinde
            <p className="text-sm">Full Stack Developer</p>
          </h2>
        </div>
        {/*desktop or large screens navbar given below */}
        <div>
          <ul className=" hidden md:flex space-x-8">
            {
              navItems.map(({id, text})=>(
                <li className="hover:scale-125 duration-200 cursor-pointer" key={id}>
                  <Link to={text}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  activeClass="active"> 
                  {text}</Link>
                  </li>
              ))
            }
          </ul>
          <div onClick={() => setMenu(!menu)} className="md:hidden">
            {menu ?  <IoClose size={24}/> : <HiMenuAlt2 size={24} />}
          </div>
        </div>
      </div>
      {/*mobile navbar given below */}
      {menu && (
        <div className="bg-white">
          <ul className="md:hidden flex flex-col h-screen items-center justify-center space-y-3 text-xl">
          {
              navItems.map(({id, text})=>(
                <li className="hover:scale-125 duration-200 cursor-pointer font-semibold" key={id}>
                   <Link to={text}
                   onClick={() => setMenu(!menu)}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  activeClass="active"> 
                  {text}</Link>
                  </li>
              ))
            }
          </ul>
        </div>
      )}
    </div>
    </>
  );
};

export default Navbar;
