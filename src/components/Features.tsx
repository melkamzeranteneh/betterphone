import { motion } from "framer-motion"

// ─── 2D SVG Illustrations ─────────────────────────────────────────────────────

const FourModesShape = () => (
    <svg width="220" height="160" viewBox="0 0 220 160" fill="none" className="absolute bottom-0 right-0 opacity-40">
        {/* 4 mode quadrant squares */}
        <rect x="10" y="10" width="90" height="65" rx="10" stroke="#d4af37" strokeWidth="1.5" fill="none" />
        <rect x="115" y="10" width="90" height="65" rx="10" stroke="#64748b" strokeWidth="1.5" fill="none" />
        <rect x="10" y="90" width="90" height="65" rx="10" stroke="#64748b" strokeWidth="1.5" fill="none" />
        <rect x="115" y="90" width="90" height="65" rx="10" stroke="#64748b" strokeWidth="1.5" fill="none" />
        {/* Labels inside */}
        <text x="55" y="47" textAnchor="middle" fontSize="9" fill="#d4af37" fontWeight="700">DEFAULT</text>
        <text x="160" y="47" textAnchor="middle" fontSize="9" fill="#64748b" fontWeight="700">RELAXED</text>
        <text x="55" y="127" textAnchor="middle" fontSize="9" fill="#64748b" fontWeight="700">STRICT</text>
        <text x="160" y="127" textAnchor="middle" fontSize="9" fill="#64748b" fontWeight="700">CUSTOM</text>
        {/* Active indicator on DEFAULT */}
        <circle cx="55" cy="33" r="5" fill="#d4af37" opacity="0.7" />
        {/* Cross divider */}
        <line x1="105" y1="10" x2="105" y2="155" stroke="#1e293b" strokeWidth="2" />
        <line x1="10" y1="78" x2="205" y2="78" stroke="#1e293b" strokeWidth="2" />
    </svg>
)

const AIFilterShape = () => (
    <svg width="200" height="160" viewBox="0 0 200 160" fill="none" className="absolute bottom-0 right-0 opacity-40">
        {/* Neural net nodes */}
        {[[30, 40], [30, 80], [30, 120]].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="8" stroke="#6366f1" strokeWidth="1.5" fill="none" />
        ))}
        {[[100, 30], [100, 65], [100, 100], [100, 135]].map(([x, y], i) => (
            <circle key={i + 10} cx={x} cy={y} r="8" stroke="#6366f1" strokeWidth="1.5" fill="none" />
        ))}
        {[[175, 55], [175, 110]].map(([x, y], i) => (
            <circle key={i + 20} cx={x} cy={y} r="8" stroke="#d4af37" strokeWidth="1.5" />
        ))}
        {/* Output label */}
        <text x="175" y="90" textAnchor="middle" fontSize="7" fill="#64748b">SAFE</text>
        {/* Connections left→mid */}
        {[[30, 40], [30, 80], [30, 120]].flatMap(([x1, y1]) =>
            [[100, 30], [100, 65], [100, 100], [100, 135]].map(([x2, y2], j) => (
                <line key={`${x1}-${j}`} x1={x1 + 8} y1={y1} x2={x2 - 8} y2={y2} stroke="#1e3a5f" strokeWidth="1" />
            ))
        )}
        {/* Connections mid→right */}
        {[[100, 30], [100, 65], [100, 100], [100, 135]].flatMap(([x1, y1]) =>
            [[175, 55], [175, 110]].map(([x2, y2], j) => (
                <line key={`r-${x1}-${j}`} x1={x1 + 8} y1={y1} x2={x2 - 8} y2={y2} stroke="#1e2a4a" strokeWidth="1" />
            ))
        )}
    </svg>
)

const LockoutShape = () => (
    <svg width="180" height="160" viewBox="0 0 180 160" fill="none" className="absolute bottom-0 right-0 opacity-40">
        {/* Phone outline */}
        <rect x="55" y="10" width="80" height="140" rx="14" stroke="#22c55e" strokeWidth="1.5" fill="none" />
        {/* Screen */}
        <rect x="65" y="28" width="60" height="90" rx="6" stroke="#22c55e" strokeWidth="1" fill="none" opacity="0.5" />
        {/* Lock icon on screen */}
        <path d="M86 65 Q86 52 95 52 Q104 52 104 65" stroke="#22c55e" strokeWidth="2" fill="none" strokeLinecap="round" />
        <rect x="80" y="64" width="30" height="22" rx="5" stroke="#22c55e" strokeWidth="2" fill="none" />
        <circle cx="95" cy="74" r="3" fill="#22c55e" opacity="0.8" />
        {/* Signal waves */}
        <path d="M20 80 Q35 65 55 80" stroke="#22c55e" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeDasharray="3 2" />
        <path d="M10 90 Q30 68 55 90" stroke="#22c55e" strokeWidth="1" fill="none" strokeLinecap="round" strokeDasharray="3 2" opacity="0.5" />
        {/* Home button */}
        <circle cx="95" cy="135" r="5" stroke="#22c55e" strokeWidth="1" fill="none" />
    </svg>
)

const InsightsShape = () => (
    <svg width="200" height="160" viewBox="0 0 200 160" fill="none" className="absolute bottom-0 right-0 opacity-40">
        {/* Bar chart */}
        <rect x="20" y="90" width="22" height="55" rx="3" stroke="#3b82f6" strokeWidth="1.5" fill="none" />
        <rect x="52" y="65" width="22" height="80" rx="3" stroke="#3b82f6" strokeWidth="1.5" fill="rgba(59,130,246,0.1)" />
        <rect x="84" y="40" width="22" height="105" rx="3" stroke="#d4af37" strokeWidth="1.5" fill="rgba(212,175,55,0.1)" />
        <rect x="116" y="70" width="22" height="75" rx="3" stroke="#3b82f6" strokeWidth="1.5" fill="none" />
        <rect x="148" y="100" width="22" height="45" rx="3" stroke="#3b82f6" strokeWidth="1.5" fill="none" />
        {/* X axis */}
        <line x1="10" y1="145" x2="180" y2="145" stroke="#1e293b" strokeWidth="1.5" />
        {/* Trend line */}
        <polyline points="31,95 63,70 95,45 127,68 159,88"
            stroke="#d4af37" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="4 2" />
    </svg>
)

const AssistantShape = () => (
    <svg width="200" height="155" viewBox="0 0 200 155" fill="none" className="absolute bottom-0 right-0 opacity-40">
        {/* Chat bubble parent */}
        <rect x="10" y="10" width="130" height="48" rx="14" stroke="#a855f7" strokeWidth="1.5" fill="none" />
        <path d="M24 58 L14 72 L38 58" stroke="#a855f7" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
        {/* Dots inside parent bubble */}
        <circle cx="38" cy="34" r="4" fill="#a855f7" opacity="0.6" />
        <circle cx="55" cy="34" r="4" fill="#a855f7" opacity="0.4" />
        <circle cx="72" cy="34" r="4" fill="#a855f7" opacity="0.25" />
        {/* Chat bubble child reply */}
        <rect x="60" y="88" width="130" height="48" rx="14" stroke="#6366f1" strokeWidth="1.5" fill="none" />
        <path d="M176 88 L186 74 L162 88" stroke="#6366f1" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
        <line x1="80" y1="112" x2="160" y2="112" stroke="#6366f1" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
        <line x1="80" y1="122" x2="130" y2="122" stroke="#6366f1" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
    </svg>
)

const AutoShutoffShape = () => (
    <svg width="180" height="160" viewBox="0 0 180 160" fill="none" className="absolute bottom-0 right-0 opacity-40">
        {/* Clock face */}
        <circle cx="95" cy="80" r="60" stroke="#f59e0b" strokeWidth="1.5" fill="none" />
        <circle cx="95" cy="80" r="48" stroke="#f59e0b" strokeWidth="1" fill="none" strokeDasharray="3 5" opacity="0.5" />
        {/* Tick marks */}
        {Array.from({ length: 12 }).map((_, i) => {
            const angle = (i * 30 - 90) * (Math.PI / 180)
            const x1 = 95 + 52 * Math.cos(angle), y1 = 80 + 52 * Math.sin(angle)
            const x2 = 95 + 44 * Math.cos(angle), y2 = 80 + 44 * Math.sin(angle)
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#f59e0b" strokeWidth={i % 3 === 0 ? 2 : 1} strokeLinecap="round" />
        })}
        {/* Hands */}
        <line x1="95" y1="80" x2="95" y2="42" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="95" y1="80" x2="125" y2="80" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />
        <circle cx="95" cy="80" r="4" fill="#f59e0b" />
        {/* Z Z Z sleep */}
        <text x="18" y="35" fontSize="14" fill="#f59e0b" fontWeight="700" opacity="0.7">z</text>
        <text x="28" y="22" fontSize="18" fill="#f59e0b" fontWeight="700" opacity="0.5">z</text>
        <text x="42" y="12" fontSize="22" fill="#f59e0b" fontWeight="700" opacity="0.3">z</text>
    </svg>
)

// ─── Feature data ─────────────────────────────────────────────────────────────

const features = [
    {
        id: "modes",
        title: "4 Guarded Modes",
        tag: "Protection",
        tagColor: "#d4af37",
        description: "Switch between Relaxed, Default (Psychologist recommended), Strict, and Custom to match your child's developmental stage.",
        bullets: ["Default mode designed by psychologists", "Custom rules per child", "One-tap mode switching"],
        ShapeEl: FourModesShape,
        size: "lg", // spans 2 cols on lg
    },
    {
        id: "ai",
        title: "AI Content Filter",
        tag: "AI",
        tagColor: "#6366f1",
        description: "Deep-level algorithm adjustment prevents toxic content before it reaches the screen.",
        bullets: ["Real-time threat scanning", "Pattern-based prediction", "Zero false-positive design"],
        ShapeEl: AIFilterShape,
        size: "sm",
    },
    {
        id: "lockout",
        title: "One-Tap Lockout",
        tag: "Control",
        tagColor: "#22c55e",
        description: "Instant remote shutoff from your own phone. Perfect for family dinner or bedtime.",
        bullets: ["Locks in under 1 second", "Works globally over the network", "Scheduled auto-lockouts"],
        ShapeEl: LockoutShape,
        size: "sm",
    },
    {
        id: "insights",
        title: "Usage Insights",
        tag: "Analytics",
        tagColor: "#3b82f6",
        description: "Weekly AI-generated reports on digital health, habit trends, and personalized parenting recommendations.",
        bullets: ["Weekly summaries emailed to you", "App usage breakdowns", "AI-backed habit insights"],
        ShapeEl: InsightsShape,
        size: "sm",
    },
    {
        id: "assistant",
        title: "Natural Language Controls",
        tag: "Assistant",
        tagColor: "#a855f7",
        description: "Talk to your parent dashboard to suggest new rules or adjust schedules using plain language.",
        bullets: ["\"Block TikTok after 8pm\"", "\"Allow games on weekends only\"", "Instant rule creation"],
        ShapeEl: AssistantShape,
        size: "lg",
    },
    {
        id: "shutoff",
        title: "Auto-Shutoff",
        tag: "Sleep",
        tagColor: "#f59e0b",
        description: "Customizable sleep schedules that turn the phone into a simple alarm clock at bedtime.",
        bullets: ["Blocks all apps at bedtime", "Still rings as alarm clock", "Gradual wind-down warnings"],
        ShapeEl: AutoShutoffShape,
        size: "sm",
    },
]

// ─── Component ────────────────────────────────────────────────────────────────

export default function Features() {
    return (
        <section id="features" className="py-28 bg-background relative overflow-hidden">

            {/* Corner decorations */}
            <svg width="160" height="160" viewBox="0 0 160 160" fill="none"
                className="absolute top-0 left-0 opacity-[0.055] pointer-events-none">
                {Array.from({ length: 6 }).map((_, row) =>
                    Array.from({ length: 6 }).map((_, col) => (
                        <circle key={`${row}-${col}`} cx={col * 28 + 14} cy={row * 28 + 14} r="2" fill="white" />
                    ))
                )}
            </svg>
            <svg width="180" height="180" viewBox="0 0 180 180" fill="none"
                className="absolute bottom-0 right-0 opacity-[0.04] pointer-events-none">
                {[0, 20, 40, 60, 80, 100, 120, 140, 160].map((v) => (
                    <line key={v} x1={v} y1="180" x2="180" y2={v} stroke="white" strokeWidth="1" />
                ))}
            </svg>

            <div className="max-w-6xl mx-auto px-6 relative z-10">

                {/* ── Header ──────────────────────────── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-[11px] font-black uppercase tracking-[0.15em] mb-6">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                        Feature Suite
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white font-heading leading-[1.05] mb-5">
                        Total Control.<br className="hidden md:block" />
                        <span className="text-primary italic"> Zero Friction.</span>
                    </h2>
                    <p className="text-slate-400 text-lg max-w-xl leading-relaxed">
                        BetterPhone isn't just a device — it's a comprehensive safety ecosystem, managed from a powerful parent dashboard.
                    </p>
                </motion.div>

                {/* ── Bento grid ──────────────────────── */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto">
                    {features.map((f, i) => (
                        <motion.div
                            key={f.id}
                            initial={{ opacity: 0, y: 32 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.55, delay: i * 0.08 }}
                            className={`relative overflow-hidden rounded-2xl border group transition-all duration-500 hover:-translate-y-0.5 ${f.size === "lg" ? "lg:col-span-2" : ""
                                }`}
                            style={{
                                background: "#0d0d0d",
                                borderColor: "rgba(255,255,255,0.07)",
                            }}
                            onMouseEnter={(e) => {
                                (e.currentTarget as HTMLDivElement).style.borderColor = `${f.tagColor}40`
                            }}
                            onMouseLeave={(e) => {
                                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.07)"
                            }}
                        >
                            {/* Flat illustration header */}
                            <div className="relative h-44 overflow-hidden border-b"
                                style={{ background: "#111", borderColor: "rgba(255,255,255,0.05)" }}>

                                {/* Tag chip top-left */}
                                <div className="absolute top-4 left-5 z-10">
                                    <span
                                        className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.14em]"
                                        style={{
                                            background: `${f.tagColor}18`,
                                            border: `1px solid ${f.tagColor}35`,
                                            color: f.tagColor,
                                        }}
                                    >
                                        {f.tag}
                                    </span>
                                </div>

                                {/* Feature title bottom-left */}
                                <div className="absolute bottom-4 left-5 right-[140px] z-10">
                                    <h3 className="text-white font-black text-lg leading-tight">{f.title}</h3>
                                </div>

                                {/* 2D illustration — bottom-right corner */}
                                <f.ShapeEl />
                            </div>

                            {/* Card body */}
                            <div className="px-5 py-5">
                                <p className="text-slate-400 text-sm leading-relaxed mb-5">
                                    {f.description}
                                </p>

                                {/* Bullet feature list */}
                                <ul className="space-y-2">
                                    {f.bullets.map((b) => (
                                        <li key={b} className="flex items-start gap-2.5">
                                            <span
                                                className="mt-1.5 h-1.5 w-1.5 rounded-full shrink-0"
                                                style={{ background: f.tagColor }}
                                            />
                                            <span className="text-slate-300 text-xs font-medium leading-relaxed">{b}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
