import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Shield, Cpu, Zap, Activity, Globe, Battery, Signal } from "lucide-react"

const MODES = [
    {
        name: "Max Protection",
        value: 0,
        apps: ["Phone", "Messages", "Music", "Maps"],
        screenColor: "bg-slate-50",
        stats: { screenTime: "Restrictive", filtering: "Military Grade", battery: "12 Days" },
        desc: "Hardcore focus. Hardware-blocks social media and web browser completely.",
        icon: Shield
    },
    {
        name: "Balanced Guard",
        value: 50,
        apps: ["Phone", "Messages", "Music", "Maps", "Calculator", "Notion", "Spotify"],
        screenColor: "bg-white",
        stats: { screenTime: "Scheduled", filtering: "Semantic Pro", battery: "9 Days" },
        desc: "Interactive utility mode. Allows educational and creative tools while filtering distractions.",
        icon: Activity
    },
    {
        name: "Flexible Trust",
        value: 100,
        apps: ["Phone", "Messages", "Music", "Maps", "All Apps", "Browser (Filtered)"],
        screenColor: "bg-slate-50",
        stats: { screenTime: "Self-Regulated", filtering: "Network Level", battery: "7 Days" },
        desc: "Open communication with invisible safety rails. Focus on self-regulation and privacy.",
        icon: Globe
    }
]

export default function ModeVisualizer() {
    const [sliderValue, setSliderValue] = useState(50)

    // Find closest mode
    const activeMode = MODES.reduce((prev, curr) =>
        Math.abs(curr.value - sliderValue) < Math.abs(prev.value - sliderValue) ? curr : prev
    )

    return (
        <section id="mode-visualizer" className="py-32 bg-[#030303] border-b border-white/[0.05] relative overflow-hidden">
            {/* Background Atmosphere */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    {/* Left: Interactive Controls */}
                    <div className="flex-1 w-full">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6"
                        >
                            <Cpu className="w-3.5 h-3.5 text-primary" />
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Granular Control</span>
                        </motion.div>

                        <h2 className="text-4xl md:text-6xl font-black text-white mb-6 font-heading leading-tight">
                            Scale Protection <br />
                            <span className="text-primary/60">without Friction.</span>
                        </h2>
                        <p className="text-slate-400 text-lg md:text-xl mb-12 font-medium max-w-xl">
                            Drag the bar to see how BetterPhone scales its intensity. Take psychological ownership of your child's digital environment instantly.
                        </p>

                        <div className="relative mb-20 px-4">
                            <div className="flex justify-between mb-8">
                                <span className={`text-[10px] font-black uppercase tracking-[0.2em] transition-colors ${sliderValue < 30 ? 'text-primary' : 'text-slate-600'}`}>Strict</span>
                                <span className={`text-[10px] font-black uppercase tracking-[0.2em] transition-colors ${sliderValue >= 30 && sliderValue <= 70 ? 'text-primary' : 'text-slate-600'}`}>Balanced</span>
                                <span className={`text-[10px] font-black uppercase tracking-[0.2em] transition-colors ${sliderValue > 70 ? 'text-primary' : 'text-slate-600'}`}>Relaxed</span>
                            </div>

                            <div className="relative h-2 w-full bg-[#121212] rounded-full">
                                <input
                                    type="range"
                                    min="0"
                                    max="100"
                                    step="1"
                                    value={sliderValue}
                                    onChange={(e) => setSliderValue(parseInt(e.target.value))}
                                    className="absolute inset-0 w-full h-full bg-transparent appearance-none cursor-pointer z-10 accent-transparent"
                                />
                                <motion.div
                                    className="absolute top-0 left-0 h-full bg-primary rounded-full"
                                    animate={{ width: `${sliderValue}%` }}
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                                <motion.div
                                    animate={{ left: `${sliderValue}%` }}
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    className="absolute top-1/2 -translate-y-1/2 -ml-4 w-8 h-8 rounded-full bg-white border-[6px] border-[#030303] shadow-[0_0_20px_rgba(212,175,55,0.4)] pointer-events-none flex items-center justify-center border-solid"
                                >
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                </motion.div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                            {[
                                { label: "Filtering", value: activeMode.stats.filtering, Icon: Shield },
                                { label: "Screen Time", value: activeMode.stats.screenTime, Icon: Battery },
                                { label: "Battery Life", value: activeMode.stats.battery, Icon: Zap }
                            ].map((stat) => (
                                <motion.div
                                    key={stat.label}
                                    whileHover={{ y: -5 }}
                                    className="p-6 rounded-2xl bg-[#0d0d0d] border border-white/5 hover:border-primary/20 transition-all font-sans"
                                >
                                    <stat.Icon className="w-5 h-5 text-primary mb-4" />
                                    <p className="text-[9px] font-black uppercase tracking-widest text-slate-500 mb-1">{stat.label}</p>
                                    <p className="text-white font-bold text-sm tracking-tight">{stat.value}</p>
                                </motion.div>
                            ))}
                        </div>

                        <motion.p
                            key={activeMode.name}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-12 text-slate-400 text-lg leading-relaxed font-medium bg-gradient-to-r from-white/10 to-transparent p-6 rounded-2xl border-l-2 border-primary"
                        >
                            "{activeMode.desc}"
                        </motion.p>
                    </div>

                    {/* Right: Real-time UI Preview */}
                    <div className="flex-1 w-full perspective-1000">
                        <motion.div
                            animate={{ rotateX: 5, rotateY: -10 }}
                            className="relative w-[300px] h-[600px] mx-auto bg-[#080808] rounded-[3.5rem] border-[8px] border-[#1a1a1a] shadow-[0_60px_100px_rgba(0,0,0,0.8),inset_0_0_20px_rgba(255,255,255,0.05)] overflow-hidden"
                        >
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeMode.name}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className={`absolute inset-1 rounded-[3.1rem] overflow-hidden ${activeMode.screenColor}`}
                                >
                                    <div className="w-full h-full flex flex-col p-8 pt-12 relative font-sans">
                                        {/* Status Bar */}
                                        <div className="flex justify-between items-center px-1 mb-10">
                                            <span className="text-black font-bold text-[12px]">9:41</span>
                                            <div className="flex gap-1.5 items-center grayscale opacity-40">
                                                <Battery className="w-3.5 h-3.5 text-black" />
                                                <Signal className="w-3.5 h-3.5 text-black" />
                                            </div>
                                        </div>

                                        {/* Dynamic Island Pill */}
                                        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-full z-40 flex items-center justify-end px-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary/40 animate-pulse" />
                                        </div>

                                        <div className="flex flex-col items-center gap-1 mb-12 text-center">
                                            <div className="w-12 h-12 rounded-2xl bg-[#d4af37]/10 flex items-center justify-center mb-4">
                                                <activeMode.icon className="w-6 h-6 text-[#d4af37]" />
                                            </div>
                                            <h4 className="text-black font-heading text-[28px] font-black tracking-tight leading-tight">{activeMode.name}</h4>
                                            <p className="text-[#d4af37] text-[9px] font-black uppercase tracking-[0.2em] mt-2">Mode Active</p>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            {activeMode.apps.slice(0, 4).map((app) => (
                                                <div
                                                    key={app}
                                                    className="aspect-square bg-slate-50 border border-slate-100 rounded-3xl flex flex-col items-center justify-center gap-3 shadow-sm"
                                                >
                                                    <div className="w-11 h-11 rounded-2xl bg-white shadow-lg shadow-black/[0.03] flex items-center justify-center">
                                                        <div className="w-4 h-4 rounded bg-[#d4af37]/20" />
                                                    </div>
                                                    <span className="text-[9px] text-black/40 font-black uppercase tracking-widest">{app}</span>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Activity Insight */}
                                        <div className="mt-auto mb-4 bg-black/[0.03] rounded-2xl p-4 flex items-center gap-4">
                                            <div className="p-2 rounded-xl bg-white shadow-sm">
                                                <Activity className="w-4 h-4 text-[#d4af37]" />
                                            </div>
                                            <div>
                                                <p className="text-[8px] font-black uppercase tracking-widest text-black/30">Activity</p>
                                                <p className="text-[11px] font-bold text-black leading-none">Normal Range</p>
                                            </div>
                                        </div>

                                        {/* Home Bar */}
                                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-black/10 rounded-full" />
                                    </div>
                                </motion.div>
                            </AnimatePresence>

                            {/* Physical Buttons (Mockup Integration) */}
                            <div className="absolute -left-[10px] top-28 w-[2px] h-12 bg-white/10 rounded-l-md" />
                            <div className="absolute -left-[10px] top-44 w-[3px] h-16 bg-white/10 rounded-l-md" />
                            <div className="absolute -right-[10px] top-48 w-[3px] h-20 bg-white/10 rounded-r-md" />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}
