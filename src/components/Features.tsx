import { Badge } from "@/components/ui/badge"
import { Moon, Smartphone, Cpu, BellOff, MessageSquare, BarChart3, CheckCircle2, ShieldCheck } from "lucide-react"
import { motion } from "framer-motion"
import GlowCard from "./GlowCard"

const mainFeatures = [
    {
        title: "4 Guarded Modes",
        description: "Switch between Relaxed, Default (Psychologist recommended), Strict, and Custom to match your child's maturity.",
        icon: <Smartphone className="h-8 w-8" />,
    },
    {
        title: "AI Content Filter",
        description: "Deep-level algorithm adjustment prevents toxic content before it reaches the screen.",
        icon: <Cpu className="h-8 w-8" />,
    },
    {
        title: "One-Tap Lockout",
        description: "Instant remote shutoff from your own phone. Perfect for family dinner or bedtime.",
        icon: <BellOff className="h-8 w-8" />,
    },
    {
        title: "Usage Insights",
        description: "Weekly reports and AI recommendations on digital health and habit formation.",
        icon: <BarChart3 className="h-8 w-8" />,
    },
    {
        title: "Natural Assistant",
        description: "Talk to your parent dashboard to suggest new rules or adjust schedules using natural language.",
        icon: <MessageSquare className="h-8 w-8" />,
    },
    {
        title: "Auto-Shutoff",
        description: "Customizable sleep schedules that turn the phone into a simple alarm clock at night.",
        icon: <Moon className="h-8 w-8" />,
    }
]

export default function Features() {
    return (
        <section id="features" className="py-24 bg-background">
            <div className="container px-4 mx-auto">
                <div className="flex flex-col items-center text-center mb-20">
                    <Badge variant="outline" className="mb-4 border-primary/30 text-primary bg-primary/5 px-4 py-1">
                        Feature Suite
                    </Badge>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-6 font-heading">
                        Total Control. <br className="hidden md:block" /> <span className="text-primary italic">Zero Friction.</span>
                    </h2>
                    <p className="max-w-2xl text-lg text-slate-400 leading-relaxed font-sans mt-4">
                        BetterPhone isn't just a device; it's a comprehensive safety ecosystem managed by a powerful parent dashboard.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {mainFeatures.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <GlowCard
                                title={feature.title}
                                description={feature.description}
                            />
                        </motion.div>
                    ))}
                </div>

                {/* Highlighted Dashboard Mockup Area */}
                <div className="mt-20 rounded-[3.5rem] bg-gradient-to-br from-primary/20 via-primary/5 to-transparent p-px">
                    <div className="bg-black/60 backdrop-blur-xl rounded-[3.5rem] overflow-hidden p-8 md:p-16 border border-white/10">
                        <div className="grid gap-12 lg:grid-cols-2 items-center">
                            <div className="relative">
                                <div className="aspect-video w-full rounded-2xl bg-black border-4 border-slate-800 shadow-2xl overflow-hidden relative">
                                    {/* Mock Dashboard UI */}
                                    <div className="absolute inset-0 p-6 flex flex-col gap-4">
                                        <div className="flex justify-between items-center mb-4">
                                            <div className="h-4 w-32 bg-slate-800 rounded animate-pulse" />
                                            <div className="h-8 w-24 bg-primary/20 rounded-full border border-primary/30" />
                                        </div>
                                        <div className="grid grid-cols-3 gap-3">
                                            <div className="h-20 rounded-xl bg-slate-900 border border-white/5 flex flex-col items-center justify-center">
                                                <div className="h-2 w-12 bg-slate-700 rounded mb-2" />
                                                <div className="h-4 w-8 bg-slate-600 rounded" />
                                            </div>
                                            <div className="h-20 rounded-xl bg-slate-900 border border-white/5 flex flex-col items-center justify-center">
                                                <div className="h-2 w-12 bg-slate-700 rounded mb-2" />
                                                <div className="h-4 w-8 bg-slate-600 rounded" />
                                            </div>
                                            <div className="h-20 rounded-xl bg-primary/5 border border-primary/20 flex flex-col items-center justify-center">
                                                <div className="creamy-icon-wrapper h-8 w-8 mb-1">
                                                    <Smartphone className="h-5 w-5" />
                                                </div>
                                                <div className="text-[8px] font-bold text-primary">LOCKED</div>
                                            </div>
                                        </div>
                                        <div className="h-32 rounded-xl bg-slate-900/50 border border-white/5 p-4">
                                            <div className="h-4 w-40 bg-slate-800 rounded mb-4" />
                                            <div className="space-y-2">
                                                <div className="h-2 w-full bg-slate-800/50 rounded" />
                                                <div className="h-2 w-full bg-slate-800/50 rounded" />
                                                <div className="h-2 w-3/4 bg-slate-800/50 rounded" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Phone floating */}
                                <div className="absolute -bottom-6 -right-6 h-48 w-24 rounded-2xl border-4 border-slate-800 bg-black shadow-2xl hidden md:block border-primary/20">
                                    <div className="h-full w-full p-2 flex flex-col items-center justify-center gap-2">
                                        <div className="h-1 w-8 bg-slate-800 rounded-full mb-2" />
                                        <div className="creamy-icon-wrapper h-10 w-10">
                                            <ShieldCheck className="h-6 w-6" />
                                        </div>
                                        <div className="h-2 w-12 bg-primary/20 rounded" />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold text-white mb-6 font-heading">Parent Dashboard Mobile + Web</h3>
                                <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                                    Manage every aspect of your child's digital life from anywhere in the world. Whether you're at work or in the next room, you have the pulse on their safety.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-5">
                                        <div className="creamy-icon-wrapper h-8 w-8 flex-shrink-0 mt-1 border-primary/20">
                                            <CheckCircle2 className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white text-xl font-heading">Custom Restriction Lists</h4>
                                            <p className="text-slate-400 text-sm font-sans mt-1 leading-relaxed">Block specific apps or URLs with a heartbeat sync to your child's device.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-5">
                                        <div className="creamy-icon-wrapper h-8 w-8 flex-shrink-0 mt-1 border-primary/20">
                                            <CheckCircle2 className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white text-xl font-heading">Psychology-Backed Advice</h4>
                                            <p className="text-slate-400 text-sm font-sans mt-1 leading-relaxed">AI analysis helps you talk to your child about digital safety beyond just blocking.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
