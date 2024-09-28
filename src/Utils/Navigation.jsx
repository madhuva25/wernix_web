import React from "react";
import Logo from "../assets/Logo/logwrenix.png";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";

export default function Navigation() {
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
          
            <button
              type="button"
              className="px-4 py-2 text-sm font-medium text-center text-black bg-yellow-300 rounded-lg hover:bg-yellow-300 focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:bg-yellow-300 dark:hover:bg-yellow-400 dark:focus:ring-yellow-400"
            onClick={() => scrollToSection("contactus")}
           >
              Let's Talk
            </button>
            
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg md:p-0 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 backdrop-blur-md bg-opacity-95 ">
              <li>
                <a
                  href="/"
                  className="block px-3 py-2 text-black transition duration-300 ease-in-out rounded md:bg-transparent md:p-0 hover:text-black hover:underline-yellow"
                >
                  Home
                </a>
              </li>
              <li>
                <button
                  className="block px-3 py-2 text-black transition duration-300 ease-in-out rounded md:bg-transparent md:p-0 hover:text-black hover:underline-yellow"
                  onClick={() => scrollToSection("services")}
                >
                  Services     
                </button>        
              </li>
              <li>
                <button className="block px-3 py-2 text-black transition duration-300 ease-in-out rounded md:bg-transparent md:p-0 hover:text-black hover:underline-yellow"
                onClick={blogs}
                >
                  Blog
                  
                </button>
              </li>
              <li>
                <button
                  className="block px-3 py-2 text-black transition duration-300 ease-in-out rounded md:bg-transparent md:p-0 hover:text-black hover:underline-yellow"
                  onClick={() => scrollToSection("aboutus")}
                >
                  About Us
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
