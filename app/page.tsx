import Navbar from "@/components/navbar"
import HeroCarousel from "@/components/hero-carousel"
import ProfileSection from "@/components/profile-section"
import ExpertiseSection from "@/components/expertise-section"
import ServicesSection from "@/components/services-section"
import ContactCTA from "@/components/contact-cta"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroCarousel />
      <ProfileSection />
      <ExpertiseSection />
      <ServicesSection />
      <ContactCTA />
      <ContactSection />
      <Footer />
    </main>
  )
}
