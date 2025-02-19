"use client";


import React, { useState, useEffect } from "react";
import Image from "next/image";

interface Testimonial {
  name: string;
  date: string;
  feedback: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Mrs Meimunat",
    date: "08/02/2025",
    feedback:
      "I was fortunate enough to work with them on a project aimed at supporting a community in need, and their dedication to extending help was evident every step of the way. Their team truly understands the power of design and how it can make an impact.",
    image: "/images/Rectangle 23.png",
  },
  {
    name: "John Doe",
    date: "15/01/2025",
    feedback:
      "An amazing organization! The impact they make is undeniable, and I'm grateful to have contributed to their initiatives.",
    image: "/images/Rectangle 23.png",
  },
  {
    name: "Sarah Ahmed",
    date: "22/12/2024",
    feedback:
      "Working with them was an eye-opening experience. Their passion and dedication are truly inspiring.",
    image: "/images/Rectangle 23.png",
  },
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white text-black py-16 px-6 text-center">
      <h2 className="text-3xl font-bold">Client Testimonials</h2>
      <p className="text-gray-600 max-w-2xl mx-auto mt-2">
        {testimonials[currentIndex].feedback}
      </p>

      <div className="flex items-center justify-center mt-6">
        <Image
          src={testimonials[currentIndex].image}
          alt={testimonials[currentIndex].name}
            width={48}
            height={48}
          className="w-12 h-12 rounded-full object-cover border-2 border-gray-300"
        />
        <div className="ml-3 flex items-center gap-2">
          <p className="font-semibold">{testimonials[currentIndex].name}</p>
          <p className="text-sm text-gray-500">{testimonials[currentIndex].date}</p>
        </div>
      </div>

      <div className="flex justify-center mt-4 space-x-2">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-black" : "bg-gray-300"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
