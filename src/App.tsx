import './App.css'
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Features from "./components/Features"
import ProblemSection from "./components/ProblemSection"
import AgeSimulator from "./components/AgeSimulator"
import Pricing from "./components/Pricing"
import FAQ from "./components/FAQ"
import Testimonials from "./components/Testimonials"
import Footer from "./components/Footer"
import { ThemeProvider } from "./components/ThemeProvider"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-background selection:bg-primary/20">
        <Navbar />
        <main>
          <Hero />
          <ProblemSection />
          <AgeSimulator />
          <Features />
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
