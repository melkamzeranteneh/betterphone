import { useState } from "react"
import { motion } from "framer-motion"
import { BarChart3, Clock, Moon, Shield, Smartphone } from "lucide-react"

const USAGE = {
    today: [
        { app: "Messages", minutes: 42 },
        { app: "Maps", minutes: 28 },
        { app: "YouTube", minutes: 18 },
        { app: "Roblox", minutes: 12 },
    ],
    week: [
        { app: "Messages", minutes: 260 },
        { app: "Maps", minutes: 180 },
        { app: "YouTube", minutes: 140 },
        { app: "Roblox", minutes: 95 },
    ],
}

const SNAPSHOTS = [
    { title: "Bedtime", value: "8:30 PM", detail: "Auto-lock + low blue light", icon: Moon },
    { title: "Mode", value: "Default", detail: "Curated apps + safe browser", icon: Shield },
    { title: "Exceptions", value: "Grandparents, School", detail: "Always ring through", icon: Smartphone },
]

export default function DashboardDemo() {
    const [windowView, setWindowView] = useState<'today' | 'week'>('today')
    const usage = USAGE[windowView]
    const maxMinutes = Math.max(...usage.map((d) => d.minutes))
    const total = usage.reduce((sum, item) => sum + item.minutes, 0)

    return (
        <section id="demo" className="py-24 bg-[#030303] border-b border-white/[0.05]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16 items-start">

                    {/* Left: Usage narrative */}
                    <div className="flex-1 w-full order-2 lg:order-1 space-y-8">
                        <div className="flex items-center gap-2">
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Parent Dashboard</span>
                        </div>
                        <div className="space-y-4">
                            <h2 className="text-3xl md:text-5xl font-bold text-white">Usage at a glance</h2>
                            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
                                Minimalist, shadcn-inspired cards. Just the important signals: where time goes, what mode is active, and when the phone puts itself to bed.
                            </p>
                        </div>

                        <div className="inline-flex rounded-full bg-white/5 border border-white/10 p-1 text-xs font-black uppercase tracking-[0.2em]">
                            {[{ id: 'today', label: 'Today' }, { id: 'week', label: '7 days' }].map((option) => (
                                <button
                                    key={option.id}
                                    onClick={() => setWindowView(option.id as 'today' | 'week')}
                                    className={`px-4 py-2 rounded-full transition-all ${windowView === option.id ? 'bg-white text-black shadow-sm' : 'text-slate-400 hover:text-white'}`}
                                >
                                    {option.label}
                                </button>
                            ))}
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                            <div className="p-6 rounded-2xl bg-[#0d0d0d] border border-white/10">
                                <div className="flex items-center justify-between mb-6">
                                    <div>
                                        <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500 font-black">Screen Time</p>
                                        <h3 className="text-3xl font-black text-white">{total}m</h3>
                                    </div>
                                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                                        <BarChart3 className="w-5 h-5 text-primary" />
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    {usage.map((item, idx) => (
                                        <motion.div
                                            key={item.app}
                                            initial={{ opacity: 0, y: 6 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: idx * 0.05 }}
                                            className="space-y-2"
                                        >
                                            <div className="flex items-center justify-between text-sm">
                                                <span className="text-white font-medium">{item.app}</span>
                                                <span className="text-slate-400 font-bold">{item.minutes}m</span>
                                            </div>
                                            <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                                                <div
                                                    className="h-full bg-primary/80 rounded-full"
                                                    style={{ width: `${Math.round((item.minutes / maxMinutes) * 100)}%` }}
                                                />
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            <div className="p-6 rounded-2xl bg-[#0d0d0d] border border-white/10 space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                                        <Clock className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500 font-black">Focus Windows</p>
                                        <h3 className="text-white font-bold text-lg">Schedule keeps them on track</h3>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    {SNAPSHOTS.map((item) => (
                                        <div key={item.title} className="flex items-start gap-3 p-3 rounded-xl border border-white/5 bg-white/[0.02]">
                                            <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                                                <item.icon className="w-4 h-4 text-primary" />
                                            </div>
                                            <div>
                                                <div className="text-white font-semibold text-sm">{item.title}</div>
                                                <div className="text-slate-300 font-bold text-sm">{item.value}</div>
                                                <div className="text-slate-500 text-xs">{item.detail}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Minimal visualizer */}
                    <div className="flex-1 w-full order-1 lg:order-2">
                        <div className="p-8 rounded-[2rem] bg-[#0d0d0d] border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.5)] w-full max-w-xl mx-auto">
                            <div className="flex items-center justify-between mb-6">
                                <div>
                                    <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-black">Usage Details</p>
                                    <h3 className="text-white font-black text-2xl">Phone snapshot</h3>
                                </div>
                                <div className="px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-[0.2em]">
                                    Visual only
                                </div>
                            </div>

                            <div className="rounded-2xl border border-white/5 bg-white/5">
                                <div className="grid grid-cols-3 text-[11px] uppercase tracking-[0.2em] text-slate-400 font-black px-4 py-3">
                                    <span>App</span>
                                    <span className="text-right">Minutes</span>
                                    <span className="text-right">Share</span>
                                </div>
                                <div className="divide-y divide-white/5">
                                    {usage.map((item) => {
                                        const share = Math.round((item.minutes / total) * 100)
                                        return (
                                            <div key={item.app} className="px-4 py-3 flex items-center text-sm text-white/90">
                                                <div className="flex items-center gap-3 flex-1">
                                                    <span className="w-2 h-2 rounded-full bg-primary/80" />
                                                    <span className="font-semibold">{item.app}</span>
                                                </div>
                                                <div className="w-16 text-right text-slate-300 font-bold">{item.minutes}m</div>
                                                <div className="w-16 text-right text-slate-400 font-bold">{share}%</div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>

                            <div className="mt-6 grid sm:grid-cols-3 gap-3">
                                {[{ label: 'Limit left', value: '2h 30m' }, { label: 'Mode', value: 'Default' }, { label: 'Status', value: 'Calm' }].map((chip) => (
                                    <div key={chip.label} className="p-4 rounded-xl bg-white/5 border border-white/10">
                                        <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-black">{chip.label}</div>
                                        <div className="text-white font-bold text-lg">{chip.value}</div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-6 p-4 rounded-xl bg-primary/5 border border-primary/20 flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                                    <Shield className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <div className="text-white font-semibold">Protections stay on</div>
                                    <div className="text-slate-400 text-sm">App locks, filtered web, location-aware rules.</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
