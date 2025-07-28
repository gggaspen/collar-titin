export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              About DJ Nexus
            </h2>
            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <p>
                With over 8 years of experience behind the decks, DJ Nexus has become synonymous with electrifying
                performances that transcend genres and captivate audiences worldwide.
              </p>
              <p>
                From intimate club settings to massive festival stages, every set is crafted to create an unforgettable
                journey through sound. Specializing in electronic dance music, house, and progressive beats that keep
                the energy flowing all night long.
              </p>
              <p>
                When not performing, you'll find me in the studio, constantly pushing the boundaries of electronic music
                and collaborating with artists to create the next wave of dance floor anthems.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-cyan-500/20 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium">
                House Music
              </span>
              <span className="px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-400 text-sm font-medium">
                Progressive
              </span>
              <span className="px-4 py-2 bg-pink-500/20 border border-pink-500/30 rounded-full text-pink-400 text-sm font-medium">
                Electronic
              </span>
              <span className="px-4 py-2 bg-yellow-500/20 border border-yellow-500/30 rounded-full text-yellow-400 text-sm font-medium">
                Techno
              </span>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-gradient-to-r from-cyan-500 to-purple-500 shadow-2xl shadow-cyan-500/20">
                <img
                  src="/placeholder.svg?height=320&width=320"
                  alt="DJ Nexus - Professional DJ and Music Producer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-xl animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
