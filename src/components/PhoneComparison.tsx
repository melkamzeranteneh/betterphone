import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Bell, BellOff, Moon, Sun, UserCheck, ShieldCheck, Ghost } from "lucide-react"

export default function PhoneComparison() {
    const [view, setView] = useState<"standard" | "better">("better")

    return (
        <section id="comparison" className="py-24 bg-[#050505] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">The Reality Gap</h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        See how standard smartphones profit from distraction, while BetterPhone empowers focus.
                    </p>
                </div>

                {/* Toggle Switch */}
                <div className="flex justify-center mb-20">
                    <div className="inline-flex p-1.5 bg-white/5 border border-white/10 rounded-2xl">
                        <button
                            onClick={() => setView("standard")}
                            className={`px-8 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all duration-300 ${view === "standard"
                                ? "bg-red-500/20 text-red-500 border border-red-500/30"
                                : "text-slate-500 hover:text-white"
                                }`}
                        >
                            Standard Smartphone
                        </button>
                        <button
                            onClick={() => setView("better")}
                            className={`px-8 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all duration-300 ${view === "better"
                                ? "bg-emerald-500/20 text-emerald-500 border border-emerald-500/30"
                                : "text-slate-500 hover:text-white"
                                }`}
                        >
                            BetterPhone
                        </button>
                    </div>
                </div>

                {/* Comparison Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    <AnimatePresence mode="wait">
                        {view === "standard" ? (
                            <>
                                <ComparisonCard
                                    key="std-1"
                                    icon={Bell}
                                    title="Dopamine Loops"
                                    desc="Calculated notifications flooding the screen 24/7 to maximize 'time on device' metrics."
                                    color="text-red-400"
                                    accent="bg-red-400/10"
                                />
                                <ComparisonCard
                                    key="std-2"
                                    icon={Ghost}
                                    title="Open Interaction"
                                    desc="Restricted access to strangers is an afterthought, hidden behind complex sub-menus."
                                    color="text-red-400"
                                    accent="bg-red-400/10"
                                />
                                <ComparisonCard
                                    key="std-3"
                                    icon={Sun}
                                    title="Blue Light Exposure"
                                    desc="Vivid displays keep the brain alert, contributing to the global sleep crisis for kids."
                                    color="text-red-400"
                                    accent="bg-red-400/10"
                                />
                            </>
                        ) : (
                            <>
                                <ComparisonCard
                                    key="bet-1"
                                    icon={BellOff}
                                    title="Calm UI"
                                    desc="Non-addictive grayscale-lite interface. Notifications are batched and intent-based."
                                    color="text-emerald-400"
                                    accent="bg-emerald-400/10"
                                />
                                <ComparisonCard
                                    key="bet-2"
                                    icon={UserCheck}
                                    title="Safe Perimeter"
                                    desc="Hardware-level contact whitelisting. Only verified humans can reach your child."
                                    color="text-emerald-400"
                                    accent="bg-emerald-400/10"
                                />
                                <ComparisonCard
                                    key="bet-3"
                                    icon={Moon}
                                    title="Sleep-First Design"
                                    desc="Device hardware-locks at bedtime. No glowing distractions. Just rest."
                                    color="text-emerald-400"
                                    accent="bg-emerald-400/10"
                                />
                            </>
                        )}
                    </AnimatePresence>
                </div>

                {/* Visual Side-by-Side Simulation */}
                <div className="mt-20 relative h-[500px] w-full bg-[#0d0d0d] rounded-[3rem] border border-white/[0.05] overflow-hidden flex items-center justify-center">
                    <div className="absolute inset-0 opacity-20">
                        <div className="grid-background h-full w-full" />
                    </div>

                    <div className="flex gap-8 md:gap-24 relative z-10 p-6 w-full max-w-4xl">
                        {/* Standard Phone Mockup */}
                        <div className="flex-1 opacity-40 grayscale group hover:opacity-100 hover:grayscale-0 transition-all duration-700">
                            <div className="w-[180px] h-[360px] mx-auto bg-black rounded-[2.5rem] border-[6px] border-[#222] relative overflow-hidden flex flex-col items-center justify-center p-4">
                                <div className="space-y-2 w-full">
                                    {Array.from({ length: 12 }).map((_, i) => (
                                        <motion.div
                                            key={i}
                                            animate={{ x: [0, 5, 0] }}
                                            transition={{ duration: 0.1, delay: i * 0.2, repeat: Infinity, repeatDelay: 5 }}
                                            className="h-4 bg-red-500/20 rounded-md w-full flex items-center px-2"
                                        >
                                            <div className="w-2 h-2 rounded-full bg-red-500 mr-2" />
                                            <div className="h-1 bg-red-500/40 w-1/2 rounded" />
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                            <p className="text-center text-[10px] font-black uppercase tracking-widest text-red-500 mt-6">Addict loops</p>
                        </div>

                        <div className="flex items-center">
                            <div className="h-12 w-[1px] bg-white/10" />
                        </div>

                        {/* BetterPhone Mockup */}
                        <div className="flex-1">
                            <div className="relative w-[200px] h-[400px] mx-auto bg-[#080808] rounded-[2.5rem] border-[6px] border-[#1a1a1a] shadow-[0_30px_60px_rgba(0,0,0,0.5),inset_0_0_10px_rgba(255,255,255,0.05)] overflow-hidden">
                                {/* Screen Content - White Mode */}
                                <div className="absolute inset-0.5 rounded-[2.3rem] bg-white overflow-hidden flex flex-col items-center justify-center p-6 text-center">
                                    <ShieldCheck className="w-10 h-10 text-[#d4af37] mb-3" />
                                    <h4 className="text-black font-black text-sm mb-1 leading-tight font-heading">Structured Calm</h4>
                                    <p className="text-black/30 text-[10px] font-bold mb-4 uppercase tracking-widest">Focus Mode Active</p>
                                    <div className="flex gap-1">
                                        <div className="w-6 h-1 bg-[#d4af37] rounded-full" />
                                        <div className="w-2 h-1 bg-black/10 rounded-full" />
                                    </div>

                                    {/* Mock Dynamic Island */}
                                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-14 h-3.5 bg-black rounded-full" />

                                    {/* Status Icons */}
                                    <div className="absolute top-2.5 right-6 flex gap-1 opacity-20">
                                        <div className="w-2.5 h-1.5 rounded-[1px] bg-black" />
                                        <div className="w-1.5 h-1.5 rounded-full bg-black" />
                                    </div>
                                </div>
                            </div>
                            <p className="text-center text-[10px] font-black uppercase tracking-widest text-[#d4af37] mt-6">Structured calm</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

function ComparisonCard({ icon: Icon, title, desc, color, accent }: any) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="p-8 rounded-[2rem] bg-[#0d0d0d] border border-white/[0.05] hover:border-white/10 transition-colors"
        >
            <div className={`w-12 h-12 rounded-xl ${accent} flex items-center justify-center mb-6`}>
                <Icon className={`w-6 h-6 ${color}`} />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
        </motion.div>
    )
}
