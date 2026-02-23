import { AlertCircle, Moon, Users, ShieldAlert, Brain, ShieldX, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

const problems = [
    { title: "Addictive Algorithm Design", icon: Brain },
    { title: "Sleep Disruption", icon: Moon },
    { title: "Cyberbullying", icon: Users },
    { title: "Harmful Content Exposure", icon: ShieldAlert },
    { title: "AI Accelerating Risks", icon: AlertCircle },
    { title: "Complex Parental Controls", icon: ShieldX },
]

export default function ProblemSection() {
    return (
        <section id="why" className="relative bg-[#030303] pt-32 pb-24 overflow-hidden border-b border-white/[0.05]">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container px-6 mx-auto relative z-10">
                {/* 2. THE PROBLEM */}
                <div className="max-w-4xl mx-auto text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6"
                    >
                        <ShieldAlert className="w-3.5 h-3.5 text-primary" />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">The Systemic Crisis</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl font-black tracking-tight text-white mb-8 font-heading leading-tight"
                    >
                        Modern Smartphones <br />
                        <span className="text-primary/60">Weren’t Built for Kids.</span>
                    </motion.h2>

                    <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-16 font-medium">
                        Standard OS architectures are designed for maximum retention and data extraction. They are tools of the attention economy, not childhood development.
                    </p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
                    >
                        {problems.map((problem, i) => (
                            <div key={i} className="flex items-center gap-4 p-5 rounded-2xl bg-[#0d0d0d] border border-white/5 hover:border-primary/20 hover:bg-[#121212] transition-all group cursor-default">
                                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                                    <problem.icon className="h-5 w-5 text-slate-500 group-hover:text-primary transition-colors" />
                                </div>
                                <span className="text-sm font-bold text-slate-300 group-hover:text-white transition-colors">{problem.title}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* 3. THE SHIFT */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-32 max-w-5xl mx-auto rounded-[3rem] bg-gradient-to-b from-[#0d0d0d] to-transparent border border-white/[0.05] p-10 md:p-20 text-center relative overflow-hidden"
                >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

                    <h3 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-6 font-heading">
                        BetterPhone changes the foundation.
                    </h3>
                    <p className="text-xl text-slate-400 font-medium mb-16 max-w-2xl mx-auto">
                        We don't just "add" parental controls.<br className="hidden sm:block" /> We redesigned the interaction layer from scratch.
                    </p>

                    <div className="grid md:grid-cols-3 gap-8 relative">
                        {/* Connecting Line */}
                        <div className="hidden md:block absolute top-[22px] left-[15%] right-[15%] h-[1px] bg-white/10 z-0" />

                        {[
                            { step: "1", title: "Select Device", desc: "Choose hardware tailored for focus." },
                            { step: "2", title: "Smart Config", desc: "Automated modes based on age." },
                            { step: "3", title: "Active Safety", desc: "Real-time semantic protection." }
                        ].map((item, index) => (
                            <div key={index} className="relative z-10 flex flex-col items-center gap-6">
                                <div className="h-11 w-11 rounded-full border border-primary/30 bg-[#0d0d0d] flex items-center justify-center text-sm font-black text-primary shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                                    {item.step}
                                </div>
                                <div className="space-y-1">
                                    <h4 className="font-bold text-white text-lg font-heading">{item.title}</h4>
                                    <p className="text-slate-500 text-xs font-medium max-w-[150px] mx-auto">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-20">
                        <button className="luxury-button luxury-button-gold px-10">
                            See the Transformation
                            <ArrowRight className="w-4 h-4 ml-2 inline" />
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
