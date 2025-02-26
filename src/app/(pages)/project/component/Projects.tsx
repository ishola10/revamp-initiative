"use client";


import React, { useState, useEffect } from "react";
import Image from "next/image";
import { projects } from "@/helpers/util";


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
          className={`w-full h-48 absolute transition-opacity duration-1000 ease-in-out ${
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