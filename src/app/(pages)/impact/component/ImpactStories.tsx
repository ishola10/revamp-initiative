"use client";

import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import { impactStories } from "@/helpers/util";

const ImpactStories = () => {
  const [mediaIndex, setMediaIndex] = useState(
    impactStories.map(() => 0) 
  );

  const handleArrowClick = (index: number) => {
    setMediaIndex((prev) => {
      const newIndex = [...prev];
      newIndex[index] = (newIndex[index] + 1) % impactStories[index].media.length;
      return newIndex;
    });
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-10">
        <h2 className="text-3xl font-bold text-gray-900">
          Impact Stories of Underserved Nigerians
        </h2>
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          {impactStories.map((story, index) => (
            <div
              key={index}
              className="relative group rounded-lg overflow-hidden"
            >
              <div className="relative">
                {story.type === "video" ? (
                  <video
                  key={story.media[mediaIndex[index]]}
                  className="w-full h-[25rem] object-cover"
                  autoPlay
                  loop
                  muted
                >
                  <source src={story.media[mediaIndex[index]]} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                ) : (
                  <Image
                    src={story.media[mediaIndex[index]]}
                    alt={story.title}
                    width={500}
                    height={500}
                    className="w-full h-64 object-cover"
                  />
                )}

                <div className="absolute inset-0 bg-black bg-opacity-50" />

                <div className="absolute top-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-semibold">{story.title}</h3>
                  <p className="mt-2 text-sm">{story.description}</p>
                </div>
              </div>

              <div
                className={`relative p-4 text-gray-700 ${
                  story.type === "video" ? "bg-[#FBEEEE]" : "bg-[#ECF2F2]"
                }`}
              >
                <button
                  className="absolute -top-5 right-6 bg-[#FFC602] text-black p-3 rounded-full shadow-md hover:bg-yellow-600 transition"
                  onClick={() => handleArrowClick(index)} 
                >
                  <FaArrowRight size={18} />
                </button>

                <div className="mt-4 space-y-3">
                  {story.content.map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-gray-700 text-sm">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStories;