import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Check, Shield, Activity, Globe, Clock, Smartphone, AlertTriangle } from "lucide-react"

const AGE_DATA = {
    "6-9": {
        mode: "Foundation Safe",
        limits: "1.5h / day",
        risks: "Inappropriate content, excessive gaming, strangers.",
        features: ["Whitelisted Contacts Only", "No Browser Access", "Automatic Bedtime Lock", "Location SOS Tracking"],
        dashboard: "Focus on essential safety and learning.",
        accent: "#d4af37"
    },
    "10-13": {
        mode: "Controlled Independence",
        limits: "2.5h / day",
        risks: "Cyberbullying, social pressure, game addiction.",
        features: ["Curated App Store", "Safe Search Enabled", "School Mode Schedule", "Usage History Reports"],
        dashboard: "Balancing utilities with supervised social.",
        accent: "#d4af37"
    },
    "14-17": {
        mode: "Trust-Based Freedom",
        limits: "Flexible Curfew",
        risks: "Privacy issues, misinformation, sleep disruption.",
        features: ["Full App Access", "Semantic Content Alerts", "Privacy Shielding", "Digital Trust Score"],
        dashboard: "Empowering self-regulation and privacy.",
        accent: "#d4af37"
    }
}

export default function AgeGroupSimulator() {
    const [selectedAge, setSelectedAge] = useState<keyof typeof AGE_DATA>("10-13")
    const data = AGE_DATA[selectedAge]
    const MODE_OPTIONS = {
        relaxed: {
            title: "Relaxed Mode",
            desc: "For older, responsible kids with light guardrails.",
            icon: Globe,
            accent: "text-emerald-400",
            badge: "Trusted Access",
            highlights: ["Wider app access", "Filtered browser", "Privacy alerts", "Self-regulated"],
            apps: ["Phone", "Messages", "Music", "Maps", "All Apps"]
        },
        default: {
            title: "Default Mode",
            desc: "Recommended by our team of child psychologists and our parent community.",
            icon: Activity,
            accent: "text-amber-400",
            badge: "Psychologist Recommended",
            highlights: ["Safe search", "Curated apps", "School schedule", "Usage summaries"],
            apps: ["Phone", "Messages", "Music", "Maps", "Notes"]
        },
        strict: {
            title: "Strict Mode",
            desc: "For younger children or those most at risk.",
            icon: Shield,
            accent: "text-red-400",
            badge: "Maximum Protection",
            highlights: ["No social media", "No browser access", "Essential apps only", "Automatic bedtime"],
            apps: ["Phone", "Messages", "Music", "Maps"]
        },
        custom: {
            title: "Custom Mode",
            desc: "Start from a base mode and adjust every protection from your phone.",
            icon: Smartphone,
            accent: "text-blue-400",
            badge: "Fully Adjustable",
            highlights: ["Per-app controls", "Granular filters", "Curfew rules", "Family presets"],
            apps: ["Pick your own", "Browser rules", "Social limits", "Custom groups"]
        }
    } as const

    const [selectedMode, setSelectedMode] = useState<keyof typeof MODE_OPTIONS>('default')
    const modeInfo = MODE_OPTIONS[selectedMode]

    return (
        <section id="age-selector" className="py-32 bg-[#030303] border-b border-white/[0.05] relative overflow-hidden">
            {/* Background Atmosphere */}
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6"
                    >
                        <Smartphone className="w-3.5 h-3.5 text-primary" />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Evolutionary Safety</span>
                    </motion.div>

                    <h2 className="text-4xl md:text-6xl font-black text-white mb-6 font-heading leading-tight">
                        Built to Grow <br />
                        <span className="text-primary/60">with your Child.</span>
                    </h2>
                    <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto font-medium">
                        Protection isn't binary. BetterPhone dynamically adapts its interaction layers as your child’s cognitive needs evolve.
                    </p>
                </div>

                {/* Age Selector */}
                <div className="flex justify-center flex-wrap gap-4 mb-20">
                    {(Object.keys(AGE_DATA) as Array<keyof typeof AGE_DATA>).map((group) => (
                        <button
                            key={group}
                            onClick={() => setSelectedAge(group)}
                            className={`px-10 py-5 rounded-[2rem] text-xs font-black uppercase tracking-[0.2em] transition-all duration-500 border-2 ${selectedAge === group
                                ? "bg-primary text-black border-primary shadow-[0_0_40px_rgba(212,175,55,0.25)]"
                                : "bg-[#0d0d0d] text-slate-500 border-white/5 hover:border-white/20 hover:text-white"
                                }`}
                        >
                            Ages {group}
                        </button>
                    ))}
                </div>

                {/* Mode Selector */}
                <div className="flex justify-center flex-wrap gap-3 mb-8">
                    {(Object.keys(MODE_OPTIONS) as Array<keyof typeof MODE_OPTIONS>).map((m) => (
                        <button
                            key={m}
                            onClick={() => setSelectedMode(m)}
                            className={`px-6 py-3 rounded-full text-xs font-black uppercase tracking-[0.12em] transition-all duration-300 border-2 ${selectedMode === m
                                ? "bg-primary text-black border-primary shadow-[0_0_30px_rgba(212,175,55,0.18)]"
                                : "bg-[#0d0d0d] text-slate-500 border-white/5 hover:border-white/20 hover:text-white"
                                }`}
                        >
                            {MODE_OPTIONS[m].title}
                        </button>
                    ))}
                </div>

                {/* Mode Description */}
                <div className="text-center mb-12">
                    <p className="text-slate-400 text-sm max-w-3xl mx-auto font-medium">{modeInfo.desc}</p>
                </div>

                {/* Dynamic Content */}
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={selectedAge + "-info"}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.5 }}
                            className="bg-[#0d0d0d] border border-white/[0.05] p-10 md:p-14 rounded-[3.5rem] shadow-2xl relative overflow-hidden"
                        >
                            {/* Accent Glow */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl rounded-full" />

                            <div className="flex items-center gap-2 mb-8 relative z-10">
                                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Intelligent Recommendation</span>
                            </div>

                            <h3 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight font-heading relative z-10">
                                {data.mode}
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 relative z-10">
                                <div className="space-y-1">
                                    <div className="flex items-center gap-2 text-primary mb-1">
                                        <Clock className="w-4 h-4" />
                                        <p className="text-[10px] font-black uppercase tracking-widest">Screen Limit</p>
                                    </div>
                                    <p className="text-white font-bold text-lg">{data.limits}</p>
                                </div>
                                <div className="space-y-1">
                                    <div className="flex items-center gap-2 text-amber-500 mb-1">
                                        <AlertTriangle className="w-4 h-4" />
                                        <p className="text-[10px] font-black uppercase tracking-widest">Risk Mitigation</p>
                                    </div>
                                    <p className="text-slate-400 text-sm font-medium leading-relaxed">{data.risks}</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
                                {data.features.map((feat, i) => (
                                    <div key={i} className="flex items-center gap-3 p-5 bg-white/[0.03] border border-white/[0.03] rounded-2xl group hover:bg-white/[0.05] transition-colors">
                                        <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                                            <Check className="w-3.5 h-3.5 text-primary" />
                                        </div>
                                        <span className="text-[11px] text-slate-300 font-bold leading-tight">{feat}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Mode Snapshot */}
                    <div className="flex-1 w-full">
                        <div className="max-w-md mx-auto rounded-[2.5rem] bg-[#0d0d0d] border border-white/5 p-8 shadow-2xl">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                                    <modeInfo.icon className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Mode Snapshot</p>
                                    <p className="text-white font-bold text-lg">{modeInfo.title}</p>
                                </div>
                            </div>

                            <p className={`text-[10px] font-black uppercase tracking-[0.2em] ${modeInfo.accent}`}>{modeInfo.badge}</p>
                            <p className="text-slate-400 text-sm leading-relaxed mt-3">{modeInfo.desc}</p>

                            <div className="grid grid-cols-1 gap-3 mt-6">
                                {modeInfo.highlights.map((item) => (
                                    <div key={item} className="flex items-center gap-3 p-4 rounded-2xl bg-white/[0.03] border border-white/[0.04]">
                                        <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center">
                                            <Check className="w-3.5 h-3.5 text-primary" />
                                        </div>
                                        <span className="text-[11px] font-bold text-slate-300 uppercase tracking-wider">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-black/30 rounded-2xl p-5 mt-6">
                                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-3">App Access</p>
                                <div className="flex flex-wrap gap-2">
                                    {modeInfo.apps.map((app) => (
                                        <span key={app} className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.15em] bg-white/5 text-slate-300">
                                            {app}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
