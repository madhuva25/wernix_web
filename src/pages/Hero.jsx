import React, {useRef,useEffect,useState} from 'react';
import hero from "../assets/Images/hero.png"
import { motion } from "framer-motion"


export default function Hero() {
    
        const scrollToSection = (sectionId) => {
          const section = document.getElementById(sectionId);
          section.scrollIntoView({ behavior: "smooth" });
        };
    
    
   

  return (
    <div>
       <div class="bg-white">


    <section class="bg-[#FCF8F1] bg-opacity-30 py-10 sm:py-16 lg:py-24">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div class="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                <div>
                   
       

                   
    
                 
       <motion.div
    initial={{ opacity: 0 ,x:-50}}

    whileInView={{ opacity: 1, x:0 }}
    transition={{duration:2,}}
    >
                    <h1 class="mt-8 text-4xl font-bold text-black lg:mt-8 sm:text-6xl xl:text-8xl">Create & market with </h1>
                    
                    <h1 class="mt-4 text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-800 lg:mt-8 sm:text-6xl xl:text-8xl">IT Experts</h1>
                    <p   class="mt-4 text-base font-weight: 900; text-gray-500 " >Receive exceptional service from our IT and digital experts.</p>
                   
                    <button   
                     class="inline-flex items-center px-6 py-4 mt-8 font-semibold text-black transition-all duration-200 bg-yellow-300 rounded-full lg:mt-16 hover:bg-yellow-400 focus:bg-yellow-400"
                     onClick={() => scrollToSection("contactus")}
                     >
                        Let's Talk
                        
                        <svg class="w-6 h-6 ml-8 -mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    
                    </button>
                    </motion.div>
                   
                   
                </div>
                

                <div>
                
                    <img class="w-full" src= {hero} alt="" />
                </div>
            </div>
        </div>
        
       
    </section>
    
    
</div>
    </div>
  )
}
