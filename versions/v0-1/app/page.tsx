import Hero from "@/components/Hero"
import MusicSection from "@/components/MusicSection"
import AboutSection from "@/components/AboutSection"
import ContactSection from "@/components/ContactSection"

export default function Home() {
  return (
    <main className="bg-gray-900 text-white overflow-x-hidden">
      <Hero />
      <MusicSection />
      <AboutSection />
      <ContactSection />
    </main>
  )
}
