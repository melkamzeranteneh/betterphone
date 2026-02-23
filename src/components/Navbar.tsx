import { useState, useEffect } from "react"
import { Menu } from "lucide-react"
import { motion, useScroll, useSpring } from "framer-motion"

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [activeSection, setActiveSection] = useState("home")
    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    })

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)

            // Basic active section detection
            const sections = ["features", "age-selector", "mode-visualizer", "pricing-builder"]
            for (const section of sections) {
                const element = document.getElementById(section)
                if (element) {
                    const rect = element.getBoundingClientRect()
                    if (rect.top >= 0 && rect.top <= 300) {
                        setActiveSection(section)
                        break
                    }
                }
            }
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const navLinks = [
        { name: "Simulation", href: "#age-selector" },
        { name: "Modes", href: "#mode-visualizer" },
        { name: "Evolution", href: "#threats" },
        { name: "Family Plan", href: "#pricing-builder" },
        { name: "FAQ", href: "#faq" }
    ]

    return (
        <nav className="fixed top-0 left-0 w-full z-50 px-6 pt-6 flex flex-col items-center pointer-events-none" role="navigation">
            <div className={`max-w-7xl mx-auto w-full flex items-center justify-between backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-3 pointer-events-auto shadow-2xl transition-all duration-500 ${scrolled ? "bg-black/60 py-2" : "bg-black/40 py-4"
                }`}>
                {/* Left: Logo */}
                <a href="#" className="flex items-center gap-3 cursor-pointer group hover:scale-105 transition-transform">
                    <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center text-black font-black shadow-[0_0_20px_rgba(212,175,55,0.3)] group-hover:rotate-12 transition-transform">
                        BP
                    </div>
                    <span className="text-white font-black tracking-tighter text-xl font-heading">
                        Better<span className="text-primary">Phone</span>
                    </span>
                </a>

                {/* Center: Main Nav */}
                <div className="hidden lg:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={`text-[10px] font-black uppercase tracking-[0.2em] transition-all relative py-1 group ${activeSection === link.href.replace("#", "") ? "text-white" : "text-white/40 hover:text-white"
                                }`}
                        >
                            {link.name}
                            <span className={`absolute bottom-0 left-0 h-[2px] bg-primary transition-all duration-300 ${activeSection === link.href.replace("#", "") ? "w-full" : "w-0 group-hover:w-full"
                                }`} />
                        </a>
                    ))}
                </div>

                {/* Right: Actions */}
                <div className="flex items-center gap-4">
                    <button className="hidden sm:flex luxury-button luxury-button-gold !h-9 !px-6 !text-[9px] !rounded-xl">
                        Pre-order Now
                    </button>
                    {/* Mobile Menu */}
                    <button className="lg:hidden text-white w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
                        <Menu className="w-5 h-5" />
                    </button>
                </div>
            </div>

            {/* Scroll Progress Bar */}
            <motion.div
                className="h-[2px] bg-primary w-full max-w-7xl mt-2 rounded-full origin-left"
                style={{ scaleX }}
            />
        </nav>
    )
}
