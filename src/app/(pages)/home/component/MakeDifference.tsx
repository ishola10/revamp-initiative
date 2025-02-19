import React from "react";
// import Image from "next/image";

const MakeDifference = () => {
  return (
    <div className="py-16 px-10 mx-auto">
      <div className="flex gap-10 items-center mx-auto">
        <div className="w-1/2 h-[60vh] rounded-lg overflow-hidden">
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
        <div className="w-[50%]">
          <h1 className="text-black text-5xl font-semibold mb-8">
            Make a Difference Today, Extend a Helping Hand!
          </h1>
          <span className="flex gap-4">
            <p className="text-[#626262] ">
              The Revamp for Impact Initiative was established to address the
              pressing social, economic, and environmental challenges faced by
              vulnerable, underprivileged, and underserved communities in
              Africa. Recognizing the disparity in access to opportunities,
              education, healthcare, and sustainable livelihoods, the initiative
              is built on the principle of creating lasting positive social
              change THROUGH CREATIVITY.
            </p>
            <p className="text-[#626262]">
              This initiative operates on the belief that through creative
              storytelling, strategic programs, and partnerships, we can empower
              communities, foster resilience, and drive sustainable development.
              By aligning with the United Nations Sustainable Development Goals
              (SDGs), Revamp for Impact Initiative seeks to bridge gaps in
              critical areas such as education, poverty alleviation, gender
              equality, and climate action.
            </p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default MakeDifference;
