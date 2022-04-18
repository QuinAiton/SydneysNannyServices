import React from "react";

const Contact = () => {
  return (
    <div
      className="flex flex-col min-h-screen w-full items-center justify-center bg-gradient-to-t from-[#f0f0ee] to-[#fef8e4]   md:bg-[#fef8e4]"
      id="contact"
    >
      <div className="relative flex md:w-[70vw] flex-col justify-around space-y-5 overflow-hidden rounded-xl bg-[#fef8e4] md:bg-white p-10 text-white sm:w-[90vw] md:flex-row md:space-x-1 md:space-y-0">
        <div className="absolute -left-12 bottom-14 z-0 h-28 w-28 rounded-full bg-white"></div>
        <div className="relative z-10 flex flex-col justify-center space-y-8">
          <div>
            <h1 className="bg-gradient-to-r from-pink-400 to-teal-400 bg-clip-text text-3xl font-bold tracking-wide text-transparent text-center md:justify-self-start">
              Contact Information
              <div className="mx-auto h-1 w-[40vw] md:w-[10vh] rounded bg-indigo-200 opacity-75" />
            </h1>
          </div>
          <div className="flex flex-col space-y-6 items-center ">
            <div className="inline-flex items-center space-x-2 ">
              <ion-icon
                name="call"
                className="md hydrated text-xl text-black"
                role="img"
                aria-label="call"
              ></ion-icon>
              <span className="text-black w-full text-center md:text-left">
                604-364-7484
              </span>
            </div>
            <div className="inline-flex items-center space-x-2">
              <ion-icon
                name="mail"
                className="md hydrated text-xl text-black"
                role="img"
                aria-label="mail"
              ></ion-icon>
              <span className="text-black  w-full text-center md:text-left">
                sydneysnannyservices@outlook.com
              </span>
            </div>
            <div className="inline-flex items-center space-x-2">
              <ion-icon
                name="location"
                className="md hydrated text-xl text-black"
                role="img"
                aria-label="location"
              ></ion-icon>
              <span className="text-black w-full text-center md:text-left">
                Pemberton, BC, Canada
              </span>
            </div>
          </div>
        </div>
        <div className="relative w-auto">
          <div className="absolute -right-24 -bottom-24 z-0 h-40 w-60 rounded-full bg-white"></div>
          <div className="absolute -left-32 -top-20 z-0 h-44 w-44 rounded-full bg-white"></div>
          <div className="relative z-10 rounded-xl bg-white p-8 text-gray-600 shadow-xl md:w-[40vw]">
            <form action="" className="flex w-auto flex-col space-y-6 py-3 ">
              <div className="relative  rounded-md border-[2px] outline-gray-500">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name "
                  className="block w-full appearance-none rounded-md border-none bg-transparent p-2 shadow-inner focus-within:border-teal-400  focus:outline-none"
                  required
                />
              </div>
              <div className="relative  rounded-md border-[2px] outline-gray-500">
                <input
                  type="email"
                  name="email"
                  placeholder=" Email"
                  className="block w-full appearance-none rounded-md bg-transparent p-2 shadow-inner focus-within:border-teal-400  focus:outline-none"
                  required
                />
              </div>
              <div className="relative  rounded-md border-[2px] outline-gray-500 ">
                <textarea
                  name="msg"
                  rows="6"
                  placeholder=" Message"
                  className="block w-full resize-none appearance-none rounded-md border-none bg-transparent p-2 shadow-inner focus-within:border-teal-400 focus:outline-none"
                  required
                ></textarea>
              </div>
              <button className="inline-block self-end rounded-lg bg-cyan-700 px-6 py-2 text-sm font-bold uppercase text-white ring-cyan-700 ring-offset-2 transition duration-300 ease-in-out hover:bg-pink-400 focus:outline-none focus:ring-2">
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
