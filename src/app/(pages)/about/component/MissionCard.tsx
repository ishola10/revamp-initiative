import React from "react";
import Image from "next/image";

interface MissionCardProps {
  icon: string;
  title: string;
  description: string;
}

const MissionCard: React.FC<MissionCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="bg-white shadow-lg flex flex-col gap-4 rounded-lg p-6 max-w-72">
      <Image
        src={icon}
        alt={title}
        width={50}
        height={50}
        className="w-8 h-8 mr-2"
      />
      <h3 className="text-xl text-black font-semibold">{title}</h3>

      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

export default MissionCard;
