import { motion } from "framer-motion"

// ─── 2D accent shapes per card ────────────────────────────────────────────────

const QuoteMarkShape = ({ color }: { color: string }) => (
    <svg width="80" height="70" viewBox="0 0 80 70" fill="none" className="absolute top-4 right-4 opacity-20">
        <text x="0" y="60" fontSize="80" fontWeight="900" fill={color} fontFamily="serif">"</text>
    </svg>
)

const StarShape = ({ color }: { color: string }) => (
    <svg width="90" height="70" viewBox="0 0 90 70" fill="none" className="absolute top-3 right-3 opacity-15">
        {[0, 18, 36, 54, 72].map((x, i) => (
            <polygon key={i}
                points={`${x + 9},2 ${x + 11},7 ${x + 16},7 ${x + 12},10 ${x + 14},15 ${x + 9},12 ${x + 4},15 ${x + 6},10 ${x + 2},7 ${x + 7},7`}
                fill={color} />
        ))}
    </svg>
)

const GridDotsShape = ({ color }: { color: string }) => (
    <svg width="70" height="70" viewBox="0 0 70 70" fill="none" className="absolute top-4 right-4 opacity-20">
        {Array.from({ length: 4 }).map((_, row) =>
            Array.from({ length: 4 }).map((_, col) => (
                <circle key={`${row}-${col}`} cx={col * 18 + 9} cy={row * 18 + 9} r="3" fill={color} />
            ))
        )}
    </svg>
)

const WaveShape = ({ color }: { color: string }) => (
    <svg width="100" height="50" viewBox="0 0 100 50" fill="none" className="absolute bottom-4 right-4 opacity-15">
        <path d="M0 25 Q12 10 25 25 Q38 40 50 25 Q62 10 75 25 Q88 40 100 25"
            stroke={color} strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M0 35 Q12 20 25 35 Q38 50 50 35 Q62 20 75 35 Q88 50 100 35"
            stroke={color} strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.5" />
    </svg>
)

const CircleRingShape = ({ color }: { color: string }) => (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" className="absolute top-2 right-2 opacity-15">
        <circle cx="40" cy="40" r="36" stroke={color} strokeWidth="1.5" fill="none" strokeDasharray="5 4" />
        <circle cx="40" cy="40" r="24" stroke={color} strokeWidth="1" fill="none" />
        <circle cx="40" cy="40" r="8" fill={color} opacity="0.4" />
    </svg>
)

const DiamondShape = ({ color }: { color: string }) => (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" className="absolute top-3 right-3 opacity-15">
        <polygon points="40,5 75,40 40,75 5,40" stroke={color} strokeWidth="1.5" fill="none" />
        <polygon points="40,20 60,40 40,60 20,40" stroke={color} strokeWidth="1" fill="none" />
        <circle cx="40" cy="40" r="4" fill={color} opacity="0.6" />
    </svg>
)

// ─── Stars renderer ───────────────────────────────────────────────────────────

function Stars({ n, color }: { n: number; color: string }) {
    return (
        <div className="flex items-center gap-0.5 mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} viewBox="0 0 14 14" className="h-3.5 w-3.5" fill={i < n ? color : "rgba(255,255,255,0.12)"}>
                    <path d="M7 1l1.6 3.3L12 4.8l-2.5 2.4.6 3.4L7 9l-3.1 1.6.6-3.4L2 4.8l3.4-.5L7 1z" />
                </svg>
            ))}
        </div>
    )
}

// ─── Testimonial data ─────────────────────────────────────────────────────────

const testimonials = [
    {
        id: "t1",
        name: "Sarah K.",
        role: "Mom of 3, Texas",
        stars: 5,
        accentColor: "#d4af37",
        ShapeEl: StarShape,
        quote: "I can finally breathe. My youngest was getting exposed to content I couldn't even imagine at 8 years old. BetterPhone wasn't just a fix — it was the right solution. The psychologist-backed modes make me confident I'm not just blocking, but parenting.",
        size: "lg",
    },
    {
        id: "t2",
        name: "Marcus T.",
        role: "Dad, 12-year-old son",
        stars: 5,
        accentColor: "#22c55e",
        ShapeEl: CircleRingShape,
        quote: "The One-Tap Lockout alone is worth every penny. My son used to argue about screen time constantly. Now I don't even have to be in the same room — the phone just locks and he knows it's done.",
        size: "sm",
    },
    {
        id: "t3",
        name: "Dr. Priya N.",
        role: "Child Psychologist, mom of 2",
        stars: 5,
        accentColor: "#a855f7",
        ShapeEl: DiamondShape,
        quote: "As a child psychologist and a parent, I was skeptical. But the Default Mode genuinely reflects developmental research. This isn't just parental control — it's designed to preserve the parent-child relationship while keeping kids safe.",
        size: "sm",
    },
    {
        id: "t4",
        name: "Jenna & Ray O.",
        role: "Parents of twins, age 14",
        stars: 5,
        accentColor: "#3b82f6",
        ShapeEl: WaveShape,
        quote: "Teenagers are tricky. They push back on everything. But the AI threat scanning runs silently — they don't even know it's watching. We've caught two serious situations early that we would have missed completely. It's not surveillance, it's safety.",
        size: "sm",
    },
    {
        id: "t5",
        name: "Marcus W.",
        role: "Single dad, Portland",
        stars: 5,
        accentColor: "#f59e0b",
        ShapeEl: QuoteMarkShape,
        quote: "The auto-shutoff at bedtime changed our entire household. My daughter stopped sneaking the phone under her covers. Sleep improved, grades improved — everything improved. I can't explain how much stress this removed from our lives.",
        size: "sm",
    },
    {
        id: "t6",
        name: "The Chen Family",
        role: "3 kids ages 7, 11, 15",
        stars: 5,
        accentColor: "#6366f1",
        ShapeEl: GridDotsShape,
        quote: "We have three kids at completely different stages. Being able to set completely different modes for each child — from Protected for our 7-year-old to Independent for our 15-year-old — from one dashboard is something we didn't think was possible. BetterPhone solved it.",
        size: "lg",
    },
]

// ─── Component ────────────────────────────────────────────────────────────────

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-28 bg-background relative overflow-hidden">

            {/* ── Page corner decorations ── */}
            <svg width="160" height="160" viewBox="0 0 160 160" fill="none"
                className="absolute top-0 right-0 opacity-[0.05] pointer-events-none">
                {Array.from({ length: 6 }).map((_, row) =>
                    Array.from({ length: 6 }).map((_, col) => (
                        <circle key={`${row}-${col}`} cx={col * 28 + 14} cy={row * 28 + 14} r="2" fill="white" />
                    ))
                )}
            </svg>
            <svg width="180" height="180" viewBox="0 0 180 180" fill="none"
                className="absolute bottom-0 left-0 opacity-[0.04] pointer-events-none">
                {[0, 20, 40, 60, 80, 100, 120, 140, 160].map((v) => (
                    <line key={v} x1={0} y1={180 - v} x2={v} y2={180} stroke="white" strokeWidth="1" />
                ))}
            </svg>

            <div className="max-w-6xl mx-auto px-6 relative z-10">

                {/* ── Header ───────────────────────────────── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-[11px] font-black uppercase tracking-[0.15em] mb-6">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                        Parent Stories
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white font-heading leading-[1.05] mb-5">
                        Real families.<br className="hidden md:block" />
                        <span className="text-primary italic"> Real peace of mind.</span>
                    </h2>
                    <p className="text-slate-400 text-lg max-w-xl leading-relaxed">
                        From toddlers to teenagers — parents across the country share what changed when BetterPhone arrived in their home.
                    </p>
                </motion.div>

                {/* ── Testimonial bento grid ────────────── */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={t.id}
                            initial={{ opacity: 0, y: 32 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.55, delay: i * 0.09 }}
                            className={`relative overflow-hidden rounded-2xl border transition-all duration-500 group hover:-translate-y-0.5 ${t.size === "lg" ? "lg:col-span-2" : ""
                                }`}
                            style={{
                                background: "#0d0d0d",
                                borderColor: "rgba(255,255,255,0.07)",
                            }}
                            onMouseEnter={(e) => {
                                (e.currentTarget as HTMLDivElement).style.borderColor = `${t.accentColor}40`
                            }}
                            onMouseLeave={(e) => {
                                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.07)"
                            }}
                        >
                            {/* 2D accent shape */}
                            <t.ShapeEl color={t.accentColor} />

                            <div className="relative z-10 p-6 md:p-7 flex flex-col h-full">

                                {/* Stars */}
                                <Stars n={t.stars} color={t.accentColor} />

                                {/* Quote */}
                                <blockquote className="text-slate-300 text-sm leading-relaxed flex-1 mb-7 font-medium">
                                    "{t.quote}"
                                </blockquote>

                                {/* Divider */}
                                <div className="h-px w-full mb-5"
                                    style={{ background: `linear-gradient(to right, ${t.accentColor}30, transparent)` }} />

                                {/* Author row */}
                                <div className="flex items-center gap-3">
                                    {/* Avatar placeholder — initials */}
                                    <div
                                        className="h-9 w-9 rounded-full flex items-center justify-center text-[11px] font-black shrink-0"
                                        style={{
                                            background: `${t.accentColor}18`,
                                            border: `1px solid ${t.accentColor}35`,
                                            color: t.accentColor,
                                        }}
                                    >
                                        {t.name.split(" ").map((w) => w[0]).slice(0, 2).join("")}
                                    </div>
                                    <div>
                                        <p className="text-white text-[13px] font-bold leading-none mb-0.5">{t.name}</p>
                                        <p className="text-slate-500 text-[11px] font-medium">{t.role}</p>
                                    </div>

                                    {/* Verified badge */}
                                    <div className="ml-auto flex items-center gap-1 px-2.5 py-1 rounded-full text-[9px] font-black uppercase tracking-wider"
                                        style={{
                                            background: `${t.accentColor}10`,
                                            border: `1px solid ${t.accentColor}25`,
                                            color: t.accentColor,
                                        }}>
                                        <svg viewBox="0 0 12 12" className="h-2.5 w-2.5" fill="currentColor">
                                            <path d="M6 0l1.5 2.5L11 2l-1 3.5L12 7.5 9 8.5 8 12l-2-2.5L4 12l-1-3.5L0 7.5l2-2L1 2l3.5.5L6 0z" />
                                        </svg>
                                        Verified
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* ── Social proof bar ─────────────────────── */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="mt-14 rounded-2xl border p-6 flex flex-col sm:flex-row items-center justify-between gap-6"
                    style={{ background: "#0d0d0d", borderColor: "rgba(255,255,255,0.07)" }}
                >
                    {[
                        { value: "4.9 / 5", label: "Average rating", color: "#d4af37" },
                        { value: "2,400+", label: "Families protected", color: "#22c55e" },
                        { value: "98%", label: "Would recommend", color: "#6366f1" },
                    ].map((stat) => (
                        <div key={stat.label} className="flex flex-col items-center sm:items-start text-center sm:text-left">
                            <span className="text-3xl font-black text-white tracking-tight"
                                style={{ color: stat.color }}>{stat.value}</span>
                            <span className="text-slate-500 text-xs font-bold uppercase tracking-widest mt-1">{stat.label}</span>
                        </div>
                    ))}

                    <div className="hidden sm:block h-12 w-px bg-white/5" />
                    <div className="hidden sm:block h-12 w-px bg-white/5" />

                    <div className="text-center sm:text-right">
                        <p className="text-slate-300 text-sm font-medium leading-relaxed max-w-[220px]">
                            Join thousands of families who made the switch to safer digital childhood.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
