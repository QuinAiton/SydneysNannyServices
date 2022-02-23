import React from 'react';
import Image from 'next/image';
import childpaintimage from '../public/childPainting.jpg';
const JumboTron = () => {
  return (
    <div>
      <div className='relative h-[350px] w-screen'>
        <Image
          layout='fill'
          objectFit='cover'
          quality={100}
          src={childpaintimage}
          alt={'child painting'}
        />
      </div>

        <h2 class="text-2xl leading-9 font-bold tracking-tight text-black sm:text-2xl sm:leading-10 text-center">
            Start studying with us
        </h2>
      <div class='mt-8 flex justify-center'>
        <div class='inline-flex rounded-md bg-white shadow'>
          <a href='#' class='py-2 px-6 font-bold text-gray-700'>
            Start
          </a>
        </div>
      </div>
    </div>
  );
};

export default JumboTron;
