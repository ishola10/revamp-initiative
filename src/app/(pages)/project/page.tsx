"use client";

import React, { useState, useEffect } from "react";
import Banner from "./component/Banner";
import Projects from "./component/Projects";
import Footer from "@/components/Footer";

const Project = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full">
      {isLoading ? (
        <div className="inset-0 flex items-center justify-center mt-60 bg-white z-40">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-yellow-500"></div>
        </div>
      ) : (
        <>
          <Banner />
          <Projects />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Project;
