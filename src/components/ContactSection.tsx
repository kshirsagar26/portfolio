"use client";
import React from "react";
import socialLinks from "@/data/socialLinks";
import { Mail, Github, Linkedin, Instagram, FileText, Calendar } from "lucide-react";
import Link from "next/link";
import Strings from "@/constants/strings";

const ContactSection = () => {

    // Helper to map social names to Lucide icons
    const getIcon = (name: string) => {
        switch (name) {
            case Strings.github: return <Github className="w-5 h-5" />;
            case Strings.linkedIn: return <Linkedin className="w-5 h-5" />;
            case Strings.instagram: return <Instagram className="w-5 h-5" />;
            case Strings.email: return <Mail className="w-5 h-5" />;
            case "Resume": return <FileText className="w-5 h-5" />;
            default: return <Mail className="w-5 h-5" />;
        }
    };

    return (
        <section id="contact" className="py-20 px-4 relative">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-white text-center mb-12 uppercase tracking-wide">
                    Contact
                </h2>

                <div className="flex justify-center mb-10">
                    <Link
                        href={Strings.calendlyLink}
                        target="_blank"
                        className="group flex items-center gap-3 px-8 py-4 bg-cyber-blue hover:bg-cyber-blue/80 rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(0,163,255,0.3)] hover:shadow-[0_0_30px_rgba(0,163,255,0.5)]"
                    >
                        <Calendar className="w-6 h-6 text-black" />
                        <span className="font-bold text-black text-lg tracking-wide uppercase">Let's Talk</span>
                    </Link>
                </div>

                <div className="flex flex-wrap justify-center gap-4">
                    {socialLinks.map((social) => (
                        <Link
                            key={social.name}
                            href={social.url}
                            target="_blank"
                            className="group flex items-center justify-center gap-3 px-6 py-4 bg-[#1a1f2e] hover:bg-[#23293b] rounded-md border border-white/5 hover:border-white/10 transition-all duration-300"
                        >
                            <span className="text-white group-hover:scale-110 transition-transform">
                                {getIcon(social.name || "")}
                            </span>
                            <span className="font-semibold text-gray-200 group-hover:text-white">
                                {social.text}
                            </span>
                        </Link>
                    ))}
                </div>

                <footer className="mt-20 text-center text-gray-600 text-sm">
                    <p>© {new Date().getFullYear()} Shlok Kshirsagar. All Rights Reserved.</p>
                </footer>
            </div>
        </section>
    );
};

export default ContactSection;
