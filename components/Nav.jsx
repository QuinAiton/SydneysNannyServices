import React from 'react';
import Image from 'next/image';
import logo2 from '../public/logo2.png';
import Link from 'next/link'
const Nav = () => {
  return (
    <nav className='  bg-[#fef8e4] px-2 py-2.5 sm:px-4 fixed z-20 w-screen'>
      <div className='container mx-auto flex flex-wrap items-center justify-between'>
        <div>
          <div className='flex justify-center'>
            <Image src={logo2} height={40} width={40} />
            <span className=' self-end whitespace-nowrap text-lg font-semibold text-black'>
              SNS
            </span>
          </div>
          <span className='text-sm'> Sydney's Nanny Service</span>
        </div>
        <div className='flex md:order-2'>
          <button
            type='button'
            className='focus:ring-blue-300md:mr-0 mr-3 rounded-lg bg-black px-8 py-2.5 text-center text-sm font-medium text-white hover:bg-pink-400 focus:ring-4'
          >
            Book Now!
          </button>
          <button
            data-collapse-toggle='mobile-menu-4'
            type='button'
            className='inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden'
            aria-controls='mobile-menu-4'
            aria-expanded='false'
          >
            <span className='sr-only'>Open main menu</span>
            <svg
              className='h-6 w-6'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                clipRule='evenodd'
              ></path>
            </svg>
            <svg
              className='hidden h-6 w-6'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                clipRule='evenodd'
              ></path>
            </svg>
          </button>
        </div>
        <div
          className='hidden w-full items-center justify-between md:order-1 md:flex md:w-auto'
          id='mobile-menu-4'
        >
          <ul className='mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium'>
            <li>
              <Link href='#home'>
                <a
                  className=' text-lg text-gray-500 hover:text-gray-700'
                  aria-current='page'
                >
                  Home
                </a>
              </Link>
            </li>
            <li>
              <Link href='#about'>
                <a className=' text-lg text-gray-500 hover:text-gray-700'>
                  About Us
                </a>
              </Link>
            </li>
            <li>
              <Link href='#services'>
                <a className=' text-lg text-gray-500 hover:text-gray-700'>
                  Services
                </a>
              </Link>
            </li>
            <li>
              <Link href='#contact'>
                <a className=' text-lg text-gray-500 hover:text-gray-700'>
                  Contact
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
