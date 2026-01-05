"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Terminal, FileText, ChevronRight, Lock } from "lucide-react";
import CyberButton from "./ui/CyberButton";
import Link from "next/link";
import Strings from "@/constants/strings";
import GlassCard from "./ui/GlassCard";

const TERMINAL_LINES = [
    "> INITIALIZING SECURE CONNECTION...",
    "> ACCESSING MAINFRAME...",
    "> USER: SHLOK KSHIRSAGAR",
    "> ROLE: CYBERSECURITY PROFESSIONAL",
    "> STATUS: ONLINE",
];

const HeroTerminal = () => {
    const [typedText, setTypedText] = useState<string[]>([]);

    // ... (keep usage of TERMINAL_LINES instead of lines)

    const [subtitle, setSubtitle] = useState("");
    const fullSubtitle = "Cybersecurity Engineer";

    useEffect(() => {
        let index = 0;
        const typeSubtitle = () => {
            if (index <= fullSubtitle.length) {
                setSubtitle(fullSubtitle.slice(0, index));
                index++;
                setTimeout(typeSubtitle, 100);
            }
        };
        // Start typing subtitle after a delay
        const timer = setTimeout(typeSubtitle, 1000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        let lineIndex = 0;
        let charIndex = 0;
        let currentText: string[] = [];

        const typeLine = () => {
            if (lineIndex >= TERMINAL_LINES.length) return;

            const currentLine = TERMINAL_LINES[lineIndex];

            // Safety check
            if (!currentLine) return;

            if (charIndex < currentLine.length) {
                // Determine if we need to add a new line or update the last one
                if (charIndex === 0) {
                    currentText.push(currentLine[0]);
                } else {
                    currentText[lineIndex] = (currentText[lineIndex] || "") + currentLine[charIndex];
                }

                setTypedText([...currentText]);
                charIndex++;
                setTimeout(typeLine, 30 + Math.random() * 50); // Random typing speed
            } else {
                lineIndex++;
                charIndex = 0;
                setTimeout(typeLine, 300); // Pause between lines
            }
        };

        // Start typing terminal after a delay
        const timeout = setTimeout(typeLine, 500);
        return () => clearTimeout(timeout);
    }, []); // Empty dependency array is fine here as we use constants/local vars

    return (
        <section className="min-h-screen flex items-center justify-center pt-20 pb-10 px-4">
            <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="order-2 lg:order-1"
                >
                    <div className="mb-4" />
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-white">
                        Shlok <span className="text-cyber-blue relative">
                            Kshirsagar
                            <span className="absolute -bottom-2 left-0 w-full h-1 bg-cyber-blue blur-[2px]" />
                        </span>
                    </h1>

                    <h2 className="text-2xl md:text-3xl font-mono text-cyber-green mb-6 flex items-center gap-2">
                        &gt; {subtitle}
                        <span className="w-3 h-6 bg-cyber-green animate-pulse inline-block" />
                    </h2>
                    <p className="text-gray-400 text-lg mb-8 leading-relaxed max-w-lg">
                        I am a Masters student at the University of Washington Bothell. Specialized in GRC,
                        vulnerability assessment, penetration testing, and securing infrastructure against cyber threats.
                        Your security is my mission.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <Link href="#contact">
                            <CyberButton icon={<ChevronRight />}>
                                Lets Connect
                            </CyberButton>
                        </Link>
                        <Link href={Strings.resumeLink} target="_blank">
                            <CyberButton variant="outline" icon={<FileText />}>
                                Resume
                            </CyberButton>
                        </Link>
                    </div>
                </motion.div>

                {/* Terminal Window */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="order-1 lg:order-2 w-full"
                >
                    <GlassCard className="font-mono text-sm md:text-base min-h-[300px] flex flex-col border-cyber-blue/30 shadow-[0_0_50px_rgba(0,163,255,0.15)]">
                        {/* Terminal Header */}
                        <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-2">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                            </div>
                            <div className="text-xs text-gray-500 flex items-center gap-1">
                                <Lock className="w-3 h-3" />
                                shlok@kali-linux:~
                            </div>
                        </div>

                        {/* Terminal Body */}
                        <div className="flex-1 space-y-2 text-gray-300">
                            {typedText.map((line, index) => (
                                <div key={index} className={`${index === typedText.length - 1 ? "text-cyber-blue" : "text-gray-300"}`}>
                                    {line}
                                    {index === typedText.length - 1 && (
                                        <span className="inline-block w-2 h-4 bg-cyber-blue ml-1 animate-pulse" />
                                    )}
                                </div>
                            ))}
                            {typedText.length === 0 && <span className="inline-block w-2 h-4 bg-cyber-blue ml-1 animate-pulse" />}
                        </div>
                    </GlassCard>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroTerminal;
