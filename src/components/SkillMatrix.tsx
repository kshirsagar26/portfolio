"use client";
import React from "react";
import skills from "@/data/skills";
import { Crosshair, Terminal, Cpu } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";


const SkillMatrix = () => {
    return (
        <section id="skills" className="py-20 px-4 relative">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center gap-3 mb-10">
                    <Crosshair className="text-cyber-green w-8 h-8" />
                    <h2 className="text-3xl font-mono font-bold text-white">
                        <span className="text-cyber-blue">03.</span> TECHNICAL SKILLS
                    </h2>
                </div>

                <div className="grid grid-cols-1 gap-10">
                    {skills.map((category, idx) => (
                        <div key={idx} className="relative">
                            {/* Category Header */}
                            <div className="flex items-center gap-4 mb-6 border-b border-white/10 pb-2">
                                <h3 className="font-mono text-xl text-cyber-blue font-bold flex items-center gap-2">
                                    <span className="text-cyber-green/50">./</span>
                                    {category.title.toUpperCase().replace(/\s+/g, '_')}
                                </h3>
                                <div className="h-px bg-white/10 flex-grow" />
                                <span className="text-xs text-gray-600 font-mono hidden md:block">
                                    MODULE_LOADED
                                </span>
                            </div>

                            {/* Skills Grid - Tech Chips */}
                            <div className="flex flex-wrap gap-4">
                                {category.items.map((skill, sIdx) => (
                                    <div
                                        key={sIdx}
                                        className="group relative flex items-center gap-3 px-4 py-3 bg-cyber-dark-card/40 border border-white/5 hover:border-cyber-green/50 rounded-sm transition-all duration-300 hover:bg-cyber-blue/5 overflow-hidden"
                                    >
                                        <div className="relative w-6 h-6 flex-shrink-0 grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100 group-hover:scale-110">
                                            <Image
                                                src={skill.icon || ""}
                                                alt={skill.title}
                                                width={24}
                                                height={24}
                                                className="w-full h-full object-contain"
                                            />
                                        </div>

                                        <span className="font-mono text-sm text-gray-300 group-hover:text-cyber-green transition-colors z-10">
                                            {skill.title}
                                        </span>

                                        {/* Status Indicator */}
                                        <div className="ml-2 w-1.5 h-1.5 rounded-full bg-gray-700 group-hover:bg-cyber-green shadow-[0_0_5px_theme('colors.cyber.green')] transition-colors" />

                                        {/* Decorative Corner */}
                                        <div className="absolute -top-1 -right-1 w-2 h-2 border-b border-l border-white/10 group-hover:border-cyber-green/30" />
                                        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyber-green/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillMatrix;
