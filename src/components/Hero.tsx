import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion"
import { useRef } from "react"

export default function Hero() {
    const ref = useRef<HTMLElement>(null)
    const { scrollY } = useScroll()
    const heroOpacity = useTransform(scrollY, [0, 300], [1, 0])
    const heroScale = useTransform(scrollY, [0, 300], [1, 0.95])

    // Mouse position tracking
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top, width, height } = currentTarget.getBoundingClientRect()
        mouseX.set((clientX - left) / width)
        mouseY.set((clientY - top) / height)
    }

    const rotateX = useSpring(useTransform(mouseY, [0, 1], [15, -15]), { stiffness: 150, damping: 20 })
    const rotateY = useSpring(useTransform(mouseX, [0, 1], [-15, 15]), { stiffness: 150, damping: 20 })

    // Subtle parallax for background elements
    const x = useSpring(useTransform(mouseX, [0, 1], [-20, 20]), { stiffness: 100, damping: 20 })
    const y = useSpring(useTransform(mouseY, [0, 1], [-20, 20]), { stiffness: 100, damping: 20 })

    // Dynamic glow follows cursor
    const glowX = useSpring(useTransform(mouseX, [0, 1], ["0%", "100%"]), { stiffness: 200, damping: 25 })
    const glowY = useSpring(useTransform(mouseY, [0, 1], ["0%", "100%"]), { stiffness: 200, damping: 25 })

    return (
        <section
            ref={ref}
            onMouseMove={handleMouseMove}
            className="relative min-h-[90vh] flex items-center overflow-hidden bg-black pt-20 perspective-1000"
        >
            {/* Grid Background */}
            <div className="absolute inset-0 grid-background opacity-30 pointer-events-none" />

            {/* Dark Aurora Background Effects */}
            <motion.div style={{ x, y }} className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full animate-aurora opacity-30 pointer-events-none" />
            <motion.div style={{ x: useTransform(x, (val) => -val), y: useTransform(y, (val) => -val) }} className="absolute bottom-[-5%] right-[5%] w-[500px] h-[500px] bg-primary/5 blur-[100px] rounded-full animate-aurora opacity-20 pointer-events-none" />

            {/* Cursor Follower Glow */}
            <motion.div
                className="absolute w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen opacity-50 z-0"
                style={{
                    top: 0,
                    left: 0,
                    x: useTransform(glowX, (val) => `calc(${val} - 50%)`),
                    y: useTransform(glowY, (val) => `calc(${val} - 50%)`)
                }}
            />

            <motion.div
                style={{ opacity: heroOpacity, scale: heroScale }}
                className="container px-6 relative z-10 mx-auto"
            >
                <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-48">
                    {/* Text Content */}
                    <div className="flex flex-col gap-8 max-w-[550px] text-center lg:text-left z-20">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                            className="flex flex-col gap-4"
                        >
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-normal tracking-tight text-white leading-[0.8] font-bitcount uppercase">
                                Connect <br />
                                Your World.
                            </h1>
                            <p className="max-w-[420px] text-lg text-slate-400 md:text-xl leading-relaxed font-sans mx-auto lg:mx-0">
                                The first device built with deep integration safety, psychologist trust, and zero-compromise tech.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6"
                        >
                            <Button className="luxury-button-gold h-12 px-8 group text-xs font-black uppercase tracking-widest rounded-full" asChild>
                                <a href="#pricing">
                                    Pre-order Now
                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </a>
                            </Button>
                        </motion.div>

                        {/* Simplified Trust */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            className="flex items-center justify-center lg:justify-start gap-4 pt-4 border-t border-white/5 mt-4"
                        >
                            <div className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-600">
                                <span className="text-white">12,000+</span> Pre-ordered globally
                            </div>
                        </motion.div>
                    </div>

                    {/* Phone Image Mockup - Closer with Hover */}
                    <div className="relative w-full max-w-[380px] lg:max-w-[420px] perspective-1000 mt-12 lg:mt-0 z-20">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
                            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                            transition={{ duration: 1.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                            style={{
                                rotateX,
                                rotateY,
                                transformStyle: "preserve-3d"
                            }}
                            className="phone-mockup-wrapper relative transition-all duration-700 cursor-pointer"
                        >
                            <img
                                src="/phone.png"
                                alt="BetterPhone Mockup"
                                className="w-full h-auto object-contain drop-shadow-[0_0_40px_rgba(212,175,55,0.05)]"
                                style={{ transform: 'translateZ(50px)' }}
                            />
                            {/* Reflection on top */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 mix-blend-overlay" />
                        </motion.div>

                        {/* Background Glow behind phone - Enhanced */}
                        <motion.div
                            style={{
                                scale: useTransform(rotateX, (val) => 1 + Math.abs(val) * 0.01),
                                opacity: useTransform(rotateY, (val) => 0.5 + Math.abs(val) * 0.02)
                            }}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/10 blur-[90px] -z-10 transition-all duration-700 pointer-events-none"
                        />
                    </div>
                </div>
            </motion.div>
        </section>
    )
}
