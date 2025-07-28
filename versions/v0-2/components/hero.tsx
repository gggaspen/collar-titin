"use client"

import { useState, useEffect } from "react"
import { ChevronDown } from "lucide-react"

export default function Hero() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToMusic = () => {
    document.getElementById("music")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url('/placeholder.svg?height=1080&width=1920')`,
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 via-black/60 to-cyan-900/80" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

      {/* Animated Geometric Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-cyan-400/30 rotate-45 animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-24 h-24 border border-purple-400/30 rotate-12 animate-bounce" />
        <div className="absolute bottom-1/4 left-1/3 w-16 h-16 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full animate-ping" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        {/* DJ Name with Neon Effect */}
        <div className="mb-6 transform hover:scale-105 transition-transform duration-300">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2 tracking-wider">
            NEXUS
          </h1>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-pulse" />
        </div>

        {/* Tagline */}
        <p className="text-xl md:text-2xl lg:text-3xl text-gray-200 mb-8 font-light tracking-wide max-w-2xl leading-relaxed">
          Crafting sonic experiences that transcend reality
        </p>

        {/* CTA Button */}
        <button
          onClick={scrollToMusic}
          className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full text-white font-semibold text-lg tracking-wide hover:from-purple-500 hover:to-cyan-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
        >
          <span className="relative z-10">Experience the Sound</span>
          <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
        </button>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center text-gray-300 animate-bounce">
            <span className="text-sm mb-2 tracking-wider">SCROLL</span>
            <ChevronDown className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
    </section>
  )
}
