import React from "react";
import Banner from "./component/Banner";
import Partners from "./component/Partners";
import MakeDifference from "./component/MakeDifference";
import EasilyDonate from "./component/EasilyDonate";
import WhatWeDo from "./component/WhatWeDo";
import Testimonials from "./component/Testimonials";
import BecomeVolunteer from "./component/BecomeVolunteer";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="w-full">
      <Banner />
      <Partners />
      <MakeDifference />
      <EasilyDonate />
      <WhatWeDo />
      <Testimonials />
      <BecomeVolunteer />
      <Footer />
    </div>
  );
};

export default Home;
