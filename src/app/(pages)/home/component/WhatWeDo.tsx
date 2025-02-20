"use client";

import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Card from "../../../../components/common/Card";

const cardData = [
  {
    id: 1,
    title: "Esther Yakubu: A means for survival",
    description:
      "For many, these bottles are just trash, but for Esther Yakubu, they are a means of survival.",
    image: "/image/img2.png",
  },
  {
    id: 2,
    title: "Water Scarcity Turns into Opportunity for Kado Estate Resident",
    description:
      "Meet Biliyaminu, who has turned a community’s struggle into a means of livelihood.",
    image: "/image/img3.png",
  },
  {
    id: 3,
    title: "IDP Project",
    description:
      "Our IDP project is centered on creating opportunities and amplifying the voices of individuals and families living in IDP camps across Nigeria.",
    image: "/images/Rectangle 23.png",
  },
  {
    id: 4,
    title: "Revamp Fun Day",
    description:
      "Revamp Fun Day is one of our flagship initiatives designed to bring joy and inspiration to underserved children in Nigeria.",
    image: "/image/img1.png",
  },
  {
    id: 5,
    title: "Walk for Impact",
    description:
      "Walk for impact is a unique initiative by revamp initiatives that seeks to bridge the gap between Nigerian past and present through storytelling and engagement",
    image: "/images/Rectangle 23.png",
  },
  {
    id: 6,
    title: "Westfield Outreach",
    description:
      "With the support of Revamp Initiatives, Westfield GCL donated N50,000 to over 100 underserved individuals.",
    image: "/image/Rectangle 19.png",
  },
];

const WhatWeDo: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = () => {
    if (currentIndex < cardData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevCard = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="bg-gray-900 text-white py-16 px-6">
      <div className="text-center">
        <p className="text-yellow-400 uppercase font-bold">What We Do</p>
        <h2 className="text-3xl font-bold my-2">Making a Positive Impact</h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Serving others is not a job, it&apos;s a calling that speaks to the
          essence of who we are and the world we want to create.
        </p>
      </div>

      <div className="relative flex items-center justify-center mt-8">
        <div className="w-full max-w-6xl overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {cardData.map((card) => (
              <Card
                key={card.id}
                title={card.title}
                description={card.description}
                image={card.image}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto w-1/2">
        <div className="flex gap-6 justify-center mt-6">
          <button
            onClick={prevCard}
            className="bg-[#FFC602] flex items-center gap-2 px-2 py-2 rounded-full text-black"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={nextCard}
            className="bg-[#FFC602] flex items-center gap-2 px-2 py-2 rounded-full text-black"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
