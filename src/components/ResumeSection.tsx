"use client";

import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ResumeSection() {
    return (
        <section id="resume" className="py-32 relative bg-background border-t border-white/5">
            {/* Decorative Glow Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[20rem] bg-violet-600/10 rounded-[100%] blur-[120px] -z-10" />

            <div className="container mx-auto px-6 max-w-4xl text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="glass-panel p-12 md:p-20 rounded-[3rem] shadow-[0_0_60px_rgba(139,92,246,0.1)] relative overflow-hidden"
                >
                    {/* Subtle Inner Glow */}
                    <div className="absolute inset-x-0 -top-px h-px w-full bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />

                    <div className="w-20 h-20 mx-auto rounded-3xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-8 border border-cyan-500/20 shadow-[0_0_30px_rgba(6,182,212,0.2)]">
                        <FileText size={40} />
                    </div>

                    <h2 className="text-3xl md:text-5xl font-extrabold text-foreground tracking-tight mb-6">
                        Resume
                    </h2>

                    <p className="text-lg md:text-xl text-muted-foreground font-light max-w-2xl mx-auto mb-10 leading-relaxed">
                        Download my resume to learn more about my education, skills, and experience.
                    </p>

                    <Button asChild size="lg" className="rounded-full shadow-[0_0_30px_rgba(139,92,246,0.4)] px-10 py-7 text-lg font-semibold bg-primary hover:bg-violet-600 text-white group hover:scale-105 transition-all">
                        <a href="/resume.pdf" download="Medhanit_Tesfaye_Resume.pdf">
                            <Download className="mr-3 ml-[-4px] group-hover:-translate-y-1 transition-transform" size={24} />
                            Download Resume
                        </a>
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
