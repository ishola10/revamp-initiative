import React from "react";
// import {
//   FaGraduationCap,
//   FaHandHoldingWater,
//   FaHeartbeat,
//   FaHandsHelping,
// } from "react-icons/fa";

// const impactAreas = [
//   {
//     icon: <FaGraduationCap className="text-yellow-500 text-4xl" />,
//     title: "Education",
//     description:
//       "Empower communities through access to quality education, enabling brighter futures and lifelong learning.",
//   },
//   {
//     icon: <FaHandHoldingWater className="text-yellow-500 text-4xl" />,
//     title: "Clean Water",
//     description:
//       "Provide clean and safe water solutions to improve health and enhance community wellbeing.",
//   },
//   {
//     icon: <FaHeartbeat className="text-yellow-500 text-4xl" />,
//     title: "Health Care",
//     description:
//       "Support access to essential healthcare services, ensuring healthier and stronger communities.",
//   },
//   {
//     icon: <FaHandsHelping className="text-yellow-500 text-4xl" />,
//     title: "Empowerment",
//     description:
//       "Uplift individuals with resources and opportunities, fostering self-reliance and growth.",
//   },
// ];

const Banner = () => {
  return (
    <section className="bg-white text-center">
      <div className="container mx-auto">
        <div className="bg-[#FFF4EA] py-16">
          <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider">
            IMPACT
          </h3>
          <h2 className="text-4xl font-bold text-gray-900 mt-2 max-w-3xl mx-auto">
          Stories that has shown Impact over the years
          </h2>
        </div>
{/* 
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-12 px-20">
          {impactAreas.map((area, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {area.icon}
              <h4 className="text-xl font-semibold text-gray-900 mt-4">
                {area.title}
              </h4>
              <p className="text-gray-600 mt-2 text-sm max-w-xs">
                {area.description}
              </p>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default Banner;
