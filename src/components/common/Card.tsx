import React from "react";
import Image from "next/image";

interface CardProps {
  title: string;
  description: string;
  image: string;
}

const Card: React.FC<CardProps> = ({ title, description, image }) => {
  return (
    <div className="w-80 bg-black rounded-lg shadow-md p-4 mx-2 flex-shrink-0">
      <Image src={image} alt={title} width={300} height={300} className="w-full h-40 object-cover rounded-lg mb-4" />
      <h3 className="text-white font-bold text-lg">{title}</h3>
      <p className="text-gray-400 text-sm mt-2">{description}</p>
    </div>
  );
};

export default Card;
