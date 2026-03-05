"use client";

import { motion } from "framer-motion";
import { Code2, Blocks, Wrench } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function SkillsSection() {
    const customVariant = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
    };

    const skillCategories = [
        {
            title: "Languages",
            icon: Code2,
            skills: ["JavaScript", "HTML", "CSS", "C++", "Python", "Java"],
        },
        {
            title: "Frameworks",
            icon: Blocks,
            skills: ["React", "Next.js", "Node.js"],
        },
        {
            title: "Tools & Platforms",
            icon: Wrench,
            skills: ["Git", "VS Code", "Vercel"],
        },
    ];

    return (
        <section id="skills" className="py-32 relative bg-background/30 border-t border-white/5 overflow-hidden">
            {/* Dynamic Dots Background */}
            <div className="absolute inset-0 bg-dot-pattern opacity-10" />

            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={customVariant}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center md:text-left"
                >
                    <div className="mb-20 text-center">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground inline-block relative tracking-tighter">
                            Technical Skills
                            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-1.5 bg-gradient-to-r from-transparent via-violet-500 to-transparent rounded-full opacity-80" />
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {skillCategories.map((category, index) => (
                            <motion.div
                                key={category.title}
                                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                                className="group relative h-full"
                            >
                                {/* Glow behind card on hover */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400/20 via-primary/20 to-violet-600/20 rounded-[2rem] opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700 pointer-events-none" />

                                <Card className="h-full glass-panel bg-zinc-950/80 group-hover:bg-zinc-950/90 border-white/5 group-hover:border-violet-500/40 transition-all duration-500 rounded-[2rem] relative z-10 overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] via-transparent to-transparent opacity-50 pointer-events-none" />

                                    <CardHeader className="pb-6 pt-8 px-8 relative z-20">
                                        <CardTitle className="flex flex-col items-center md:items-start md:flex-row gap-5 text-3xl font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors duration-300">
                                            <div className="p-4 rounded-3xl bg-white/5 text-cyan-400 group-hover:bg-cyan-500/20 group-hover:scale-110 group-hover:text-cyan-300 transition-all duration-500 border border-white/5 group-hover:border-cyan-500/30 shadow-[0_0_20px_rgba(6,182,212,0.1)]">
                                                <category.icon size={32} />
                                            </div>
                                            <span className="mt-2 md:mt-0">{category.title}</span>
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="px-8 pb-8 relative z-20 mt-2">
                                        <div className="flex flex-wrap justify-center md:justify-start gap-3">
                                            {category.skills.map((skill) => (
                                                <Badge
                                                    key={skill}
                                                    variant="secondary"
                                                    className="px-4 py-2.5 text-sm font-semibold tracking-wide bg-white/5 border border-white/10 text-muted-foreground hover:text-white hover:bg-gradient-to-r hover:from-cyan-500 hover:to-primary hover:border-transparent hover:scale-[1.05] hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all cursor-default rounded-full"
                                                >
                                                    {skill}
                                                </Badge>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
