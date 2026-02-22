import { AlertCircle, Moon, Users, ShieldAlert, Brain, ShieldX } from "lucide-react"
import { motion } from "framer-motion"

const problems = [
    { title: "Addictive Algorithm Design", icon: <Brain className="h-5 w-5" /> },
    { title: "Sleep Disruption", icon: <Moon className="h-5 w-5" /> },
    { title: "Cyberbullying", icon: <Users className="h-5 w-5" /> },
    { title: "Harmful Content Exposure", icon: <ShieldAlert className="h-5 w-5" /> },
    { title: "AI Accelerating Risks", icon: <AlertCircle className="h-5 w-5" /> },
    { title: "Complex Parental Controls", icon: <ShieldX className="h-5 w-5" /> },
]

export default function ProblemSection() {
    return (
        <section id="why" className="relative bg-background pt-32 pb-24 overflow-hidden">
            <div className="container px-6 mx-auto relative z-10">
                {/* 2. THE PROBLEM */}
                <div className="max-w-3xl mx-auto text-center mb-24">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground mb-6 font-sans"
                    >
                        Modern Smartphones Weren’t Built for Kids.
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-12"
                    >
                        {problems.map((problem, i) => (
                            <div key={i} className="flex items-center gap-3 p-4 hardware-card bg-secondary/30 border-transparent text-sm font-medium text-foreground">
                                <div className="text-muted-foreground">{problem.icon}</div>
                                <span>{problem.title}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* 3. THE SHIFT */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-32 max-w-4xl mx-auto hardware-card p-10 md:p-16 text-center"
                >
                    <h3 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
                        BetterPhone changes the foundation.
                    </h3>
                    <p className="text-xl text-muted-foreground font-medium mb-12">
                        You don’t configure protection.<br className="hidden sm:block" /> You start with it.
                    </p>

                    <div className="grid md:grid-cols-3 gap-8 relative">
                        {/* Connecting Line */}
                        <div className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-px bg-border -translate-y-1/2 z-0" />

                        {[
                            { step: "1", title: "Buy it" },
                            { step: "2", title: "Give it" },
                            { step: "3", title: "Protection active" }
                        ].map((item, index) => (
                            <div key={index} className="relative z-10 flex flex-col items-center gap-4 bg-card w-full p-4">
                                <div className="h-12 w-12 rounded-full border border-border bg-background flex items-center justify-center text-lg font-semibold shadow-sm">
                                    {item.step}
                                </div>
                                <div className="font-semibold text-foreground tracking-tight">{item.title}</div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
