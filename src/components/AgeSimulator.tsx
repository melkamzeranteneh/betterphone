import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Check, Phone, MessageSquare, Calculator, Map, Music, BookOpen, Navigation, ShieldCheck } from "lucide-react"

// ─── App Icon Component ───────────────────────────────────────────────────────

const AppIcon = ({ name, color, icon: Icon, isDark = false }: { name: string, color: string, icon: any, isDark?: boolean }) => (
    <div className="flex flex-col items-center gap-1.5">
        <div
            className={`w-14 h-14 rounded-[1.2rem] flex items-center justify-center shadow-lg transition-transform hover:scale-105 active:scale-95`}
            style={{
                background: color,
                boxShadow: `0 8px 16px -4px rgba(0,0,0,0.1)`
            }}
        >
            <Icon className={`w-7 h-7 ${isDark ? 'text-black' : 'text-white'}`} strokeWidth={2.5} />
        </div>
        <span className="text-[10px] font-bold text-black/50">{name}</span>
    </div>
)

// ─── Data ─────────────────────────────────────────────────────────────────────

const SIMULATOR_DATA = {
    "8-12": {
        title: "Foundation Safety",
        model: "DB-01X / SAFE-START",
        description: "Focus on essential communication and safety. No browser or social media access. Maximum parent oversight.",
        features: [
            "White-listed Contacts Only",
            "Emergency SOS Location",
            "Automatic Bedtime Lock",
            "School Hours Focus Mode",
            "Usage History Reports"
        ],
        apps: [
            { name: "Phone", color: "linear-gradient(180deg, #34d399, #10b981)", icon: Phone },
            { name: "Messages", color: "linear-gradient(180deg, #34d399, #10b981)", icon: MessageSquare },
            { name: "Parent", color: "#6366f1", icon: ShieldCheck },
            { name: "Maps", color: "#fff", icon: Map, isDark: true },
        ]
    },
    "13-16": {
        title: "Controlled Independence",
        model: "DB-01X / UNLOCKED",
        description: "Unlock essential utilities like Spotify, Maps, and Calculator. Social media remains hardware-blocked.",
        features: [
            "Wikipedia Access",
            "Music & Maps",
            "School Tools",
            "Flexible Curfew",
            "GPS Tracking Always On"
        ],
        apps: [
            { name: "Phone", color: "linear-gradient(180deg, #34d399, #10b981)", icon: Phone },
            { name: "Messages", color: "linear-gradient(180deg, #34d399, #10b981)", icon: MessageSquare },
            { name: "Calc", color: "#262626", icon: Calculator },
            { name: "Maps", color: "#fff", icon: Navigation, isDark: true },
            { name: "Spotify", color: "#000", icon: Music },
            { name: "Notion", color: "#fff", icon: BookOpen, isDark: true },
        ]
    }
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function AgeSimulator() {
    const [age, setAge] = useState<"8-12" | "13-16">("13-16")
    const data = SIMULATOR_DATA[age]

    return (
        <section className="py-24 bg-[#050505] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                {/* ── Age Selector Pill ────────────────────────────────────── */}
                <div className="flex justify-center mb-16">
                    <div className="inline-flex p-1.5 bg-white/5 border border-white/10 rounded-full">
                        {(["8-12", "13-16"] as const).map((group) => (
                            <button
                                key={group}
                                onClick={() => setAge(group)}
                                className={`px-8 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 ${age === group
                                    ? "bg-white text-black shadow-xl"
                                    : "text-slate-400 hover:text-white"
                                    }`}
                            >
                                Ages {group}
                            </button>
                        ))}
                    </div>
                </div>

                {/* ── Simulator Card ────────────────────────────────────────── */}
                <motion.div
                    layout
                    className="relative bg-[#0d0d0d] rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row min-h-[600px] border border-white/[0.05]"
                >
                    {/* Left Panel: Phone Mockup */}
                    <div className="w-full md:w-[45%] bg-[#111111] flex items-center justify-center p-12">
                        <div className="relative w-[280px] aspect-[1/2] rounded-[3rem] border-[8px] border-[#222] bg-white shadow-2xl overflow-hidden ring-4 ring-black/20">
                            {/* Dynamic Island */}
                            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-7 bg-black rounded-3xl z-30 flex items-center justify-center">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#1b1b1b] ml-12" />
                            </div>

                            {/* Screen Content */}
                            <div className="relative h-full w-full p-6 flex flex-col">
                                {/* Status Bar */}
                                <div className="flex justify-between items-center text-[11px] font-bold text-black mb-10 px-2 opacity-80">
                                    <span>9:41 AM</span>
                                    <div className="flex gap-1.5 items-center">
                                        <div className="w-3 h-3 rounded-sm border border-black/20" />
                                        <div className="w-4 h-2.5 bg-black/80 rounded-[2px]" />
                                    </div>
                                </div>

                                {/* Date/Time */}
                                <div className="mb-14 px-2">
                                    <h4 className="text-black text-3xl font-medium tracking-tight leading-none mb-1">Thursday</h4>
                                    <h4 className="text-black text-3xl font-medium tracking-tight leading-none opacity-40">24</h4>
                                </div>

                                {/* App Grid */}
                                <div className="grid grid-cols-3 gap-y-8 gap-x-4 mb-auto">
                                    <AnimatePresence mode="popLayout">
                                        {data.apps.map((app, idx) => (
                                            <motion.div
                                                key={app.name}
                                                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                                exit={{ opacity: 0, scale: 0.8, y: -10 }}
                                                transition={{ duration: 0.3, delay: idx * 0.05 }}
                                            >
                                                <AppIcon
                                                    name={app.name}
                                                    color={app.color}
                                                    icon={app.icon}
                                                    isDark={app.isDark}
                                                />
                                            </motion.div>
                                        ))}
                                    </AnimatePresence>
                                </div>

                                {/* Page Indicator */}
                                <div className="flex justify-center gap-1.5 mb-6">
                                    <div className="w-1.5 h-1.5 rounded-full bg-black/60" />
                                    <div className="w-1.5 h-1.5 rounded-full bg-black/10" />
                                </div>

                                {/* Home Indicator */}
                                <div className="w-28 h-1.5 bg-black/10 rounded-full mx-auto mb-2" />
                            </div>
                        </div>
                    </div>

                    {/* Right Panel: Content */}
                    <div className="w-full md:w-[55%] bg-[#0d0d0d] p-12 md:p-20 flex flex-col justify-center">
                        <motion.div
                            key={age}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="flex items-center gap-2 mb-6">
                                <div className="w-2 h-2 rounded-full bg-emerald-500" />
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 font-sans">
                                    MODEL: <span className="text-slate-400">{data.model}</span>
                                </span>
                            </div>

                            <h3 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-6 font-heading leading-tight">
                                {data.title}
                            </h3>

                            <p className="text-slate-400 text-lg md:text-xl leading-relaxed mb-10 tracking-tight">
                                {data.description}
                            </p>

                            <div className="space-y-4 mb-12">
                                {data.features.map((feature, i) => (
                                    <div key={i} className="flex items-center justify-between py-4 border-b border-white/[0.05] last:border-0">
                                        <span className="text-slate-200 font-bold tracking-tight">{feature}</span>
                                        <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center">
                                            <Check className="w-3.5 h-3.5 text-emerald-500" strokeWidth={3} />
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <button className="luxury-button luxury-button-gold !h-10 !px-6 !text-[10px]">
                                Configure this mode
                            </button>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
