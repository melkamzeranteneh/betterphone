import { motion } from "framer-motion"
import { Check, X, Shield, Activity, Globe, Zap, Clock, Smartphone, SlidersHorizontal } from "lucide-react"

const MODE_FEATURES = [
    { name: "Content Filtering", strict: "Hardware-Level", balanced: "Network-Based", relaxed: "Semantic Filter", custom: "You choose" },
    { name: "App Whitelisting", strict: "Essential Only", balanced: "Curated Utility", relaxed: "Open Access", custom: "Per-app rules" },
    { name: "Browser Access", strict: false, balanced: "Safe-Mode Only", relaxed: "Filtered", custom: "Rule-based" },
    { name: "Social Media", strict: false, balanced: false, relaxed: "Timed Access", custom: "Algorithm tuned" },
    { name: "Physical Tracking", strict: "Real-time SOS", balanced: "Geo-Fencing", relaxed: "On-Request", custom: "Parent controlled" },
    { name: "Interaction Batching", strict: true, balanced: true, relaxed: "Optional", custom: "Parent decides" },
]


import { useState } from "react"

const MODE_PHONE = {
    relaxed: {
        label: "Relaxed",
        bg: "bg-slate-50",
        bar: "bg-emerald-400/80",
        icon: <Globe className="w-7 h-7 text-emerald-500" />,
        accent: "text-emerald-500",
        apps: [
            { name: "Phone", icon: <Globe className="w-6 h-6 text-emerald-500" /> },
            { name: "Messages", icon: <Activity className="w-6 h-6 text-emerald-500" /> },
            { name: "Music", icon: <Zap className="w-6 h-6 text-emerald-500" /> },
            { name: "Notes", icon: <div className="font-black text-lg italic text-emerald-500">N</div> },
        ],
        desc: "For older, responsible kids with light guardrails."
    },
    balanced: {
        label: "Default",
        bg: "bg-slate-50",
        bar: "bg-yellow-400/80",
        icon: <Activity className="w-7 h-7 text-yellow-500" />,
        accent: "text-yellow-500",
        apps: [
            { name: "Phone", icon: <Activity className="w-6 h-6 text-yellow-500" /> },
            { name: "Messages", icon: <Globe className="w-6 h-6 text-yellow-500" /> },
            { name: "Notes", icon: <div className="font-black text-lg italic text-yellow-500">N</div> },
        ],
        desc: "Recommended by psychologists and our parent community."
    },
    strict: {
        label: "Strict",
        bg: "bg-slate-50",
        bar: "bg-red-500/80",
        icon: <Shield className="w-7 h-7 text-red-500" />,
        accent: "text-red-500",
        apps: [
            { name: "Phone", icon: <Shield className="w-6 h-6 text-red-500" /> },
            { name: "SOS", icon: <Zap className="w-6 h-6 text-red-500" /> },
            { name: "Notes", icon: <div className="font-black text-lg italic text-red-500">N</div> },
        ],
        desc: "For younger kids or those needing the most protection."
    },
    custom: {
        label: "Custom",
        bg: "bg-slate-50",
        bar: "bg-blue-400/80",
        icon: <SlidersHorizontal className="w-7 h-7 text-blue-500" />,
        accent: "text-blue-500",
        apps: [
            { name: "Parent Rules", icon: <SlidersHorizontal className="w-6 h-6 text-blue-500" /> },
            { name: "Browser", icon: <Globe className="w-6 h-6 text-blue-500" /> },
            { name: "Social", icon: <Activity className="w-6 h-6 text-blue-500" /> },
            { name: "Notes", icon: <div className="font-black text-lg italic text-blue-500">N</div> },
        ],
        desc: "Start from a base mode and adjust every protection yourself."
    }
}

export default function ModeComparison() {
    const [mode, setMode] = useState<'relaxed' | 'balanced' | 'strict' | 'custom'>('balanced')
    const modeData = MODE_PHONE[mode]
    return (
        <section id="detailed-modes" className="py-24 bg-[#030303] border-b border-white/[0.05]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6"
                    >
                        <Zap className="w-3.5 h-3.5 text-primary" />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Strategic Breakdown</span>
                    </motion.div>
                    <h2 className="text-3xl md:text-5xl font-black text-white font-heading mb-6">Mode Capability Matrix</h2>
                    <p className="text-slate-400 text-lg max-w-3xl mx-auto font-medium">
                        Four modes: Relaxed (older, responsible kids), Default (psychologist + parent recommended), Strict (younger or highest risk), Custom (you tune every protection from your phone).
                    </p>
                </div>

                {/* Interactive Phone UI */}
                <div className="flex flex-col items-center mb-16">
                    <div className="flex gap-2 mb-6 flex-wrap justify-center">
                        <button onClick={() => setMode('relaxed')} className={`px-5 py-2 rounded-full font-black text-xs uppercase border transition-all ${mode === 'relaxed' ? 'bg-emerald-400 text-black border-emerald-400' : 'bg-white/5 text-emerald-500 border-emerald-400/30 hover:bg-emerald-400/10'}`}>Relaxed</button>
                        <button onClick={() => setMode('balanced')} className={`px-5 py-2 rounded-full font-black text-xs uppercase border transition-all ${mode === 'balanced' ? 'bg-yellow-400 text-black border-yellow-400' : 'bg-white/5 text-yellow-500 border-yellow-400/30 hover:bg-yellow-400/10'}`}>Default</button>
                        <button onClick={() => setMode('strict')} className={`px-5 py-2 rounded-full font-black text-xs uppercase border transition-all ${mode === 'strict' ? 'bg-red-500 text-white border-red-500' : 'bg-white/5 text-red-400 border-red-500/30 hover:bg-red-500/10'}`}>Strict</button>
                        <button onClick={() => setMode('custom')} className={`px-5 py-2 rounded-full font-black text-xs uppercase border transition-all ${mode === 'custom' ? 'bg-blue-400 text-black border-blue-400' : 'bg-white/5 text-blue-500 border-blue-400/30 hover:bg-blue-400/10'}`}>Custom</button>
                    </div>
                    <div className="relative w-[220px] h-[440px] bg-[#080808] rounded-[2.5rem] border-[7px] border-[#1a1a1a] shadow-[0_30px_60px_rgba(0,0,0,0.5),inset_0_0_10px_rgba(255,255,255,0.05)] flex items-center justify-center">
                        {/* Phone Screen */}
                        <div className={`absolute inset-1 rounded-[2.2rem] overflow-hidden ${modeData.bg} flex flex-col p-6 pt-8`}>
                            {/* Status Bar */}
                            <div className="flex justify-between items-center px-1 mb-6">
                                <span className="text-slate-900 font-bold text-[13px]">9:41</span>
                                <div className="flex items-center gap-1.5 opacity-70">
                                    <Shield className="w-3.5 h-3.5 text-slate-900" />
                                    <Globe className="w-3.5 h-3.5 text-slate-900" />
                                    <div className="w-5 h-2.5 rounded-[3px] border border-slate-900/50 relative">
                                        <div className="absolute left-[1px] top-[1px] bottom-[1px] right-2 bg-slate-900 rounded-[1px]" />
                                    </div>
                                </div>
                            </div>
                            {/* Mode Icon & Label */}
                            <div className="flex flex-col items-center mb-6">
                                <div className="w-12 h-12 rounded-2xl bg-white border border-black/10 flex items-center justify-center mb-2 shadow">
                                    {modeData.icon}
                                </div>
                                <span className={`font-black text-lg ${modeData.accent}`}>{modeData.label} Mode</span>
                                <span className="text-xs text-slate-400 font-bold mt-1 text-center px-3">{modeData.desc}</span>
                            </div>
                            {/* App Grid */}
                            <div className="grid grid-cols-3 gap-y-6 gap-x-3 px-2 mb-8">
                                {modeData.apps.map((app, i) => (
                                    <div key={i} className="flex flex-col items-center gap-2.5">
                                        <div className={`w-12 h-12 rounded-2xl bg-slate-200/80 border border-slate-900/10 flex items-center justify-center shadow text-slate-900/70`}>
                                            {app.icon}
                                        </div>
                                        <span className="text-[10px] font-bold text-slate-900/40">{app.name}</span>
                                    </div>
                                ))}
                            </div>
                            {/* Home Bar */}
                            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-20 h-1 bg-slate-900/20 rounded-full" />
                        </div>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-white/5">
                                <th className="py-8 px-6 text-slate-500 text-[10px] font-black uppercase tracking-widest">Capabilities</th>
                                <th className="py-8 px-6">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                                            <Globe className="w-4 h-4 text-primary" />
                                        </div>
                                        <span className="text-white font-heading font-black text-lg">Relaxed</span>
                                    </div>
                                </th>
                                <th className="py-8 px-6">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                                            <Activity className="w-4 h-4 text-primary" />
                                        </div>
                                        <span className="text-white font-heading font-black text-lg">Default</span>
                                    </div>
                                </th>
                                <th className="py-8 px-6">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                                            <Shield className="w-4 h-4 text-primary" />
                                        </div>
                                        <span className="text-white font-heading font-black text-lg">Strict</span>
                                    </div>
                                </th>
                                <th className="py-8 px-6">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                                            <SlidersHorizontal className="w-4 h-4 text-primary" />
                                        </div>
                                        <span className="text-white font-heading font-black text-lg">Custom</span>
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/[0.03]">
                            {MODE_FEATURES.map((feature, i) => (
                                <motion.tr
                                    key={feature.name}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05 }}
                                    className="group hover:bg-white/[0.01] transition-colors"
                                >
                                    <td className="py-6 px-6">
                                        <span className="text-slate-400 font-bold text-sm group-hover:text-white transition-colors">{feature.name}</span>
                                    </td>
                                    <td className="py-6 px-6">
                                        {typeof feature.relaxed === "boolean" ? (
                                            feature.relaxed ? <Check className="text-primary w-5 h-5" /> : <X className="text-slate-700 w-5 h-5" />
                                        ) : (
                                            <span className="text-xs font-black text-white uppercase tracking-tighter">{feature.relaxed}</span>
                                        )}
                                    </td>
                                    <td className="py-6 px-6">
                                        {typeof feature.balanced === "boolean" ? (
                                            feature.balanced ? <Check className="text-primary w-5 h-5" /> : <X className="text-slate-700 w-5 h-5" />
                                        ) : (
                                            <span className="text-xs font-black text-white uppercase tracking-tighter">{feature.balanced}</span>
                                        )}
                                    </td>
                                    <td className="py-6 px-6">
                                        {typeof feature.strict === "boolean" ? (
                                            feature.strict ? <Check className="text-primary w-5 h-5" /> : <X className="text-slate-700 w-5 h-5" />
                                        ) : (
                                            <span className="text-xs font-black text-white uppercase tracking-tighter">{feature.strict}</span>
                                        )}
                                    </td>
                                    <td className="py-6 px-6">
                                        {typeof feature.custom === "boolean" ? (
                                            feature.custom ? <Check className="text-primary w-5 h-5" /> : <X className="text-slate-700 w-5 h-5" />
                                        ) : (
                                            <span className="text-xs font-black text-white uppercase tracking-tighter">{feature.custom}</span>
                                        )}
                                    </td>
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Performance Insight Cards */}
                <div className="grid md:grid-cols-3 gap-8 mt-24">
                    {[
                        { title: "Battery Impact", desc: "Strict mode extends single-charge life by up to 400% via hardware suspension.", icon: Zap },
                        { title: "Dopamine Resets", desc: "Scientific studies show 48h of Strict mode restores baseline focus levels.", icon: Clock },
                        { title: "Hybrid Switching", desc: "Modes can be scheduled via Parent Dashboard or triggered by location.", icon: Smartphone }
                    ].map((card, i) => (
                        <div key={i} className="p-8 rounded-[2rem] bg-[#0d0d0d] border border-white/5 hover:border-primary/20 transition-all">
                            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                                <card.icon className="w-6 h-6 text-primary" />
                            </div>
                            <h4 className="text-xl font-bold text-white mb-4">{card.title}</h4>
                            <p className="text-slate-400 text-sm leading-relaxed font-medium">{card.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
