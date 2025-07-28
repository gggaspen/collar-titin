"use client"

import { useState } from "react"
import { Play, Pause, Volume2 } from "lucide-react"

export default function MusicSection() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <section id="music" className="relative py-20 bg-gradient-to-b from-black via-gray-900 to-black">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, purple 1px, transparent 1px), radial-gradient(circle at 75% 75%, cyan 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
            SONIC JOURNEY
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full" />
          <p className="text-gray-300 text-lg mt-6 max-w-2xl mx-auto">
            Immerse yourself in a curated collection of beats that define the underground scene
          </p>
        </div>

        {/* Music Player Interface */}
        <div className="relative group">
          {/* Decorative Frame */}
          <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />

          <div className="relative bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300">
            {/* Player Controls */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-16 h-16 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full flex items-center justify-center hover:from-purple-500 hover:to-cyan-500 transition-all duration-300 transform hover:scale-105"
                >
                  {isPlaying ? <Pause className="w-8 h-8 text-white" /> : <Play className="w-8 h-8 text-white ml-1" />}
                </button>
                <div>
                  <h3 className="text-white font-semibold text-lg">Latest Mix</h3>
                  <p className="text-gray-400">Deep House Sessions Vol. 3</p>
                </div>
              </div>
              <Volume2 className="w-6 h-6 text-gray-400" />
            </div>

            {/* SoundCloud Embed */}
            <div className="relative overflow-hidden rounded-xl">
              <iframe
                width="100%"
                height="300"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1234567890&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                className="rounded-xl"
              />
              {/* Custom Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none rounded-xl" />
            </div>

            {/* Track List Preview */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              {["Midnight Pulse", "Neon Dreams", "Digital Horizon"].map((track, index) => (
                <div
                  key={track}
                  className="bg-gray-800/50 rounded-lg p-4 hover:bg-gray-700/50 transition-colors duration-300 cursor-pointer group/track"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold">{index + 1}</span>
                    </div>
                    <div>
                      <p className="text-white font-medium group-hover/track:text-cyan-400 transition-colors">
                        {track}
                      </p>
                      <p className="text-gray-400 text-sm">4:32</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
