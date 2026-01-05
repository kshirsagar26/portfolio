"use client";
import React from "react";
import { ShieldCheck } from "lucide-react";

const SecurityStatus = () => {
    return (
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-dark-bg/80 border border-cyber-green/30 backdrop-blur-sm">
            <div className="relative">
                <div className="w-2 h-2 bg-cyber-green rounded-full animate-pulse" />
                <div className="absolute inset-0 w-2 h-2 bg-cyber-green rounded-full animate-ping opacity-75" />
            </div>
            <span className="text-xs font-mono text-cyber-green font-bold tracking-wider">
                SYSTEM SECURE
            </span>
            <ShieldCheck className="w-3 h-3 text-cyber-green" />
        </div>
    );
};

export default SecurityStatus;
