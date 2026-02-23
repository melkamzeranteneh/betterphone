import { type ReactNode, type CSSProperties } from "react"
import { ArrowRight } from "lucide-react"
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface GlowCardProps {
    title: string
    description: string
    children?: ReactNode
    className?: string
    /** optional hex or css color for the glow accent (e.g. #d9ff4d) */
    glowColor?: string
    /** optional card background (e.g. #ffffff) */
    cardBg?: string
}

export default function GlowCard({ title, description, children, className, glowColor, cardBg }: GlowCardProps) {
    const style: CSSProperties = {
        ...(glowColor ? { ['--glow-color' as any]: glowColor, ['--glow-shadow' as any]: glowColor + '33', ['--glow-border' as any]: glowColor + '99' } : {}),
        ...(cardBg ? { ['--card-bg' as any]: cardBg } : {}),
    }

    return (
        <Card style={style} className={cn("glow-card-container h-full flex flex-col p-4", className)}>
            <div className="glow-card-glow" />
            <CardHeader className="relative z-10 p-6">
                <CardTitle className="text-3xl font-black tracking-tighter uppercase mb-2">
                    {title}
                </CardTitle>
                <CardDescription className="text-slate-500 text-lg font-medium leading-relaxed">
                    {description}
                </CardDescription>
            </CardHeader>

            {(children) && (
                <CardContent className="relative z-10 flex-1 p-6 pt-0">
                    {children}
                </CardContent>
            )}

            <CardFooter className="relative z-10 p-6 pt-0 mt-auto">
                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 group-hover:text-white transition-colors cursor-pointer">
                    Explore Details
                    <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                </div>
            </CardFooter>
        </Card>
    )
}
