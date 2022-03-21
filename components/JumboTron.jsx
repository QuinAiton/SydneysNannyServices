import React from "react";
import Image from "next/image";
import childpaintimage from "../public/childPainting.svg";
const JumboTron = () => {
  return (
    <div className="h-screen w-screen bg-[#fef8e4]" id="home">
      <div className="relative h-[70vh] w-screen ">
        <Image
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          quality={100}
          src={childpaintimage}
          alt={"child painting"}
        />
        <h2 className=" relative pt-[45vh] text-center text-2xl font-bold leading-9 tracking-tight text-black sm:text-2xl sm:leading-10">
          Childcare you can trust
        </h2>
        <div className="justify-cente relative flex justify-center pt-5">
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
      <div className="mx-auto mt-20 h-auto w-[70vw] rounded-xl bg-white p-10 shadow-xl ">
        <h2 className="text-left text-xl m-10">
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
