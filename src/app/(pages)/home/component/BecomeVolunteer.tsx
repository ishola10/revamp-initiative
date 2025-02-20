import React from "react";
import { FaArrowRight } from "react-icons/fa";

const BecomeVolunteer = () => {
  return (
    <div className="bg-[#F7F8F9] text-center py-20">
      <div className="w-[60%] mx-auto">
        <h1 className="text-black font-semibold text-3xl mb-4">
          Become a Volunteer
        </h1>
        <p className="text-black">
          Get Involved, Inspire Hope, Change Lives ready to make a difference?
          Sign up today and be a part of the change
        </p>

        <div className="flex justify-center">
          <button className="bg-[#FFC602] flex items-center gap-2 px-8 py-2 rounded mt-4 text-black">
            Proceed <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BecomeVolunteer;
