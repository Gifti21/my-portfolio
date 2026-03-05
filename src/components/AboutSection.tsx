"use client";

import { motion } from "framer-motion";

import { Typewriter } from "@/components/ui/typewriter";

export function AboutSection() {
    return (
        <section id="about" className="py-32 relative border-t border-white/5 bg-background/50">
            {/* Glow Behind Section */}
            <div className="absolute top-1/2 right-0 w-96 h-96 bg-cyan-700/10 rounded-full blur-[150px] -z-10 translate-x-1/2 -translate-y-1/2" />

            <div className="container mx-auto px-6 max-w-5xl text-center md:text-left">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="glass-panel p-8 md:p-16 rounded-[2rem] relative overflow-hidden"
                >
                    {/* Decorative Corner Glow */}
                    <div className="absolute -top-24 -left-24 w-48 h-48 bg-primary/30 rounded-full blur-3xl mix-blend-screen" />

                    <div className="mb-10 text-center">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground inline-block relative tracking-tighter">
                            <Typewriter words={["About Me"]} loop={false} cursorClassName="bg-cyan-400 ml-1" />
                            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-cyan-400 to-primary rounded-full" />
                        </h2>
                    </div>

                    <div className="space-y-8 text-lg md:text-xl text-muted-foreground leading-relaxed font-light mt-8">
                        <p className="text-center md:text-left">
                            I'm <strong className="text-foreground font-semibold">Medhanit Tesfaye</strong>, a 4<sup>th</sup>-year Computer Science and
                            Engineering student at <strong className="text-cyan-400 font-medium">Adama Science and Technology University (ASTU)</strong> in
                            Ethiopia. I love turning ideas into elegant, user-friendly digital
                            products and am constantly exploring new technologies.
                        </p>
                        <p className="text-center md:text-left">
                            I enjoy working with modern JavaScript frameworks like <strong className="text-foreground font-semibold">React</strong> and <strong className="text-foreground font-semibold">Next.js</strong>{" "}
                            to build fast, responsive web apps. I'm driven by curiosity and a
                            desire to keep learning both technically and creatively.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
