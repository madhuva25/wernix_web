import React from 'react'
import Logo from "../assets/Logo/logwrenix.png";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";


function Nav2() {

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: "smooth" });
      };
    //blog
      const blogs = ()=>{
        alert("UNDER THE CONSTRUCTIOON THIS Blog PAGE")
      }
  return (
   
<div>
      <nav className="fixed top-0 z-20 w-full border-b border-gray-200 bg-white-900 backdrop-blur-md bg-opacity-95 start-0 yello:border-gray-600">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto ">
          <a
            href="https://wrenix.com/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img className="h-8" src={Logo} alt="wrenix" />
          </a>
          <div className="flex space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
          <Link to={"/"}>
            <button
              type="button"
              className="px-4 py-2 text-sm font-medium text-center text-black bg-yellow-300 rounded-lg hover:bg-yellow-300 focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:bg-yellow-300 dark:hover:bg-yellow-400 dark:focus:ring-yellow-400"
           
           >
              Back to Home
            </button>
            </Link>




            
              
              
            
          </div>
        </div>
      </nav>
    </div>

  )
}

export default Nav2