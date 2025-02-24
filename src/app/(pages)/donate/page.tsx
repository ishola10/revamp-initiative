"use client";

import React, { useState } from "react";
import Image from "next/image";

const donationCauses = [
  {
    id: "kreative-kampus",
    title: "Kreative Kampus",
    description:
      "Support young creatives through skill development and mentorship. Your donation helps us nurture talent and inspire the next generation of innovators.",
    image: "/image/NW1A9087.jpg",
  },
  {
    id: "art-therapy",
    title: "Art Therapy",
    description:
      "Help us provide a healing outlet for vulnerable children through creative expression. Your support can bring hope and joy through art.",
    image: "/image/Funday 3.jpg",
  },
  {
    id: "send-child-to-school",
    title: "Send a Child Back to School",
    description:
      "Your donation helps underprivileged children gain access to quality education, shaping a brighter future for them.",
    image: "/image/TAI08131.jpg",
  },
  {
    id: "empower-less-privileged",
    title: "Donate to Empower the Less Privileged",
    description:
      "Contribute to empowering communities by providing essential resources and opportunities for sustainable growth.",
    image: "/image/TAI08139.jpg",
  },
];

const DonationPage = () => {
  const [activeCause, setActiveCause] = useState(donationCauses[0]);
  const [selectedAmount, setSelectedAmount] = useState("₦50,000.00");
  const [customAmount, setCustomAmount] = useState("");
  const [isCustomAmount, setIsCustomAmount] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  return (
    <div className="min-h-screen py-10 px-4 md:px-20">
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

      <div className="mt-6 max-w-3xl">
        <h2 className="text-2xl font-semibold">{activeCause.title}</h2>
        <p className="text-gray-700 mt-2">{activeCause.description}</p>
        <div className="relative w-full mt-4 rounded-lg h-64">
          {imageLoading && (
            <div className="absolute inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50 z-10">
              <div className="w-10 h-10 border-4 border-t-4 border-yellow-500 rounded-full animate-spin"></div>
            </div>
          )}
          <Image
            src={activeCause.image}
            alt={activeCause.title}
            width={800}
            height={400}
            className="w-full h-full object-cover rounded-lg"
            onLoadingComplete={handleImageLoad}
          />
        </div>
      </div>

      <div className="mt-6 bg-white text-black p-6 rounded-lg shadow-md max-w-3xl">
        <h3 className="text-xl font-semibold text-black mb-4">
          Donation Amount
        </h3>
        <div className="mb-4">
          <div className="flex flex-wrap gap-3 mt-3">
            {["₦10,000", "₦25,000", "₦50,000", "₦100,000", "1m"].map(
              (amount) => (
                <button
                  key={amount}
                  onClick={() => {
                    setSelectedAmount(amount);
                    setIsCustomAmount(false);
                  }}
                  className={`px-4 py-2 border rounded-full text-gray-700 hover:bg-gray-200 ${
                    selectedAmount === amount && !isCustomAmount
                      ? "bg-black text-white"
                      : ""
                  }`}
                >
                  {amount}
                </button>
              )
            )}
            <button
              className={`px-4 py-2 bg-yellow-500 text-white rounded-lg ${
                isCustomAmount ? "bg-black" : ""
              }`}
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

        <div className="mb-4">
          <h3 className="text-xl font-semibold">Select Payment Method</h3>
          <div className="mt-3 flex gap-4">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="payment"
                checked
                className="form-radio"
              />
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

        <div className="mb-4">
          <h3 className="text-xl font-semibold">Personal Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
            <input
              type="text"
              className="p-2 border rounded-md"
              placeholder="First Name"
            />
            <input
              type="text"
              className="p-2 border rounded-md"
              placeholder="Last Name"
            />
          </div>
          <input
            type="email"
            className="w-full mt-4 p-2 border rounded-md"
            placeholder="Email Address"
          />
        </div>

        <div className="mt-6 text-lg font-semibold">
          Donation Total:{" "}
          <span className="text-yellow-600">
            {isCustomAmount ? customAmount : selectedAmount}
          </span>
        </div>

        <button className="mt-4 bg-yellow-500 text-white p-2 rounded-lg text-lg font-semibold">
          Donate Now
        </button>
      </div>
    </div>
  );
};

export default DonationPage;
