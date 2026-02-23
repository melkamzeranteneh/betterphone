import React, { useState, useRef } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { Cpu, Shield, Sparkles, Activity, Globe, Clock, Camera, Zap, Fingerprint } from "lucide-react"

// ─── Interactive Phone Component ─────────────────────────────────────────────

const PhoneExplorer = () => {
    const [activeHotspot, setActiveHotspot] = useState<string | null>(null)
    const containerRef = useRef<HTMLDivElement>(null)

    // Motion values for 3D rotation
    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const mouseXSpring = useSpring(x)
    const mouseYSpring = useSpring(y)

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"])
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"])

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!containerRef.current) return
        const rect = containerRef.current.getBoundingClientRect()
        const width = rect.width
        const height = rect.height
        const mouseX = e.clientX - rect.left
        const mouseY = e.clientY - rect.top
        x.set(mouseX / width - 0.5)
        y.set(mouseY / height - 0.5)
    }

    const handleMouseLeave = () => {
        x.set(0)
        y.set(0)
    }

    const hotspots = [
        { id: "camera", label: "Optical Guard", icon: Camera, top: "12%", left: "85%", description: "Neural-engine powered content filtering at the lens level." },
        { id: "security", label: "Bio-Lock", icon: Fingerprint, top: "85%", left: "50%", description: "Hardware-level parental bypass with encrypted biometric keys." },
        { id: "interface", label: "Calm OS", icon: Zap, top: "45%", left: "15%", description: "Dopamine-neutral UI designed to prevent endless scrolling." },
    ]

    return (
        <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative w-full max-w-[500px] h-[650px] mx-auto perspective-1000 flex items-center justify-center lg:mb-0 mb-10"
        >
            {/* 3D Phone Body */}
            <motion.div
                style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                className="relative w-[300px] h-[600px] bg-[#080808] rounded-[3.5rem] border-[8px] border-[#1a1a1a] shadow-[0_50px_100px_rgba(0,0,0,0.8),inset_0_0_20px_rgba(255,255,255,0.05)]"
            >
                {/* Screen Content - White Mode */}
                <div className="absolute inset-1 rounded-[3.1rem] overflow-hidden bg-white">
                    <div className="w-full h-full flex flex-col p-8 pt-12 relative">

                        {/* Status Bar */}
                        <div className="flex justify-between items-center px-2 mb-10">
                            <span className="text-black font-bold text-[13px]">9:41</span>
                            <div className="flex items-center gap-1.5 grayscale opacity-60">
                                <Activity className="w-3.5 h-3.5" />
                                <Globe className="w-3.5 h-3.5" />
                                <div className="w-5 h-2.5 rounded-[3px] border border-black/20 relative">
                                    <div className="absolute left-[1px] top-[1px] bottom-[1px] right-2 bg-black rounded-[1px]" />
                                </div>
                            </div>
                        </div>

                        {/* Date Content */}
                        <div className="mb-16">
                            <h2 className="text-[42px] font-black text-black leading-[1] font-heading">
                                Thursday<br />24
                            </h2>
                        </div>

                        {/* App Grid (2x3) */}
                        <div className="grid grid-cols-3 gap-y-10 gap-x-4 px-2">
                            {[
                                { name: "Phone", color: "bg-[#4ade80]", icon: <Zap className="w-6 h-6 text-white" /> },
                                { name: "Messages", color: "bg-[#22c55e]", icon: <Activity className="w-6 h-6 text-white" /> },
                                { name: "Calc", color: "bg-[#94a3b8]", icon: <Cpu className="w-6 h-6 text-white" /> },
                                { name: "Maps", color: "bg-white border border-black/5", icon: <Globe className="w-6 h-6 text-blue-500" /> },
                                { name: "Spotify", color: "bg-[#1db954]", icon: <Sparkles className="w-6 h-6 text-white" /> },
                                { name: "Notion", color: "bg-black", icon: <div className="text-white font-black text-lg italic">N</div> },
                            ].map((app, i) => (
                                <div key={i} className="flex flex-col items-center gap-2">
                                    <div className={`w-14 h-14 rounded-2xl ${app.color} flex items-center justify-center shadow-lg shadow-black/5`}>
                                        {app.icon}
                                    </div>
                                    <span className="text-[10px] font-bold text-black/40">{app.name}</span>
                                </div>
                            ))}
                        </div>

                        {/* Dynamic Island Pill */}
                        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-full z-40 flex items-center justify-end px-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 opacity-40" />
                        </div>

                        {/* Page Indicator */}
                        <div className="mt-auto mb-8 flex items-center justify-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-black/80" />
                            <div className="w-1.5 h-1.5 rounded-full bg-black/20" />
                        </div>

                        {/* Home Bar */}
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-black/20 rounded-full" />
                    </div>
                </div>

                {/* Hotspots */}
                {hotspots.map((spot) => (
                    <div
                        key={spot.id}
                        className="absolute z-50 pointer-events-auto"
                        style={{ top: spot.top, left: spot.left }}
                    >
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                setActiveHotspot(activeHotspot === spot.id ? null : spot.id);
                            }}
                            className="group relative flex items-center justify-center"
                        >
                            <span className="absolute w-10 h-10 rounded-full bg-primary/20 animate-ping" />
                            <span className="relative w-5 h-5 rounded-full bg-primary border-2 border-white shadow-[0_0_20px_rgba(212,175,55,0.6)] group-hover:scale-125 transition-transform" />

                            {/* Label */}
                            <motion.div
                                initial={{ opacity: 0, x: 10 }}
                                whileInView={{ opacity: 1, x: 25 }}
                                className="absolute left-full whitespace-nowrap bg-black/90 backdrop-blur-md border border-white/10 px-4 py-2 rounded-xl pointer-events-none shadow-2xl"
                            >
                                <span className="text-[11px] font-black uppercase tracking-[0.2em] text-white">{spot.label}</span>
                            </motion.div>
                        </button>
                    </div>
                ))}

                {/* Hotspot Content Overlays */}
                <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-[60]">
                    {hotspots.map((spot) => (
                        activeHotspot === spot.id && (
                            <motion.div
                                key={spot.id + "-overlay"}
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                className="pointer-events-auto bg-[#0d0d0d] border border-white/10 p-8 rounded-[2.5rem] shadow-[0_50px_100px_rgba(0,0,0,0.9)] max-w-[280px] text-left transform translate-z-[100px]"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                                        <spot.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <h5 className="text-white font-black text-xl font-heading">{spot.label}</h5>
                                </div>
                                <p className="text-slate-400 text-sm leading-relaxed mb-6 font-medium">
                                    {spot.description}
                                </p>
                                <button
                                    onClick={() => setActiveHotspot(null)}
                                    className="w-full py-4 bg-primary text-black rounded-xl text-[10px] font-black uppercase tracking-[0.3em] transition-all hover:scale-[1.02] active:scale-95 shadow-lg shadow-primary/20"
                                >
                                    Dismiss Reveal
                                </button>
                            </motion.div>
                        )
                    ))}
                </div>

                {/* Physical Buttons (iPhone Style) */}
                <div className="absolute -left-[10px] top-28 w-[3px] h-12 bg-[#222] rounded-l-md shadow-inner" />
                <div className="absolute -left-[10px] top-44 w-[3.5px] h-16 bg-[#222] rounded-l-md shadow-inner" />
                <div className="absolute -left-[10px] top-64 w-[3.5px] h-16 bg-[#222] rounded-l-md shadow-inner" />
                <div className="absolute -right-[10px] top-48 w-[3.5px] h-24 bg-[#222] rounded-r-md shadow-inner" />
            </motion.div>
        </div>
    )
}

// ─── Custom Dark-Theme Isometric SVGs (Previous Utils) ───────────────────────

const GreenCubes = () => (
    <svg width="200" height="150" viewBox="0 0 200 150" fill="none" className="absolute -bottom-4 -right-4">
        <g stroke="#d4af37" strokeWidth="1" strokeLinejoin="round">
            <path d="M100 60 L130 45 L160 60 L130 75 Z" fill="#d4af37" fillOpacity="0.1" />
            <path d="M100 60 L130 75 L130 105 L100 90 Z" fill="#d4af37" fillOpacity="0.2" />
            <path d="M160 60 L130 75 L130 105 L160 90 Z" fill="#d4af37" fillOpacity="0.3" />
            <path d="M60 80 L90 65 L120 80 L90 95 Z" fill="#d4af37" fillOpacity="0.1" />
            <path d="M60 80 L90 95 L90 125 L60 110 Z" fill="#d4af37" fillOpacity="0.2" />
            <path d="M120 80 L90 95 L90 125 L120 110 Z" fill="#d4af37" fillOpacity="0.3" />
            <path d="M100 100 L130 85 L160 100 L130 115 Z" fill="#d4af37" fillOpacity="0.1" />
            <path d="M100 100 L130 115 L130 145 L100 130 Z" fill="#d4af37" fillOpacity="0.2" />
            <path d="M160 100 L130 115 L130 145 L160 130 Z" fill="#d4af37" fillOpacity="0.3" />
        </g>
    </svg>
)

const PurplePills = () => (
    <svg width="200" height="150" viewBox="0 0 200 150" fill="none" className="absolute -bottom-4 -right-4">
        <g stroke="#d4af37" strokeWidth="1.5">
            <rect x="70" y="50" width="90" height="24" rx="12" transform="rotate(-30 115 62)" fill="#d4af37" fillOpacity="0.1" />
            <circle cx="100" cy="40" r="4" fill="#d4af37" />
            <rect x="50" y="80" width="110" height="24" rx="12" transform="rotate(-30 105 92)" fill="#d4af37" fillOpacity="0.2" />
            <path d="M70 100 L100 100" strokeDasharray="3 3" transform="rotate(-30 85 100)" />
            <rect x="90" y="110" width="70" height="24" rx="12" transform="rotate(-30 125 122)" fill="#d4af37" fillOpacity="0.3" />
            <circle cx="110" cy="115" r="3" fill="#d4af37" />
        </g>
    </svg>
)

const BluePanels = () => (
    <svg width="200" height="150" viewBox="0 0 200 150" fill="none" className="absolute -bottom-4 -right-4">
        <g stroke="#d4af37" strokeWidth="1.5" strokeLinejoin="round">
            <path d="M40 100 Q 100 150 160 80" strokeDasharray="2 3" strokeOpacity="0.5" />
            <path d="M110 30 L150 50 L150 90 L110 70 Z" fill="#d4af37" fillOpacity="0.1" />
            <path d="M100 40 L140 60 L140 100 L100 80 Z" strokeOpacity="0.5" fill="#d4af37" fillOpacity="0.6" />
            <circle cx="120" cy="70" r="4" fill="#fff" />
            <path d="M60 70 L100 90 L100 130 L60 110 Z" fill="#d4af37" fillOpacity="0.1" />
            <path d="M50 80 L90 100 L90 140 L50 120 Z" strokeOpacity="0.5" fill="#d4af37" fillOpacity="0.6" />
            <circle cx="70" cy="110" r="4" fill="#fff" />
        </g>
    </svg>
)

const PurpleBlocks = () => (
    <svg width="200" height="150" viewBox="0 0 200 150" fill="none" className="absolute -bottom-4 -right-4">
        <g stroke="#d4af37" strokeWidth="1" strokeLinejoin="round">
            <path d="M90 70 L110 60 L130 70 L110 80 Z" fill="#d4af37" fillOpacity="0.4" />
            <path d="M90 70 L110 80 L110 100 L90 90 Z" fill="#d4af37" fillOpacity="0.8" />
            <path d="M130 70 L110 80 L110 100 L130 90 Z" fill="#d4af37" fillOpacity="0.2" />
            <path d="M60 90 L80 80 L100 90 L80 100 Z" fill="#d4af37" fillOpacity="0.4" />
            <path d="M60 90 L80 100 L80 120 L60 110 Z" fill="#d4af37" fillOpacity="0.8" />
            <path d="M100 90 L80 100 L80 120 L100 110 Z" fill="#d4af37" fillOpacity="0.2" />
            <path d="M120 90 L140 80 L160 90 L140 100 Z" fill="#d4af37" fillOpacity="0.4" />
            <path d="M120 90 L140 100 L140 120 L120 110 Z" fill="#d4af37" fillOpacity="0.8" />
            <path d="M160 90 L140 100 L140 120 L160 110 Z" fill="#d4af37" fillOpacity="0.2" />
        </g>
    </svg>
)

const YellowPyramid = () => (
    <svg width="200" height="150" viewBox="0 0 200 150" fill="none" className="absolute -bottom-4 -right-4">
        <g stroke="#d4af37" strokeWidth="1.5" strokeLinejoin="round">
            <path d="M100 130 L40 100 L100 70 L160 100 Z" fill="none" opacity="0.3" />
            <path d="M100 115 L55 92 L100 70 L145 92 Z" fill="none" opacity="0.6" />
            <path d="M100 100 L70 85 L100 70 L130 85 Z" fill="none" opacity="0.9" />
            <g transform="translate(0, -10)">
                <path d="M100 60 L115 52 L130 60 L115 68 Z" fill="#d4af37" fillOpacity="0.4" />
                <path d="M100 60 L115 68 L115 85 L100 77 Z" fill="#d4af37" fillOpacity="0.8" />
                <path d="M130 60 L115 68 L115 85 L130 77 Z" fill="#d4af37" fillOpacity="0.2" />
            </g>
        </g>
    </svg>
)

const RedLayers = () => (
    <svg width="200" height="150" viewBox="0 0 200 150" fill="none" className="absolute -bottom-4 -right-4">
        <g stroke="#d4af37" strokeWidth="1.5">
            <path d="M100 130 L40 100 L100 70 L160 100 Z" fill="none" strokeDasharray="2 3" opacity="0.4" />
            <path d="M100 115 L50 90 M100 100 L60 80 M100 85 L70 70 M100 115 L150 90 M100 100 L140 80 M100 85 L130 70" strokeDasharray="1 3" opacity="0.3" />
            <path d="M100 100 L50 75 L100 50 L150 75 Z" fill="none" opacity="0.6" />
            <path d="M100 80 L60 60 L100 40 L140 60 Z" fill="#d4af37" fillOpacity="0.1" />
            <ellipse cx="100" cy="60" rx="15" ry="8" stroke="#d4af37" fill="#0b1016" />
            <circle cx="105" cy="45" r="6" fill="#d4af37" />
            <circle cx="85" cy="55" r="4" fill="#d4af37" opacity="0.8" />
        </g>
    </svg>
)

const CARDS = [
    { title: "Age Simulator", desc: "Instantly preview recommended modes and screen limits tailored to your child's age.", Icon: Cpu, Shape: GreenCubes, delay: 0.1 },
    { title: "Mode Visualizer", desc: "Compare Strict vs Relaxed modes with live UI feedback and impact analysis.", Icon: Shield, Shape: PurplePills, delay: 0.2 },
    { title: "3D Explorer", desc: "Deep-dive hardware reveal experience. See the craftsmanship up close.", Icon: Sparkles, Shape: BluePanels, delay: 0.3 },
    { title: "Activity Insights", desc: "Monitor usage patterns without invading privacy through semantic reports.", Icon: Activity, Shape: PurpleBlocks, delay: 0.4 },
    { title: "Smart Guardrails", desc: "AI filtering that adapts to content volume and evolving digital threats.", Icon: Globe, Shape: YellowPyramid, delay: 0.5 },
    { title: "Real-time Control", desc: "Pause phone or adjust curfews instantly across a scrolling timeline.", Icon: Clock, Shape: RedLayers, delay: 0.6 }
]

export default function Hero() {
    return (
        <section className="bg-background pt-24 pb-24 font-sans border-b border-white/[0.05]">
            <div className="max-w-[1200px] mx-auto px-6">

                <div className="flex flex-col lg:flex-row items-center gap-12 mb-24">
                    {/* Left: Headline & CTA */}
                    <div className="flex-1 text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white mb-6 leading-[0.95] font-heading">
                                Clarity in a complex <br />
                                <span className="text-primary">digital economy.</span>
                            </h1>
                            <p className="text-slate-400 text-lg md:text-xl max-w-2xl mb-10 mx-auto lg:mx-0 font-medium">
                                BetterPhone isn't just a device; it's an interaction layer designed around
                                human focus. We replace addictive loops with meaningful engagement.
                            </p>
                            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                                <button className="luxury-button luxury-button-gold px-8 py-4 !h-14">
                                    Pre-order Now
                                </button>
                                <button className="luxury-button luxury-button-outline px-8 py-4 !h-14">
                                    Compare Modes
                                </button>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right: 3D Phone Explorer */}
                    <div className="flex-1 w-full flex justify-center lg:justify-end">
                        <PhoneExplorer />
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {CARDS.map((card) => (
                        <motion.div
                            key={card.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: card.delay }}
                            className="bg-[#0d0d0d] border border-white/10 rounded-2xl p-7 relative overflow-hidden group hover:border-primary/30 transition-all h-[320px] flex flex-col cursor-pointer hover:-translate-y-2 shadow-2xl"
                        >
                            <div className="flex items-center gap-3 mb-4 relative z-10">
                                <div className="relative">
                                    <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                        <card.Icon className="w-5 h-5 text-primary" />
                                    </div>
                                    <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-primary rounded-full border-2 border-[#0d0d0d]" />
                                </div>
                                <h3 className="text-white font-bold text-lg font-heading">{card.title}</h3>
                            </div>
                            <p className="text-slate-400 text-sm leading-relaxed mb-auto relative z-10 max-w-[85%] font-medium">
                                {card.desc}
                            </p>
                            <div className="absolute bottom-0 right-0 w-full h-full pointer-events-none opacity-40 group-hover:opacity-80 transition-opacity">
                                <card.Shape />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
