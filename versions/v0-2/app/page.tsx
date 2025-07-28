import Hero from "@/components/hero"
import MusicSection from "@/components/music-section"
import AboutSection from "@/components/about-section"
import ContactSection from "@/components/contact-section"

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <MusicSection />
      <AboutSection />
      <ContactSection />
    </main>
  )
}
