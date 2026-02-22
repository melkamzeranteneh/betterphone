import { ShieldCheck, User, Menu } from "lucide-react"

export default function Navbar() {
    return (
        <nav className="fixed top-8 left-0 w-full z-50 px-8 flex items-center justify-between pointer-events-none">
            {/* Left: Logo (Mimicking the abstract circle from the image) */}
            <div className="flex items-center gap-2 pointer-events-auto cursor-pointer group hover:scale-105 transition-transform">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-[#050505] flex items-center justify-center ml-1 mt-1">
                        <div className="w-3 h-3 bg-white rounded-full mr-1 mb-1" />
                    </div>
                </div>
            </div>

            {/* Center: Main Nav Pill */}
            <div className="hidden lg:flex items-center gap-3 pointer-events-auto">
                <div className="flex items-center gap-8 px-8 py-3 rounded-full bg-[#111] border border-white/5 backdrop-blur-xl">
                    <a href="#" className="text-white text-sm font-medium transition-colors">Home</a>
                    <a href="#simulator" className="text-white/50 text-sm hover:text-white transition-colors">Simulator</a>
                    <a href="#features" className="text-white/50 text-sm hover:text-white transition-colors">Features</a>
                    <a href="#pricing" className="text-white/50 text-sm hover:text-white transition-colors">Pricing</a>
                    <a href="#faq" className="text-white/50 text-sm hover:text-white transition-colors">FAQ</a>
                </div>

                {/* Secondary Pill */}
                <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-[#111] border border-white/5 backdrop-blur-xl cursor-pointer hover:bg-[#1a1a1a] transition-all">
                    <span className="text-white/80 text-sm pl-2">Protection ↗</span>
                    <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center">
                        <ShieldCheck className="w-4 h-4 text-black" />
                    </div>
                </div>
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-4 pointer-events-auto">
                <button className="hidden sm:flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm font-medium group">
                    <User className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    Create Account
                </button>
                {/* Mobile Menu */}
                <button className="lg:hidden text-white w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                    <Menu className="w-5 h-5" />
                </button>
            </div>
        </nav>
    )
}
