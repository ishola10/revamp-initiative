import React from "react";

const Testimonials: React.FC = () => {

  return (
    <div className="bg-[#FBEEEE] py-16 px-6 md:px-10 mx-auto">
      <div className="flex flex-col md:flex-row gap-10 items-center mx-auto">
        <div className="w-full md:w-1/2 h-[40vh] md:h-[80vh] rounded-lg overflow-hidden">
          <video
            src="/videos/Michaels Interview.mp4"
            controls
            autoPlay
            loop
            muted
            className="w-full h-full object-cover"
          >
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="w-full md:w-1/2">
          <h1 className="text-black text-3xl md:text-5xl font-semibold mb-6 md:mb-8 text-center md:text-left">
            Client Testimonials
          </h1>

          <div className="flex flex-col md:flex-row gap-4">
            <p className="text-[#626262] text-center md:text-left">
              The Revamp for Impact Initiative was established to address the
              pressing social, economic, and environmental challenges faced by
              vulnerable, underprivileged, and underserved communities in
              Africa. Recognizing the disparity in access to opportunities,
              education, healthcare, and sustainable livelihoods, the initiative
              is built on the principle of creating lasting positive social
              change THROUGH CREATIVITY.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
