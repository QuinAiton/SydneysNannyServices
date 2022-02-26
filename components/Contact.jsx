import React from 'react';

const Contact = () => {
  return (
    <div
      className='flex min-h-screen w-full items-center justify-center'
      id='contact'
    >
      <div className='relative flex w-3/4 flex-col justify-around space-y-10  rounded-xl overflow-hidden bg-[#fef8e4] p-10 text-white shadow-lg md:flex-row md:space-x-1 md:space-y-0 sm:w-[90vw]'>
        <div className='absolute -left-12 bottom-14 z-0 h-28 w-28 rounded-full bg-white'></div>
        <div className='relative z-10 flex flex-col justify-between space-y-8'>
          <div>
            <h1 className='bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-4xl font-bold tracking-wide text-transparent'>
              Contact Information
            </h1>
          </div>
          <div className='flex flex-col space-y-6'>
            <div className='inline-flex items-center space-x-2'>
              <ion-icon
                name='call'
                className='md hydrated text-xl text-black'
                role='img'
                aria-label='call'
              ></ion-icon>
              <span className='text-black'>604-364-7484</span>
            </div>
            <div className='inline-flex items-center space-x-2'>
              <ion-icon
                name='mail'
                className='md hydrated text-xl text-black'
                role='img'
                aria-label='mail'
              ></ion-icon>
              <span className='text-black'>
                sydneysnannyservices@outlook.com
              </span>
            </div>
            <div className='inline-flex items-center space-x-2'>
              <ion-icon
                name='location'
                className='md hydrated text-xl text-black'
                role='img'
                aria-label='location'
              ></ion-icon>
              <span className='text-black'>
                109, Channel Drive, Point Pleasant, NJ
              </span>
            </div>
          </div>
          <div className='flex space-x-6 text-2xl text-teal-100'>
            <a
              href='#'
              className='transform transition ease-in-out hover:-translate-y-1 hover:text-black'
            >
              <ion-icon
                name='logo-github'
                role='img'
                className='md hydrated'
                aria-label='logo github'
              ></ion-icon>
            </a>
            <a
              href='#'
              className='transform transition ease-in-out hover:-translate-y-1 hover:text-black'
            >
              <ion-icon
                name='logo-linkedin'
                role='img'
                className='md hydrated'
                aria-label='logo linkedin'
              ></ion-icon>
            </a>
            <a
              href='#'
              className='transform transition ease-in-out hover:-translate-y-1 hover:text-black'
            >
              <ion-icon
                name='logo-twitter'
                role='img'
                className='md hydrated'
                aria-label='logo twitter'
              ></ion-icon>
            </a>
            <a
              href='#'
              className='transform transition ease-in-out hover:-translate-y-1 hover:text-black'
            >
              <ion-icon
                name='logo-instagram'
                role='img'
                className='md hydrated'
                aria-label='logo instagram'
              ></ion-icon>
            </a>
          </div>
        </div>
        <div className='relative w-auto'>
          <div className='absolute -right-24 -bottom-24 z-0 h-40 w-60 rounded-full bg-white'></div>
          <div className='absolute -left-32 -top-20 z-0 h-44 w-44 rounded-full bg-white'></div>
          <div className='relative z-10 rounded-xl bg-white p-8 text-gray-600 shadow-xl md:w-150'>
            <form action='' className='flex flex-col space-y-6 py-3 w-auto '>
              <div className='relative  rounded-md border-[2px] outline-gray-500'>
                <input
                  type='text'
                  name='name'
                  placeholder='Full Name '
                  className='block w-full appearance-none rounded-md border-none bg-transparent p-2 shadow-inner focus-within:border-teal-400  focus:outline-none'
                />
              </div>
              <div className='relative  rounded-md border-[2px] outline-gray-500'>
                <input
                  type='email'
                  name='email'
                  placeholder=' Email'
                  className='block w-full appearance-none rounded-md bg-transparent p-2 shadow-inner focus-within:border-teal-400  focus:outline-none'
                />
              </div>
              <div className='relative  rounded-md border-[2px] outline-gray-500 '>
                <textarea
                  name='msg'
                  rows='6'
                  placeholder=' Message'
                  className='block w-full resize-none appearance-none rounded-md border-none bg-transparent p-2 shadow-inner focus-within:border-teal-400 focus:outline-none'
                ></textarea>
              </div>
              <button className='inline-block self-end rounded-lg bg-cyan-700 px-6 py-2 text-sm font-bold uppercase text-white ring-cyan-700 ring-offset-2 transition duration-300 ease-in-out hover:bg-cyan-600 focus:outline-none focus:ring-2'>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
 