import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { WhyUs } from "@/components/why-us"
import { Services } from "@/components/services"
import { Clients } from "@/components/clients"
import { Testimonials } from "@/components/testimonials"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <WhyUs />
      <Services />
      <Clients />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
