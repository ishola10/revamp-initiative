import React from "react";
import Image from "next/image";

const JoinCommunity = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center md:text-left">
          Join our community!
        </h2>
        <p className="mt-2 text-gray-600 text-center md:text-left">
          Our community is a vibrant team.
        </p>

        <div className="mt-6 grid gap-6 max-w-[20rem] mx-auto md:mx-0">
          {/* Volunteer Card */}
          <div className="bg-white shadow-md rounded-lg p-6 border flex flex-col items-start">
            <Image
              src="/image/icons/message.png"
              alt="Mail Icon"
              width={32}
              height={32}
              className="w-8 h-8 mb-4"
            />
            <h4 className="text-lg font-semibold text-gray-900">
              Be a Volunteer
            </h4>
            <p className="text-gray-600 mt-2">
              Write to us if you have any difficulties in working with the
              service.
            </p>
            <button className="mt-4 bg-gray-900 text-white text-sm font-medium py-2 px-4 rounded-md">
              revampinitiatives@gmail.com
            </button>
          </div>
        </div>
      </div>

      <div className="relative flex flex-col items-center md:items-start">
        <Image
          src="/image/image (3).png"
          alt="Community"
          width={500}
          height={500}
          className="rounded-lg shadow-md w-full"
        />

        <div className="absolute md:top-[7.5rem] md:-left-32 bg-white shadow-lg rounded-lg p-6 border flex flex-col items-start w-[80%] md:w-[60%] 
        top-auto left-auto md:transform-none md:absolute bottom-[-40px] md:bottom-auto mx-auto md:mx-0">
          <Image
            src="/image/icons/call.png"
            alt="Call Icon"
            width={32}
            height={32}
            className="w-8 h-8 mb-4"
          />
          <h4 className="text-lg font-semibold text-gray-900">Call us</h4>
          <p className="text-gray-600 mt-2">
            We&apos;re here to help with all your needs and questions about
            the Finder services.
          </p>
          <button className="mt-4 bg-gray-900 text-white text-sm font-medium py-2 px-4 rounded-md">
            09090009999
          </button>
        </div>
      </div>
    </div>
  );
};

export default JoinCommunity;
