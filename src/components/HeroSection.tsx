"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { Typewriter } from "@/components/ui/typewriter";

export function HeroSection() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.2 },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 300, damping: 24 },
        },
    };

    return (
        <section
            id="top"
            className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden bg-background"
        >
            {/* Premium Animated Grid Background */}
            <div className="absolute inset-0 bg-grid-pattern opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-0" />
            <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-transparent z-0" />

            {/* Deep Space Ambient Glows */}
            <div className="absolute top-1/4 left-1/4 w-[40rem] h-[40rem] bg-emerald-500/10 rounded-full blur-[120px] -z-10 mix-blend-screen animate-float" />
            <div className="absolute bottom-1/4 right-1/4 w-[40rem] h-[40rem] bg-teal-600/10 rounded-full blur-[120px] -z-10 mix-blend-screen animate-float" style={{ animationDelay: "-3s" }} />

            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <div className="flex flex-col-reverse md:flex-row items-center gap-12 lg:gap-20">

                    {/* Photo on the LEFT */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className="flex-1 flex justify-center md:justify-end w-full relative group"
                    >
                        {/* Spotlight Glow Behind Photo */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-emerald-400 via-primary to-teal-600 rounded-full w-64 h-64 md:w-80 md:h-80 mx-auto md:ml-auto md:mr-0 opacity-40 blur-3xl group-hover:opacity-70 group-hover:scale-110 transition-all duration-700" />

                        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-[3px] bg-gradient-to-tr from-emerald-400 via-primary to-teal-600 shadow-[0_0_80px_rgba(13,148,136,0.2)] animate-float">
                            <div className="w-full h-full rounded-full overflow-hidden bg-background border-[6px] border-background relative">
                                <Image
                                    src="/profile.png"
                                    alt="Profile Picture"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    priority
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Text on the RIGHT */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex-1 flex flex-col items-center text-center md:items-start md:text-left w-full"
                    >
                        <motion.span variants={itemVariants} className="inline-block py-2 px-6 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-bold tracking-widest uppercase mb-6 backdrop-blur-md shadow-[0_0_20px_rgba(16,185,129,0.15)]">
                            Available for new opportunities
                        </motion.span>

                        <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-foreground mb-4 leading-tight">
                            Hi, I'm <br className="hidden md:block" />
                            <span className="text-gradient drop-shadow-2xl">
                                <Typewriter words={["MEDHANIT TESFAYE"]} loop={false} cursorClassName="bg-emerald-400 ml-1" />
                            </span> <span className="inline-block animate-bounceOrigin text-4xl transform hover:rotate-12 transition-transform cursor-default">👋</span>
                        </motion.h1>

                        <motion.p variants={itemVariants} className="text-lg md:text-xl text-muted-foreground mb-10 max-w-lg leading-relaxed font-light">
                            Welcome to my profile! I'm passionate about building beautiful, functional web applications that solve real problems with elegant code and pixel-perfect design.
                        </motion.p>

                        <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center md:justify-start gap-5">
                            <Button asChild size="lg" className="relative group overflow-hidden rounded-full shadow-[0_0_40px_rgba(16,185,129,0.3)] px-8 py-6 text-base font-bold transition-all hover:scale-105 hover:shadow-[0_0_60px_rgba(16,185,129,0.5)] bg-gradient-to-r from-emerald-500 to-primary text-white border-none">
                                <a href="#projects">
                                    <span className="relative z-10">View my work</span>
                                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                                </a>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="rounded-full glass-panel hover:bg-white/10 hover:text-white px-8 py-6 text-base font-bold border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.05)]">
                                <a href="#contact">Get in touch</a>
                            </Button>
                        </motion.div>
                    </motion.div>

                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-emerald-500/70 animate-bounce hidden md:flex"
            >
                <div className="w-8 h-12 rounded-full border-2 border-emerald-500/30 flex justify-center pt-2 mb-2 backdrop-blur-sm">
                    <div className="w-1.5 h-3 bg-emerald-400 rounded-full animate-pulse" />
                </div>
            </motion.div>
        </section>
    );
}
