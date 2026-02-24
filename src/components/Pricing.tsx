import { Check, Lock, ShieldCheck } from "lucide-react"
import { motion } from "framer-motion"

// ─── 2D corner illustrations (SVG) ───────────────────────────────────────────

/** Starter: stacked squares / shield grid */
const StarterShape = () => (
    <svg width="140" height="110" viewBox="0 0 140 110" fill="none" className="absolute bottom-0 right-0 opacity-40">
        <rect x="70" y="20" width="30" height="30" rx="4" stroke="#64748b" strokeWidth="1.5" />
        <rect x="90" y="38" width="30" height="30" rx="4" stroke="#64748b" strokeWidth="1.5" />
        <rect x="50" y="38" width="30" height="30" rx="4" stroke="#64748b" strokeWidth="1.5" />
        <rect x="70" y="56" width="30" height="30" rx="4" stroke="#64748b" strokeWidth="1.5" />
        <circle cx="85" cy="35" r="3" fill="#475569" />
        <circle cx="65" cy="53" r="3" fill="#475569" />
        <circle cx="105" cy="53" r="3" fill="#475569" />
        <line x1="10" y1="100" x2="130" y2="100" stroke="#334155" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="10" y1="10" x2="10" y2="100" stroke="#334155" strokeWidth="1" strokeDasharray="4 4" />
    </svg>
)

/** Family Plan: nested circles + radar rings */
const FamilyShape = () => (
    <svg width="140" height="120" viewBox="0 0 140 120" fill="none" className="absolute bottom-0 right-0 opacity-45">
        <circle cx="90" cy="70" r="55" stroke="#d4af37" strokeWidth="1" strokeDasharray="5 4" />
        <circle cx="90" cy="70" r="38" stroke="#d4af37" strokeWidth="1.5" />
        <circle cx="90" cy="70" r="21" stroke="#d4af37" strokeWidth="1.5" />
        <circle cx="90" cy="70" r="7" fill="#d4af37" opacity="0.6" />
        {/* pulse tick marks */}
        <line x1="90" y1="32" x2="90" y2="38" stroke="#d4af37" strokeWidth="2" strokeLinecap="round" />
        <line x1="128" y1="70" x2="122" y2="70" stroke="#d4af37" strokeWidth="2" strokeLinecap="round" />
        <line x1="90" y1="108" x2="90" y2="102" stroke="#d4af37" strokeWidth="2" strokeLinecap="round" />
    </svg>
)

// ─── Plan data ────────────────────────────────────────────────────────────────

const plans = [
    {
        id: "preorder",
        name: "Early Adopter Offer",
        badge: "LIMITED TIME" as string | null,
        description: "For our earliest supporters who believe in our mission. Get the BetterPhone at a special price.",
        price: "$499",
        priceSuffix: "one-time",
        priceNote: "+ $24.99/mo for software updates & support",
        cta: "Pre-Order Now",
        isPopular: true,
        accentColor: "#d4af37",
        ShapeEl: FamilyShape,
        features: [
            "Unlocked BetterPhone device",
            "All protection features included",
            "Constant software updates & support",
            "Early access to new features",
            "Direct line to our development team",
        ],
        notIncluded: [],
    },
    {
        id: "future",
        name: "Future Price",
        badge: null,
        description: "The standard retail price after the early adopter period ends.",
        price: "$899",
        priceSuffix: "one-time",
        priceNote: "+ $49.99/mo for software updates & support",
        cta: "Available Later",
        isPopular: false,
        accentColor: "#64748b",
        ShapeEl: StarterShape,
        features: [
            "Unlocked BetterPhone device",
            "All protection features included",
            "Constant software updates & support",
        ],
        notIncluded: [],
    },
]

// ─── Component ────────────────────────────────────────────────────────────────

export default function Pricing() {
    return (
        <section id="pricing" className="py-32 bg-background relative overflow-hidden">
            {/* Corner page decoration — top-left dots grid */}
            <svg width="160" height="160" viewBox="0 0 160 160" fill="none"
                className="absolute top-0 left-0 opacity-[0.06] pointer-events-none">
                {Array.from({ length: 6 }).map((_, row) =>
                    Array.from({ length: 6 }).map((_, col) => (
                        <circle key={`${row}-${col}`} cx={col * 28 + 14} cy={row * 28 + 14} r="2" fill="white" />
                    ))
                )}
            </svg>

            {/* Corner page decoration — bottom-right lines */}
            <svg width="180" height="180" viewBox="0 0 180 180" fill="none"
                className="absolute bottom-0 right-0 opacity-[0.05] pointer-events-none">
                {[0, 20, 40, 60, 80, 100, 120, 140, 160].map((v) => (
                    <line key={v} x1={v} y1="180" x2="180" y2={v} stroke="white" strokeWidth="1" />
                ))}
            </svg>

            <div className="max-w-6xl mx-auto px-6 relative z-10">

                {/* ── Header ────────────────────────────────────────────── */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-[11px] font-black uppercase tracking-[0.15em] mb-6">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                        Pricing
                    </div>

                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-5 font-heading leading-[1.05]">
                        Pre-Order Your BetterPhone
                    </h2>
                    <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
                        For a limited time, get the BetterPhone for your family at a special early adopter price.
                    </p>

                    {/* Billing toggle */}
                    
                </motion.div>

                {/* ── Cards ─────────────────────────────────────────────── */}
                <div className="grid gap-8 lg:grid-cols-2 items-stretch max-w-4xl mx-auto">
                    {plans.map((plan, i) => {
                        const displayPrice = plan.price;
                        const { ShapeEl } = plan

                        return (
                            <motion.div
                                key={plan.id}
                                initial={{ opacity: 0, y: 36 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.13 }}
                                className={`relative flex flex-col rounded-2xl overflow-hidden border transition-all duration-500 group hover:-translate-y-1 ${plan.id === 'future' ? 'opacity-50' : ''}`}
                                style={{
                                    background: "#0d0d0d",
                                    borderColor: plan.isPopular
                                        ? `${plan.accentColor}55`
                                        : "rgba(255,255,255,0.07)",
                                    boxShadow: plan.isPopular
                                        ? `0 0 0 1px ${plan.accentColor}30, 0 24px 48px -12px rgba(0,0,0,0.8)`
                                        : "0 24px 48px -12px rgba(0,0,0,0.7)",
                                }}
                            >
                                {/* ── Card header zone with 2D shape ── */}
                                <div className="relative h-36 overflow-hidden border-b"
                                    style={{ borderColor: "rgba(255,255,255,0.05)", background: "#111" }}>

                                    {/* Popular badge */}
                                    {plan.badge && (
                                        <div className="absolute top-4 left-5 z-10">
                                            <span
                                                className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.15em] text-black"
                                                style={{ background: plan.accentColor }}
                                            >
                                                ★ {plan.badge}
                                            </span>
                                        </div>
                                    )}

                                    {/* Plan label bottom-left */}
                                    <div className="absolute bottom-4 left-5 z-10">
                                        <p className="text-[10px] font-black uppercase tracking-[0.2em]"
                                            style={{ color: plan.accentColor }}>
                                            {plan.name}
                                        </p>
                                    </div>

                                    {/* 2D geometric illustration — bottom-right corner */}
                                    <ShapeEl />
                                </div>

                                {/* ── Card body ── */}
                                <div className="flex flex-col flex-1 px-6 py-6">

                                    {/* Price */}
                                    <div className="mb-5">
                                        <div className="flex items-baseline gap-1.5">
                                            <span className={`text-5xl font-black text-white tracking-tighter leading-none ${plan.id === 'future' ? 'line-through' : ''}`}>
                                                {displayPrice}
                                            </span>
                                            <span className="text-slate-500 text-sm font-medium">
                                                {plan.priceSuffix}
                                            </span>
                                        </div>
                                        <p className="text-slate-600 text-[11px] mt-1.5 font-medium">{plan.priceNote}</p>
                                    </div>

                                    {/* Description */}
                                    <p className="text-slate-400 text-sm leading-relaxed mb-6 pb-6 border-b border-white/[0.06]">
                                        {plan.description}
                                    </p>

                                    {/* CTA */}
                                    <button
                                        disabled={plan.id === 'future'}
                                        className="w-full h-11 rounded-xl text-[13px] font-black uppercase tracking-wider transition-all duration-300 mb-7 border disabled:opacity-50 disabled:cursor-not-allowed"
                                        style={
                                            plan.isPopular
                                                ? {
                                                    background: plan.accentColor,
                                                    color: "#000",
                                                    borderColor: plan.accentColor,
                                                    boxShadow: `0 4px 20px ${plan.accentColor}40`,
                                                }
                                                : {
                                                    background: "rgba(255,255,255,0.04)",
                                                    borderColor: "rgba(255,255,255,0.10)",
                                                    color: "#e2e8f0",
                                                }
                                        }
                                    >
                                        {plan.cta}
                                    </button>

                                    {/* Features */}
                                    <div className="flex-1">
                                        <p className="text-[10px] font-black uppercase tracking-[0.18em] text-slate-600 mb-4">
                                            What's included
                                        </p>
                                        <ul className="space-y-3">
                                            {plan.features.map((f) => (
                                                <li key={f} className="flex items-start gap-3">
                                                    <div
                                                        className="mt-0.5 h-4 w-4 rounded-full flex items-center justify-center flex-shrink-0"
                                                        style={{
                                                            background: `${plan.accentColor}18`,
                                                            border: `1px solid ${plan.accentColor}35`,
                                                        }}
                                                    >
                                                        <Check className="h-2.5 w-2.5" strokeWidth={3}
                                                            style={{ color: plan.accentColor }} />
                                                    </div>
                                                    <span className="text-slate-300 text-xs font-medium leading-relaxed">{f}</span>
                                                </li>
                                            ))}
                                            {plan.notIncluded.map((f) => (
                                                <li key={f} className="flex items-start gap-3 opacity-30">
                                                    <div className="mt-0.5 h-4 w-4 rounded-full flex items-center justify-center flex-shrink-0 bg-white/5">
                                                        <svg viewBox="0 0 10 10" className="h-2 w-2 text-slate-500" fill="none" stroke="currentColor" strokeWidth={2}>
                                                            <path d="M2 5h6" />
                                                        </svg>
                                                    </div>
                                                    <span className="text-slate-500 text-xs font-medium line-through leading-relaxed">{f}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>

                {/* ── Footer note ───────────────────────────────────────── */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-xs text-slate-600"
                >
                    <span className="flex items-center gap-2 font-medium">
                        <Lock className="h-3.5 w-3.5" />
                        +$24.99/mo for updates & support; waived when BetterPhone Wireless launches.
                    </span>
                    <span className="hidden sm:block text-white/10">|</span>
                    <span className="flex items-center gap-2 font-medium">
                        <ShieldCheck className="h-3.5 w-3.5" />
                        Fill out our 10-min survey for a $100 gift card.
                    </span>
                </motion.div>
            </div>
        </section>
    )
}
