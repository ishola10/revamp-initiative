"use client";

import React, { useState } from "react";
import Image from "next/image";

const donationCauses = [
  {
    id: "kreative-kampus",
    title: "Kreative Kampus",
    description:
      "Support young creatives through skill development and mentorship. Your donation helps us nurture talent and inspire the next generation of innovators.",
    image: "/image/kreative-kampus.jpg",
  },
  {
    id: "art-therapy",
    title: "Art Therapy",
    description:
      "Help us provide a healing outlet for vulnerable children through creative expression. Your support can bring hope and joy through art.",
    image: "/image/art-therapy.jpg",
  },
  {
    id: "send-child-to-school",
    title: "Send a Child Back to School",
    description:
      "Your donation helps underprivileged children gain access to quality education, shaping a brighter future for them.",
    image: "/image/send-child-to-school.jpg",
  },
  {
    id: "empower-less-privileged",
    title: "Donate to Empower the Less Privileged",
    description:
      "Contribute to empowering communities by providing essential resources and opportunities for sustainable growth.",
    image: "/image/empower-less-privileged.jpg",
  },
];

const DonationPage = () => {
  const [activeCause, setActiveCause] = useState(donationCauses[0]);
  const [selectedAmount, setSelectedAmount] = useState("₦50,000.00");
  const [customAmount, setCustomAmount] = useState("");
  const [isCustomAmount, setIsCustomAmount] = useState(false);

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4 md:px-20">
      <h1 className="text-3xl font-bold text-gray-900">Donate to a cause</h1>
      <div className="mt-4 flex flex-wrap gap-2">
        {donationCauses.map((cause) => (
          <button
            key={cause.id}
            onClick={() => setActiveCause(cause)}
            className={`px-4 py-2 border rounded-full ${
              activeCause.id === cause.id
                ? "bg-black text-white"
                : "border-gray-400 text-gray-700"
            }`}
          >
            {cause.title}
          </button>
        ))}
      </div>

      <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold">{activeCause.title}</h2>
        <p className="text-gray-700 mt-2">{activeCause.description}</p>
        <Image
          src={activeCause.image}
          alt={activeCause.title}
          width={800}
          height={400}
          className="w-full mt-4 rounded-lg object-cover h-64"
        />
      </div>

      <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold">Donation Amount</h3>
        <div className="flex flex-wrap gap-3 mt-3">
          {["₦10,000", "₦25,000", "₦50,000", "₦100,000", "1m"].map((amount) => (
            <button
              key={amount}
              onClick={() => {
                setSelectedAmount(amount);
                setIsCustomAmount(false);
              }}
              className={`px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-200 ${
                selectedAmount === amount && !isCustomAmount ? "bg-black text-white" : ""
              }`}
            >
              {amount}
            </button>
          ))}
          <button
            className={`px-4 py-2 bg-yellow-500 text-white rounded-lg ${isCustomAmount ? "bg-black" : ""}`}
            onClick={() => {
              setIsCustomAmount(true);
              setSelectedAmount("Custom");
            }}
          >
            Custom Amount
          </button>
        </div>
        {isCustomAmount && (
          <input
            type="text"
            className="w-full mt-4 p-2 border rounded-md"
            placeholder="Enter Custom Amount"
            value={customAmount}
            onChange={(e) => setCustomAmount(e.target.value)}
          />
        )}
      </div>

      <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold">Select Payment Method</h3>
        <div className="mt-3 flex gap-4">
          <label className="flex items-center gap-2">
            <input type="radio" name="payment" checked className="form-radio" />
            Credit Card
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="payment" className="form-radio" />
            PayPal
          </label>
        </div>
        <input
          type="text"
          className="w-full mt-4 p-2 border rounded-md"
          placeholder="Credit Card Number"
        />
      </div>

      <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold">Personal Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
          <input type="text" className="p-2 border rounded-md" placeholder="First Name" />
          <input type="text" className="p-2 border rounded-md" placeholder="Last Name" />
        </div>
        <input
          type="email"
          className="w-full mt-4 p-2 border rounded-md"
          placeholder="Email Address"
        />
      </div>

      <div className="mt-6 text-lg font-semibold">
        Donation Total: <span className="text-yellow-600">{isCustomAmount ? customAmount : selectedAmount}</span>
      </div>

      <button className="mt-4 w-full bg-yellow-500 text-white py-2 rounded-lg text-lg font-semibold">
        Donate Now
      </button>
    </div>
  );
};

export default DonationPage;
