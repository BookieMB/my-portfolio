// src/components/Hero.tsx
import React from "react";

const Hero = () => {
  return (
    <section
  id="hero"
  className="min-h-screen w-full bg-white dark:bg-gray-900"
>
  <div className="max-w-7xl mx-auto px-6 md:px-20 flex flex-row items-center justify-between gap-8">
    {/* Left Side */}
    <div className="flex-1 flex flex-col justify-center">
      <h1 className="text-4xl md:text-6xl font-bold text-black dark:text-white drop-shadow">
        Hi! I’m <br />
        Marvin Buquis
      </h1>
      <p className="mt-4 text-lg md:text-xl text-black dark:text-gray-300 font-semibold drop-shadow-sm leading-relaxed">
        An aspiring <br />
        <span className="font-bold">Software Developer &</span> <br />
        <span className="font-bold">Web Enthusiast</span>
      </p>
    </div>

    {/* Right Side */}
    <div className="flex-1 flex justify-center">
      <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gray-300 overflow-hidden flex items-center justify-center shadow-lg">
        <img
          src="/src/assets/marvs.jpg"
          alt="Marvin Buquis"
          className="w-full h-full object-cover object-center"
        />
      </div>
    </div>
  </div>
</section>


  );
};

export default Hero;
