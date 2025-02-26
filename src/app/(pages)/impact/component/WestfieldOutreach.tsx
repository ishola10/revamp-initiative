// "use client";

import React from "react";
// import { FaRegCopy, FaCheck } from "react-icons/fa";
import Image from "next/image";

const WestfieldOutreach = () => {
  // const [copiedField, setCopiedField] = useState<string | null>(null);

  // const copyToClipboard = (text: string, field: string) => {
  //   navigator.clipboard.writeText(text);
  //   setCopiedField(field);
  //   setTimeout(() => setCopiedField(null), 2000);
  // };

  return (
    <section className="py-10 bg-gray-100">
      <div className="container mx-auto px-6 lg:px-10">
        <h2 className="text-3xl font-bold text-gray-900">Westfield Outreach</h2>

        <div className="mt-6 bg-[#FBEEEE] flex items-center gap-6 relative group rounded-lg overflow-hidden shadow-md max-w-7xl">
          <div className="w-1/2">
            <video className="w-full h-[28rem] object-cover" controls>
              <source
                src="/videos/Westfield Outreach (1).mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="w-1/2 space-y-4 px-6 text-sm">
            <p className="text-gray-700 pt-4">
              In December 2024,{" "}
              <strong>Westfield Global Construction Limited</strong>
              demonstrated remarkable compassion by extending a helping hand to
              vulnerable Nigerians. With the support of{" "}
              <strong>Revamp Initiatives</strong>, they facilitated the donation
              of <strong>₦50,000</strong> to over 100 individuals in need.
            </p>
            <p className="mt-4 text-gray-700">
              Our outreach took us to internally displaced persons and other
              underserved communities around churches and mosques. This
              initiative was not just about providing financial assistance; it
              was about meeting people at their point of need and restoring hope
              where it was most needed.
            </p>
            <p className="mt-4 text-gray-700">
              We were thrilled to join hands with Westfield Global Construction
              Limited to carry out this incredible act of kindness. Their
              commitment to social responsibility resonates deeply with our
              mission to amplify voices and make a difference in the lives of
              underserved Nigerians.
            </p>
            <p className="mt-4 text-gray-700">
              At Revamp Initiatives, we believe in the power of community and
              the impact of collective effort. This partnership was a testament
              to what we can achieve when we come together for a greater cause.
            </p>
            <p className="mt-4 mb-6 font-bold  text-gray-900">
              Together, we are changing lives one community at a time.
            </p>
          </div>
        </div>

        <div className="mt-10 px-6 bg-white shadow-md flex flex-col md:flex-row justify-between items-center rounded-lg">
          <div className="flex flex-col items-center justify-center md:flex-row md:justify-start">
            <div className="flex-shrink-0 mb-4 md:mb-0">
              <Image
                src="/image/Progress Circular.png"
                alt="Revamp Initiatives"
                width={80}
                height={80}
              />
            </div>

            <div className="ml-0 md:ml-6 text-center md:text-left">
              <h3 className="text-xl text-gray-900">
                Join our super hero community
              </h3>
              <div className="mt-4 flex items-center gap-4 text-gray-700">
                <Image src="/gif/whatsapp.gif" alt="whatsapp" width={50} height={50} />
                <p className="max-w-[32rem] cursor-pointer hover:underline">Be part of an exclusive network where ideas thrive, collaborations spark, and valuable insights are shared daily!</p>
              </div>
            </div>
          </div>
          <div className="flex-shrink-0 mt-4 md:mt-0">
            <Image
              src="/image/image (1).png"
              alt="Revamp Initiatives"
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WestfieldOutreach;
