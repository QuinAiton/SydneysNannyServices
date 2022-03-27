import React from "react";
import profilePic from "../public/profilePic.png";
import Image from "next/image";
const About = () => {
  return (
    <div
      className="flex w-screen min-h-screen flex-wrap items-center justify-center bg-primary rounded-xl "
      id="about"
    >
      <div className="container grid md:items-center  my-20 transform rounded-lg  bg-white duration-200 sm:w-[90vw] md:w-[90vw] lg:w-[50vw] xl:w-[50vw]">
        <h1 className="mb-10 text-center text-4xl font-medium leading-snug tracking-wider text-pink-400 pt-10">
          Who Am I?
          <div className="mx-auto h-1 w-24 rounded bg-pink-400 opacity-75" />
        </h1>
        <div className="flex mx-auto w-[90%] md:w-full justify-center">
          <Image
            objectFit="fill"
            className=" rounded-[50%] mx-auto"
            src={profilePic}
            alt="Profile Picture of Sydney"
          />
        </div>
        <div className="my-10 h-auto px-5 md:px-14 text-center">
          <h2 className="text-3xl font-bold text-pink-400">Sydney Hll</h2>
          <p className="mt-2 text-gray-400">@linkedin profile here</p>
          <p className="mt-2 text-md text-gray-600">
            My name is Sydney Hill and I am currently living in Pemberton, BC.
            In the spring of 2021, I graduated from Simon Fraser University with
            a bachelor of general studies in Education, with the end goal of
            becoming an elementary school teacher. I have a triple minor in
            Early Learning, Curriculum and Development, and Geography. I have
            worked at Early Childhood Education centre’s and prior to this I
            worked as a lifeguard/swim instructor for 7 years. I am certified
            with my standard first aid CPR C/AED, national lifeguard service,
            and water safety instructor. I am constantly looking to gain more
            knowledge about the world around me so I can become the best
            educator and mentor I can be. When I am not surrounded by children,
            I love being outside, mountain biking, hiking and swimming in the
            summer and skiing in the winter.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
