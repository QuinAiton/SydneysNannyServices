import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Nav = () => {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <nav class="bg-[#fef8e4] fixed w-screen top-0 z-20">
      <div class="max-w-8xl mx-auto px-4">
        <div class="flex justify-between">
          <div class="flex space-x-4">
            {/* <!-- logo --> */}
            <div>
              <a
                href="#"
                class="flex items-center px-2 text-gray-700 hover:text-gray-900"
              >
                <Image src="/logo.png" height={100} width={150} />
              </a>
            </div>

            {/* <!-- primary nav --> */}
            <div class="hidden md:flex items-center justify-between space-x-1">
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
          </div>

          {/* <!-- secondary nav --> */}
          <div class="hidden md:flex items-center space-x-1">
            <a href="#contact">
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
            </a>
          </div>

          {/* <!-- mobile button goes here --> */}
          <div class="md:hidden flex items-center">
            <button
              class="mobile-menu-button"
              onClick={() => setIsHidden(!isHidden)}
            >
              <svg
                class="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* <!-- mobile menu --> */}
      <div
        class={
          isHidden
            ? "mobile-menu hidden md:hidden"
            : "mobile-menu flex flex-col items-center content-center md:hidden"
        }
      >
        <ul className="mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium">
          <li className="text-center">
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
          <li className="text-center">
            <Link href="#services">
              <a
                className=" text-lg text-gray-500 hover:text-pink-400
"
              >
                Services
              </a>
            </Link>
          </li>
          <li className="text-center">
            <Link href="#about">
              <a
                className=" text-lg text-gray-500 hover:text-pink-400
"
              >
                About Us
              </a>
            </Link>
          </li>
          <li className="text-center">
            <Link href="#contact">
              <a
                className=" text-lg text-gray-500 hover:text-pink-400
"
              >
                Contact
              </a>
            </Link>
          </li>
          <li className="text-center">
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
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
