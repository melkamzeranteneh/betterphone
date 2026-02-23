import './App.css'
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import ProblemSection from "./components/ProblemSection"
import PhoneComparison from "./components/PhoneComparison"
import AgeGroupSimulator from "./components/AgeGroupSimulator"
import ModeVisualizer from "./components/ModeVisualizer"
import ModeComparison from "./components/ModeComparison"
import DashboardDemo from "./components/DashboardDemo"
import ProtectionTimeline from "./components/ProtectionTimeline"
import ThreatSimulator from "./components/ThreatSimulator"
import PricingBuilder from "./components/PricingBuilder"
import Pricing from "./components/Pricing"
import FAQ from "./components/FAQ"
import Testimonials from "./components/Testimonials"
import Footer from "./components/Footer"
import { ThemeProvider } from "./components/ThemeProvider"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-[#030303] selection:bg-primary/20">
        <Navbar />
        <main>
          <Hero />
          <ProblemSection />
          <PhoneComparison />
          <AgeGroupSimulator />
          <ModeVisualizer />
          <ModeComparison />
          <DashboardDemo />
          <ProtectionTimeline />
          <ThreatSimulator />
          <PricingBuilder />
          <Pricing />
          <FAQ />
          <Testimonials />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
