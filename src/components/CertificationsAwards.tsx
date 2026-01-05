"use client";
import React from "react";
import awards from "@/data/awards";
import GlassCard from "./ui/GlassCard";
import { Award, ExternalLink, Calendar, BadgeCheck } from "lucide-react";
import Link from "next/link";

const CertificationsAwards = () => {
    return (
        <section id="awards" className="py-20 px-4 relative">
            <div className="max-w-6xl mx-auto px-4 z-10 relative">
                <h2 className="text-4xl font-bold text-white text-center mb-12 uppercase tracking-wide">
                    Certifications & Awards
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {awards.map((award, idx) => (
                        <GlassCard key={idx} className="group hover:border-cyber-green/50 h-full flex flex-col" hoverEffect={true}>
                            <div className="flex items-start justify-between mb-4">
                                <div className="p-3 bg-cyber-blue/10 rounded-lg text-cyber-blue group-hover:text-cyber-green transition-colors">
                                    <BadgeCheck className="w-8 h-8" />
                                </div>
                                {award.url && (
                                    <Link href={award.url} target="_blank">
                                        <ExternalLink className="w-5 h-5 text-gray-500 hover:text-white transition-colors" />
                                    </Link>
                                )}
                            </div>

                            <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyber-blue transition-colors min-h-[3.5rem] flex items-end">
                                {award.title}
                            </h3>
                            <p className="text-sm font-mono text-cyber-green mb-4">
                                {award.issuer}
                            </p>

                            {award.description && (
                                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                    {award.description}
                                </p>
                            )}

                            <div className="mt-auto flex items-center gap-2 text-xs text-gray-500 font-mono border-t border-white/5 pt-4">
                                <Calendar className="w-3 h-3" />
                                {award.date}
                            </div>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CertificationsAwards;
