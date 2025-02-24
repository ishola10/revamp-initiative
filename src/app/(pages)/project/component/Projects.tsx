import React from "react";
import Image from "next/image";

const projects = [
  {
    title: "Revamp Fun Day",
    description: "Revamp Fun Day is one of our flagship initiatives designed to bring joy and inspiration to underserved children in Nigeria.",
    image: "/image/image (3).png",
  },
  {
    title: "IDP Project",
    description: "At Revamp Initiatives, our IDP project (Internally Displaced Persons project) is centered on creating opportunities and amplifying the voices of individuals and families living in IDP camps across Nigeria.",
    video: "/videos/Idp Camp -Mariam Teaser.mp4",
  },
  {
    title: "Water Scarcity",
    description: "Giving underserved Nigerians a platform to tell their stories to inspire social change.",
    image: "/image/img3.png",
  },
  {
    title: "A Story of Resilience and Hope",
    description: "One such story is that of Saidatu Adamu, a 21-year-old woman whose life is a testament to resilience and courage in the face of unimaginable challenges.",
    video: "/videos/Idp Saadatu Adamu.mp4",
  },
  {
    title: "Heartbreaking Case of Abubakar Sadiq",
    description: "In July 2024, The Revamp Initiatives came across the heartbreaking case of Abubakar Sadiq, a seven-month-old baby battling severe malnutrition.",
    video: "/videos/Abubakar Sadiq IDP 2.mp4",
  },
  {
    title: "Walk For Impact",
    description: "Walk for Impact is a unique initiative by Revamp Initiatives that seeks to bridge the gap between Nigerian past and present through storytelling and engagement.",
    image: "/image/image (5).png",
  },
  {
    title: "Reusable Plastic Management",
    description: "For many, these bottles are just trash, but for Esther Mikaiah, they are a means of survival. With a little strength and resilience, she turns discarded plastic into a lifeline for her family.",
    image: "/image/image (4).png",
  },
  {
    title: "Westfield Outreach",
    description: "In December 2024, Westfield Global Construction Limited demonstrated remarkable compassion by extending a helping hand to vulnerable Nigerians. With the support of Revamp Initiatives, they facilitated the donation of ₦500,000 to over 100 individuals in need.",
    image: "/image/Westfield Outreach 1.jpg",
  },
];

const Projects = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-10">
        <h2 className="text-3xl font-bold text-gray-900">Latest Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
              {project.video ? (
                <video
                  src={project.video}
                  controls
                  className="w-full h-48 object-cover"
                />
              ) : (
                <Image
                  src={project.image || "/default-image.png"}
                  alt={project.title}
                  width={100}
                  height={100}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
                <p className="text-gray-600 text-sm mt-2">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
