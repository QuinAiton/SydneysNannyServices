import React from "react";

const Services = () => {
  return (
    <section
      id="services"
      className="mx-auto max-w-full min-h-[120vh] px-6 flex flex-col items-center justify-center bg-[#fef8e4]"
    >
      <h1 className="text-center text-4xl font-medium leading-snug tracking-wider text-pink-400">
        Services
      </h1>
      <p className="mt-2 px-6 text-center text-lg text-gray-700">
        Looking for safe reliable child care that doesn't break the bank? Lets
        connect.
      </p>
      <div className="mx-auto mt-4 h-1 w-24 rounded bg-pink-400 opacity-75"></div>

      <div className="mx-auto my-3 max-w-full md:max-w-6xl md:px-8">
        <div className="relative flex flex-col items-center md:flex-row">
          <div className="relative z-0 my-8 w-11/12 max-w-sm rounded-lg shadow-lg sm:my-5 sm:w-3/5 md:-mr-4 lg:w-1/3">
            <div className="overflow-hidden rounded-lg bg-white text-black shadow-2xl">
              <div className="sm:text-md mx-auto mt-2 block max-w-sm px-8 text-left text-sm text-black lg:px-6">
                <h1 className="p-3 pb-0 text-center text-lg font-medium uppercase tracking-wide">
                  Overnight
                </h1>
                <div className="sm:text-md mx-auto mt-2 block max-w-sm px-8 text-center text-sm text-black lg:px-6">
                  Overnight Stays Available!
                </div>
              </div>

              <div className="mt-3 flex flex-wrap px-6">
                <ul>
                  <li className="flex items-center">
                    <div className=" rounded-full fill-current p-2 text-green-700">
                      <svg
                        className="h-6 w-6 align-middle"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                    </div>
                    <span className="ml-3 text-lg text-gray-700">
                      Accomadation Required
                    </span>
                  </li>
                  <li className="flex items-center">
                    <div className=" rounded-full fill-current p-2 text-green-700">
                      <svg
                        className="h-6 w-6 align-middle"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                    </div>
                    <span className="ml-3 text-lg text-gray-700">
                      Additional Cost
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <a
                  href="#contact"
                  className=" flex items-center p-8  uppercase"
                >
                  <button
                    className="mt-3 block w-full 
	rounded-lg bg-cyan-700 px-6 py-3 
	text-lg font-semibold text-white shadow-xl ring-cyan-700        ring-offset-2
                      transition
                      duration-300
                      ease-in-out
                      hover:bg-pink-400
                      focus:outline-none
                      focus:ring-2"
                  >
                    Inquire
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="relative z-10 my-8 w-full max-w-md rounded-lg bg-white shadow-2xl sm:my-5 sm:w-2/3 lg:w-1/3">
            <div className="rounded-t-lg bg-cyan-700 py-4 text-center text-sm font-semibold uppercase leading-none tracking-wide text-white">
              Most Popular
            </div>
            <h1 className="p-3 pb-0 text-center text-lg font-medium uppercase tracking-wide">
              Daily
            </h1>
            <div className="sm:text-md mx-auto mt-2 block max-w-sm px-8 text-center text-sm text-black lg:px-6">
              Daily booking offers everything you and your child needs so that
              you can carry out your day stress free!
            </div>
            <div className="mt-3 flex justify-start pl-12 sm:justify-start">
              <ul>
                <li className="flex items-center">
                  <div className="rounded-full fill-current p-2 text-green-700">
                    <svg
                      className="h-6 w-6 align-middle"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <span className="ml-3 text-lg text-gray-700">
                    10 hour maximum
                  </span>
                </li>
                <li className="flex items-center">
                  <div className=" rounded-full fill-current p-2 text-green-700">
                    <svg
                      className="h-6 w-6 align-middle"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <span className="ml-3 text-lg text-gray-700">
                    outdoor activites
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <a href="#contact" className=" flex items-center p-8  uppercase">
                <button
                  className="mt-3 block w-full 
	rounded-lg bg-cyan-700 px-6 py-3 
	text-lg font-semibold text-white shadow-xl ring-cyan-700        ring-offset-2
                      transition
                      duration-300
                      ease-in-out
                      hover:bg-pink-400
                      focus:outline-none
                      focus:ring-2"
                >
                  Inquire
                </button>
              </a>
            </div>
          </div>
          <div className="relative z-0 my-8 w-11/12 max-w-sm rounded-lg shadow-lg sm:my-5 sm:w-3/5 md:-ml-4 lg:w-1/3">
            <div className="overflow-hidden rounded-lg bg-white text-black shadow-2xl">
              <h1 className="p-3 pb-0 text-center text-lg font-medium uppercase tracking-wide">
                Dog Sitting
              </h1>
              <div className="sm:text-md mx-auto mt-2 block max-w-sm px-8 text-center text-sm text-black lg:px-6">
                We Love Dog sitting equally as much as we love watching
                children!
              </div>
              <div className="mt-3 flex flex-wrap px-6">
                <ul>
                  <li className="flex items-center">
                    <div className=" rounded-full fill-current p-2 text-green-700">
                      <svg
                        className="h-6 w-6 align-middle"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                    </div>
                    <span className="ml-3 text-lg text-gray-700">
                      Dog walking
                    </span>
                  </li>
                  <li className="flex items-center">
                    <div className=" rounded-full fill-current p-2 text-green-700">
                      <svg
                        className="h-6 w-6 align-middle"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                    </div>
                    <span className="ml-3 text-lg text-gray-700">Daily</span>
                  </li>
                </ul>
              </div>

              <div>
                <a href="#contact" className="flex items-center p-8  uppercase">
                  <button
                    className="mt-3 block w-full 
	rounded-lg bg-cyan-700 px-6 py-3 
	text-lg font-semibold text-white shadow-xl ring-cyan-700        ring-offset-2
                      transition
                      duration-300
                      ease-in-out
                      hover:bg-pink-400
                      focus:outline-none
                      focus:ring-2"
                  >
                    Inquire
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
