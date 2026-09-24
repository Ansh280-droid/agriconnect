
import React from "react";
import { Link } from "react-router-dom";

const Features = () => {
  const features = [
    {
      icon: "🌦️",
      title: "Weather Updates",
      description:
        "Get real-time weather information to plan your farming activities better.",
      color: "text-green-400",
    },
    {
      icon: "📈",
      title: "Market Prices",
      description:
        "Check the latest crop and mandi prices to make better selling decisions.",
      color: "text-orange-400",
    },
    {
      icon: "🌱",
      title: "Crop Assistance",
      description:
        "Get useful information and guidance for better crop management.",
      color: "text-green-400",
    },
    {
      icon: "🏛️",
      title: "Government Schemes",
      description:
        "Discover government schemes and benefits available for farmers.",
      color: "text-orange-400",
    },
    {
      icon: "🤖",
      title: "AI Farming Assistant",
      description:
        "Get smart farming suggestions and answers to your agriculture-related questions.",
      color: "text-green-400",
    },
    {
      icon: "📍",
      title: "Location-Based Services",
      description:
        "Access farming information based on your location and nearby agricultural resources.",
      color: "text-orange-400",
    },
  ];

  return (
    <section className="min-h-screen bg-[#080d09] text-white px-6 py-20">

      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center">

        <p className="text-green-400 font-semibold tracking-[0.3em] text-sm">
          AGRICONNECT
        </p>

        <h1 className="text-5xl md:text-6xl font-black mt-4">
          Smart Features for{" "}
          <span className="text-orange-400">Smart Farming</span>
        </h1>

        <p className="text-gray-400 max-w-2xl mx-auto mt-5 text-lg">
          Everything a farmer needs to make better decisions, improve
          productivity, and stay connected with the agricultural ecosystem.
        </p>

      </div>

      {/* Feature Cards */}
      <div className="max-w-6xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {features.map((feature, index) => (
          <div
            key={index}
            className="group p-8 rounded-3xl bg-white/[0.04] backdrop-blur-xl border border-white/10 hover:border-green-500/40 hover:bg-white/[0.07] transition-all duration-300 hover:-translate-y-2"
          >

            {/* Icon */}
            <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
              {feature.icon}
            </div>

            {/* Title */}
            <h2 className={`text-2xl font-bold ${feature.color}`}>
              {feature.title}
            </h2>

            {/* Description */}
            <p className="text-gray-400 mt-4 leading-7">
              {feature.description}
            </p>

            {/* Learn More */}
            <button className="mt-6 text-sm font-semibold text-gray-300 hover:text-green-400 transition">
              Learn More →
            </button>

          </div>
        ))}

      </div>

      {/* Bottom CTA */}
      <div className="max-w-4xl mx-auto mt-20 text-center">

        <div className="rounded-3xl border border-green-500/20 bg-green-500/[0.04] p-10">

          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to make{" "}
            <span className="text-green-400">smarter farming decisions?</span>
          </h2>

          <p className="text-gray-400 mt-4">
            Join AgriConnect and get access to smart farming assistance.
          </p>

    <button
  type="button"
  onClick={() => window.location.href = "/register"}
  className="relative z-[9999] mt-7 px-8 py-4 rounded-full bg-green-500 text-black font-bold cursor-pointer hover:bg-green-400 hover:scale-105 transition-all duration-300"
>
  Get Started 🌱
</button>

        </div>

      </div>

    </section>
  );
};

export default Features;
