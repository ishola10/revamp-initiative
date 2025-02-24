import React from "react";
import Image from "next/image";

const teamMembers = [
  { name: "Taibat Ajiboye", role: "Founder & Creative Director", image: "/image/Team/Taibat.png", grayscale: false },
  { name: "Mr Taiwo", role: "Operations Manager", image: "/image/Team/Taiwo.png", grayscale: false },
  { name: "Vivian Eze", role: "Program Implementation Head", image: "/image/Team/Vivian.png", grayscale: false },
  { name: "Joshua Adamu", role: "Communication & Media Lead", image: "/image/Team/Joshua.png", grayscale: true },
  { name: "Adelokunmi Raymond", role: "Graphics Designer", image: "/image/Team/Raymond.png", grayscale: false },
  { name: "Yahuza Idris", role: "Photo Journalist", image: "/image/Team/Idris.png", grayscale: false },
  { name: "Micheal Adeboye", role: "Impact Officer", image: "/image/Team/Micheal.png", grayscale: false },
  { name: "Jessica Thomas", role: "Research & Development Officer", image: "/image/Team/Jessica.png", grayscale: false },
  { name: "Nwafor E. Chidialkobi", role: "Creative Editor", image: "/image/Team/profile.png", grayscale: false },
];

const Team = () => {
  return (
    <section className="bg-[#FFFBF6] py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900">The Empathetic Team</h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Team always taking actions that have a significant, lasting, and positive impact, 
          whether on individuals, communities, or larger systems.
        </p>

        <div className="flex flex-col items-center gap-6 mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {teamMembers.slice(0, 4).map((member, index) => (
              <TeamCard key={index} member={member} />
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {teamMembers.slice(4, 7).map((member, index) => (
              <TeamCard key={index} member={member} />
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {teamMembers.slice(7, 9).map((member, index) => (
              <TeamCard key={index} member={member} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const TeamCard = ({ member }: { member: { name: string; role: string; image: string; grayscale: boolean } }) => (
  <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center text-left">
    <div className="w-44 h-44">
      <Image
        src={member.image}
        alt={member.name}
        width={128}
        height={128}
        className={`rounded-md object-cover w-full h-full ${member.grayscale ? "grayscale" : ""}`}
      />
    </div>

    <h3 className="text-lg font-semibold text-gray-900 mt-4">{member.name}</h3>
    <p className="text-sm text-gray-600">{member.role}</p>

  </div>
);

export default Team;
