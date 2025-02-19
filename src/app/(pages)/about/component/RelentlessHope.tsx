import React from "react";
import Image from "next/image";

const RelentlessHope = () => {
  return (
    <section className="bg-[#FBEEEE] py-16">
      <div className="container mx-auto px-6 flex flex-col md:flex-row gap-10 items-center max-w-4xl">
        <div>
            <Image
                src="/image/image.png"
                width={800}
                height={800}
                alt="Relentless Hope"
            />
        </div>
        <div className="text-black">
            <h1 className="text-4xl font-semibold mb-8">Relentless hope in creating positive change.</h1>
            <p>
            This is an enduring and determined belief that improvement or transformation is possible, even in the face of challenges or setbacks. It emphasizes persistence and a hopeful outlook.
            </p>
        </div>
      </div>
    </section>
  );
};

export default RelentlessHope;
