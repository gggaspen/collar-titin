export default function MusicSection() {
  const tracks = [
    {
      title: "Midnight Pulse",
      url: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/293&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
    },
    {
      title: "Neon Dreams",
      url: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/294&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
    },
    {
      title: "Electric Nights",
      url: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/295&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
    },
  ]

  return (
    <section id="music" className="py-16 md:py-24 px-4 bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Latest Tracks
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Experience the sound that moves the crowd. Each track crafted to elevate your energy.
          </p>
        </div>

        <div className="grid gap-8 md:gap-6">
          {tracks.map((track, index) => (
            <div
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-cyan-500/10"
            >
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">{track.title}</h3>
              <div className="rounded-lg overflow-hidden">
                <iframe
                  width="100%"
                  height="166"
                  scrolling="no"
                  frameBorder="no"
                  allow="autoplay"
                  src={track.url}
                  className="w-full"
                  title={`${track.title} - SoundCloud Player`}
                ></iframe>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://soundcloud.com/djnexus"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
            View Full Playlist
          </a>
        </div>
      </div>
    </section>
  )
}
