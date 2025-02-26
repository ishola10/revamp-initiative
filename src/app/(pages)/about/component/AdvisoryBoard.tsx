import React from "react";
import Image from "next/image";
import { advisoryMembers } from "@/helpers/util";

const AdvisoryBoard = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6 md:px-32">
        <h2 className="text-3xl font-bold text-gray-900 text-center md:text-left">The Advisory Board</h2>
        <p className="text-gray-600 mt-4 max-w-4xl text-center md:text-left mx-auto md:mx-0">
          Our advisory board offers strategic guidance to enhance our impact, ensuring our initiatives create lasting change.
          Their insights help us make informed decisions and effectively address the needs of underserved communities.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 auto-rows-[minmax(150px,_auto)]">
          {advisoryMembers.map((member, index) => (
            <div key={index} className={`relative rounded-lg overflow-hidden ${member.grid}`}>
              <Image src={member.image} alt={member.name} width={300} height={300} className=" w-full h-full" />
              <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2 w-full">
                <h3 className="text-lg font-semibold">{member.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvisoryBoard;
