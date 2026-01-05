"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { navMenus } from "@/data/navMenus";
import SecurityStatus from "./SecurityStatus";
import { Menu, X } from "lucide-react";
import { cn } from "@/utils/cn";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={cn(
            "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
            scrolled ? "bg-cyber-dark-bg/80 backdrop-blur-md border-white/10 py-2" : "bg-transparent py-4"
        )}>
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                <Link href="/" className="text-xl font-mono font-bold text-cyber-blue tracking-tighter hover:text-cyber-green transition-colors">
                    ~/SECURING_THE_DIGITAL_FRONTIER
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navMenus.map((item) => (
                        <Link
                            key={item.name}
                            href={item.link}
                            className="font-mono text-sm text-gray-400 hover:text-cyber-blue transition-colors relative group"
                        >
                            <span className="text-cyber-green opacity-0 group-hover:opacity-100 transition-opacity mr-1">&gt;</span>
                            {item.name}
                        </Link>
                    ))}
                    <SecurityStatus />
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-cyber-dark-bg border-b border-white/10 p-6 flex flex-col gap-4">
                    {navMenus.map((item) => (
                        <Link
                            key={item.name}
                            href={item.link}
                            className="font-mono text-lg text-gray-300 hover:text-cyber-blue"
                            onClick={() => setIsOpen(false)}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <div className="mt-4">
                        <SecurityStatus />
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
