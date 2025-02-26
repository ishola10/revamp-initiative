import React from "react";
// import Image from 'next/image';

const Partners = () => {
  return (
    <div className="py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Text Section */}
        <p className="text-[#626262] text-center text-sm md:text-base">
          We are proud to collaborate with a diverse network of organizations
          and individuals who share our vision of creating meaningful change.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-16 mt-8">
          <img
            src="/image/icons/ACCE Logo_052058.svg"
            width={50}
            height={50}
            alt="ACCE-Logo"
          />
          <img
            src="/image/icons/revamp agencysvg_110600.svg"
            width={50}
            height={50}
            alt="Revamp Logo"
          />
          <img
            src="/image/icons/adebayoleke svg_110604.svg"
            width={100}
            height={20}
            alt="Adebayo Adeleke LLC"
          />
          <img
            src="/image/icons/westfield svg_110604.svg"
            width={50}
            height={50}
            alt="WestField"
          />
        </div>
      </div>
    </div>
  );
};

export default Partners;
