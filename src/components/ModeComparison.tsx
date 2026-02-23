import { motion } from "framer-motion"
import { Check, X, Shield, Activity, Globe, Zap, Clock, Smartphone } from "lucide-react"

const MODE_FEATURES = [
    { name: "Content Filtering", strict: "Hardware-Level", balanced: "Network-Based", relaxed: "Self-Regulated" },
    { name: "App Whitelisting", strict: "Essential Only", balanced: "Curated Utility", relaxed: "Open Access" },
    { name: "Browser Access", strict: false, balanced: "Safe-Mode Only", relaxed: "Semantic Filter" },
    { name: "Social Media", strict: false, balanced: false, relaxed: "Timed Access" },
    { name: "Physical Tracking", strict: "Real-time SOS", balanced: "Geo-Fencing", relaxed: "On-Request" },
    { name: "Interaction Batching", strict: true, balanced: true, relaxed: "Optional" },
]

export default function ModeComparison() {
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
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto font-medium">
                        A detailed look at how each mode alters the device's psychological and technical DNA.
                    </p>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-white/5">
                                <th className="py-8 px-6 text-slate-500 text-[10px] font-black uppercase tracking-widest">Capabilities</th>
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
                                            <Activity className="w-4 h-4 text-primary" />
                                        </div>
                                        <span className="text-white font-heading font-black text-lg">Balanced</span>
                                    </div>
                                </th>
                                <th className="py-8 px-6">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                                            <Globe className="w-4 h-4 text-primary" />
                                        </div>
                                        <span className="text-white font-heading font-black text-lg">Relaxed</span>
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
                                        {typeof feature.strict === "boolean" ? (
                                            feature.strict ? <Check className="text-primary w-5 h-5" /> : <X className="text-slate-700 w-5 h-5" />
                                        ) : (
                                            <span className="text-xs font-black text-white uppercase tracking-tighter">{feature.strict}</span>
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
                                        {typeof feature.relaxed === "boolean" ? (
                                            feature.relaxed ? <Check className="text-primary w-5 h-5" /> : <X className="text-slate-700 w-5 h-5" />
                                        ) : (
                                            <span className="text-xs font-black text-white uppercase tracking-tighter">{feature.relaxed}</span>
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
