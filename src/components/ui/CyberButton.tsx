import { cn } from "@/utils/cn";
import React from "react";

interface CyberButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "outline";
    className?: string;
    icon?: React.ReactNode;
}

const CyberButton = ({
    children,
    variant = "primary",
    className,
    icon,
    ...props
}: CyberButtonProps) => {
    const variants = {
        primary: "bg-cyber-blue text-black hover:bg-cyber-blue/90 border-transparent",
        secondary: "bg-cyber-green text-black hover:bg-cyber-green/90 border-transparent",
        outline: "bg-transparent border-cyber-blue text-cyber-blue hover:bg-cyber-blue/10",
    };

    return (
        <button
            className={cn(
                "relative px-6 py-2 font-mono text-sm font-bold uppercase tracking-wider border transition-all duration-200 group overflow-hidden",
                "clip-path-slant", // We might need to add a custom clip-path utility or just use standard shapes
                variants[variant],
                className
            )}
            {...props}
        >
            <span className="relative z-10 flex items-center gap-2">
                {icon && <span className="w-4 h-4">{icon}</span>}
                {children}
            </span>

            {/* Glitch overlay on hover */}
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 skew-y-12" />
        </button>
    );
};

export default CyberButton;
