import React from "react";
import Image from "next/image";
import Link from "next/link";
const Nav = () => {
  return (
    <nav className="  bg-[#fef8e4] h-[10vh] w-screen px-5 py-2.5 sm:px-4 fixed z-20 flex justify-between items-center">
      <div className="flex justify-center">
        <Image src="/logo.png" height={150} width={200} />
      </div>
      <div className="flex md:order-2">
        <button
          type="button"
          className="mr-5 mt-3 block w-full rounded-lg bg-cyan-700 px-6 py-2 h-1/2 text-lg font-semibold text-white shadow-xl ring-cyan-700 ring-offset-2
                      transition
                      duration-300
                      ease-in-out
                      hover:bg-pink-400
                      focus:outline-none
                      focus:ring-2"
        >
          Book Now!
        </button>
        <button
          data-collapse-toggle="mobile-menu-4"
          type="button"
          className="inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
          aria-controls="mobile-menu-4"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="h-6 w-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
          <svg
            className="hidden h-6 w-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
      <div
        className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto"
        id="mobile-menu-4"
      >
        <ul className="mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium">
          <li>
            <Link href="#home">
              <a
                className=" text-lg text-gray-500 hover:text-pink-400
"
                aria-current="page"
              >
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href="#services">
              <a
                className=" text-lg text-gray-500 hover:text-pink-400
"
              >
                Services
              </a>
            </Link>
          </li>
          <li>
            <Link href="#about">
              <a
                className=" text-lg text-gray-500 hover:text-pink-400
"
              >
                About Us
              </a>
            </Link>
          </li>
          <li>
            <Link href="#contact">
              <a
                className=" text-lg text-gray-500 hover:text-pink-400
"
              >
                Contact
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
