import './App.css'
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Features from "./components/Features"
import ProblemSection from "./components/ProblemSection"
import Pricing from "./components/Pricing"
import FAQ from "./components/FAQ"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="min-h-screen bg-background selection:bg-primary/20">
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <Features />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}

export default App
