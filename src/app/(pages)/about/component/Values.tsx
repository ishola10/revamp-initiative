import React from "react";
import { FaHandHoldingHeart, FaGlobeAmericas, FaStar, FaHome } from "react-icons/fa";

const values = [
  {
    title: "Inclusivity",
    description: "We believe in creating a world where everyone feels valued and respected, regardless of their background, abilities, or circumstances.",
    icon: <FaHome className="text-red-500 text-4xl" />,
  },
  {
    title: "Integrity",
    description: "We are committed to honesty, transparency, and accountability in everything we do, building trust with those we serve and our supporters.",
    icon: <FaStar className="text-orange-500 text-4xl" />,
  },
  {
    title: "Collaboration",
    description: "We work hand-in-hand with volunteers, partners, and communities, knowing that together we can achieve more than we ever could alone.",
    icon: <FaGlobeAmericas className="text-blue-500 text-4xl" />,
  },
  {
    title: "Compassion",
    description: "We approach every individual and community with empathy, understanding their unique needs and challenges. Our actions are rooted in kindness and a genuine desire to make a difference.",
    icon: <FaHandHoldingHeart className="text-pink-500 text-4xl" />,
  },
];

const Values = () => {
  return (
    <section className="py-16 px-6 md:px-16 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-10 text-center">The values we live by</h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {values.map((value, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className="p-3 bg-gray-100 rounded-lg">{value.icon}</div>
            <div>
              <h3 className="text-xl font-semibold text-[#1A1A1A]">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Values;
