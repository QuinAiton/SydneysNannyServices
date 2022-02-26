import React from 'react';
import Image from 'next/image';
import childpaintimage from '../public/childPainting.jpg';
const JumboTron = () => {
  return (
    <div className='h-screen w-screen bg-[#fef8e4]' id='home'>
      <div className='relative h-[50vh] w-screen'>
        <Image
          layout='fill'
          objectFit='cover'
          quality={100}
          src={childpaintimage}
          alt={'child painting'}
        />
        <h2 className=' relative pt-[25vh] text-center text-2xl font-bold leading-9 tracking-tight text-black sm:text-2xl sm:leading-10'>
          Childcare you can trust 
        </h2>
        <div className='justify-cente relative flex justify-center pt-5'>
          <div className='inline-flex rounded-md bg-white shadow'>
            <a
              href='#'
              className='py-2 px-8 font-bold text-gray-700 hover:rounded hover:bg-pink-400 hover:text-white'
            >
              Services
            </a>
          </div>
        </div>
      </div>
      <div className='bg-white h-auto w-[70vw] mx-auto mt-20 rounded-xl shadow-xl p-10 '>
        <h2 className='text-center text-xl'>
          We are a childcare buisness located in Pemberton BC <br/>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem sunt, optio aperiam nihil aut ipsa eaque esse unde perferendis suscipit quia commodi harum ab rerum necessitatibus corrupti dolores, animi obcaecati?
        </h2>
      </div>
    </div>
  );
};

export default JumboTron;
