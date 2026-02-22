import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
    Shield, Clock, AlertTriangle, Check, X,
    MessageSquare, Camera, Gamepad2, Globe, MapPin, Settings,
    ChevronDown, Lock, Eye, Bell
} from "lucide-react"

// ─── 2D Mode shapes (SVG) ─────────────────────────────────────────────────────

/** Protected (6-9): padlock grid — concentric lock rings */
const ProtectedShape = () => (
    <svg width="150" height="120" viewBox="0 0 150 120" fill="none" className="absolute bottom-0 right-0 opacity-35">
        {/* Outer arc of lock */}
        <path d="M60 70 Q60 30 100 30 Q140 30 140 70" stroke="#22c55e" strokeWidth="2" fill="none" strokeLinecap="round" />
        {/* Lock body */}
        <rect x="42" y="66" width="96" height="54" rx="8" stroke="#22c55e" strokeWidth="1.5" fill="none" />
        {/* Inner arc */}
        <path d="M72 70 Q72 46 100 46 Q128 46 128 70" stroke="#22c55e" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeDasharray="4 3" />
        {/* Keyhole */}
        <circle cx="90" cy="90" r="7" stroke="#22c55e" strokeWidth="1.5" />
        <line x1="90" y1="97" x2="90" y2="108" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" />
        {/* Small corner dots */}
        <circle cx="42" cy="66" r="3" fill="#22c55e" opacity="0.7" />
        <circle cx="138" cy="66" r="3" fill="#22c55e" opacity="0.7" />
    </svg>
)

/** Guided (10-13): signal / wifi expanding arcs */
const GuidedShape = () => (
    <svg width="150" height="120" viewBox="0 0 150 120" fill="none" className="absolute bottom-0 right-0 opacity-35">
        {/* WiFi arcs */}
        <path d="M55 105 Q55 50 105 50 Q155 50 155 105" stroke="#3b82f6" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M68 105 Q68 65 105 65 Q142 65 142 105" stroke="#3b82f6" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M81 105 Q81 80 105 80 Q129 80 129 105" stroke="#3b82f6" strokeWidth="2" fill="none" strokeLinecap="round" />
        {/* Center dot */}
        <circle cx="105" cy="105" r="5" fill="#3b82f6" opacity="0.8" />
        {/* Tick marks on outer arc */}
        <line x1="55" y1="105" x2="62" y2="100" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="155" y1="105" x2="148" y2="100" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" />
        {/* Small grid lines */}
        <line x1="10" y1="110" x2="50" y2="110" stroke="#1e3a5f" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="10" y1="100" x2="50" y2="100" stroke="#1e3a5f" strokeWidth="1" strokeDasharray="3 3" />
    </svg>
)

/** Independent (14-17): circuit-board / AI scan lines */
const IndependentShape = () => (
    <svg width="160" height="120" viewBox="0 0 160 120" fill="none" className="absolute bottom-0 right-0 opacity-35">
        {/* Main scan box */}
        <rect x="60" y="20" width="80" height="80" rx="6" stroke="#a855f7" strokeWidth="1.5" fill="none" />
        {/* Corner brackets */}
        <path d="M60 38 L60 20 L78 20" stroke="#a855f7" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <path d="M122 20 L140 20 L140 38" stroke="#a855f7" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <path d="M60 82 L60 100 L78 100" stroke="#a855f7" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <path d="M122 100 L140 100 L140 82" stroke="#a855f7" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        {/* Scan line */}
        <line x1="60" y1="55" x2="140" y2="55" stroke="#a855f7" strokeWidth="1" strokeDasharray="5 3" opacity="0.6" />
        {/* Inner target cross */}
        <line x1="100" y1="40" x2="100" y2="80" stroke="#a855f7" strokeWidth="1" opacity="0.4" />
        <line x1="80" y1="60" x2="120" y2="60" stroke="#a855f7" strokeWidth="1" opacity="0.4" />
        <circle cx="100" cy="60" r="8" stroke="#a855f7" strokeWidth="1.5" fill="none" />
        <circle cx="100" cy="60" r="2" fill="#a855f7" opacity="0.8" />
        {/* Side data lines */}
        <line x1="20" y1="40" x2="55" y2="40" stroke="#4c1d95" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="20" y1="55" x2="55" y2="55" stroke="#4c1d95" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="20" y1="70" x2="55" y2="70" stroke="#4c1d95" strokeWidth="1" strokeDasharray="3 3" />
        <circle cx="20" cy="40" r="2" fill="#7c3aed" opacity="0.6" />
        <circle cx="20" cy="55" r="2" fill="#7c3aed" opacity="0.6" />
        <circle cx="20" cy="70" r="2" fill="#7c3aed" opacity="0.6" />
    </svg>
)

// ─── Data ─────────────────────────────────────────────────────────────────────

const AGE_GROUPS = [
    { id: "6-9", label: "Age 6–9" },
    { id: "10-13", label: "Age 10–13" },
    { id: "14-17", label: "Age 14–17" },
] as const

type AgeGroupId = typeof AGE_GROUPS[number]["id"]

const MODE_DATA: Record<AgeGroupId, {
    mode: string
    tagline: string
    description: string
    expandedDescription: string
    screenTime: { used: number; total: number }
    sleepAt: string
    risks: string
    accentColor: string
    accentBg: string
    accentBorder: string
    accentRing: string
    batteryPct: number
    alerts: { text: string; type: "warn" | "info" | "block" }[]
    apps: { name: string; Icon: any; status: "on" | "limited" | "off"; detail: string }[]
    activity: { time: string; label: string; type: "blocked" | "allowed" | "alert" }[]
    ShapeEl: () => React.ReactElement
}> = {
    "6-9": {
        mode: "Protected Mode",
        tagline: "Maximum safety. Core communication only.",
        description: "Only approved contacts can reach your child. Screen time, sleep, and allowed apps are locked by default.",
        expandedDescription: "In Protected Mode, the phone operates as a walled garden. No app installations, no browser access, and no contact with unknown numbers. Every call and text goes through your approved list. Screen time is capped at 1 hour daily, and the device automatically locks at bedtime. Parents receive instant alerts for any blocked attempt. Designed with child psychologists for ages 6–9.",
        screenTime: { used: 1, total: 1 },
        sleepAt: "7:30 PM",
        risks: "Accidental content exposure, predatory contact.",
        accentColor: "#22c55e",
        accentBg: "rgba(34,197,94,0.08)",
        accentBorder: "rgba(34,197,94,0.25)",
        accentRing: "rgba(34,197,94,0.3)",
        batteryPct: 82,
        alerts: [
            { text: "Screen time limit reached for today", type: "warn" },
            { text: "Bedtime mode activates in 15 min", type: "info" },
        ],
        apps: [
            { name: "Calls & Texts", Icon: MessageSquare, status: "on", detail: "Approved contacts only" },
            { name: "Camera", Icon: Camera, status: "on", detail: "Local storage — no upload" },
            { name: "Games", Icon: Gamepad2, status: "off", detail: "Completely disabled" },
            { name: "Browser", Icon: Globe, status: "off", detail: "No internet access" },
        ],
        activity: [
            { time: "3:14 PM", label: "Text from Mom — allowed", type: "allowed" },
            { time: "3:22 PM", label: "App install blocked: TikTok", type: "blocked" },
            { time: "4:01 PM", label: "Screen time limit reached", type: "alert" },
        ],
        ShapeEl: ProtectedShape,
    },
    "10-13": {
        mode: "Guided Mode",
        tagline: "Independence with strong safeguards.",
        description: "Expanded freedoms with monitored messaging and curated app access. Social media remains blocked.",
        expandedDescription: "Guided Mode introduces age-appropriate freedoms while maintaining critical guardrails. Messaging is monitored by AI for bullying, harassment, and grooming language — you get alerted instantly. Games are allowed up to 30 minutes per day. The browser is accessible with forced SafeSearch and social media platforms blocked at the DNS level. Parents can customize allowed apps from the dashboard.",
        screenTime: { used: 1.5, total: 2 },
        sleepAt: "8:30 PM",
        risks: "Cyberbullying, algorithmic rabbit holes.",
        accentColor: "#3b82f6",
        accentBg: "rgba(59,130,246,0.08)",
        accentBorder: "rgba(59,130,246,0.25)",
        accentRing: "rgba(59,130,246,0.3)",
        batteryPct: 61,
        alerts: [
            { text: "Possible bullying keyword detected in messages", type: "warn" },
            { text: "30 min of screen time remaining", type: "info" },
        ],
        apps: [
            { name: "Messaging", Icon: MessageSquare, status: "limited", detail: "Monitored — bullying alerts on" },
            { name: "Camera", Icon: Camera, status: "on", detail: "Safe-share mode enabled" },
            { name: "Games", Icon: Gamepad2, status: "limited", detail: "30 min daily cap" },
            { name: "Browser", Icon: Globe, status: "limited", detail: "SafeSearch forced on" },
        ],
        activity: [
            { time: "2:55 PM", label: "Message flagged — reviewed", type: "alert" },
            { time: "3:30 PM", label: "Game session started (27 min left)", type: "allowed" },
            { time: "4:10 PM", label: "Website blocked: instagram.com", type: "blocked" },
        ],
        ShapeEl: GuidedShape,
    },
    "14-17": {
        mode: "Independent Mode",
        tagline: "Autonomy with continuous AI threat scanning.",
        description: "Near-full access with background AI scanning for explicit content, harmful links, and sleep disruption patterns.",
        expandedDescription: "Independent Mode gives teenagers near-full access while running silent AI threat detection in the background. Every link, download, and media file is scanned before it opens. Explicit content is automatically blocked. Parents receive weekly reports on app usage, site visits, and flagged events — without invasive snooping. A transparent, trust-building approach designed for ages 14–17.",
        screenTime: { used: 3.2, total: 5 },
        sleepAt: "10:00 PM",
        risks: "Sleep disruption, explicit peer-to-peer sharing.",
        accentColor: "#a855f7",
        accentBg: "rgba(168,85,247,0.08)",
        accentBorder: "rgba(168,85,247,0.25)",
        accentRing: "rgba(168,85,247,0.3)",
        batteryPct: 44,
        alerts: [
            { text: "AI scan detected a suspicious download link", type: "warn" },
        ],
        apps: [
            { name: "Messaging", Icon: MessageSquare, status: "on", detail: "AI threat scan active" },
            { name: "Camera", Icon: Camera, status: "on", detail: "Full access" },
            { name: "Games", Icon: Gamepad2, status: "on", detail: "Usage reports generated" },
            { name: "Browser", Icon: Globe, status: "on", detail: "Safe browsing + time limits" },
        ],
        activity: [
            { time: "1:40 PM", label: "Suspicious link blocked by AI", type: "blocked" },
            { time: "3:15 PM", label: "App Store purchase approved", type: "allowed" },
            { time: "5:00 PM", label: "Bedtime warning scheduled", type: "alert" },
        ],
        ShapeEl: IndependentShape,
    },
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function StatusPill({ type, text }: { type: "warn" | "info" | "block"; text: string }) {
    const styles = {
        warn: "bg-amber-500/10 border-amber-500/20 text-amber-400",
        info: "bg-blue-500/10 border-blue-500/20 text-blue-400",
        block: "bg-red-500/10 border-red-500/20 text-red-400",
    }
    const icons = { warn: AlertTriangle, info: Bell, block: Lock }
    const Icon = icons[type]
    return (
        <div className={`flex items-start gap-2.5 px-3 py-2.5 rounded-xl border text-xs font-medium ${styles[type]}`}>
            <Icon className="h-3.5 w-3.5 mt-px shrink-0" />
            <span className="leading-snug">{text}</span>
        </div>
    )
}

function AppRow({ app, accentColor, accentBg, accentBorder }: {
    app: { name: string; Icon: any; status: "on" | "limited" | "off"; detail: string }
    accentColor: string; accentBg: string; accentBorder: string
}) {
    const isOff = app.status === "off"
    const isLimited = app.status === "limited"
    return (
        <div className={`flex items-center gap-3 px-4 py-3 rounded-2xl border transition-all ${isOff ? "opacity-45 grayscale border-white/5 bg-white/[0.01]" : "border-white/[0.07] bg-white/[0.03]"}`}>
            <div className="h-9 w-9 rounded-xl flex items-center justify-center shrink-0"
                style={isOff
                    ? { background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }
                    : { background: accentBg, border: `1px solid ${accentBorder}` }}>
                <app.Icon className="h-4 w-4" style={{ color: isOff ? "#64748b" : accentColor }} strokeWidth={1.8} />
            </div>
            <div className="flex-1 min-w-0">
                <div className="text-white text-[13px] font-semibold leading-none mb-1">{app.name}</div>
                <div className="text-slate-500 text-[11px] font-medium truncate">{app.detail}</div>
            </div>
            <div className="shrink-0">
                {isOff && <X className="h-4 w-4 text-red-500/70" strokeWidth={2.5} />}
                {isLimited && (
                    <span className="px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider"
                        style={{ background: "rgba(251,191,36,0.12)", border: "1px solid rgba(251,191,36,0.2)", color: "#fbbf24" }}>
                        Limited
                    </span>
                )}
                {app.status === "on" && <Check className="h-4 w-4 text-emerald-500" strokeWidth={2.5} />}
            </div>
        </div>
    )
}

function ActivityRow({ item }: { item: { time: string; label: string; type: "blocked" | "allowed" | "alert" } }) {
    const dot = { blocked: "#ef4444", allowed: "#22c55e", alert: "#f59e0b" }
    return (
        <div className="flex items-start gap-3 py-2.5 border-b border-white/[0.04] last:border-0">
            <span className="mt-1 h-2 w-2 rounded-full shrink-0" style={{ background: dot[item.type] }} />
            <div className="flex-1 min-w-0">
                <p className="text-slate-300 text-[12px] font-medium leading-snug">{item.label}</p>
            </div>
            <span className="text-slate-600 text-[10px] font-medium shrink-0 mt-0.5">{item.time}</span>
        </div>
    )
}

function ScreenTimeRing({ used, total, color }: { used: number; total: number; color: string }) {
    const pct = Math.min(used / total, 1)
    const r = 28, circ = 2 * Math.PI * r, dash = circ * pct
    return (
        <svg width="72" height="72" viewBox="0 0 72 72" className="shrink-0">
            <circle cx="36" cy="36" r={r} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="7" />
            <circle cx="36" cy="36" r={r} fill="none" stroke={color} strokeWidth="7"
                strokeDasharray={`${dash} ${circ - dash}`} strokeDashoffset={circ / 4}
                strokeLinecap="round" style={{ transition: "stroke-dasharray 0.7s ease" }} />
            <text x="36" y="40" textAnchor="middle" fontSize="12" fontWeight="700" fill="white">{used}h</text>
        </svg>
    )
}

// ─── Main ─────────────────────────────────────────────────────────────────────

export default function AgeSimulator() {
    const [selectedAge, setSelectedAge] = useState<AgeGroupId>("10-13")
    const [activeTab, setActiveTab] = useState<"apps" | "activity">("apps")
    const [expanded, setExpanded] = useState(false)
    const data = MODE_DATA[selectedAge]
    const batteryColor = data.batteryPct > 50 ? "#22c55e" : data.batteryPct > 20 ? "#f59e0b" : "#ef4444"

    // Reset expanded when age changes
    const handleAgeChange = (id: AgeGroupId) => {
        setSelectedAge(id)
        setExpanded(false)
    }

    return (
        <section id="age-simulator" className="py-28 bg-background relative overflow-hidden">

            {/* ── Page corner decorations (2D shapes, no gradients) ── */}
            {/* Top-right: dot grid */}
            <svg width="160" height="160" viewBox="0 0 160 160" fill="none"
                className="absolute top-0 right-0 opacity-[0.055] pointer-events-none">
                {Array.from({ length: 6 }).map((_, row) =>
                    Array.from({ length: 6 }).map((_, col) => (
                        <circle key={`${row}-${col}`} cx={col * 28 + 14} cy={row * 28 + 14} r="2" fill="white" />
                    ))
                )}
            </svg>

            {/* Bottom-left: diagonal hatch */}
            <svg width="180" height="180" viewBox="0 0 180 180" fill="none"
                className="absolute bottom-0 left-0 opacity-[0.045] pointer-events-none">
                {[0, 20, 40, 60, 80, 100, 120, 140, 160].map((v) => (
                    <line key={v} x1={0} y1={180 - v} x2={v} y2={180} stroke="white" strokeWidth="1" />
                ))}
            </svg>

            <div className="max-w-6xl mx-auto px-6 relative z-10">

                {/* ── Header ─────────────────────────────────────── */}
                <div className="text-center max-w-3xl mx-auto mb-14">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-[11px] font-black uppercase tracking-[0.15em] mb-6">
                        <Eye className="h-3 w-3" /> Live Simulation
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white mb-5 font-heading leading-[1.05]">
                        See What Parents See
                    </h2>
                    <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
                        Select an age group to preview the real parent dashboard — exactly what you'd monitor from your phone.
                    </p>
                </div>

                {/* ── Age selector ───────────────────────────────── */}
                <div className="flex flex-wrap justify-center gap-3 mb-14">
                    {AGE_GROUPS.map((group) => (
                        <button
                            key={group.id}
                            onClick={() => handleAgeChange(group.id as AgeGroupId)}
                            className="relative px-7 py-3 rounded-full font-bold text-sm transition-all duration-300 border"
                            style={selectedAge === group.id ? {
                                background: data.accentBg,
                                border: `1px solid ${data.accentBorder}`,
                                color: "#fff",
                            } : {
                                background: "rgba(255,255,255,0.03)",
                                border: "1px solid rgba(255,255,255,0.08)",
                                color: "#94a3b8",
                            }}
                        >
                            {group.label}
                        </button>
                    ))}
                </div>

                {/* ── Two-column layout ───────────────────────────── */}
                <div className="grid lg:grid-cols-2 gap-8 items-start">

                    {/* ── LEFT: Info card with 2D shape header ─── */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={selectedAge + "-info"}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.35 }}
                            className="flex flex-col gap-4"
                        >
                            {/* ── Mode card with illustration header ── */}
                            <div className="rounded-2xl overflow-hidden border"
                                style={{ background: "#0d0d0d", borderColor: `${data.accentColor}33` }}>

                                {/* Flat illustrated header */}
                                <div className="relative h-32 overflow-hidden border-b"
                                    style={{ background: "#111", borderColor: "rgba(255,255,255,0.06)" }}>
                                    {/* Mode label bottom-left */}
                                    <div className="absolute bottom-4 left-5 z-10">
                                        <p className="text-[10px] font-black uppercase tracking-widest"
                                            style={{ color: data.accentColor }}>Active Mode</p>
                                        <h3 className="text-white font-black text-lg leading-tight">{data.mode}</h3>
                                    </div>
                                    {/* 2D shape bottom-right */}
                                    <data.ShapeEl />
                                </div>

                                {/* Card body */}
                                <div className="p-6">
                                    {/* Short description always visible */}
                                    <p className="text-slate-400 text-sm leading-relaxed mb-4">
                                        {data.description}
                                    </p>

                                    {/* Expandable full description */}
                                    <AnimatePresence initial={false}>
                                        {expanded && (
                                            <motion.div
                                                key="expanded"
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                                                style={{ overflow: "hidden" }}
                                            >
                                                <p className="text-slate-300 text-sm leading-relaxed mb-4 pt-1 border-t border-white/5">
                                                    {data.expandedDescription}
                                                </p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    {/* See More / Less toggle */}
                                    <button
                                        onClick={() => setExpanded((v) => !v)}
                                        className="flex items-center gap-1.5 text-[11px] font-black uppercase tracking-wider transition-colors mb-6"
                                        style={{ color: data.accentColor }}
                                    >
                                        {expanded ? "See Less" : "See More"}
                                        <motion.span
                                            animate={{ rotate: expanded ? 180 : 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="inline-flex"
                                        >
                                            <ChevronDown className="h-3.5 w-3.5" />
                                        </motion.span>
                                    </button>

                                    {/* Screen time + bedtime stats */}
                                    <div className="grid grid-cols-2 gap-3 mb-5">
                                        <div className="rounded-xl p-4 border"
                                            style={{ background: "rgba(255,255,255,0.02)", borderColor: "rgba(255,255,255,0.06)" }}>
                                            <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-2 flex items-center gap-1.5">
                                                <Clock className="h-3 w-3" /> Screen Time
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <ScreenTimeRing used={data.screenTime.used} total={data.screenTime.total} color={data.accentColor} />
                                                <div>
                                                    <p className="text-white font-black text-sm">{data.screenTime.used}h <span className="text-slate-500 font-medium">/ {data.screenTime.total}h</span></p>
                                                    <p className="text-slate-500 text-[11px] mt-0.5">used today</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="rounded-xl p-4 border"
                                            style={{ background: "rgba(255,255,255,0.02)", borderColor: "rgba(255,255,255,0.06)" }}>
                                            <div className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-2 flex items-center gap-1.5">
                                                <Clock className="h-3 w-3" /> Bedtime
                                            </div>
                                            <p className="text-white font-black text-2xl mt-2">{data.sleepAt}</p>
                                            <p className="text-slate-500 text-[11px] mt-0.5">auto sleep lock</p>
                                        </div>
                                    </div>

                                    {/* Alerts */}
                                    {data.alerts.length > 0 && (
                                        <div className="flex flex-col gap-2 mb-4">
                                            <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">Recent Alerts</p>
                                            {data.alerts.map((a, i) => <StatusPill key={i} type={a.type} text={a.text} />)}
                                        </div>
                                    )}

                                    {/* Risk mitigated */}
                                    <div className="rounded-xl border p-4 flex items-start gap-3"
                                        style={{ background: "rgba(239,68,68,0.04)", borderColor: "rgba(239,68,68,0.12)" }}>
                                        <AlertTriangle className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />
                                        <div>
                                            <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">Risks Mitigated</p>
                                            <p className="text-slate-300 text-sm font-medium">{data.risks}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* ── RIGHT: Realistic phone mockup ─── */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={selectedAge + "-app"}
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -24 }}
                            transition={{ duration: 0.4 }}
                            className="relative mx-auto"
                            style={{ width: "320px" }}
                        >
                            {/* ── Realistic iPhone SVG frame ─────────────────────── */}
                            <svg
                                viewBox="0 0 320 660"
                                xmlns="http://www.w3.org/2000/svg"
                                style={{ width: "100%", filter: "drop-shadow(0 40px 80px rgba(0,0,0,0.85)) drop-shadow(0 0 1px rgba(255,255,255,0.06))" }}
                            >
                                <defs>
                                    {/* Clip path for screen area */}
                                    <clipPath id={`screen-clip-${selectedAge}`}>
                                        <rect x="12" y="12" width="296" height="636" rx="38" ry="38" />
                                    </clipPath>
                                    {/* Frame body gradient — titanium brushed effect */}
                                    <linearGradient id="frame-grad" x1="0" y1="0" x2="1" y2="0">
                                        <stop offset="0%" stopColor="#2a2a2c" />
                                        <stop offset="30%" stopColor="#1c1c1e" />
                                        <stop offset="70%" stopColor="#1c1c1e" />
                                        <stop offset="100%" stopColor="#2e2e30" />
                                    </linearGradient>
                                    {/* Specular left-edge highlight */}
                                    <linearGradient id="spec-left" x1="0" y1="0" x2="1" y2="0">
                                        <stop offset="0%" stopColor="white" stopOpacity="0.18" />
                                        <stop offset="100%" stopColor="white" stopOpacity="0" />
                                    </linearGradient>
                                    {/* Screen top vignette */}
                                    <linearGradient id="screen-vignette" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor="black" stopOpacity="0.35" />
                                        <stop offset="8%" stopColor="black" stopOpacity="0" />
                                        <stop offset="92%" stopColor="black" stopOpacity="0" />
                                        <stop offset="100%" stopColor="black" stopOpacity="0.25" />
                                    </linearGradient>
                                    {/* Bottom floor shadow */}
                                    <radialGradient id="floor-shadow" cx="50%" cy="0%" r="50%">
                                        <stop offset="0%" stopColor="black" stopOpacity="0.55" />
                                        <stop offset="100%" stopColor="black" stopOpacity="0" />
                                    </radialGradient>
                                </defs>

                                {/* ── Floor shadow ── */}
                                <ellipse cx="160" cy="668" rx="130" ry="18" fill="url(#floor-shadow)" />

                                {/* ── Outer phone body ── */}
                                <rect x="0" y="0" width="320" height="660" rx="52" ry="52"
                                    fill="url(#frame-grad)" />

                                {/* ── Physical side buttons ── */}
                                {/* Volume Up */}
                                <rect x="-3" y="130" width="5" height="36" rx="2.5"
                                    fill="#2a2a2c" stroke="#3a3a3c" strokeWidth="0.5" />
                                {/* Volume Down */}
                                <rect x="-3" y="180" width="5" height="36" rx="2.5"
                                    fill="#2a2a2c" stroke="#3a3a3c" strokeWidth="0.5" />
                                {/* Silent switch */}
                                <rect x="-3" y="90" width="5" height="22" rx="2.5"
                                    fill="#2a2a2c" stroke="#3a3a3c" strokeWidth="0.5" />
                                {/* Power / side button */}
                                <rect x="318" y="150" width="5" height="62" rx="2.5"
                                    fill="#2a2a2c" stroke="#3a3a3c" strokeWidth="0.5" />

                                {/* ── Screen background fill ── */}
                                <rect x="12" y="12" width="296" height="636" rx="40" ry="40"
                                    fill="#0d0d0d" />

                                {/* ── App UI inside screen via foreignObject ── */}
                                <foreignObject
                                    x="12" y="12" width="296" height="636"
                                    clipPath={`url(#screen-clip-${selectedAge})`}
                                    style={{ borderRadius: "40px", overflow: "hidden" }}
                                >
                                    <div
                                        style={{
                                            width: "296px",
                                            height: "636px",
                                            overflow: "hidden",
                                            background: "#0d0d0d",
                                            display: "flex",
                                            flexDirection: "column",
                                            fontFamily: "Inter, sans-serif",
                                        }}
                                    >
                                        {/* Status bar */}
                                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 20px 8px", background: "rgba(0,0,0,0.3)", flexShrink: 0 }}>
                                            <span style={{ color: "white", fontSize: "12px", fontWeight: 700 }}>9:41</span>
                                            {/* Dynamic Island pill */}
                                            <div style={{ height: "10px", width: "72px", background: "#000", borderRadius: "99px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                                <div style={{ height: "5px", width: "5px", borderRadius: "99px", background: "rgba(255,255,255,0.3)" }} />
                                            </div>
                                            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                                                {/* WiFi icon */}
                                                <svg width="14" height="11" viewBox="0 0 14 11" fill="none">
                                                    <path d="M1 3.5C3.3 1.3 6.4 0 7 0s3.7 1.3 6 3.5" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                                                    <path d="M3 6C4.2 4.8 5.5 4 7 4s2.8.8 4 2" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                                                    <circle cx="7" cy="9.5" r="1.2" fill="rgba(255,255,255,0.6)" />
                                                </svg>
                                                {/* Battery */}
                                                <div style={{ height: "8px", borderRadius: "2px", padding: "0 3px", display: "flex", alignItems: "center", fontSize: "7px", fontWeight: 900, background: batteryColor, color: "#000", minWidth: "26px" }}>
                                                    {data.batteryPct}%
                                                </div>
                                            </div>
                                        </div>

                                        {/* App header */}
                                        <div style={{ padding: "12px 16px 14px", background: "#111", borderBottom: "1px solid rgba(255,255,255,0.06)", flexShrink: 0 }}>
                                            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "10px" }}>
                                                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                                    <div style={{ height: "26px", width: "26px", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", background: data.accentBg, border: `1px solid ${data.accentBorder}` }}>
                                                        <Shield style={{ height: "14px", width: "14px", color: data.accentColor }} />
                                                    </div>
                                                    <span style={{ color: "white", fontWeight: 900, fontSize: "13px" }}>BetterPhone</span>
                                                </div>
                                                <div style={{ display: "flex", gap: "10px" }}>
                                                    <MapPin style={{ height: "14px", width: "14px", color: "#64748b" }} />
                                                    <Settings style={{ height: "14px", width: "14px", color: "#64748b" }} />
                                                </div>
                                            </div>
                                            <p style={{ fontSize: "9px", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.15em", color: data.accentColor, marginBottom: "2px" }}>{data.mode}</p>
                                            <p style={{ color: "white", fontWeight: 700, fontSize: "14px", margin: 0 }}>Emma's Phone</p>
                                            <p style={{ color: "#64748b", fontSize: "10px", marginTop: "2px" }}>{data.tagline}</p>
                                        </div>

                                        {/* Tab bar */}
                                        <div style={{ display: "flex", borderBottom: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.01)", flexShrink: 0 }}>
                                            {(["apps", "activity"] as const).map((tab) => (
                                                <button key={tab} onClick={() => setActiveTab(tab)}
                                                    style={{
                                                        flex: 1, padding: "10px 0", fontSize: "10px", fontWeight: 900,
                                                        textTransform: "uppercase", letterSpacing: "0.1em", background: "none",
                                                        border: "none", cursor: "pointer", transition: "color 0.2s",
                                                        color: activeTab === tab ? data.accentColor : "#64748b",
                                                        borderBottom: activeTab === tab ? `2px solid ${data.accentColor}` : "2px solid transparent",
                                                    }}>
                                                    {tab === "apps" ? "App Controls" : "Activity Log"}
                                                </button>
                                            ))}
                                        </div>

                                        {/* Scrollable tab content */}
                                        <div style={{ flex: 1, overflowY: "auto", padding: "12px", scrollbarWidth: "none" }}>
                                            <AnimatePresence mode="wait">
                                                {activeTab === "apps" ? (
                                                    <motion.div key="apps-phone"
                                                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                                                        transition={{ duration: 0.2 }}
                                                        style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
                                                        {data.apps.map((app, idx) => (
                                                            <motion.div key={app.name}
                                                                initial={{ opacity: 0, x: 8 }} animate={{ opacity: 1, x: 0 }}
                                                                transition={{ delay: idx * 0.07 }}>
                                                                <AppRow app={app} accentColor={data.accentColor}
                                                                    accentBg={data.accentBg} accentBorder={data.accentBorder} />
                                                            </motion.div>
                                                        ))}
                                                    </motion.div>
                                                ) : (
                                                    <motion.div key="activity-phone"
                                                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                                                        transition={{ duration: 0.2 }}>
                                                        <p style={{ fontSize: "9px", fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.15em", color: "#334155", marginBottom: "8px" }}>Today</p>
                                                        {data.activity.map((item, idx) => (
                                                            <motion.div key={idx}
                                                                initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                                                                transition={{ delay: idx * 0.08 }}>
                                                                <ActivityRow item={item} />
                                                            </motion.div>
                                                        ))}
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>

                                        {/* Home indicator */}
                                        <div style={{ display: "flex", justifyContent: "center", padding: "8px 0 14px", flexShrink: 0 }}>
                                            <div style={{ height: "4px", width: "90px", borderRadius: "99px", background: "rgba(255,255,255,0.2)" }} />
                                        </div>
                                    </div>
                                </foreignObject>

                                {/* ── Screen vignette overlay ── */}
                                <rect x="12" y="12" width="296" height="636" rx="40" ry="40"
                                    fill="url(#screen-vignette)" pointerEvents="none" />

                                {/* ── Left specular edge highlight ── */}
                                <rect x="0" y="0" width="40" height="660" rx="52" ry="52"
                                    fill="url(#spec-left)" pointerEvents="none" />

                                {/* ── Speaker grille — top center ── */}
                                {[-10, -5, 0, 5, 10].map((dx) => (
                                    <line key={dx}
                                        x1={160 + dx} y1="7" x2={160 + dx} y2="10"
                                        stroke="rgba(255,255,255,0.15)" strokeWidth="1.2" strokeLinecap="round" />
                                ))}

                                {/* ── Outer frame border (top edge highlight) ── */}
                                <rect x="0.5" y="0.5" width="319" height="659" rx="51.5" ry="51.5"
                                    fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />

                                {/* ── Inner bezel border ── */}
                                <rect x="11" y="11" width="298" height="638" rx="41" ry="41"
                                    fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                            </svg>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    )
}
