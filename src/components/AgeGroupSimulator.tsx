import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Check, ShieldCheck, Clock, MapPin, Smartphone, AlertTriangle, Battery, Signal } from "lucide-react"

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

                    {/* Mock Dashboard View - iPhone Style */}
                    <div className="perspective-1000">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={selectedAge + "-mock"}
                                initial={{ opacity: 0, x: 40, rotateY: -10 }}
                                animate={{ opacity: 1, x: 0, rotateY: -10 }}
                                exit={{ opacity: 0, x: -40, rotateY: -10 }}
                                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                className="relative w-[300px] h-[600px] mx-auto bg-[#080808] rounded-[3.5rem] border-[8px] border-[#1a1a1a] shadow-[0_60px_100px_rgba(0,0,0,0.8),inset_0_0_20px_rgba(255,255,255,0.05)] overflow-hidden"
                            >
                                {/* Screen Content - White Mode UI */}
                                <div className="absolute inset-1 rounded-[3.1rem] overflow-hidden bg-white">
                                    <div className="w-full h-full flex flex-col p-8 pt-12 relative font-sans">
                                        {/* Status Bar */}
                                        <div className="flex justify-between items-center px-1 mb-10">
                                            <span className="text-black font-bold text-[12px]">9:41</span>
                                            <div className="flex gap-1.5 items-center grayscale opacity-40">
                                                <Battery className="w-3 h-3 text-black" />
                                                <Signal className="w-3 h-3 text-black" />
                                            </div>
                                        </div>

                                        {/* Dynamic Island Pill */}
                                        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-full z-40" />

                                        <div className="flex justify-between items-center mb-8">
                                            <div className="p-2.5 rounded-2xl bg-primary/10 border border-primary/20">
                                                <ShieldCheck className="w-5 h-5 text-primary" />
                                            </div>
                                            <div className="text-[9px] font-black tracking-[0.2em] text-black/30 uppercase">Parental Insights</div>
                                        </div>

                                        <div className="space-y-6">
                                            <div className="p-6 rounded-[2rem] bg-slate-50 border border-slate-100 shadow-sm">
                                                <div className="flex justify-between mb-4">
                                                    <span className="text-black/40 text-[10px] font-black uppercase tracking-widest">Daily Focus</span>
                                                    <span className="text-black font-black text-[10px]">42m / {data.limits.split(' ')[0]}</span>
                                                </div>
                                                <div className="w-full h-2 bg-black/[0.06] rounded-full overflow-hidden">
                                                    <motion.div
                                                        initial={{ width: 0 }}
                                                        animate={{ width: "40%" }}
                                                        className="h-full bg-primary"
                                                    />
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="p-6 rounded-[2rem] bg-slate-50 border border-slate-100 flex flex-col items-center gap-3 shadow-sm">
                                                    <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 flex items-center justify-center">
                                                        <MapPin className="w-5 h-5 text-emerald-500" />
                                                    </div>
                                                    <span className="text-[8px] font-black uppercase tracking-widest text-black/20">Location</span>
                                                    <span className="text-black text-[10px] font-black uppercase">Verified</span>
                                                </div>
                                                <div className="p-6 rounded-[2rem] bg-slate-50 border border-slate-100 flex flex-col items-center gap-3 shadow-sm">
                                                    <div className="w-10 h-10 rounded-2xl bg-blue-500/10 flex items-center justify-center">
                                                        <Smartphone className="w-5 h-5 text-blue-500" />
                                                    </div>
                                                    <span className="text-[8px] font-black uppercase tracking-widest text-black/20">Guardrails</span>
                                                    <span className="text-black text-[10px] font-black uppercase">Active</span>
                                                </div>
                                            </div>

                                            <div className="p-6 rounded-[2rem] bg-primary/[0.03] border border-primary/10 text-center">
                                                <p className="text-black font-bold text-xs leading-relaxed">
                                                    {data.dashboard}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Home Bar */}
                                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-black/10 rounded-full" />
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    )
}
