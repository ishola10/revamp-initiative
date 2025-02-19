import React from "react";
import { FaCheck } from "react-icons/fa";
import Image from "next/image";

const EasilyDonate = () => {
  return (
    <div className="px-10 py-10">
      <div className="flex gap-10 items-center mx-auto">
        <div className="w-[45%]">
          <h1 className="text-4xl text-black mb-5">
            Easily Donate to the Needy in Just a Few Simple Steps.
          </h1>
          <p className="text-[#626262]">
            Your contribution can make a difference in the lives of underserved
            communities. By supporting Revamp Initiatives, you help amplify
            voices, empower dreams, and create lasting impact. Follow these
            simple steps to donate:
          </p>

          <ul className="mt-4 flex flex-col gap-4">
            <li className="flex gap-2 items-center text-black">
              <span className="bg-[#FFC602] p-1 rounded-full">
                <FaCheck size={10} color="white" />
              </span>
              Choose a cause to support
            </li>
            <li className="flex gap-2 items-center text-black">
              {" "}
              <span className="bg-[#FFC602] p-1 rounded-full">
                <FaCheck size={10} color="white" />
              </span>{" "}
              Enter Your Donation Amount
            </li>
            <li className="flex gap-2 items-center text-black">
              {" "}
              <span className="bg-[#FFC602] p-1 rounded-full">
                <FaCheck size={10} color="white" />
              </span>{" "}
              Complete your donation payment quickly and securely.
            </li>
          </ul>
        </div>
        <div className="flex gap-4">
          <div>
            <Image src="/image/Img.png" width={250} height={250} alt="logo" />
          </div>

          <div>
            <h1 className="p-2 bg-[#EFF0F64D] text-[#12141D] mb-4 rounded">TopProjects</h1>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1 p-2 bg-[#EEF7FE] rounded">
                <Image src="/image/Img.png" width={45} height={40} alt="logo" />
                <span className="text-[#415EB6]">
                  <h2 className="text-xs font-semibold">Health Care</h2>
                  <p className="text-[10px]">N23,900,000 Goal</p>
                </span>
              </div>
              <div className="flex flex-col gap-1 p-2 bg-[#feefd0] rounded">
                <Image src="/image/Img.png" width={45} height={40} alt="logo" />
                <span className="text-[#FFB110]">
                  <h2 className="text-xs font-semibold">Improve Education</h2>
                  <p className="text-[10px]">N15,000,000 Goal</p>
                </span>
              </div>

              <div className="flex flex-col gap-1 p-2 bg-[#FEEEEE] rounded">
                <Image src="/image/Img.png" width={45} height={40} alt="logo" />
                <span className="text-[#415EB6]">
                  <h2 className="text-xs font-semibold">Empowerment</h2>
                  <p className="text-[10px]">N12,500,000 Goal</p>
                </span>
              </div>
              <div>
                <Image
                  src="/image/Rectangle 23.png"
                  width={150}
                  height={150}
                  alt="logo"
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
