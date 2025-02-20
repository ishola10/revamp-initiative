import React from "react";
import { FaCheck } from "react-icons/fa";
import Image from "next/image";

const EasilyDonate = () => {
  return (
    <div className="px-6 md:px-10 py-10">
      <div className="flex flex-col md:flex-row gap-10 items-center mx-auto">
        <div className="w-full md:w-[45%] text-center md:text-left">
          <h1 className="text-2xl md:text-4xl text-black mb-5">
            Easily Donate to the Needy in Just a Few Simple Steps.
          </h1>
          <p className="text-[#626262] text-sm md:text-base">
            Your contribution can make a difference in the lives of underserved
            communities. By supporting Revamp Initiatives, you help amplify
            voices, empower dreams, and create lasting impact. Follow these
            simple steps to donate:
          </p>

          <ul className="mt-4 flex flex-col gap-4">
            {[
              "Choose a cause to support",
              "Enter Your Donation Amount",
              "Complete your donation payment quickly and securely.",
            ].map((text, index) => (
              <li
                key={index}
                className="flex gap-2 text-sm md:text-xl items-center text-black  md:justify-start"
              >
                <span className="bg-[#FFC602] p-1 rounded-full flex items-center justify-center">
                  <FaCheck size={10} color="white" />
                </span>
                {text}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col md:flex-row gap-6 w-full md:w-auto items-center">
          <div>
            <Image
              src="/image/img1.png"
              width={250}
              height={250}
              alt="logo"
              className="max-w-full"
            />
          </div>

          <div className="w-full md:w-auto">
            <h1 className="p-2 bg-[#EFF0F64D] text-[#12141D] mb-4 rounded text-center md:text-left">
              Top Projects
            </h1>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-4">
              {[
                {
                  bg: "#EEF7FE",
                  color: "#415EB6",
                  title: "Health Care",
                  goal: "N23,900,000 Goal",
                  img: "/image/Rectangle 23 (1).png",
                },
                {
                  bg: "#feefd0",
                  color: "#FFB110",
                  title: "Improve Education",
                  goal: "N15,000,000 Goal",
                  img: "/image/Rectangle 23 (2).png",
                },
                {
                  bg: "#FEEEEE",
                  color: "#415EB6",
                  title: "Empowerment",
                  goal: "N12,500,000 Goal",
                  img: "/image/Rectangle 23 (3).png",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-1 p-2 rounded"
                  style={{ backgroundColor: item.bg }}
                >
                  <Image
                    src={item.img}
                    width={45}
                    height={40}
                    alt="logo"
                    className="max-w-full"
                  />
                  <span style={{ color: item.color }}>
                    <h2 className="text-xs font-semibold">{item.title}</h2>
                    <p className="text-[10px]">{item.goal}</p>
                  </span>
                </div>
              ))}

              <div className="flex justify-center">
                <Image
                  src="/image/image (3).png"
                  width={150}
                  height={150}
                  alt="logo"
                  className="max-w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EasilyDonate;
