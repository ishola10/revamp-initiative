import React from "react";

const MakeDifference = () => {
  return (
    <div className="py-16 px-6 md:px-10 mx-auto">
      <div className="flex flex-col md:flex-row gap-10 items-center mx-auto">
        <div className="w-full md:w-1/2 h-[40vh] md:h-[80vh] rounded-lg overflow-hidden">
          <video
            src="/videos/vid-2.mp4"
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
            Make a Difference Today, Extend a Helping Hand!
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
            <p className="text-[#626262] text-center md:text-left">
              This initiative operates on the belief that through creative
              storytelling, strategic programs, and partnerships, we can empower
              communities, foster resilience, and drive sustainable development.
              By aligning with the United Nations Sustainable Development Goals
              (SDGs), Revamp for Impact Initiative seeks to bridge gaps in
              critical areas such as education, poverty alleviation, gender
              equality, and climate action.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeDifference;
