import React from "react";
import Image from "next/image";

const RelentlessHope = () => {
  return (
    <section className="bg-[#FBEEEE] py-16">
      <div className="container mx-auto px-6 flex flex-col md:flex-row gap-10 items-center max-w-5xl">
        <div className="grid grid-cols-2 gap-6 flex-1 max-w-[450px]">
          {[
            "/image/funday/Funday 4.jpg",
            "/image/plastic-waste/Plastic Waste 1.jpg",
            "/image/funday/Funday 1.jpg",
            "/image/IDP 1.jpg",
          ].map((src, index) => (
            <div key={index} className="w-full h-40 overflow-hidden">
              <Image
                src={src}
                width={300}
                height={300}
                alt="Relentless Hope"
                className="w-full h-full  rounded-lg"
              />
            </div>
          ))}
        </div>

        <div className="text-black flex-1">
          <h1 className="text-4xl font-semibold mb-8">
            Relentless hope in creating positive change.
          </h1>
          <p>
            This is an enduring and determined belief that improvement or
            transformation is possible, even in the face of challenges or
            setbacks. It emphasizes persistence and a hopeful outlook.
          </p>
        </div>
      </div>
    </section>
  );
};

export default RelentlessHope;
