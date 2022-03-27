import React from "react";
import Image from "next/image";
const JumboTron = () => {
  return (
    <div
      className=" w-screen min-h-screen grid grid-rows-3 bg-secondary"
      id="home"
    >
      <div className="w-screen md:row-span-2 bg-[url('/childPainting.svg')] bg-no-repeat bg-contain md:bg-cover bg-top">
        <h2 className="pt-[30vh] md:pt-[50vh] text-center text-2xl font-bold leading-9 tracking-tight text-black sm:text-2xl sm:leading-10">
          Childcare you can trust
        </h2>
        <div className="flex justify-center pt-10">
          <div className="inline-flex rounded-md bg-white shadow">
            <a
              href="#services"
              className=" block w-full rounded-lg bg-cyan-700 px-10 py-3 text-lg font-semibold text-white shadow-xl ring-cyan-700 ring-offset-2 transition
                      duration-300
                      ease-in-out
                      hover:bg-pink-400
                      focus:outline-none
                      focus:ring-2
                      "
            >
              View Our Services
            </a>
          </div>
        </div>
      </div>
      <div className="w-full h-auto row-span-2 mx-auto md:mt-0 mt-20 rounded-xl md:p-5">
        <h2 className="text-left text-md m-10">
          We are a childcare business located in Pemberton BC. We provide
          children with the trusting care they need, while ensuring safety and
          fun. Getting the children outdoors is a high priority for us as we
          believe it enhances cognitive abilities. We also believe in giving the
          children the freedom to tap into their creativity, by observing their
          interests and creating activities based around them. We focus on
          making each child feel warm and welcomed at all times.
        </h2>
      </div>
    </div>
  );
};

export default JumboTron;
