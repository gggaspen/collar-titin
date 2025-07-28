"use client";

import { useEffect, useState } from "react";
import SmoothScrollIndicator from "./SmoothScrollIndicator";

export default function Hero() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (isClient) {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed transform scale-110"
        style={{
          // backgroundImage: `url('/placeholder.svg?height=1080&width=1920')`,
          backgroundImage: `url('/DSC_0039.png')`,
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
          DJ NEXUS
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-8 text-gray-300 font-light">
          Elevating nightlife with electrifying beats
        </p>
        <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
          <button
            onClick={() => scrollToSection("music")}
            className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
          >
            Listen Now
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="w-full md:w-auto px-8 py-3 border-2 border-pink-500 hover:bg-pink-500 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Book Me
          </button>
        </div>
      </div>

      <SmoothScrollIndicator />
    </section>
  );
}
