import { useState } from "react"
import { motion } from "framer-motion"
import { BrainCircuit, ShieldAlert } from "lucide-react"

const DATA = [
    { year: 2023, volume: "1.2B", threats: "Moderate", scale: 0.2, desc: "Early-stage AI content generation. Standard filters mostly holding." },
    { year: 2024, volume: "4.8B", threats: "High", scale: 0.4, desc: "Mass proliferation of deepfakes and algorithmic doom-scrolling loops." },
    { year: 2025, volume: "18.5B", threats: "Severe", scale: 0.6, desc: "AI-generated social engineering targeting children directly. Mental health crisis peaks." },
    { year: 2026, volume: "52.0B", threats: "Critical", scale: 0.8, desc: "Synthetically personalized addictive content. Invisible to legacy filters." },
    { year: 2028, volume: "140B+", threats: "Uncharted", scale: 1.0, desc: "Total content saturation. Protective hardware layers become mandatory for focus." },
]

export default function ThreatSimulator() {
    const [index, setIndex] = useState(0)
    const current = DATA[index]

    return (
        <section id="threats" className="py-24 bg-[#030303] border-b border-white/[0.05]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    {/* Left: Info */}
                    <div className="flex-1 w-full">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500 text-[10px] font-black uppercase tracking-widest mb-6">
                            <ShieldAlert className="w-3 h-3" />
                            Content Evolution Forecast
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Future-Proofed Protection</h2>
                        <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                            The digital economy is exponential. Static parental controls are already obsolete. Use the slider to see why hardware-level semantic filtering is the only path forward.
                        </p>

                        <div className="space-y-8 mb-12">
                            <div>
                                <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">Year</p>
                                <p className="text-4xl font-black text-white">{current.year}</p>
                            </div>
                            <div className="grid grid-cols-2 gap-8">
                                <div>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">AI Content Volume</p>
                                    <p className="text-xl font-bold text-white">{current.volume} items/yr</p>
                                </div>
                                <div>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">Algorithmic Risk</p>
                                    <p className={`text-xl font-bold ${index > 2 ? 'text-red-500' : 'text-amber-500'}`}>{current.threats}</p>
                                </div>
                            </div>
                        </div>

                        <div className="relative pt-10">
                            <input
                                type="range"
                                min="0"
                                max={DATA.length - 1}
                                step="1"
                                value={index}
                                onChange={(e) => setIndex(parseInt(e.target.value))}
                                className="w-full h-1.5 bg-white/10 rounded-full appearance-none cursor-pointer accent-red-500"
                            />
                            <div className="flex justify-between mt-4">
                                {DATA.map((d, i) => (
                                    <span key={i} className={`text-[10px] font-black ${index === i ? 'text-white' : 'text-slate-600'}`}>{d.year}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right: Visualization */}
                    <div className="flex-1 w-full">
                        <div className="aspect-square bg-[#0d0d0d] border border-white/[0.05] rounded-[3rem] relative overflow-hidden flex items-center justify-center p-12">
                            {/* Abstract Neural Web */}
                            <div className="absolute inset-0 opacity-20 pointer-events-none">
                                <div className="grid-background h-full w-full" />
                            </div>

                            <div className="relative w-full h-full flex items-center justify-center">
                                {/* The "Protection Layer" Visual */}
                                <motion.div
                                    animate={{
                                        scale: 0.8 + current.scale,
                                        opacity: index / 5 + 0.2
                                    }}
                                    className="absolute w-[200px] h-[200px] border-[20px] border-red-500/20 rounded-full blur-2xl"
                                />

                                <motion.div
                                    animate={{
                                        rotate: index * 45,
                                        scale: 0.6 + current.scale * 0.4
                                    }}
                                    className="relative z-10 w-48 h-48 border-2 border-red-500/30 rounded-3xl flex items-center justify-center"
                                >
                                    <BrainCircuit className="w-20 h-20 text-red-500" />

                                    {/* Orbiting bits */}
                                    {Array.from({ length: 8 }).map((_, i) => (
                                        <motion.div
                                            key={i}
                                            animate={{
                                                rotate: -360,
                                            }}
                                            transition={{ duration: 10 - index, repeat: Infinity, ease: "linear" }}
                                            className="absolute"
                                            style={{ rotate: i * 45 }}
                                        >
                                            <div className="w-2 h-2 rounded-full bg-red-400 translate-y-24" />
                                        </motion.div>
                                    ))}
                                </motion.div>

                                <div className="absolute bottom-0 w-full text-center">
                                    <p className="text-slate-400 text-sm leading-relaxed max-w-xs mx-auto">
                                        {current.desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
