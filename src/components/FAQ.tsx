import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

// ─── FAQ data ─────────────────────────────────────────────────────────────────

const faqs = [
    {
        q: "How is BetterPhone different from parental control apps?",
        a: "Parental control apps are easily bypassed. BetterPhone integrates safety at the operating system level. It's not an app; it's the foundation of the phone. There's nothing for kids to uninstall or get around.",
        tag: "Un-bypassable",
        color: "#22c55e",
    },
    {
        q: "Is it really ready to go out of the box?",
        a: "Yes. All the recommended protections and settings from our child psychologists are pre-installed. You can simply buy the phone, give it to your child, and you're all set. No setup required.",
        tag: "Easy Setup",
        color: "#d4af37",
    },
    {
        q: "Can I customize the settings?",
        a: "Absolutely. While our default mode is recommended, you can use our Parent Dashboard app on your own phone (iOS, Android, or Web) to control every single feature and protection to fit your family's specific needs.",
        tag: "Customizable",
        color: "#3b82f6",
    },
    {
        q: "How does BetterPhone grow with my child?",
        a: "Our protection modes (Strict, Default, Relaxed, Custom) are designed to adapt as your child matures. You can easily transition between modes, giving them more freedom as they demonstrate responsibility, all while keeping the core safety engine active.",
        tag: "Adaptable",
        color: "#a855f7",
    },
    {
        q: "Does it work with my current phone carrier?",
        a: "Yes. BetterPhone is sold unlocked and is compatible with all major carriers. You can use your existing SIM card.",
        tag: "Compatibility",
        color: "#6366f1",
    },
    {
        q: "What is the monthly fee for?",
        a: "The monthly fee ensures your child is protected from the latest digital threats. It covers constant software updates, AI model training, and support. This fee will be waived once we launch our own phone plan, BetterPhone Wireless.",
        tag: "Subscription",
        color: "#f59e0b",
    },
]

// ─── Left illustration card ───────────────────────────────────────────────────

const FAQIllustration = () => (
    <svg width="100%" height="220" viewBox="0 0 300 220" fill="none" preserveAspectRatio="xMidYMid meet">
        {/* Outer Q bubble */}
        <rect x="20" y="20" width="170" height="80" rx="18" stroke="#d4af37" strokeWidth="1.5" fill="none" />
        <path d="M30 100 L20 118 L50 100" stroke="#d4af37" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
        {/* Question dots */}
        <circle cx="60" cy="60" r="5" fill="#d4af37" opacity="0.7" />
        <circle cx="85" cy="60" r="5" fill="#d4af37" opacity="0.5" />
        <circle cx="110" cy="60" r="5" fill="#d4af37" opacity="0.3" />
        <text x="130" y="67" fontSize="28" fontWeight="900" fill="#d4af37" opacity="0.6" fontFamily="serif">?</text>

        {/* Inner A bubble */}
        <rect x="110" y="115" width="170" height="80" rx="18" stroke="#6366f1" strokeWidth="1.5" fill="none" />
        <path d="M270 115 L280 97 L250 115" stroke="#6366f1" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
        {/* Answer lines */}
        <line x1="130" y1="145" x2="260" y2="145" stroke="#6366f1" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
        <line x1="130" y1="160" x2="230" y2="160" stroke="#6366f1" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
        <line x1="130" y1="175" x2="200" y2="175" stroke="#6366f1" strokeWidth="1.5" strokeLinecap="round" opacity="0.2" />

        {/* Corner dots top-right */}
        {[0, 1, 2, 3].map((r) => [0, 1, 2, 3].map((c) => (
            <circle key={`${r}-${c}`} cx={220 + c * 16} cy={20 + r * 16} r="2" fill="white" opacity="0.12" />
        )))}
    </svg>
)

// ─── Accordion item ───────────────────────────────────────────────────────────

function FAQItem({
    faq, index, isOpen, onClick,
}: {
    faq: typeof faqs[0]; index: number; isOpen: boolean; onClick: () => void
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.07 }}
            className="overflow-hidden rounded-xl border transition-all duration-400"
            style={{
                background: isOpen ? "#111" : "#0d0d0d",
                borderColor: isOpen ? `${faq.color}45` : "rgba(255,255,255,0.07)",
            }}
        >
            {/* Header row */}
            <button
                onClick={onClick}
                className="w-full text-left flex items-center gap-4 px-5 py-4"
            >
                {/* Index number */}
                <span
                    className="text-[10px] font-black tabular-nums shrink-0 w-5 text-center"
                    style={{ color: isOpen ? faq.color : "#334155" }}
                >
                    {String(index + 1).padStart(2, "0")}
                </span>

                {/* Question */}
                <span
                    className="flex-1 text-[15px] font-bold leading-snug transition-colors duration-300"
                    style={{ color: isOpen ? "#fff" : "#94a3b8" }}
                >
                    {faq.q}
                </span>

                {/* Expand indicator */}
                <div
                    className="shrink-0 h-7 w-7 rounded-lg flex items-center justify-center transition-all duration-300"
                    style={isOpen
                        ? { background: faq.color, border: `1px solid ${faq.color}` }
                        : { background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
                >
                    <svg viewBox="0 0 12 12" className="h-3 w-3 transition-transform duration-300"
                        style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)", color: isOpen ? "#000" : "#64748b" }}
                        fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round">
                        <path d="M6 1v10M1 6h10" />
                    </svg>
                </div>
            </button>

            {/* Expandable answer */}
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.38, ease: [0.4, 0, 0.2, 1] }}
                        style={{ overflow: "hidden" }}
                    >
                        {/* Top accent line */}
                        <div className="mx-5 h-px" style={{ background: `linear-gradient(to right, ${faq.color}50, transparent)` }} />

                        <div className="px-14 py-5 flex items-start gap-3">
                            {/* Tag chip */}
                            <span
                                className="shrink-0 mt-0.5 px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider"
                                style={{
                                    background: `${faq.color}15`,
                                    border: `1px solid ${faq.color}30`,
                                    color: faq.color,
                                }}
                            >
                                {faq.tag}
                            </span>
                            <p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
}

// ─── Main ─────────────────────────────────────────────────────────────────────

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    return (
        <section id="faq" className="py-28 bg-background relative overflow-hidden">

            {/* Corner decorations */}
            <svg width="160" height="160" viewBox="0 0 160 160" fill="none"
                className="absolute top-0 left-0 opacity-[0.05] pointer-events-none">
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
                <div className="grid lg:grid-cols-5 gap-12 items-start">

                    {/* ── Left: heading + illustration card ───── */}
                    <motion.div
                        initial={{ opacity: 0, x: -24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.65 }}
                        className="lg:col-span-2 flex flex-col gap-6"
                    >
                        {/* Eyebrow + heading */}
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-[11px] font-black uppercase tracking-[0.15em] mb-6">
                                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                                FAQ
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white font-heading leading-[1.05] mb-4">
                                Questions,<br />
                                <span className="text-primary italic">answered.</span>
                            </h2>
                            <p className="text-slate-500 text-base leading-relaxed">
                                Everything you need to know about BetterPhone, how it works, and how we protect your family.
                            </p>
                        </div>

                        {/* 2D illustration card */}
                        <div
                            className="rounded-2xl overflow-hidden border"
                            style={{ background: "#0d0d0d", borderColor: "rgba(255,255,255,0.07)" }}
                        >
                            {/* Flat illustrated header */}
                            <div className="border-b px-6 pt-5 pb-0"
                                style={{ background: "#111", borderColor: "rgba(255,255,255,0.05)" }}>
                                <FAQIllustration />
                            </div>
                            {/* Body */}
                            <div className="px-6 py-5">
                                <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">Still have questions?</p>
                                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                                    Our team typically responds within a few hours.
                                </p>
                                <a
                                    href="mailto:Jeremiah@internetfilter.org?subject=BetterPhone Question"
                                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-[12px] font-black uppercase tracking-wider border transition-all duration-300 hover:bg-white/5"
                                    style={{ borderColor: "rgba(255,255,255,0.1)", color: "#94a3b8" }}
                                >
                                    Ask us directly
                                    <svg viewBox="0 0 12 12" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
                                        <path d="M1 6h10M7 2l4 4-4 4" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* ── Right: accordion items ────────────────── */}
                    <div className="lg:col-span-3 flex flex-col gap-2.5">
                        {faqs.map((faq, i) => (
                            <FAQItem
                                key={i}
                                faq={faq}
                                index={i}
                                isOpen={openIndex === i}
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
