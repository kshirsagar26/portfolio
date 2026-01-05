import { cn } from "@/utils/cn";
import React from "react";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

const GlassCard = ({ children, className, hoverEffect = false, ...props }: GlassCardProps) => {
    return (
        <div
            className={cn(
                "bg-cyber-dark-card/60 backdrop-blur-md border border-white/10 rounded-xl p-6 relative overflow-hidden transition-all duration-300 group",
                hoverEffect && "hover:border-cyber-blue/50 hover:shadow-[0_0_20px_rgba(0,163,255,0.1)]",
                className
            )}
            {...props}
        >
            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-white/20 rounded-tl-sm" />
            <div className="absolute top-0 right-0 w-2 h-2 border-r border-t border-white/20 rounded-tr-sm" />
            <div className="absolute bottom-0 left-0 w-2 h-2 border-l border-b border-white/20 rounded-bl-sm" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-white/20 rounded-br-sm" />

            {children}
        </div>
    );
};

export default GlassCard;
