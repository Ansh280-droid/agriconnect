import React from "react";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#080d09] text-white flex items-center justify-center">

      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-[120px]" />

      {/* Grid Background */}
      <div className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
          backgroundSize: "55px 55px",
        }}
      />

      {/* Floating Leaves */}
      <div className="absolute top-[15%] left-[8%] text-2xl animate-float">
        🌿
      </div>

      <div className="absolute top-[25%] right-[10%] text-xl animate-float-slow">
        🍃
      </div>

      <div className="absolute bottom-[25%] left-[12%] text-xl animate-float-slow">
        🌱
      </div>

      <div className="absolute bottom-[18%] right-[15%] text-2xl animate-float">
        🌾
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-20">

        {/* Center Logo */}
        <div className="flex justify-center mb-10">

          <div className="relative w-52 h-52 flex items-center justify-center">

            {/* Outer Ring */}
            <div className="absolute inset-0 rounded-full border border-green-500/20" />

            {/* Rotating Ring */}
            <div className="absolute inset-2 rounded-full border-2 border-transparent border-t-green-400 border-r-orange-400 animate-spin-slow" />

            {/* Second Ring */}
            <div className="absolute inset-6 rounded-full border border-orange-400/30 animate-pulse" />

            {/* Glow */}
            <div className="absolute w-32 h-32 bg-green-400/20 rounded-full blur-2xl" />

            {/* Agriculture Icon */}
            <div className="relative z-10 text-7xl animate-gentle">
              🌾
            </div>

          </div>

        </div>


        {/* Brand Name */}
        <div className="text-center">

          <h1 className="text-6xl md:text-8xl font-black tracking-tight">

            <span className="text-green-400">
              Agri
            </span>

            <span className="text-orange-400">
              Connect
            </span>

          </h1>

          <h2 className="mt-3 text-2xl md:text-3xl font-semibold text-orange-300">
            एग्रीकनेक्ट
          </h2>

          <p className="mt-5 text-sm md:text-base tracking-[0.35em] text-gray-400 font-semibold">
            SMART FARMING • SMART FUTURE
          </p>

          <p className="mt-3 text-gray-500">
            किसानों के लिए स्मार्ट तकनीक, बेहतर फैसले
          </p>

        </div>


        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">

          <Link
  to="/register"
  className="px-8 py-4 rounded-full bg-green-500 text-black font-bold hover:bg-green-400 hover:scale-105 transition-all duration-300 shadow-lg shadow-green-500/20"
>
  Get Started 🌱
</Link>

          <Link
  to="/features"
  className="px-8 py-4 rounded-full border border-green-500/40 text-green-300 font-semibold hover:bg-green-500/10 hover:scale-105 transition-all duration-300"
>
  Explore Features
</Link>

        </div>


        {/* Feature Cards */}
        <div className="mt-16 max-w-4xl mx-auto">

          <div className="grid grid-cols-1 sm:grid-cols-3 bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl">

            {/* Weather */}
            <div className="p-7 text-center border-b sm:border-b-0 sm:border-r border-white/10 hover:bg-white/[0.05] transition">

              <div className="text-3xl mb-3">
                🌦️
              </div>

              <h3 className="text-xl font-bold text-green-300">
                Weather
              </h3>

              <p className="text-gray-500 text-sm mt-2">
                Real-time updates
              </p>

            </div>


            {/* Market */}
            <div className="p-7 text-center border-b sm:border-b-0 sm:border-r border-white/10 hover:bg-white/[0.05] transition">

              <div className="text-3xl mb-3">
                📈
              </div>

              <h3 className="text-xl font-bold text-orange-300">
                Market Prices
              </h3>

              <p className="text-gray-500 text-sm mt-2">
                Latest crop prices
              </p>

            </div>


            {/* Smart Farming */}
            <div className="p-7 text-center hover:bg-white/[0.05] transition">

              <div className="text-3xl mb-3">
                🌱
              </div>

              <h3 className="text-xl font-bold text-green-300">
                Smart Farming
              </h3>

              <p className="text-gray-500 text-sm mt-2">
                Better farming decisions
              </p>

            </div>

          </div>

        </div>


        {/* Bottom Text */}
        <p className="text-center text-gray-600 text-sm mt-10">
          Built for Farmers • Powered by Technology 🌾
        </p>

      </div>


      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#080d09] to-transparent pointer-events-none" />

    </section>
  );
};

export default Hero;