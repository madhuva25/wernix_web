import React from "react";
import { motion } from "framer-motion";

const Aboutus = () => {
  return (  
   
    <section id="aboutus">
      <div>
        <>
        <motion.div
    initial={{ opacity: 0,  x:-100}}

    whileInView={{ opacity: 1, x:0 }}
    transition={{duration:2,
      
     
    
    }}
    >
          <div>
            <br/><br/><br/>
            <h1 class="text-3xl text-center font-bold leading-tight text-black sm:text-4xl lg:text-5xl ">
              Wrenix
            </h1>
            <h1 class="text-3xl text-center  font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-pink-800 sm:text-4xl lg:text-5xl">
              Creative minds Expert solutions
            </h1>
          </div>
          </motion.div>

          <section class="py-10 bg-white sm:py-16 lg:py-24">
            <div class="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
              <div class="grid items-center md:grid-cols-2 gap-y-10 md:gap-x-20">
                <div class="pr-12 sm:pr-0">
                  <div class="relative max-w-xs mb-12">
                    <img
                      class="object-bottom rounded-md"
                      src="https://cdn.rareblocks.xyz/collection/celebration/images/features/4/man-eating-noodles.jpg"
                      alt=""
                    />

                    <img
                      class="absolute origin-bottom-right scale-75 rounded-md -bottom-12 -right-12"
                      src="https://cdn.rareblocks.xyz/collection/celebration/images/features/4/smiling-businessman.jpg"
                      alt=""
                    />
                  </div>
                </div>
                      
                <motion.div
    initial={{ opacity: 0, scale:0.5, y:50}}

    whileInView={{ opacity: 1, scale:1, y:0 }}
    transition={{duration:1,
     
    }}
    >
                <div>
                  <h2 class="text-3xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-red-800 sm:text-4xl lg:text-5xl">
                    Hi, We are Wrenix.
                  </h2>
                  <p class="mt-4 text-base leading-relaxed text-gray-600">
                    Wrenix prioritizes your product's unique design and
                    productivity. With our expertise, we ensure the best
                    outcomes, making your product truly exceptional in every
                    aspect.
                  </p>
                </div>
                </motion.div>
              </div>
            </div>
          </section>
        </>
      </div>
    </section>
  );
};

export default Aboutus;
