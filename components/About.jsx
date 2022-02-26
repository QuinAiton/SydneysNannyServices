import React from 'react';
import profilePic from '../public/profilePic.png';
import Image from 'next/image';
const About = () => {
  return (
    <div
      className='flex w-screen  flex-wrap   items-center justify-center bg-[#fef8e4] '
      id='about'
    >
      <div className='xl:w-[50vw] easy-in-out container my-20    transform  bg-white    shadow-lg   duration-200 sm:w-[90vw] md:w-[90vw] lg:w-2/3 rounded-md'>
        <h1 className='mb-10 text-center text-4xl font-medium leading-snug tracking-wider text-black'>
          Who Am I?
        </h1>
        <div className=' flex  h-[450px] justify-center'>
          <Image
            className='w-full rounded-[50%] '
            src={profilePic}
            height={450}
            width={450}
            alt='Profile Picture of Sydney'
          />
        </div>
        <div className='my-10 h-auto px-14 text-center'>
          <h2 className='text-3xl font-bold text-gray-800'>Sydney Hll</h2>
          <p className='mt-2 text-gray-400'>@sydneyhill14</p>
          <p className='mt-2 text-gray-600'>
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
