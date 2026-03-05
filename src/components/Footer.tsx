"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";

export function Footer() {
    const navLinks = [
        { name: "About", href: "#about" },
        { name: "Education", href: "#education" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Resume", href: "#resume" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <footer className="border-t border-white/10 bg-black/60 pt-20 pb-10 relative overflow-hidden">
            {/* Decorative Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60rem] h-20 bg-primary/20 blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 max-w-6xl relative z-10 text-center">
                <h2 className="text-3xl font-extrabold text-white mb-4 tracking-tight">
                    Thank you for visiting my profile!
                </h2>
                <p className="text-muted-foreground font-light text-lg mb-12 max-w-xl mx-auto">
                    Feel free to reach out if you have any questions or opportunities to collaborate.
                </p>

                {/* Navigation Links */}
                <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-16">
                    <Link
                        href="#top"
                        className="text-sm font-semibold tracking-wide text-cyan-400 hover:text-white transition-colors flex items-center gap-1"
                    >
                        <ArrowUp size={16} /> Back to top
                    </Link>
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium tracking-wide text-muted-foreground hover:text-white transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Divider */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-10" />

                {/* Copyright */}
                <div className="text-muted-foreground/60 text-sm font-medium">
                    &copy; 2026 Medhanit Tesfaye. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
