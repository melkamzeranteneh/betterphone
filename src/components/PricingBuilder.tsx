import { useState } from "react"
import { CreditCard, ArrowRight } from "lucide-react"

export default function PricingBuilder() {
    const [children, setChildren] = useState(1)
    const [billing, setBilling] = useState<"monthly" | "yearly">("yearly")

    const basePrice = 299 // Hardware cost
    const serviceMonthly = 15
    const multiChildDiscount = children > 1 ? 0.2 : 0 // 20% off service for multi-child

    const monthlyServiceTotal = (serviceMonthly * children) * (1 - multiChildDiscount)
    const yearlyServiceTotal = monthlyServiceTotal * 12 * 0.8 // Extra 20% off for yearly

    const totalUpfront = basePrice * children
    const ongoingCost = billing === "monthly" ? monthlyServiceTotal : (yearlyServiceTotal / 12)

    return (
        <section id="pricing-builder" className="py-24 bg-[#050505] overflow-hidden border-b border-white/[0.05]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Built for Your Family</h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        Configure your protection ecosystem. No hidden fees, just transparent safety designed for modern parenting.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 items-stretch">

                    {/* Left: Configuration */}
                    <div className="flex-1 bg-[#0d0d0d] border border-white/10 rounded-[3rem] p-10 flex flex-col justify-center">
                        <div className="mb-12">
                            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-6 font-sans">Step 1: Family Size</p>
                            <div className="flex items-center gap-6">
                                <div className="flex-1 flex gap-2">
                                    {[1, 2, 3].map((num) => (
                                        <button
                                            key={num}
                                            onClick={() => setChildren(num)}
                                            className={`flex-1 py-4 rounded-2xl border transition-all ${children === num
                                                ? "bg-white text-black border-white shadow-xl"
                                                : "bg-white/5 text-slate-400 border-white/10 hover:border-white/20"
                                                }`}
                                        >
                                            <span className="text-sm font-black">{num} {num === 1 ? 'Child' : 'Children'}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div>
                            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-6 font-sans">Step 2: Protection Plan</p>
                            <div className="grid grid-cols-2 gap-4">
                                <button
                                    onClick={() => setBilling("monthly")}
                                    className={`p-6 rounded-2xl border transition-all text-left ${billing === "monthly"
                                        ? "bg-primary/20 border-primary/40"
                                        : "bg-white/5 border-white/10 hover:border-white/20"
                                        }`}
                                >
                                    <h4 className={`font-bold mb-1 ${billing === "monthly" ? 'text-white' : 'text-slate-400'}`}>Monthly</h4>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Flexibility first</p>
                                </button>
                                <button
                                    onClick={() => setBilling("yearly")}
                                    className={`p-6 rounded-2xl border transition-all text-left relative overflow-hidden ${billing === "yearly"
                                        ? "bg-primary/20 border-primary/40"
                                        : "bg-white/5 border-white/10 hover:border-white/20"
                                        }`}
                                >
                                    <div className="absolute top-0 right-0 bg-primary px-2 py-1 text-[8px] font-black text-black rounded-bl-lg">SAVE 20%</div>
                                    <h4 className={`font-bold mb-1 ${billing === "yearly" ? 'text-white' : 'text-slate-400'}`}>Yearly</h4>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Maximum value</p>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right: Summary Card */}
                    <div className="w-full lg:w-[450px] bg-white rounded-[3rem] p-10 flex flex-col shadow-2xl">
                        <div className="flex items-center gap-3 mb-10">
                            <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center">
                                <CreditCard className="w-5 h-5 text-white" />
                            </div>
                            <h3 className="text-2xl font-black text-black tracking-tighter">Order Summary</h3>
                        </div>

                        <div className="space-y-6 mb-10 flex-1">
                            <div className="flex justify-between items-end pb-4 border-b border-black/5">
                                <span className="text-slate-500 text-sm font-bold">{children}x BetterPhone Hardware</span>
                                <span className="text-black font-black">${totalUpfront}</span>
                            </div>
                            <div className="flex justify-between items-end pb-4 border-b border-black/5">
                                <div>
                                    <span className="text-slate-500 text-sm font-bold block">BetterOS Service</span>
                                    {children > 1 && <span className="text-[10px] text-emerald-600 font-black uppercase">Multi-child discount active</span>}
                                </div>
                                <span className="text-black font-black">${ongoingCost.toFixed(2)}<span className="text-[10px] opacity-40">/mo</span></span>
                            </div>
                            <div className="flex justify-between items-end pt-4">
                                <span className="text-slate-500 text-sm font-bold">Survey Credit Applied</span>
                                <span className="text-emerald-600 font-black">-$50.00</span>
                            </div>
                        </div>

                        <div className="bg-slate-50 p-6 rounded-2xl mb-8">
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-slate-500 text-xs font-bold uppercase tracking-widest">Initial Investment</span>
                                <span className="text-3xl font-black text-black">${totalUpfront - 50}</span>
                            </div>
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Including hardware + first month shipping</p>
                        </div>

                        <button className="w-full py-5 rounded-2xl bg-black text-white font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:scale-[1.02] transition-transform active:scale-95 shadow-xl">
                            Lock in Founding Price
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>

                </div>
            </div>
        </section>
    )
}
