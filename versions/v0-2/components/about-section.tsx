export default function AboutSection() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-black via-purple-900/20 to-black">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-l from-purple-600/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-r from-cyan-600/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/30 to-cyan-600/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
            <div className="relative">
              <img
                src="/placeholder.svg?height=500&width=400"
                alt="NEXUS DJ Portrait"
                className="w-full h-[500px] object-cover rounded-2xl border border-gray-700/50 group-hover:border-purple-500/50 transition-all duration-300"
              />
              {/* Overlay Effects */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-2xl" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center space-x-2 text-cyan-400">
                  <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse" />
                  <span className="text-sm font-medium">LIVE</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
                THE ARCHITECT
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mb-6" />
            </div>

            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p className="text-lg">
                Born from the intersection of technology and soul, NEXUS emerged from the underground scenes of Berlin
                and Detroit, crafting a signature sound that bridges the gap between raw emotion and digital precision.
              </p>

              <p>
                With over a decade of experience behind the decks, every set is a carefully orchestrated journey through
                sonic landscapes that challenge conventional boundaries. From intimate warehouse gatherings to festival
                main stages, the mission remains constant: to create moments of transcendence through sound.
              </p>

              <p>
                The philosophy is simple yet profound – music is the universal language that connects us all, and every
                beat is an opportunity to forge that connection deeper.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-700/50">
              {[
                { number: "500K+", label: "Monthly Listeners" },
                { number: "150+", label: "Live Shows" },
                { number: "25+", label: "Countries" },
              ].map((stat) => (
                <div key={stat.label} className="text-center group cursor-pointer">
                  <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm mt-1 group-hover:text-gray-300 transition-colors">
                    {stat.label}
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
