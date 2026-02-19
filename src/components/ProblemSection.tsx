import { MinusCircle, XCircle, AlertTriangle, ShieldCheck } from "lucide-react"
import GlowCard from "./GlowCard"

const problems = [
    {
        title: "Phone & Social Addiction",
        description: "Endless scrolling and dopamine loops designed to keep kids hooked for hours.",
        icon: <XCircle className="h-8 w-8" />,
    },
    {
        title: "Mental Health Risks",
        description: "Direct links between heavy screen use and increased anxiety or low self-esteem.",
        icon: <AlertTriangle className="h-8 w-8" />,
    },
    {
        title: "Sleep Disruption",
        description: "Late-night usage and blue light that ruins restorative sleep and school focus.",
        icon: <MinusCircle className="h-8 w-8" />,
    },
    {
        title: "Harmful Content",
        description: "Accidental exposure to age-inappropriate videos, images, or future tech threats.",
        icon: <XCircle className="h-8 w-8" />,
    }
]

import { motion } from "framer-motion"

export default function ProblemSection() {
    return (
        <section id="why" className="py-24 bg-background">
            <div className="container px-4 mx-auto">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-8 font-heading leading-[1.1]">
                        Today's technology wasn't <br className="hidden md:block" /> <span className="text-primary italic">designed for children.</span>
                    </h2>
                    <p className="text-xl text-slate-400 leading-relaxed font-sans max-w-2xl mx-auto">
                        Smartphones are the most powerful tools ever created, but without the right guardrails, they can be the most dangerous. BetterPhone bridges the gap.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {problems.map((problem, index) => (
                        <motion.div
                            key={problem.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <GlowCard
                                title={problem.title}
                                description={problem.description}
                            />
                        </motion.div>
                    ))}
                </div>

                <div className="mt-32 rounded-[3.5rem] bg-gradient-to-br from-primary/30 via-primary/5 to-transparent p-px">
                    <div className="bg-black/60 backdrop-blur-3xl rounded-[3.5rem] overflow-hidden p-8 md:p-20 border border-white/10 relative">
                        {/* Background Decorative Glow */}
                        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 h-96 w-96 rounded-full bg-primary/20 blur-[120px] pointer-events-none" />
                        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 h-64 w-64 rounded-full bg-primary/5 blur-[100px] pointer-events-none" />

                        <div className="relative z-10 grid gap-16 lg:grid-cols-5 items-center">
                            <div className="lg:col-span-3">
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-widest mb-6">
                                    <div className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                                    Zero-Config Deployment
                                </div>
                                <h3 className="text-3xl md:text-5xl font-bold mb-6 text-white font-heading leading-[1.1]">
                                    The <span className="text-primary">"Zero-Setup"</span> Promise.
                                </h3>
                                <p className="text-slate-400 text-lg mb-10 leading-relaxed max-w-xl">
                                    Parents don't have time to be IT experts. We do the heavy lifting for you. Every BetterPhone arrives with expert-recommended safety protocols active from the moment it turns on.
                                </p>

                                <div className="grid sm:grid-cols-2 gap-6">
                                    {[
                                        { title: "Auto-Updates", desc: "Software safety scales automatically." },
                                        { title: "Bypass-Proof", desc: "Impossible for children to circumvent." },
                                        { title: "Core Filtering", desc: "AI filtering active at the silicon level." },
                                        { title: "Plug & Play", desc: "Works instantly with any global carrier." }
                                    ].map((item) => (
                                        <div key={item.title} className="flex gap-4 p-5 rounded-[1.5rem] bg-white/5 border border-white/5 hover:border-primary/40 hover:bg-primary/5 transition-all group">
                                            <div className="creamy-icon-wrapper h-10 w-10 border-primary/20 flex-shrink-0 group-hover:scale-110 transition-transform">
                                                <ShieldCheck className="h-5 w-5" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-white text-base mb-1 font-heading">{item.title}</h4>
                                                <p className="text-slate-500 text-xs leading-relaxed font-sans">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="lg:col-span-2 flex justify-center lg:justify-end">
                                <div className="relative">
                                    <div className="creamy-icon-wrapper h-64 w-64 md:h-80 md:w-80 border-primary/10 backdrop-blur-sm relative group overflow-hidden">
                                        <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-all duration-500" />
                                        <ShieldCheck className="h-32 w-32 md:h-40 md:w-40 relative z-10 text-primary drop-shadow-[0_0_20px_rgba(212,175,55,0.3)]" />

                                        {/* Floating Tags for 'Organization' */}
                                        <div className="absolute top-12 left-0 -translate-x-1/2 py-1.5 px-4 bg-black/80 border border-white/10 rounded-full text-[8px] font-bold text-white uppercase tracking-widest backdrop-blur-md animate-bounce" style={{ animationDuration: '3s' }}>
                                            Active Shield
                                        </div>
                                        <div className="absolute bottom-12 right-0 translate-x-1/2 py-1.5 px-4 bg-black/80 border border-white/10 rounded-full text-[8px] font-bold text-white uppercase tracking-widest backdrop-blur-md animate-bounce" style={{ animationDuration: '4s' }}>
                                            Core Sec
                                        </div>
                                    </div>

                                    {/* Secondary Glow */}
                                    <div className="absolute -inset-4 bg-primary/20 blur-3xl opacity-20 -z-10 animate-pulse" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
