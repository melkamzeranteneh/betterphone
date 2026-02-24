import { useState, useEffect } from "react"
import { Menu } from "lucide-react"
import { motion, useScroll, useSpring } from "framer-motion"

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [activeSection, setActiveSection] = useState("hero")
    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    })

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)

            // Find the section whose center is closest to the viewport center
            const sections = ["hero", "age-selector", "pricing", "faq", "testimonials"]
            let closestSection = sections[0];
            let minDistance = Infinity;
            const viewportCenter = window.innerHeight / 2;
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    const sectionCenter = rect.top + rect.height / 2;
                    const distance = Math.abs(sectionCenter - viewportCenter);
                    if (distance < minDistance) {
                        minDistance = distance;
                        closestSection = section;
                    }
                }
            }
            setActiveSection(closestSection);
        };
        window.addEventListener("scroll", handleScroll);
        // Run on mount to set initial state
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const [hoveredLink, setHoveredLink] = useState<string | null>(null)
    
    const navLinks = [
        { name: "Home", href: "#hero" },
        { name: "Mode details", href: "#age-selector" },
        { name: "Pricing", href: "#pricing" },
        { name: "FAQ", href: "#faq" },
        { name: "Testimonials", href: "#testimonials"},
    ]

    return (
        <nav className="fixed top-0 left-0 w-full z-50 px-6 pt-6 flex flex-col items-center pointer-events-none" role="navigation">
            <div className={`max-w-7xl mx-auto w-full flex items-center justify-between backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-3 pointer-events-auto shadow-2xl transition-all duration-500 ${scrolled ? "bg-black/60 py-2" : "bg-black/40 py-4"
                }`}>
                {/* Left: Logo */}
                <a href="#" className="flex items-center gap-3 cursor-pointer group hover:scale-105 transition-transform">
                    <div className="w-10 h-10 flex items-center justify-center group-hover:rotate-12 transition-transform">
                        <img src="/logo.svg" alt="BetterPhone Logo" className="w-full h-full" />
                    </div>
                    <span className="text-white font-black tracking-tighter text-xl font-heading">
                        Better<span className="text-primary">Phone</span>
                    </span>
                </a>

                {/* Center: Main Nav */}
                <div className="hidden lg:flex items-center gap-6">
                    {navLinks.map((link) => {
                        const sectionId = link.href.replace("#", "")
                        const isActive = activeSection === sectionId
                        const isHovered = hoveredLink === link.name
                        return (
                            <a
                                key={link.name}
                                href={link.href}
                                onMouseEnter={() => setHoveredLink(link.name)}
                                onMouseLeave={() => setHoveredLink(null)}
                                className={`text-[10px] font-black uppercase tracking-[0.2em] transition-all relative py-1 ${isActive ? "text-white" : "text-white/40 hover:text-white"}`}
                            >
                                {link.name}
                                <motion.span
                                    className="absolute bottom-0 left-0 h-[2px] bg-primary rounded-full"
                                    animate={{ width: (isActive || isHovered) ? '100%' : '0%' }}
                                    transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
                                    style={{ display: 'block' }}
                                />
                            </a>
                        )
                    })}
                </div>

                {/* Right: Actions */}
                <div className="flex items-center gap-4">
                    <button
                        className="hidden sm:flex luxury-button luxury-button-gold !h-9 !px-6 !text-[9px] !rounded-xl"
                        onClick={() => {
                            const el = document.getElementById('payment') || document.getElementById('pricing')
                            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                        }}
                    >
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
