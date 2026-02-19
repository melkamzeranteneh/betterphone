import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, ShieldCheck, Zap, Lock } from "lucide-react"
import { motion } from "framer-motion"

export default function Pricing() {
    return (
        <section id="pricing" className="py-24 bg-background relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />

            <div className="container px-4 relative z-10 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl mx-auto text-center mb-20"
                >
                    <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 uppercase tracking-widest px-4 py-1">Limited Early Access</Badge>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-8 font-heading leading-[1.1]">
                        Invest in their <br /> <span className="text-primary italic">digital future.</span>
                    </h2>
                    <p className="text-xl text-slate-500 max-w-xl mx-auto font-sans leading-relaxed">
                        Secure the Early Adopter pricing and lock in exclusive lifetime benefits before our global public launch.
                    </p>
                </motion.div>

                <div className="grid gap-8 lg:grid-cols-5 max-w-7xl mx-auto items-stretch">
                    {/* Future Retail Price - Info Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-2 rounded-[2.5rem] bg-white/[0.02] border border-white/5 p-10 flex flex-col justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 hover:border-white/20 hover:bg-white/[0.04] transition-all duration-500"
                    >
                        <span className="text-slate-500 text-xs font-black uppercase tracking-widest mb-4">Future Retail Price</span>
                        <div className="flex items-baseline gap-2 mb-2">
                            <span className="text-5xl font-black text-slate-400">$899</span>
                        </div>
                        <p className="text-slate-600 text-sm font-bold mb-8">+ $49.99/mo safe-service fee</p>
                        <div className="h-px w-full bg-white/5 mb-8" />
                        <p className="text-slate-500 text-sm leading-relaxed italic">
                            Standard pricing scheduled for Q4 2026. Early supporters save over 45% for the lifetime of their account.
                        </p>
                    </motion.div>

                    {/* Main Pricing Card - Early Adopter */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-3 relative rounded-[2.5rem] bg-slate-900/40 border-2 border-primary/40 shadow-2xl shadow-primary/10 overflow-hidden flex flex-col hover:border-primary/80 hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-all duration-500"
                    >
                        <div className="p-8 md:p-12 flex flex-col bg-gradient-to-br from-primary/10 via-transparent to-transparent">
                            <div className="flex justify-between items-start mb-8">
                                <div>
                                    <Badge className="bg-primary text-black font-black uppercase tracking-widest text-[10px] px-4 py-1.5 mb-4">
                                        EARLY ADOPTER ACCESS
                                    </Badge>
                                    <h3 className="text-2xl font-black text-white uppercase tracking-tight">Lifetime Supporter Bundle</h3>
                                </div>
                                <div className="hidden sm:flex flex-col items-end">
                                    <span className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em]">Current Price</span>
                                    <span className="text-3xl font-black text-white">$499</span>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-10">
                                <div className="space-y-6">
                                    <div className="flex items-baseline gap-3">
                                        <span className="text-6xl font-black text-white tracking-tighter">$499</span>
                                        <div className="flex flex-col">
                                            <span className="text-primary text-xs font-bold line-through opacity-50">$899 Retail</span>
                                            <span className="text-slate-500 text-xs font-medium">One-time fee</span>
                                        </div>
                                    </div>
                                    <p className="text-slate-400 text-sm leading-relaxed">
                                        + $24.99/mo for continuous updates & support.
                                        <span className="text-white font-bold ml-1">Monthly fee waived once BetterPhone Wireless launches — included free.</span>
                                    </p>

                                    <div className="pt-4">
                                        <Button className="w-full h-16 rounded-2xl bg-primary text-black hover:bg-primary/90 font-black uppercase tracking-widest shadow-xl shadow-primary/20 group">
                                            Pre-Order BetterPhone
                                            <Zap className="ml-2 h-4 w-4 fill-current" />
                                        </Button>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-2 block">What's Included</span>
                                    <ul className="space-y-3">
                                        {[
                                            "Unlocked device - any global carrier",
                                            "All 4 Psychologist-backed modes",
                                            "Parent Dashboard (iOS, Android, Web)",
                                            "Continuous safety threat updates",
                                            "Direct access to founding team",
                                            "Priority support for life"
                                        ].map((item) => (
                                            <li key={item} className="flex items-start gap-3">
                                                <div className="creamy-icon-wrapper h-5 w-5 border-primary/20 mt-0.5 flex-shrink-0">
                                                    <Check className="h-3 w-3" />
                                                </div>
                                                <span className="text-slate-300 text-xs font-medium">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Extra Value Section */}
                        <div className="mt-auto border-t border-white/10 bg-black/40 p-8 md:p-10">
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-6 block">Exclusive Early Adopter Bonuses</span>
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="flex gap-4 items-start p-4 rounded-2xl bg-primary/5 border border-primary/10">
                                    <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                                        <ShieldCheck className="h-4 w-4 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="text-white text-xs font-bold mb-1">AI Algorithm Adjuster</h4>
                                        <div className="flex items-center gap-2">
                                            <span className="text-slate-500 text-[10px] line-through">$29/mo</span>
                                            <span className="text-primary text-[10px] font-black uppercase">Free for life</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start p-4 rounded-2xl bg-primary/5 border border-primary/10">
                                    <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                                        <Zap className="h-4 w-4 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="text-white text-xs font-bold mb-1">Natural Language Controls</h4>
                                        <div className="flex items-center gap-2">
                                            <span className="text-slate-500 text-[10px] line-through">$19/mo</span>
                                            <span className="text-primary text-[10px] font-black uppercase">Free for life</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Guarantee Footer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="mt-12 flex flex-col items-center gap-4 text-center"
                >
                    <div className="flex items-center gap-2 text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] font-sans">
                        <Lock className="h-3.5 w-3.5" />
                        30-day satisfaction guarantee · Full refund if you're not happy
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
