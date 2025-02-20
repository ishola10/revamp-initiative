import React from 'react';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import Link from 'next/link';

const Banner = () => {
  return (
    <div className="bg-black px-6 md:px-10 py-24 text-white">
      <div className="container mx-auto text-center md:text-left">
        <div className="flex flex-col gap-4 mb-8 max-w-2xl mx-auto md:mx-0">
          <h1 className="text-3xl md:text-6xl font-bold font-jakartaSans bg-gradient-to-r from-white to-[#FFF4B5] text-transparent bg-clip-text">
            Welcome To The World of Revamp Initiatives
          </h1>
          <p className="text-[#FDFAEE] text-sm md:text-base">
            Together we can make a positive change through creativity.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-4">
          <button className="bg-[#FFC602]  px-4 py-2 rounded text-black text-sm md:text-base">
            <Link href="/donate" className='flex items-center gap-2'>Donate Now <FaArrowRight /></Link>
          </button>
          <div className="flex gap-4">
            <button className="bg-[#1A202C] border flex items-center gap-2 p-2 rounded-full">
              <FaArrowLeft color="white" />
            </button>
            <button className="bg-[#FFC602] border flex items-center gap-2 p-2 rounded-full">
              <FaArrowRight color="black" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6 mt-10 md:mt-14 items-center justify-center md:justify-start">
        <p className="text-[#FDFAEE] text-sm">
          <span className="text-[#FD7E14] pr-2 text-2xl">N1, 284 528</span> Donation
        </p>
        <p className="text-[#FDFAEE] text-sm">
          <span className="text-[#FD7E14] pr-2 text-2xl">12, 460</span> People Helped
        </p>
      </div>
    </div>
  );
};

export default Banner;
