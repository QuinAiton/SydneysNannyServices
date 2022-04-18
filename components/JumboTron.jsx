import React from "react";
import Image from "next/image";
const JumboTron = () => {
  return (
    <div
      className=" w-screen min-h-[100vh] lg:bg-[url('/HomeBackground.png')] bg-no-repeat bg-contain bg-right lg:grid lg:grid-cols-2"
      id="home"
    >
      <div className="lg:hidden mt-[10vh]">
        <Image
          className="bg-cover bg-center"
          src="/mobileHome.jpg"
          height={500}
          width={700}
        />
      </div>
      <div className="w-full h-full row-span-2 mx-auto md:mt-0 mt-20 rounded-xl md:p-5 flex flex-col justify-center items-center">
        <h1 className="text-3xl mb-10 text-[#f472b6] ">
          Sydneys Nanny Services
        </h1>
        <h2 className="text-center md:text-xl lg:m-10  ">
          We are a childcare business located in Pemberton BC. We provide
          children with the trusting care they need, while ensuring safety and
          fun. Getting the children outdoors is a high priority for us as we
          believe it enhances cognitive abilities. We also believe in giving the
          children the freedom to tap into their creativity, by observing their
          interests and creating activities based around them. We focus on
          making each child feel warm and welcomed at all times.
        </h2>
        <a
          href="#services"
          className=" mt-10 md:mt-2 md:w-1/3 h-auto rounded-lg text-center bg-cyan-700 px-10 py-3 text-md font-semibold text-white shadow-xl ring-cyan-700 ring-offset-2 transition
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
  );
};

export default JumboTron;
