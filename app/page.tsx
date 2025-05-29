import { Header } from "@/components/landing-page/header"
import { Hero } from "@/components/landing-page/hero"
import { Features } from "@/components/landing-page/features"
import { HowItWorks } from "@/components/landing-page/how-it-works"
import { Testimonials } from "@/components/landing-page/testimonials"
import { FAQ } from "@/components/landing-page/faq"
import { CTA } from "@/components/landing-page/cta"
import { Footer } from "@/components/landing-page/footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
