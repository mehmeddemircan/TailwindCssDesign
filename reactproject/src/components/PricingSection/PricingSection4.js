import React, { Fragment } from 'react'

const PricingSection4 = () => {
  return (
   <Fragment>
    <div class="lg:flex items-center justify-between p-6 md:p-12 dark:bg-gray-700">
    <div class="lg:w-1/2 w-full">
        <p class="text-base leading-4 text-gray-600 dark:text-gray-200">Choose your plan</p>
        <h1 role="heading" class="md:text-5xl text-3xl font-bold leading-10 mt-3 text-gray-800 dark:text-white">Our
            pricing plan</h1>
        <p role="contentinfo" class="text-base leading-5 mt-5 text-gray-600 dark:text-gray-200">We’re working on a suit
            of tools to make managing complex systems easier, for everyone for free. we can’t wait to hear what you
            think
        </p>
        <div class="w-56">
            <button onclick="toggleIt()" class="bg-gray-100 dark:bg-gray-800 shadow rounded-full flex items-center mt-10 rounded-full">
                <div class="bg-gray-100 dark:bg-gray-800 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none text-base leading-none text-gray-600 dark:text-gray-200 rounded-full py-4 px-6 mr-1" id="monthly">Monthly</div>
                <div class="bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none text-base leading-none text-white rounded-full py-4 px-6" id="annually">Annually</div>
            </button>
        </div>
    </div>
    <div class="xl:w-1/2 lg:w-7/12 relative w-full lg:mt-0 mt-12 md:px-8" role="list">
        <img src="https://i.ibb.co/0n6DSS3/bgimg.png" class="absolute w-full -ml-12 mt-24" alt="background circle images" />
       
        <div role="listitem" class="bg-white dark:bg-gray-800 cursor-pointer shadow rounded-lg mt-3 flex relative z-30">
            <div class="w-2.5 h-auto bg-indigo-700 rounded-tl-md rounded-bl-md"></div>
            <div class="w-full p-8">
                <div class="md:flex items-center justify-between">
                    <h2 class="text-2xl font-semibold leading-6 text-gray-800 dark:text-white">Starter</h2>
                    <p class="text-2xl md:mt-0 mt-4 font-semibold leading-6 text-gray-800 dark:text-white">
                        FREE<span class="font-normal text-base">/mo</span></p>
                </div>
                <p class="md:w-80 text-base leading-6 mt-4 text-gray-600 dark:text-gray-200">Unlimited products features
                    and dedicated support channels
                </p>
             
            </div>
        </div>
        <div role="listitem" class="bg-white dark:bg-gray-800 cursor-pointer shadow rounded-lg mt-3 flex relative z-30">
            <div class="w-2.5 h-auto bg-indigo-700 rounded-tl-md rounded-bl-md"></div>
            <div class="w-full p-8">
                <div class="md:flex items-center justify-between">
                    <h2 class="text-2xl font-semibold leading-6 text-gray-800 dark:text-white">Team</h2>
                    <p class="text-2xl md:mt-0 mt-4 font-semibold leading-6 text-gray-800 dark:text-white">
                        $18<span class="font-normal text-base">/mo</span></p>
                </div>
                <p class="md:w-80 text-base leading-6 mt-4 text-gray-600 dark:text-gray-200">Unlimited products features
                    and dedicated support channels
                </p>
                <div class="flex flex-row justify-end items-center w-full">
                 <a
                href="#"
                className="mt-10 block  rounded-3xl bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get access
              </a>
            </div>
            </div>
        </div>
        <div role="listitem" class="bg-white dark:bg-gray-800 cursor-pointer shadow rounded-lg mt-3 flex relative z-30">
            <div class="w-2.5 h-auto bg-indigo-700 rounded-tl-md rounded-bl-md"></div>
            <div class="w-full p-8">
                <div class="md:flex items-center justify-between">
                    <h2 class="text-2xl font-semibold leading-6 text-gray-800 dark:text-white">Team</h2>
                    <p class="text-2xl md:mt-0 mt-4 font-semibold leading-6 text-gray-800 dark:text-white">
                        $18<span class="font-normal text-base">/mo</span></p>
                </div>
                <p class="md:w-80 text-base leading-6 mt-4 text-gray-600 dark:text-gray-200">Unlimited products features
                    and dedicated support channels
                </p>
                <div class="flex flex-row justify-end items-center w-full">
                 <a
                href="#"
                className="mt-10 block  rounded-3xl bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get access
              </a>
            </div>
            </div>
        </div>
       
    </div>
</div>
   </Fragment>
  )
}

export default PricingSection4