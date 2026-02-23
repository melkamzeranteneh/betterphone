import { motion } from "framer-motion"
import { Sun, Moon, Coffee, Book, ShieldCheck, Clock } from "lucide-react"

const TIMELINE = [
    { time: "07:30 AM", title: "Soft Wake", desc: "Phone unlocks with gentle, grayscale interface. No notifications.", icon: Sun, color: "text-amber-400" },
    { time: "08:30 AM", title: "School Mode", desc: "Only whitelisted educational tools and emergency contacts active.", icon: Book, color: "text-blue-400" },
    { time: "03:30 PM", title: "Home Mode", desc: "Creative apps & Spotify unlock for focused downtime.", icon: Coffee, color: "text-emerald-400" },
    { time: "08:00 PM", title: "Calm Down", desc: "Display dims and blue-light filters maximize. No new alerts.", icon: Clock, color: "text-purple-400" },
    { time: "09:00 PM", title: "Automatic Lock", desc: "Device hardware-locks until morning. Zero-emission rest.", icon: Moon, color: "text-indigo-400" },
]

export default function ProtectionTimeline() {
    return (
        <section id="timeline" className="py-24 bg-[#050505] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">A Day of Structured Calm</h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        BetterPhone follows your child's natural rhythm, automatically adjusting protection layers throughout the day.
                    </p>
                </div>

                <div className="relative">
                    {/* The Line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2 hidden md:block" />

                    <div className="space-y-12 md:space-y-24">
                        {TIMELINE.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, delay: i * 0.1 }}
                                className={`flex flex-col md:flex-row items-center gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                    }`}
                            >
                                {/* Content */}
                                <div className="flex-1 text-center md:text-left">
                                    <div className={`flex flex-col ${i % 2 === 0 ? 'md:items-end md:text-right' : 'md:items-start md:text-left'}`}>
                                        <div className="text-sm font-black uppercase tracking-[0.3em] text-slate-500 mb-2">{item.time}</div>
                                        <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                                        <p className="text-slate-400 text-base leading-relaxed max-w-sm">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>

                                {/* Center Icon */}
                                <div className="relative z-10">
                                    <div className="w-16 h-16 rounded-full bg-[#0d0d0d] border border-white/10 flex items-center justify-center shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                                        <item.icon className={`w-6 h-6 ${item.color}`} />
                                    </div>
                                    {/* Pulse effect for the active/upcoming point */}
                                    <div className={`absolute inset-0 rounded-full ${item.color.replace('text', 'bg')} opacity-10 animate-ping`} />
                                </div>

                                {/* Placeholder for Symmetry */}
                                <div className="flex-1 hidden md:block" />
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="mt-20 p-8 md:p-12 rounded-[3rem] bg-gradient-to-br from-indigo-500/10 via-transparent to-transparent border border-white/[0.05] text-center">
                    <div className="max-w-3xl mx-auto">
                        <ShieldCheck className="w-12 h-12 text-indigo-400 mx-auto mb-6" />
                        <h3 className="text-2xl font-bold text-white mb-4">Autonomous Safety</h3>
                        <p className="text-slate-400 leading-relaxed font-medium">
                            Once configured, BetterPhone handles the transitions yourself. No more arguments about "5 more minutes." The device enforces the boundaries so you don't have to.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
