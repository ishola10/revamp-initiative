import React from "react";

const Volunteer = () => {
  return (
    <div className=" mx-auto px-10 py-6 md:py-16 grid grid-cols-1 items-center md:grid-cols-2 gap-10 bg-[#F5F5F5]">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Be a Volunteer Today
        </h2>
        <p className="mt-4 text-gray-600">
          Are you ready to create a meaningful impact in your community and
          beyond? This is your opportunity to give back, share your time,
          skills, and passion, and be part of something bigger than yourself.
        </p>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 border">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Become a volunteer!
        </h3>
        <form action="https://formspree.io/f/mjkgnvrd" method="POST">
          <div className="mb-4">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Full name *"
              className="w-full px-4 py-3 border text-black rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFC602]"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email *"
              className="w-full px-4 py-3 border text-black rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFC602]"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="age"
              id="age"
              placeholder="Age *"
              className="w-full px-4 py-3 border text-black rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFC602]"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="gender"
              id="gender"
              placeholder="Gender *"
              className="w-full px-4 py-3 border text-black rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFC602]"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder="Phone number *"
              className="w-full px-4 py-3 border text-black rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFC602]"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="location"
              id="location"
              placeholder="Location *"
              className="w-full px-4 py-3 border text-black rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFC602]"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="skills"
              id="skills"
              placeholder="Creative skills *"
              className="w-full px-4 py-3 border text-black rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFC602]"
            />
          </div>
          {/* <div className="mb-4">
            <textarea
              placeholder="Your message *"
              className="w-full px-4 py-3 border text-black rounded-md h-28 focus:outline-none focus:ring-2 focus:ring-[#FFC602]"
            />
          </div> */}
          <button className="w-full bg-[#FFC602] text-white font-semibold py-3 rounded-md hover:bg-yellow-500 transition">
            Submit form
          </button>
        </form>
      </div>
    </div>
  );
};

export default Volunteer;
