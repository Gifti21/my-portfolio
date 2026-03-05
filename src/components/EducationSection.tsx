"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Typewriter } from "@/components/ui/typewriter";

export function EducationSection() {
    const educationData = [
        {
            degree: "B.Sc in Computer Science and Engineering",
            school: "Adama Science and Technology University (ASTU)",
            date: "Expected Graduation",
            location: "Adama, Ethiopia",
            highlights: [
                "Currently in my 4th year of the Computer Science and Engineering program",
                "Relevant coursework: Data Structures & Algorithms, Web Development, Database Systems, Data Communication and Computer Networks, Fundamental of Software Engineering, Operating Systems",
                "Actively building personal and group projects using React, Next.js, and JavaScript",
            ],
        },
    ];

    return (
        <section id="education" className="py-32 relative bg-background/50 border-t border-white/5 overflow-hidden">
            {/* Dynamic Dots Background */}
            <div className="absolute inset-0 bg-dot-pattern opacity-10" />

            <div className="container mx-auto px-6 max-w-4xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground inline-block relative tracking-tighter">
                        <Typewriter words={["Education"]} loop={false} cursorClassName="bg-violet-500 ml-1" />
                        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-1.5 bg-gradient-to-r from-transparent via-violet-500 to-transparent rounded-full opacity-80" />
                    </h2>
                </motion.div>

                <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-cyan-400/50 to-transparent -translate-x-1/2 hidden md:block" />

                    <div className="space-y-12">
                        {educationData.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="relative flex flex-col md:flex-row items-center group"
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-0 md:left-1/2 top-8 w-4 h-4 bg-background border-2 border-cyan-400 rounded-full -translate-x-1/2 z-10 hidden md:block group-hover:bg-cyan-400 group-hover:scale-125 transition-all duration-300 shadow-[0_0_15px_rgba(6,182,212,0.8)]" />

                                {/* Content Card */}
                                <div className="w-full md:w-1/2 pr-0 md:pr-12 md:text-left mb-6 md:mb-0 ml-auto md:ml-0 md:-ml-[50%]">
                                    <Card className="glass-panel border-white/5 hover:border-violet-500/50 hover:shadow-[0_0_40px_rgba(139,92,246,0.15)] transition-all duration-500 rounded-[2rem] overflow-hidden">
                                        <CardContent className="p-8">
                                            <div className="flex items-center justify-start gap-3 mb-4 text-cyan-400">
                                                <GraduationCap size={28} />
                                            </div>
                                            <h3 className="text-2xl font-bold text-foreground tracking-tight mb-2">
                                                {item.degree}
                                            </h3>
                                            <div className="text-lg font-medium text-primary mb-4">
                                                {item.school}
                                            </div>

                                            <div className="flex flex-col md:flex-row justify-start gap-4 text-sm font-medium text-muted-foreground mb-6">
                                                <div className="flex items-center justify-start gap-2">
                                                    <Calendar size={16} />
                                                    {item.date}
                                                </div>
                                                <div className="flex items-center justify-start gap-2">
                                                    <MapPin size={16} />
                                                    {item.location}
                                                </div>
                                            </div>

                                            <ul className="space-y-3 text-muted-foreground/90 font-light text-left overflow-wrap-anywhere">
                                                {item.highlights.map((highlight, idx) => (
                                                    <li key={idx} className="flex items-start gap-3">
                                                        <span className="text-cyan-400 mt-1 flex-shrink-0">•</span>
                                                        <span className="leading-relaxed">{highlight}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </CardContent>
                                    </Card>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
