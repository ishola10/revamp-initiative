import React from "react";

const Testimonials: React.FC = () => {

  return (
    <div className="bg-[#FBEEEE] py-10 px-6 md:px-10 mx-auto">
      <div className="flex flex-col md:flex-row gap-10 items-center mx-auto">
      <div className="w-full md:w-1/2">
          <h1 className="text-black text-3xl md:text-5xl font-semibold mb-6 md:mb-8 text-center md:text-left">
          Contributing to Creativity and Impact at The Revamp Initiatives
          </h1>

          <div className="flex flex-col md:flex-row gap-4">
            <p className="text-[#626262] text-center md:text-left">
            At The Revamp Initiatives , collaboration and creativity drive our mission. Michael shares his experience, offering insights into his role, key takeaways, and the impact of working in a dynamic environment. His journey reflects our commitment to storytelling and meaningful change.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 h-[40vh] md:h-[80vh] rounded-lg overflow-hidden">
          <video
            src="/videos/Michaels Interview.mp4"
            controls
            autoPlay
            loop
            muted
            className="w-full h-full object-contain"
          >
            Your browser does not support the video tag.
          </video>
        </div>

        
      </div>
    </div>
  );
};

export default Testimonials;
