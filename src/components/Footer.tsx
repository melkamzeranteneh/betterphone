import { ShieldCheck } from "lucide-react"

// ── Filled SVG icons ──────────────────────────────────────────────────────────
const WhatsAppIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-green-500">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
)

const TelegramIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-blue-400">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
)

const SMSIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-slate-300">
        <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
    </svg>
)

const MailIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-yellow-500">
        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
)

const PhoneIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-slate-300">
        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </svg>
)

// Filled social icons
const XIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.259 5.63L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
    </svg>
)

const InstagramIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
)

const FacebookIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
)

const ArrowUpRight = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="ml-auto h-3 w-3 text-slate-600 group-hover:text-white transition-colors shrink-0">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M7 7h10v10" />
    </svg>
)

export default function Footer() {
    return (
        <footer className="bg-background text-slate-400 py-24 border-t border-white/5">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3 mb-20">

                    {/* ── Brand Column ──────────────────────────── */}
                    <div className="col-span-1">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="creamy-icon-wrapper h-10 w-10">
                                <ShieldCheck className="h-6 w-6" />
                            </div>
                            <span className="text-2xl font-bold tracking-tight text-white font-heading">BetterPhone</span>
                        </div>
                        <p className="text-slate-400 mb-6 leading-relaxed text-[15px]">
                            A mission-driven company dedicated to protecting the next generation of digital citizens. Designed in collaboration with child psychologists.
                        </p>

                        {/* Online badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs text-slate-400 font-medium mb-8">
                            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                            Support team is online
                        </div>

                        {/* Social media — filled icons */}
                        <div>
                            <p className="text-[10px] uppercase tracking-[0.2em] text-white font-black mb-4">Follow Us</p>
                            <div className="flex gap-3">
                                <a
                                    href="https://x.com/betterphone"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Follow on X"
                                    className="flex items-center justify-center h-10 w-10 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:bg-white/10 hover:text-white hover:border-white/20 transition-all duration-300 hover:scale-110"
                                >
                                    <XIcon />
                                </a>
                                <a
                                    href="https://instagram.com/betterphone"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Follow on Instagram"
                                    className="flex items-center justify-center h-10 w-10 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:bg-gradient-to-br hover:from-pink-500/20 hover:to-purple-500/20 hover:text-pink-400 hover:border-pink-500/30 transition-all duration-300 hover:scale-110"
                                >
                                    <InstagramIcon />
                                </a>
                                <a
                                    href="https://facebook.com/betterphone"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Follow on Facebook"
                                    className="flex items-center justify-center h-10 w-10 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:bg-blue-600/20 hover:text-blue-400 hover:border-blue-500/30 transition-all duration-300 hover:scale-110"
                                >
                                    <FacebookIcon />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* ── Messaging Column ──────────────────────── */}
                    <div>
                        <h4 className="text-white font-black mb-6 uppercase tracking-[0.2em] text-[10px]">Messaging</h4>
                        <div className="flex flex-col gap-3">
                            <a
                                href="https://wa.me/6285190559877?text=Hi%2C%20I%27m%20interested%20in%20BetterPhone%20and%20would%20like%20to%20learn%20more."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-green-500/50 hover:bg-green-500/10 transition-all duration-300"
                            >
                                <div className="creamy-icon-wrapper h-10 w-10 border-white/5 group-hover:bg-green-500/20 transition-colors shrink-0">
                                    <WhatsAppIcon />
                                </div>
                                <div>
                                    <div className="text-white text-sm font-bold">WhatsApp</div>
                                    <div className="text-slate-500 text-[10px] font-medium tracking-tight">Chat with us directly</div>
                                </div>
                                <ArrowUpRight />
                            </a>

                            <a
                                href="https://t.me/betterphone_team"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300"
                            >
                                <div className="creamy-icon-wrapper h-10 w-10 border-white/5 group-hover:bg-blue-500/20 transition-colors shrink-0">
                                    <TelegramIcon />
                                </div>
                                <div>
                                    <div className="text-white text-sm font-bold">Telegram</div>
                                    <div className="text-slate-500 text-[10px] font-medium tracking-tight">Message our team</div>
                                </div>
                                <ArrowUpRight />
                            </a>

                            <a
                                href="sms:+15714833888?body=Hi%2C%20I%27m%20interested%20in%20BetterPhone%20and%20would%20like%20to%20learn%20more."
                                className="group flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-white/20 hover:bg-white/5 transition-all duration-300"
                            >
                                <div className="creamy-icon-wrapper h-10 w-10 border-white/5 group-hover:bg-white/10 transition-colors shrink-0">
                                    <SMSIcon />
                                </div>
                                <div>
                                    <div className="text-white text-sm font-bold">Text Us</div>
                                    <div className="text-slate-500 text-[10px] font-medium tracking-tight">(571) 483-3888</div>
                                </div>
                                <ArrowUpRight />
                            </a>
                        </div>
                    </div>

                    {/* ── Direct Contact Column ─────────────────── */}
                    <div>
                        <h4 className="text-white font-black mb-6 uppercase tracking-[0.2em] text-[10px]">Direct Contact</h4>
                        <div className="flex flex-col gap-3">
                            <a
                                href="mailto:Jeremiah@internetfilter.org?subject=Interested%20in%20BetterPhone&body=Hi%2C%20I%27d%20like%20to%20learn%20more%20about%20BetterPhone."
                                className="group flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-yellow-500/50 hover:bg-yellow-500/10 transition-all duration-300"
                            >
                                <div className="creamy-icon-wrapper h-10 w-10 border-white/5 group-hover:bg-yellow-500/20 transition-colors shrink-0">
                                    <MailIcon />
                                </div>
                                <div>
                                    <div className="text-white text-sm font-bold">Email</div>
                                    <div className="text-slate-500 text-[10px] font-medium tracking-tight">Jeremiah@internetfilter.org</div>
                                </div>
                                <ArrowUpRight />
                            </a>

                            <a
                                href="tel:+15714833888"
                                className="group flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-white/20 hover:bg-white/5 transition-all duration-300"
                            >
                                <div className="creamy-icon-wrapper h-10 w-10 border-white/5 group-hover:bg-white/10 transition-colors shrink-0">
                                    <PhoneIcon />
                                </div>
                                <div>
                                    <div className="text-white text-sm font-bold">Call Us</div>
                                    <div className="text-slate-500 text-[10px] font-medium tracking-tight">(571) 483-3888</div>
                                </div>
                                <ArrowUpRight />
                            </a>
                        </div>
                    </div>
                </div>

                {/* ── Bottom Bar ────────────────────────────────── */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-slate-500">
                    <p>© {new Date().getFullYear()} BetterPhone Inc. All rights reserved.</p>
                    <div className="flex gap-6 uppercase tracking-widest">
                        <span className="flex items-center gap-1.5">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                            Secure Checkout
                        </span>
                        <span className="flex items-center gap-1.5">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                            Encrypted Data
                        </span>
                        <span className="flex items-center gap-1.5">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                            COPPA Compliant
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    )
}
