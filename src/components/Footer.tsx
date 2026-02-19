import { ShieldCheck, Twitter, Instagram, Linkedin, Mail, Phone, MessageCircle, Send, ArrowUpRight, MessageSquare } from "lucide-react"

export default function Footer() {
    return (
        <footer className="bg-black text-slate-400 py-24 border-t border-white/5">
            <div className="container px-4">
                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 mb-20">
                    <div className="col-span-1 lg:col-span-2">
                        <div className="flex items-center gap-2 mb-8">
                            <div className="creamy-icon-wrapper h-10 w-10">
                                <ShieldCheck className="h-6 w-6" />
                            </div>
                            <span className="text-2xl font-bold tracking-tight text-white font-heading">BetterPhone</span>
                        </div>
                        <p className="max-w-md text-slate-400 mb-8 leading-relaxed text-lg">
                            BetterPhone is a mission-driven company dedicated to protecting the next generation of digital citizens. Designed in collaboration with child psychologists, we believe every child deserves a safe start.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="creamy-icon-wrapper h-12 w-12 hover:scale-110">
                                <Twitter className="h-5 w-5" />
                            </a>
                            <a href="#" className="creamy-icon-wrapper h-12 w-12 hover:scale-110 shadow-primary/5">
                                <Instagram className="h-5 w-5" />
                            </a>
                            <a href="#" className="creamy-icon-wrapper h-12 w-12 hover:scale-110 shadow-primary/5">
                                <Linkedin className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    <div className="lg:col-span-2">
                        <h4 className="text-white font-black mb-8 uppercase tracking-[0.2em] text-[10px]">Direct Support</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <a href="https://wa.me/6285190559877?text=Hi%2C%20I%27m%20interested%20in%20BetterPhone%20and%20would%20like%20to%20learn%20more." target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-green-500/50 hover:bg-green-500/10 transition-all duration-300">
                                <div className="creamy-icon-wrapper h-10 w-10 border-white/5 group-hover:bg-green-500/20 transition-colors">
                                    <MessageCircle className="h-5 w-5 text-green-500" />
                                </div>
                                <div>
                                    <div className="text-white text-sm font-bold">WhatsApp</div>
                                    <div className="text-slate-500 text-[10px] font-medium tracking-tight">Chat with us directly</div>
                                </div>
                                <ArrowUpRight className="ml-auto h-3 w-3 text-slate-600 group-hover:text-white transition-colors" />
                            </a>

                            <a href="https://t.me/betterphone_team" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300">
                                <div className="creamy-icon-wrapper h-10 w-10 border-white/5 group-hover:bg-blue-500/20 transition-colors">
                                    <Send className="h-5 w-5 text-blue-500" />
                                </div>
                                <div>
                                    <div className="text-white text-sm font-bold">Telegram</div>
                                    <div className="text-slate-500 text-[10px] font-medium tracking-tight">Message our team</div>
                                </div>
                                <ArrowUpRight className="ml-auto h-3 w-3 text-slate-600 group-hover:text-white transition-colors" />
                            </a>

                            <a href="mailto:Jeremiah@internetfilter.org?subject=Interested%20in%20BetterPhone&body=Hi%2C%20I%27d%20like%20to%20learn%20more%20about%20BetterPhone." className="group flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300">
                                <div className="creamy-icon-wrapper h-10 w-10 border-white/5 group-hover:bg-primary/20 transition-colors">
                                    <Mail className="h-5 w-5 text-primary" />
                                </div>
                                <div>
                                    <div className="text-white text-sm font-bold">Email</div>
                                    <div className="text-slate-500 text-[10px] font-medium tracking-tight">Jeremiah@filter.org</div>
                                </div>
                                <ArrowUpRight className="ml-auto h-3 w-3 text-slate-600 group-hover:text-white transition-colors" />
                            </a>

                            <a href="tel:+15714833888" className="group flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-white/20 hover:bg-white/5 transition-all duration-300">
                                <div className="creamy-icon-wrapper h-10 w-10 border-white/5 group-hover:bg-white/10 transition-colors">
                                    <Phone className="h-5 w-5 text-white" />
                                </div>
                                <div>
                                    <div className="text-white text-sm font-bold">Call Us</div>
                                    <div className="text-slate-500 text-[10px] font-medium tracking-tight">(571) 483-3888</div>
                                </div>
                                <ArrowUpRight className="ml-auto h-3 w-3 text-slate-600 group-hover:text-white transition-colors" />
                            </a>

                            <a href="sms:+15714833888?body=Hi%2C%20I%27m%20interested%20in%20BetterPhone%20and%20would%20like%20to%20learn%20more." className="group flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-white/20 hover:bg-white/5 transition-all duration-300">
                                <div className="creamy-icon-wrapper h-10 w-10 border-white/5 group-hover:bg-white/10 transition-colors">
                                    <MessageSquare className="h-5 w-5 text-white" />
                                </div>
                                <div>
                                    <div className="text-white text-sm font-bold">Text Us</div>
                                    <div className="text-slate-500 text-[10px] font-medium tracking-tight">(571) 483-3888</div>
                                </div>
                                <ArrowUpRight className="ml-auto h-3 w-3 text-slate-600 group-hover:text-white transition-colors" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-slate-500">
                    <p>© {new Date().getFullYear()} BetterPhone Inc. All rights reserved.</p>
                    <div className="flex gap-8 uppercase tracking-widest">
                        <span>Secure Checkout</span>
                        <span>Encrypted Data</span>
                        <span>COPPA Compliant</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}
