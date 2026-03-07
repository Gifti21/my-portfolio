"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Typewriter } from "@/components/ui/typewriter";

export function ProjectsSection() {
    const projects = [
        {
            title: "EDU-BRIDGE",
            description: "A learning platform I built with next.js, react, prisma, that connects students, teachers, parents, and school community in one platform. Features include user authentication, live chat, information of student like attendance, marks, rank, and a course marketplace.",
            tech: ["Next.js", "React", "Prisma"],
            github: "https://github.com/Gifti21/EDU-BRIDGE",
        },
        {
            title: "Online Order Restaurant Menu",
            description: "A responsive, single-page application that allows customers to browse a restaurant's menu and place orders. Built with HTML, JS, and CSS.",
            tech: ["HTML", "CSS", "JavaScript"],
            github: "https://github.com/Gifti21/M-Restaurant-Menu",
        },
        {
            title: "Visit Ethiopia",
            description: "A tourism website showcasing the beauty and culture of Ethiopia. Features interactive galleries, travel guides, and destination information.",
            tech: ["HTML", "CSS", "JavaScript"],
            github: "https://github.com/Gifti21/Visit-Ethiopia",
        },
        {
            title: "Personal Portfolio Website",
            description: "This website (source code available on GitHub) showcases my resume, projects, and contact information. Developed using React, Next.js, and Tailwind CSS to practice modern responsive design.",
            tech: ["Next.js", "React", "Tailwind CSS"],
            github: "https://github.com/Gifti21/my-portfolio",
        },
        {
            title: "Calculator",
            description: "A vanilla JavaScript calculator supporting basic arithmetic. Created as an exercise in DOM manipulation and event handling.",
            tech: ["JavaScript", "HTML", "CSS"],
            github: "https://github.com/Gifti21/calculator",
        },
        {
            title: "Others",
            description: "Several smaller projects such as a next.js dashboard chatbot. Visit my GitHub for full details.",
            tech: ["Next.js", "Various"],
            github: "https://github.com/Gifti21",
        },
    ];

    return (
        <section id="projects" className="py-32 relative border-t border-white/5 bg-background overflow-hidden">
            {/* Decorative Glow Elements & Premium Grids */}
            <div className="absolute inset-0 bg-dot-pattern opacity-10" />
            <div className="absolute top-1/4 left-0 w-[30rem] h-[30rem] bg-violet-600/10 rounded-full blur-[140px] -z-10 mix-blend-screen animate-float" />
            <div className="absolute bottom-1/4 right-0 w-[40rem] h-[40rem] bg-cyan-500/10 rounded-full blur-[140px] -z-10 mix-blend-screen animate-float" style={{ animationDelay: "-2s" }} />

            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground inline-block relative tracking-tighter">
                        <Typewriter words={["My Projects"]} loop={false} cursorClassName="bg-cyan-400 ml-1" />
                        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-1.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full opacity-80" />
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, scale: 0.95, y: 30 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="group h-full relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 via-primary/20 to-violet-600/20 rounded-[2rem] opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700 pointer-events-none" />

                            <Card className="h-full flex flex-col glass-panel border border-white/5 group-hover:border-cyan-400/40 bg-zinc-950/50 group-hover:bg-zinc-950/80 transition-all duration-500 rounded-[2rem] overflow-hidden relative z-10">
                                {/* Dynamic Inner gradient */}
                                <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] via-transparent to-white/[0.01] pointer-events-none" />

                                <CardHeader className="relative z-20 pt-8 px-8 pb-4">
                                    <div className="flex justify-between items-start mb-4">
                                        <CardTitle className="text-2xl font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors duration-300">
                                            {project.title}
                                        </CardTitle>
                                        <div className="flex gap-2 relative z-30">
                                            <Link
                                                href={project.github}
                                                target="_blank"
                                                className="p-2.5 bg-white/5 rounded-full backdrop-blur-md hover:bg-cyan-500/20 text-muted-foreground hover:text-cyan-400 transition-all transform hover:scale-110 border border-white/5 hover:border-cyan-500/30"
                                                title="View Source on GitHub"
                                            >
                                                <Github size={20} />
                                            </Link>
                                        </div>
                                    </div>
                                    <CardDescription className="text-base text-muted-foreground/90 font-light leading-relaxed">
                                        {project.description}
                                    </CardDescription>
                                </CardHeader>

                                <CardContent className="relative z-20 flex-grow px-8">
                                    {/* Space for any future content if needed */}
                                </CardContent>

                                <CardFooter className="relative z-20 pt-4 pb-8 px-8 mt-auto border-t border-white/5">
                                    <div className="flex flex-wrap gap-2.5">
                                        {project.tech.map((tech) => (
                                            <Badge key={tech} variant="outline" className="border-white/10 text-cyan-400 bg-cyan-500/5 hover:bg-cyan-500/20 rounded-full px-3.5 py-1 text-xs font-semibold tracking-wider transition-colors cursor-default">
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
