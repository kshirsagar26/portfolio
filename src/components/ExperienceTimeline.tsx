"use client";
import React from "react";
import experiences from "@/data/experiences";
import GlassCard from "./ui/GlassCard";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { cn } from "@/utils/cn";

const ExperienceTimeline = () => {
    return (
        <section id="experiences" className="py-20 px-4 relative">
            <div className="max-w-5xl mx-auto">
                <div className="flex items-center gap-3 mb-12">
                    <Briefcase className="text-cyber-green w-8 h-8" />
                    <h2 className="text-3xl font-mono font-bold text-white">
                        <span className="text-cyber-blue">01.</span> TECHNICAL EXPERIENCE
                    </h2>
                </div>

                <div className="relative border-l-2 border-white/10 ml-3 md:ml-6 space-y-12 pl-6 md:pl-10">
                    {experiences.map((exp, idx) => (
                        <div key={idx} className="relative group">
                            {/* Dot on timeline */}
                            <div className="absolute -left-[2.1rem] md:-left-[3.1rem] top-1 w-4 h-4 rounded-full bg-cyber-dark-bg border-2 border-cyber-blue group-hover:bg-cyber-blue group-hover:shadow-[0_0_10px_rgba(0,163,255,0.5)] transition-all duration-300" />

                            <GlassCard className="p-6 md:p-8 hover:border-cyber-blue/30 transition-all duration-300">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-white group-hover:text-cyber-blue transition-colors">
                                            {exp.designation}
                                        </h3>
                                        <p className="text-cyber-green font-mono text-sm mt-1">
                                            {exp.company}
                                        </p>
                                    </div>
                                    <div className="flex flex-col items-start md:items-end text-sm text-gray-500 font-mono gap-1">
                                        <div className="flex items-center gap-2">
                                            <Calendar className="w-4 h-4" />
                                            {exp.startDate} - {exp.endDate || "Present"}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <MapPin className="w-4 h-4" />
                                            {exp.location}
                                        </div>
                                    </div>
                                </div>

                                <ul className="space-y-2">
                                    {exp.description.map((desc, dIdx) => (
                                        <li key={dIdx} className="text-gray-400 text-sm leading-relaxed flex items-start gap-2">
                                            <span className="text-cyber-blue mt-1.5 min-w-[6px] h-[6px] rounded-full bg-cyber-blue/50" />
                                            {desc}
                                        </li>
                                    ))}
                                </ul>
                            </GlassCard>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExperienceTimeline;
