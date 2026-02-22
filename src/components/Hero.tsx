import { ArrowRight, ArrowDown, Play, Shield, Navigation, Moon, Bell } from "lucide-react"
import { motion } from "framer-motion"

export default function Hero() {
    return (
        <section className="relative min-h-[100vh] flex flex-col items-center justify-center overflow-hidden bg-[#050505] text-[#F3F4F6] font-sans selection:bg-white/10">

            {/* Core Glow Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[60vh] bg-white/[0.08] blur-[140px] rounded-[100%] pointer-events-none" />
            <div className="absolute top-[40%] right-[10%] w-[40vw] h-[40vh] bg-[#a7f3d0]/[0.06] blur-[120px] rounded-full pointer-events-none mix-blend-screen" />
            <div className="absolute top-[30%] left-[10%] w-[40vw] h-[50vh] bg-white/[0.04] blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-[-10%] left-[20%] w-[50vw] h-[30vh] bg-white/[0.05] blur-[100px] rounded-[100%] pointer-events-none" />

            {/* SVG Constellation Lines (Static approximations to mimic image) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.2]">
                {/* Horizontal-ish lines */}
                <path d="M 0 350 C 200 350, 300 450, 500 450" stroke="rgba(255,255,255,0.2)" fill="none" strokeWidth="1" />
                <path d="M 0 650 C 200 650, 250 550, 450 550" stroke="rgba(255,255,255,0.2)" fill="none" strokeWidth="1" />
                <path d="M 100% 350 C 80% 350, 70% 450, 50% 450" stroke="rgba(255,255,255,0.2)" fill="none" strokeWidth="1" />
                <path d="M 100% 650 C 80% 650, 75% 550, 55% 550" stroke="rgba(255,255,255,0.2)" fill="none" strokeWidth="1" />

                {/* Vertical drop lines */}
                <line x1="45%" y1="50%" x2="45%" y2="80%" stroke="url(#gradient-line)" strokeWidth="1.5" />
                <line x1="50%" y1="55%" x2="50%" y2="90%" stroke="url(#gradient-line)" strokeWidth="1.5" />
                <line x1="55%" y1="48%" x2="55%" y2="78%" stroke="url(#gradient-line)" strokeWidth="1.5" />

                <defs>
                    <linearGradient id="gradient-line" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="white" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                </defs>
            </svg>

            {/* Floating Nodes */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="hidden lg:flex absolute top-[25%] left-[15%] flex-col items-start gap-2"
            >
                <div className="w-8 h-8 rounded-full border border-white/20 bg-white/5 flex items-center justify-center backdrop-blur-md">
                    <Moon className="w-4 h-4 text-white/70" />
                </div>
                <div className="flex flex-col">
                    <span className="text-white/90 text-sm font-medium flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-white/70" /> Default Limits
                    </span>
                    <span className="text-white/40 text-xs pl-3 pb-1 border-b border-white/10 w-fit">8:00 PM Sleep</span>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.7 }}
                className="hidden lg:flex absolute bottom-[35%] left-[10%] flex-col items-start gap-2"
            >
                <div className="w-8 h-8 rounded-full border border-white/20 bg-white/5 flex items-center justify-center backdrop-blur-md">
                    <Shield className="w-4 h-4 text-white/70" />
                </div>
                <div className="flex flex-col">
                    <span className="text-white/90 text-sm font-medium flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-white/70" /> Filter Active
                    </span>
                    <span className="text-white/40 text-xs pl-3 pb-1 border-b border-white/10 w-fit">100% Core Config</span>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="hidden lg:flex absolute top-[30%] right-[15%] flex-col items-end gap-2"
            >
                <div className="w-8 h-8 rounded-full border border-white/20 bg-white/5 flex items-center justify-center backdrop-blur-md">
                    <Navigation className="w-4 h-4 text-white/70" />
                </div>
                <div className="flex flex-col items-end">
                    <span className="text-white/90 text-sm font-medium flex items-center gap-2 text-right">
                        Location Secure <span className="w-1 h-1 rounded-full bg-white/70" />
                    </span>
                    <span className="text-white/40 text-xs pr-3 text-right pb-1 border-b border-white/10 w-fit">Encrypted GPS Protocol</span>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="hidden lg:flex absolute bottom-[40%] right-[10%] flex-col items-end gap-2"
            >
                <div className="w-8 h-8 rounded-full border border-white/20 bg-white/5 flex items-center justify-center backdrop-blur-md">
                    <Bell className="w-4 h-4 text-white/70" />
                </div>
                <div className="flex flex-col items-end">
                    <span className="text-white/90 text-sm font-medium flex items-center gap-2 text-right">
                        Threat Scan <span className="w-1 h-1 rounded-full bg-white/70" />
                    </span>
                    <span className="text-white/40 text-xs pr-3 text-right pb-1 border-b border-white/10 w-fit">AI Defense Active</span>
                </div>
            </motion.div>


            {/* Center Content */}
            <div className="relative z-10 flex flex-col items-center max-w-4xl px-6 text-center mt-[-5vh]">

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="w-12 h-12 rounded-full bg-white/5 border border-white/20 flex items-center justify-center mb-16 cursor-pointer group shadow-lg shadow-white/5 backdrop-blur-md"
                >
                    <Play className="w-4 h-4 text-white/80 fill-white/80 group-hover:fill-white group-hover:text-white transition-colors" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="mb-8"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/80 text-sm cursor-pointer hover:bg-white/10 transition-colors backdrop-blur-md">
                        <Shield className="w-3.5 h-3.5" />
                        <span>Unlock Zero-Config Safety <ArrowRight className="inline w-3.5 h-3.5 ml-1" /></span>
                    </div>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6 text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/40"
                >
                    One-click for Child Defense
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-base md:text-lg text-white/60 max-w-2xl font-light tracking-wide mb-12 leading-relaxed"
                >
                    Dive into the BetterPhone ecosystem, where innovative hardware meets child development expertise.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex flex-col sm:flex-row items-center gap-4"
                >
                    <a href="#pricing" className="h-12 px-8 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-medium flex items-center transition-all backdrop-blur-md">
                        Pre-order <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                    <a href="#how-it-works" className="h-12 px-8 rounded-full bg-white text-black hover:bg-white/90 hover:scale-[1.02] text-sm font-medium flex items-center transition-all shadow-lg shadow-white/20">
                        Discover More
                    </a>
                </motion.div>
            </div>

            {/* Bottom Elements */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="hidden md:flex absolute bottom-10 left-10 items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-white/60 text-xs tracking-wide"
            >
                <div className="w-6 h-6 rounded-full bg-white text-black flex items-center justify-center shadow-md">
                    <ArrowDown className="w-3 h-3 stroke-[3]" />
                </div>
                01/05 . Scroll down
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="hidden md:flex absolute bottom-10 right-10 flex-col items-end gap-3"
            >
                <span className="text-[#a8a184] text-sm font-medium tracking-wide">Safety horizons</span>
                <div className="flex gap-1.5 opacity-80">
                    <div className="w-6 h-[2px] rounded-full bg-white" />
                    <div className="w-6 h-[2px] rounded-full bg-white/20" />
                    <div className="w-6 h-[2px] rounded-full bg-white/20" />
                    <div className="w-6 h-[2px] rounded-full bg-white/20" />
                </div>
            </motion.div>
        </section>
    )
}
