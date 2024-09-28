import React from "react";
import web_Mob_Dev_Img from "../assets/Images/web_dev.jpg";
import Digital_Marketing_img from "../assets/Images/Digital_Marketing_img.jpg";
import Graphic_Design_img from "../assets/Images/Graphic_Design_img.jpg";
import { motion } from "framer-motion"

export default function Services() {
  return (
    <section id="services">
      <div>
        <section class="py-10 bg-light sm:py-16 lg:py-24">
          <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div class="max-w-3xl mx-auto text-center">
            <motion.div
    initial={{ opacity: 0 ,y:-50}}

    whileInView={{ opacity: 1, y:0 }}
    transition={{duration:4,
      type:"spring",
     stiffness:120,
     damping:4,
    }}
    >
              <h2 class="text-3xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-pink-500 sm:text-4xl lg:text-5xl lg:leading-tight ">
                Our Services
              </h2>
              </motion.div>

              
              <motion.div
    initial={{ opacity: 0 ,x:-100}}

    whileInView={{ opacity: 1, x:0 }}
    transition={{duration:1,
      

    }}>
              <p class="mt-4 text-base font-weight: 900; text-gray-500">
                Get your digital IT services from the best experts, delivering
                tailored solutions to meet your business needs.
              </p>

              </motion.div>
            </div>

            <div class="grid grid-cols-1 gap-6 mt-8 sm:grid-cols-3 md:mt-16 lg:gap-x-12">
              <div class="image-container mx-auto max-w-7xl">
                <img
                  class="w-full h-100 object-cover"
                  src={web_Mob_Dev_Img}
                  alt="web and mobile app development "
                />
                Web & Mobile App Development
              </div>

              <div class="image-container mx-auto max-w-7xl">
                <img
                  class="w-full h-auto object-cover"
                  src={Digital_Marketing_img}
                  alt="Digital marketing"
                />
              </div>

              <div class="image-container mx-auto max-w-7xl">
                <img
                  class="w-full h-auto object-cover"
                  src={Graphic_Design_img}
                  alt="Graphic Design"
                />
              </div>
            </div>
              

            <motion.div
    initial={{ opacity: 0,  y:-50}}

    whileInView={{ opacity: 1, y:0 }}
    transition={{duration:4,
      type:"spring",
     stiffness:120,
     damping:4,
    }}
    >
            <div class="mt-8 text-center md:mt-16">
              <a
                href="#"
                title=""
                class="inline-flex items-center justify-center py-4 font-semibold text-black transition-all duration-200 bg-yellow-300  border border-transparent rounded-md px-14 hover:bg-yellow-300   dark:bg-yellow-300 dark:hover:bg-yellow-400"
                role="button"
              >
                {" "}
                Send Requirment{" "}
              </a>
            </div>
            </motion.div>
          </div>
        </section>
      </div>
    </section>
  );
}
