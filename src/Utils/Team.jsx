import React from "react";

export default function Team() {
  return (
    <div>
      <section class="bg-white dark:bg-white">
        <div class="container px-6 py-10 mx-auto animate-pulse">
          <h1 class="text-3xl text-center  font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-pink-800 sm:text-4xl lg:text-5xl">
            We Are Wrenix
          </h1>

          <p class="w-64 h-2 mx-auto mt-6 ">
            Here, We are Wrenix and Directors.
          </p>

            <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
            <div class="flex flex-col items-center p-8">
              <p class="w-32 h-32 bg-gray-200 rounded-full dark:bg-gray-700 ring-4 ring-gray-300 dark:ring-gray-600"></p>
              <h1 class="w-70 h-2 mx-auto mt-6">Achintha Uddeepana</h1>

              <p class="w-70 h-2 mx-auto mt-4">Founder & Director</p>

              {/* <p class="w-70 h-2 mx-auto mt-4">University of Westminster</p> */}
            </div>


            <div class="flex flex-col items-center p-8">
              <p class="w-32 h-32 bg-gray-200 rounded-full dark:bg-gray-700 ring-4 ring-gray-300 dark:ring-gray-600"></p>
              <h1 class="w-70 h-2 mx-auto mt-6">Tashin Kavishan</h1>

              <p class="w-70 h-2 mx-auto mt-4">COO & Director</p>

              {/* <p class="w-70 h-2 mx-auto mt-4">University of Moratuwa</p> */}
            </div>


            <div class="flex flex-col items-center p-8">
              <p class="w-32 h-32 bg-gray-200 rounded-full dark:bg-gray-700 ring-4 ring-gray-300 dark:ring-gray-600"></p>
              <h1 class="w-70 h-2 mx-auto mt-6">Ashan Kodithuwakku</h1>

              <p class="w-70 h-2 mx-auto mt-4">CTO & Director</p>

              {/* <p class="w-70 h-2 mx-auto mt-4">University of Ruhuna</p> */}
            </div>

            <div class="flex flex-col items-center p-8">
              <p class="w-32 h-32 bg-gray-200 rounded-full dark:bg-gray-700 ring-4 ring-gray-300 dark:ring-gray-600"></p>
              <h1 class="w-70 h-2 mx-auto mt-6">Dinidu Kalpajee</h1>

              <p class="w-70 h-2 mx-auto mt-4">CMO & Director</p>

              {/* <p class="w-70 h-2 mx-auto mt-4">University of Westminster</p> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
