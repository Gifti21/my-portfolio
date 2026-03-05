"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { name: "Home", href: "#top" },
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Resume", href: "#resume" },
    { name: "Contact", href: "#contact" },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm py-4"
                : "bg-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-6 max-w-6xl flex items-center justify-between">
                <a href="#top" className="text-xl font-black tracking-tighter text-foreground">
                    MEDHANIT <span className="text-cyan-400">TESFAYE</span>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-semibold tracking-wide text-muted-foreground hover:text-cyan-400 transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-foreground p-2"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-background border-b border-border overflow-hidden"
                    >
                        <nav className="flex flex-col container mx-auto px-6 py-4 gap-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-lg font-medium text-foreground py-2 border-b border-border/50"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="/resume.pdf"
                                target="_blank"
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-lg font-medium text-primary py-2"
                            >
                                Resume
                            </a>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
