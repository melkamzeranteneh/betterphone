import { Plus, Minus } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { Badge } from "@/components/ui/badge"

const faqs = [
    {
        question: "How is this different from parental control apps?",
        answer: "Parental control apps are often easy for kids to bypass or disable. BetterPhone integrates safety at the operating system level. It's not an app; it's the foundation of the phone itself, making it impossible to circumvent."
    },
    {
        question: "Can my child download their own apps?",
        answer: "Every app download must be requested through the Parent Dashboard. You can see the app's safety rating (determined by our psychologists) before approving it."
    },
    {
        question: "Is there a camera on the phone?",
        answer: "Yes, there is a high-quality camera. However, by default, AI filtering checks for inappropriate content in photos, and social sharing is strictly disabled in the standard protection modes."
    },
    {
        question: "What happens when they grow up?",
        answer: "BetterPhone is designed to grow with your child. As they demonstrate responsibility, you can move from 'Strict' to 'Relaxed' or 'Custom' modes, slowly introducing more freedom while maintaining the core safety engine."
    },
    {
        question: "Does it work with my current carrier?",
        answer: "BetterPhone comes unlocked and works with all major US and International GSM carriers. Simply insert your existing SIM card or activate an eSIM."
    }
]

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    return (
        <section className="py-24 bg-background relative overflow-hidden">
            <div className="absolute inset-0 grid-background opacity-30 pointer-events-none" />

            <div className="container px-6 mx-auto relative z-10">
                <div className="grid lg:grid-cols-5 gap-20">
                    <div className="lg:col-span-2">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 uppercase tracking-widest px-4 py-1">FAQ</Badge>
                            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 font-heading leading-[1.1]">
                                Frequently Asked <br /> Questions
                            </h2>
                            <p className="text-slate-500 text-lg leading-relaxed max-w-sm">
                                Everything you need to know about the BetterPhone ecosystem and how we protect your family.
                            </p>
                        </motion.div>
                    </div>

                    <div className="lg:col-span-3">
                        <div className="flex flex-col gap-4">
                            {faqs.map((faq, index) => (
                                <FAQItem
                                    key={index}
                                    index={index}
                                    faq={faq}
                                    isOpen={openIndex === index}
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

function FAQItem({ faq, index, isOpen, onClick }: { faq: any, index: number, isOpen: boolean, onClick: () => void }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`group rounded-3xl border transition-all duration-500 overflow-hidden ${isOpen
                ? "bg-slate-900/40 border-primary/30 shadow-2xl shadow-primary/5"
                : "bg-white/5 border-white/5 hover:border-white/10"
                }`}
        >
            <button
                onClick={onClick}
                className="w-full text-left p-8 md:p-10 flex items-center justify-between gap-6"
            >
                <div className="flex items-center gap-8">
                    <span className={`text-sm font-black transition-colors duration-500 ${isOpen ? "text-primary" : "text-slate-600"}`}>
                        {(index + 1).toString().padStart(2, '0')}
                    </span>
                    <span className={`text-lg md:text-xl font-bold tracking-tight font-heading transition-colors duration-500 ${isOpen ? "text-white" : "text-slate-400 group-hover:text-slate-200"}`}>
                        {faq.question}
                    </span>
                </div>

                <div className={`h-10 w-10 md:h-12 md:w-12 rounded-xl flex items-center justify-center transition-all duration-500 flex-shrink-0 ${isOpen
                    ? "bg-primary text-black scale-110 shadow-lg shadow-primary/40"
                    : "bg-white/5 text-slate-500"
                    }`}>
                    {isOpen ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
                </div>
            </button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className="px-8 md:px-10 pb-10 ml-16 md:ml-20">
                            <div className="h-px w-full bg-white/10 mb-8" />
                            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
                                {faq.answer}
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
}
