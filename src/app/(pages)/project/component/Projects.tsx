"use client";


import React, { useState, useEffect } from "react";
import Image from "next/image";

const projects = [
  {
    title: "Revamp Fun Day",
    description:
      "Revamp Fun Day is one of our flagship initiatives designed to bring joy and inspiration to underserved children in Nigeria.",
    images: [
      "/image/image (3).png",
      "/image/Funday 3.jpg",
      "/image/funday/Funday 1.jpg",
      "/image/funday/Funday 4.jpg",
      "/image/funday/Funday 5.jpg",
    ],
  },
  {
    title: "IDP Project",
    description:
      "At Revamp Initiatives, our IDP project is centered on creating opportunities and amplifying the voices of individuals and families living in IDP camps across Nigeria.",
    images: [
      "/image/TAI08151.jpg",
      "/image/IDP 1.jpg",
      "/image/TAI08131.jpg",
      "/image/TAI08139.jpg",
      "/image/TAI08140.jpg",
    ],
  },
  {
    title: "Water Scarcity",
    description: "Giving underserved Nigerians a platform to tell their stories to inspire social change.",
    images: [
      "/image/img3.png",
      "/image/water-scarcity/Project 1.jpg",
      "/image/water-scarcity/Project 2.jpg",
      "/image/water-scarcity/Project 4.jpg",
      "/image/water-scarcity/Project-1.jpg",
    ],
  },
  {
    title: "A Story of Resilience and Hope",
    description: "One such story is that of Sa'adatu Adamu, a 21-year-old woman whose life is a testament to resilience and courage in the face of unimaginable challenges.",
    images: [
      "/image/IMG_1258.JPG",
      "/image/saadatu/picture of Saidat and her Daughter.jpg",
      "/image/saadatu/IMG_1257.JPG",
      "/image/saadatu/IMG_1259.JPG",
      "/image/saadatu/picture of Saidat and her Daughter.jpg",
    ],
  },
  {
    title: "Heartbreaking Case of Abubakar Sadiq",
    description: "In July 2024, The Revamp Initiatives came across the heartbreaking case of Abubakar Sadiq, a seven-month-old baby battling severe malnutrition.",
    images: [
      "/image/IMG_1260.JPG",
      "/image/abubakar-sadiq/IMG_1261.JPG",
      "/image/abubakar-sadiq/TAI02964.jpg",
      "/image/abubakar-sadiq/TAI03017.jpg",
      "/image/IMG_1260.JPG",
    ],
  },
  {
    title: "Walk For Impact",
    description: "Walk for Impact is a unique initiative by Revamp Initiatives that seeks to bridge the gap between Nigerian past and present through storytelling and engagement.",
    images: [
      "/image/image (5).png",
      "/image/walk-for-impact/TAI03675.jpg",
      "/image/walk-for-impact/TAI03790 (2).jpg",
      "/image/walk-for-impact/TAI03861.jpg",
      "/image/walk-for-impact/TAI03881.jpg",
    ],
  },
  {
    title: "Reusable Plastic Management",
    description: "For many, these bottles are just trash, but for Esther Mikaiah, they are a means of survival. With a little strength and resilience, she turns discarded plastic into a lifeline for her family.",
    images: [
      "/image/image (4).png",
      "/image/plastic-waste/Plastic waste 1.jpg",
      "/image/plastic-waste/Plastic waste 2.jpg",
      "/image/plastic-waste/Plastic waste 3.jpg",
      "/image/plastic-waste/Plastic waste 4.jpg",
    ],
  },
  {
    title: "Westfield Outreach",
    description: "In December 2024, Westfield Global Construction Limited demonstrated remarkable compassion by extending a helping hand to vulnerable Nigerians. With the support of Revamp Initiatives, they facilitated the donation of ₦500,000 to over 100 individuals in need.",
    images: [
      "/image/Westfield Outreach 1.jpg",
      "/image/westfield/Westfield Outreach 2.jpg",
      "/image/westfield/Westfield Outreach 3.jpg",
      "/image/westfield/Westfield Outreach 4.jpg",
      "/image/westfield/Westfield Outreach 5.jpg",
    ],
  },
];

interface SlideshowProps {
  images: string[];
}

const Slideshow = ({ images }: SlideshowProps) => {
  const [index, setIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    images.forEach((src) => {
      const img = new window.Image();
      img.src = src;
      img.onload = () => setLoaded(true);
    });

    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="w-full h-48 overflow-hidden relative">
      {!loaded && <div className="w-full h-48 bg-gray-300 animate-pulse"></div>}
      {images.map((image, i) => (
        <Image
          key={i}
          src={image}
          alt="Project image"
          width={100}
          height={100}
          className={`w-full h-48 object-cover absolute transition-opacity duration-1000 ease-in-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
};

const Projects = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-10">
        <h2 className="text-3xl font-bold text-gray-900">Latest Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <Slideshow images={project.images} />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mt-2">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;