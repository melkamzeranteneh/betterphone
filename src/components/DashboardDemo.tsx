import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Shield, Moon, Clock, Battery, Signal, Zap } from "lucide-react"

export default function DashboardDemo() {
    const [isPaused, setIsPaused] = useState(false)
    const [bedtimeActive, setBedtimeActive] = useState(false)
    const [currentMode, setCurrentMode] = useState("Home")

    return (
        <section id="demo" className="py-24 bg-[#030303] border-b border-white/[0.05]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    {/* Left: Interactive Control Panel */}
                    <div className="flex-1 w-full order-2 lg:order-1">
                        <div className="flex items-center gap-2 mb-6">
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Live Simulation</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Take Control Instantly</h2>
                        <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                            Simulate the parent experience. Every action you take here reflected on the device in real-time. Control doesn't have to be complex.
                        </p>

                        <div className="space-y-4">
                            <ControlButton
                                active={isPaused}
                                onClick={() => setIsPaused(!isPaused)}
                                title="Pause Device"
                                desc="Instantly lock all screen interaction."
                                icon={Zap}
                                activeColor="bg-amber-500/20 text-amber-500 border-amber-500/30"
                            />
                            <ControlButton
                                active={bedtimeActive}
                                onClick={() => setBedtimeActive(!bedtimeActive)}
                                title="Enforce Bedtime"
                                desc="Fade screen to black & disable apps."
                                icon={Moon}
                                activeColor="bg-blue-500/20 text-blue-500 border-blue-500/30"
                            />
                            <div className="p-6 rounded-2xl bg-[#0d0d0d] border border-white/10 group cursor-pointer hover:border-primary/30 transition-all">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                                        <Shield className="w-5 h-5 text-slate-400" />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-white font-bold">Switch Mode</h4>
                                        <p className="text-slate-500 text-xs">Current: {currentMode}</p>
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    {["School", "Home", "Travel"].map((mode) => (
                                        <button
                                            key={mode}
                                            onClick={() => setCurrentMode(mode)}
                                            className={`flex-1 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${currentMode === mode
                                                ? "bg-primary text-black"
                                                : "bg-white/5 text-slate-500 hover:text-white"
                                                }`}
                                        >
                                            {mode}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: The Response Device */}
                    <div className="flex-1 w-full order-1 lg:order-2">
                        <div className="relative w-[300px] h-[600px] mx-auto bg-[#080808] rounded-[3.5rem] border-[8px] border-[#1a1a1a] shadow-[0_50px_100px_rgba(0,0,0,0.8),inset_0_0_20px_rgba(255,255,255,0.05)] overflow-hidden">
                            {/* Screen Content - White Mode */}
                            <div className="absolute inset-1 rounded-[3.1rem] overflow-hidden bg-white">
                                <div className="w-full h-full flex flex-col p-8 pt-12 relative">
                                    {/* Status Bar */}
                                    <div className="flex justify-between items-center px-2 mb-10">
                                        <span className="text-black font-bold text-[13px]">9:41</span>
                                        <div className="flex gap-1.5 items-center grayscale opacity-60">
                                            <Battery className="w-3.5 h-3.5 text-black" />
                                            <Signal className="w-3.5 h-3.5 text-black" />
                                        </div>
                                    </div>

                                    {/* Dynamic Island Pill */}
                                    <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-full z-[60] flex items-center justify-end px-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 opacity-40" />
                                    </div>

                                    <AnimatePresence mode="wait">
                                        {isPaused ? (
                                            <motion.div
                                                key="paused"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                className="absolute inset-0 z-50 bg-black flex flex-col items-center justify-center p-8 text-center"
                                            >
                                                <div className="w-16 h-16 rounded-full bg-amber-500/20 border border-amber-500/30 flex items-center justify-center mb-6">
                                                    <Zap className="w-8 h-8 text-amber-500" />
                                                </div>
                                                <h3 className="text-white font-bold text-xl mb-2 font-heading">Paused</h3>
                                                <p className="text-slate-500 text-sm">Focus time active. Talk to your parent to unlock.</p>
                                            </motion.div>
                                        ) : bedtimeActive ? (
                                            <motion.div
                                                key="bedtime"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                className="absolute inset-0 z-50 bg-[#03060a] flex flex-col items-center justify-center p-8 text-center"
                                            >
                                                <Moon className="w-12 h-12 text-blue-500 mb-6 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
                                                <h3 className="text-white font-bold text-2xl mb-2 font-heading">Sleep Mode</h3>
                                                <div className="w-24 h-1 bg-white/5 rounded-full overflow-hidden mt-4">
                                                    <motion.div
                                                        initial={{ x: "-100%" }}
                                                        animate={{ x: 0 }}
                                                        className="h-full bg-blue-500 w-full"
                                                    />
                                                </div>
                                            </motion.div>
                                        ) : (
                                            <motion.div
                                                key="normal"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                className="flex-1 flex flex-col"
                                            >
                                                <div className="flex flex-col items-center mb-10">
                                                    <div className="text-[10px] font-black uppercase tracking-widest text-[#d4af37] mb-2">{currentMode} Mode</div>
                                                    <h4 className="text-black text-[32px] font-heading font-black tracking-tight text-center leading-[1.1]">Good afternoon</h4>
                                                </div>

                                                <div className="grid grid-cols-2 gap-4">
                                                    {[
                                                        { name: "Phone", color: "bg-[#4ade80]" },
                                                        { name: "Classroom", color: "bg-blue-500" },
                                                        { name: "Calculator", color: "bg-[#94a3b8]" },
                                                        { name: "Maps", color: "bg-white border border-black/5" },
                                                    ].map((app) => (
                                                        <div key={app.name} className="aspect-square rounded-[2rem] bg-slate-50 border border-slate-100 flex flex-col items-center justify-center gap-2 shadow-sm">
                                                            <div className={`w-12 h-12 rounded-2xl ${app.color} flex items-center justify-center shadow-lg shadow-black/5`}>
                                                                <div className="w-4 h-4 rounded bg-white/20" />
                                                            </div>
                                                            <span className="text-[9px] font-bold text-black/30">{app.name}</span>
                                                        </div>
                                                    ))}
                                                </div>

                                                <div className="mt-auto mb-4 p-5 rounded-3xl bg-primary/5 border border-primary/10 text-center">
                                                    <div className="flex items-center justify-center gap-2 mb-1">
                                                        <Clock className="w-3.5 h-3.5 text-primary" />
                                                        <span className="text-[9px] font-black uppercase tracking-widest text-primary">Remaining Limit</span>
                                                    </div>
                                                    <p className="text-black font-black text-lg tracking-tighter">2h 30m</p>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    {/* Home Bar */}
                                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-black/10 rounded-full" />
                                </div>
                            </div>

                            {/* Physical Buttons (Mockup) */}
                            <div className="absolute -left-[10px] top-28 w-[3px] h-12 bg-[#222] rounded-l-md" />
                            <div className="absolute -left-[10px] top-44 w-[4px] h-16 bg-[#222] rounded-l-md" />
                            <div className="absolute -right-[10px] top-48 w-[4px] h-20 bg-[#222] rounded-r-md" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

function ControlButton({ active, onClick, title, desc, icon: Icon, activeColor }: any) {
    return (
        <button
            onClick={onClick}
            className={`w-full p-6 rounded-2xl border transition-all duration-300 text-left ${active
                ? activeColor
                : "bg-[#0d0d0d] border-white/10 hover:border-white/20"
                }`}
        >
            <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${active ? 'bg-current opacity-20' : 'bg-white/5'}`}>
                    <Icon className={`w-5 h-5 ${active ? 'text-current' : 'text-slate-400'}`} />
                </div>
                <div>
                    <h4 className={`font-bold ${active ? 'text-current' : 'text-white'}`}>{title}</h4>
                    <p className="text-slate-500 text-xs">{desc}</p>
                </div>
            </div>
        </button>
    )
}
