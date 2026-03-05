"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Github, Linkedin, Send } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactSection() {
    return (
        <section id="contact" className="py-32 relative border-t border-white/5 bg-background/50 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-dot-pattern opacity-10" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[150px] -z-10" />

            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-16 text-center md:text-left"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground inline-block relative tracking-tighter">
                        Get in Touch
                        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-1.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full opacity-80 md:left-0 md:translate-x-0 md:w-full md:bg-gradient-to-r md:from-cyan-400 md:to-transparent" />
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-16 items-start">

                    {/* Contact Info (Left) */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="space-y-10"
                    >
                        <div>
                            <h3 className="text-3xl font-bold text-foreground mb-4">Let's connect</h3>
                            <p className="text-lg text-muted-foreground font-light leading-relaxed">
                                Feel free to reach out if you have any questions or opportunities to collaborate. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <a href="mailto:medhanitmedi344@gmail.com" className="flex items-center gap-5 p-4 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10 group">
                                <div className="w-14 h-14 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <div className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-1">Email</div>
                                    <div className="text-lg font-semibold text-foreground group-hover:text-cyan-400 transition-colors">
                                        medhanitmedi344@gmail.com
                                    </div>
                                </div>
                            </a>

                            <a href="https://www.linkedin.com/in/medhanit-tesfaye-9b8a1b1b3/" target="_blank" className="flex items-center gap-5 p-4 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10 group">
                                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary/20 transition-all">
                                    <Linkedin size={24} />
                                </div>
                                <div>
                                    <div className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-1">LinkedIn</div>
                                    <div className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                                        Medhanit Tesfaye
                                    </div>
                                </div>
                            </a>

                            <a href="https://github.com/Gifti21" target="_blank" className="flex items-center gap-5 p-4 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10 group">
                                <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center text-foreground group-hover:scale-110 group-hover:bg-white/10 transition-all">
                                    <Github size={24} />
                                </div>
                                <div>
                                    <div className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-1">GitHub</div>
                                    <div className="text-lg font-semibold text-foreground group-hover:text-white transition-colors">
                                        @Gifti21
                                    </div>
                                </div>
                            </a>

                            <a href="https://t.me/Medi_sis" target="_blank" className="flex items-center gap-5 p-4 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10 group">
                                <div className="w-14 h-14 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all">
                                    <Send size={24} />
                                </div>
                                <div>
                                    <div className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-1">Telegram</div>
                                    <div className="text-lg font-semibold text-foreground group-hover:text-blue-400 transition-colors">
                                        @Medi_sis
                                    </div>
                                </div>
                            </a>
                        </div>
                    </motion.div>

                    {/* Contact Form (Right) */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    >
                        <div className="glass-panel p-8 md:p-10 rounded-[2rem] border-white/10 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/20 rounded-full blur-3xl -z-10" />

                            <h3 className="text-2xl font-bold text-foreground mb-8">Send me a message</h3>

                            <form
                                action="mailto:medhanitmedi344@gmail.com"
                                method="post"
                                encType="text/plain"
                                className="space-y-6"
                            >
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-semibold text-foreground/80 tracking-wide">
                                        Name
                                    </label>
                                    <Input
                                        id="name"
                                        name="name"
                                        placeholder="John Doe"
                                        className="bg-white/5 border-white/10 focus-visible:ring-cyan-400 focus-visible:border-cyan-400 text-foreground py-6 rounded-xl"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-semibold text-foreground/80 tracking-wide">
                                        Email
                                    </label>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="john@example.com"
                                        className="bg-white/5 border-white/10 focus-visible:ring-cyan-400 focus-visible:border-cyan-400 text-foreground py-6 rounded-xl"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-semibold text-foreground/80 tracking-wide">
                                        Message
                                    </label>
                                    <Textarea
                                        id="message"
                                        name="message"
                                        placeholder="How can I help you?"
                                        rows={5}
                                        className="bg-white/5 border-white/10 focus-visible:ring-cyan-400 focus-visible:border-cyan-400 text-foreground resize-none rounded-xl"
                                    />
                                </div>

                                <Button type="submit" className="w-full py-6 text-lg font-bold rounded-xl bg-gradient-to-r from-primary to-cyan-500 hover:from-primary/90 hover:to-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all hover:scale-[1.02]">
                                    Send Message
                                </Button>
                            </form>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
