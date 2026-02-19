import { Button } from "@/components/ui/button"
import { ShieldCheck, Menu } from "lucide-react"
import { motion } from "framer-motion"

export default function Navbar() {
    return (
        <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full fixed top-6 left-0 z-[100] px-6"
        >
            <nav className="max-w-7xl mx-auto h-20 rounded-[2rem] border border-white/10 bg-black/40 backdrop-blur-2xl shadow-2xl shadow-black/50 flex items-center justify-between px-8 relative overflow-hidden">
                {/* Background Reflection */}
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                <div className="flex items-center gap-4 cursor-pointer group relative z-10">
                    <div className="creamy-icon-wrapper h-11 w-11 bg-primary/10 border-primary/20 rounded-xl group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-500">
                        <ShieldCheck className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xl font-black tracking-tighter text-white uppercase leading-none">BetterPhone</span>
                        <span className="text-[8px] font-black uppercase tracking-[0.4em] text-primary/60 mt-0.5">Protecting the future</span>
                    </div>
                </div>

                <div className="hidden lg:flex items-center gap-10 relative z-10">
                    {["Features", "Why BetterPhone", "Pricing"].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase().replace(" ", "")}`}
                            className="relative text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-white transition-colors group"
                        >
                            {item}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                        </a>
                    ))}
                </div>

                <div className="flex items-center gap-4 relative z-10">
                    <Button
                        size="lg"
                        className="h-12 px-8 bg-primary text-black hover:bg-primary/90 rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-lg shadow-primary/20 transition-all duration-300 hover:translate-y-[-2px]"
                        asChild
                    >
                        <a href="#pricing">Shop Now</a>
                    </Button>
                    <button className="lg:hidden h-12 w-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
                        <Menu className="h-6 w-6" />
                    </button>
                </div>
            </nav>
        </motion.div>
    )
}
