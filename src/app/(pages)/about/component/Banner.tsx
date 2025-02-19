import React from 'react';
import { FaProjectDiagram, FaHandHoldingUsd, FaUsers, FaDonate } from 'react-icons/fa';
import Image from 'next/image';


const AboutBanner = () => {
  return (
    <div className="bg-gradient-to-b from-[#FFF4B5] to-white text-center py-12 px-4">
      <h5 className="text-sm text-gray-600 uppercase tracking-wide">ABOUT US</h5>
      <h1 className="text-3xl md:text-5xl font-bold text-[#1A1A1A] mt-2">
        Encouraging Creativity for Social <br className="hidden md:block" /> Impact
      </h1>

      <div className="mt-6 flex justify-center">
        <Image
          src="/image/video.png"
          alt="Community Engagement"
          width={800}
          height={500}
          className="w-full max-w-6xl object-cover rounded-md shadow-md"
        />
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-16 text-gray-800">
        <div className="flex flex-col items-center">
          <FaProjectDiagram className="text-4xl text-[#FFC602]" />
          <p className="text-xl md:text-2xl font-bold mt-2">1.2k+</p>
          <p className="text-sm">Projects Completed</p>
        </div>
        <div className="flex flex-col items-center">
          <FaHandHoldingUsd className="text-4xl text-[#FFC602]" />
          <p className="text-xl md:text-2xl font-bold mt-2">100</p>
          <p className="text-sm">Monthly Donate</p>
        </div>
        <div className="flex flex-col items-center">
          <FaUsers className="text-4xl text-[#FFC602]" />
          <p className="text-xl md:text-2xl font-bold mt-2">480</p>
          <p className="text-sm">Partners Worldwide</p>
        </div>
        <div className="flex flex-col items-center">
          <FaDonate className="text-4xl text-[#FFC602]" />
          <p className="text-xl md:text-2xl font-bold mt-2">1.2m</p>
          <p className="text-sm">Donations Received</p>
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;
