import React from "react";
import MissionCard from "./MissionCard";

const cardData = [
    {
      id: 1,
      title: "Our Goal",
      description:
        "To create lasting positive social impact by improving the lives of vulnerable, underprivileged, and underserved communities in Africa through creativity, skill development, and access to resources.",
      image: "/images/Rectangle 23.png",
    },
    {
      id: 2,
      title: "Mission Statement",
      description:
        "Revamp for Impact Initiative is dedicated to empowering underprivileged individuals and communities by leveraging creativity and innovative solutions to tackle key social challenges.",
      image: "/images/Rectangle 23.png",
    },
    {
      id: 3,
      title: "Vision Statement",
      description:
        "To become a leading force in Africa by creating a future where underprivileged individuals can explore their creativity and uplift their communities.",
      image: "/images/Rectangle 23.png",
    },
  ];

const MissionGoal = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-6 justify-center w-10/12 mx-auto">
            {cardData.map((card) => (
                <MissionCard
                key={card.id}
                title={card.title}
                description={card.description}
                icon={card.image}
                />
            ))}
        </div>
      </div>
    </section>
  );
};

export default MissionGoal;
