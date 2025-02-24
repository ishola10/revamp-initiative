"use client";

import React, { useState, useEffect } from "react";
import Banner from "./component/Banner";
import Partners from "./component/Partners";
import MakeDifference from "./component/MakeDifference";
import EasilyDonate from "./component/EasilyDonate";
import WhatWeDo from "./component/WhatWeDo";
import Testimonials from "./component/Testimonials";
import BecomeVolunteer from "./component/BecomeVolunteer";
import Footer from "@/components/Footer";

const Home = () => {
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
          <Partners />
          <MakeDifference />
          <EasilyDonate />
          <WhatWeDo />
          <Testimonials />
          <BecomeVolunteer />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Home;
