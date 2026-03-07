"use client";

import { motion } from "framer-motion";
import React from "react";
import { Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { Typewriter } from "@/components/ui/typewriter";

export function ContactSection() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        setErrorMessage("");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus("success");
                setFormData({ name: "", email: "", message: "" });
                setTimeout(() => setStatus("idle"), 5000);
            } else {
                setStatus("error");
                setErrorMessage(data.error || "Failed to send message");
            }
        } catch (error) {
            setStatus("error");
            setErrorMessage("Network error. Please try again.");
        }
    };
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
                        <Typewriter words={["Get in Touch"]} loop={false} cursorClassName="bg-cyan-400 ml-1" />
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


                            <a href="https://github.com/Gifti21" target="_blank" rel="noopener noreferrer" className="flex items-center gap-5 p-4 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10 group">
                                <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center text-foreground group-hover:scale-110 group-hover:bg-white/10 transition-all">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-1">GitHub</div>
                                    <div className="text-lg font-semibold text-foreground group-hover:text-white transition-colors">
                                        @Gifti21
                                    </div>
                                </div>
                            </a>

                            <a href="https://t.me/Medi_sis" target="_blank" rel="noopener noreferrer" className="flex items-center gap-5 p-4 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10 group">
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

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-semibold text-foreground/80 tracking-wide">
                                        Name
                                    </label>
                                    <Input
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="John Doe"
                                        required
                                        disabled={status === "loading"}
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
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="john@example.com"
                                        required
                                        disabled={status === "loading"}
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
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="How can I help you?"
                                        rows={5}
                                        required
                                        disabled={status === "loading"}
                                        className="bg-white/5 border-white/10 focus-visible:ring-cyan-400 focus-visible:border-cyan-400 text-foreground resize-none rounded-xl"
                                    />
                                </div>

                                {status === "error" && (
                                    <div className="text-red-400 text-sm font-medium bg-red-500/10 border border-red-500/20 rounded-lg p-3">
                                        {errorMessage}
                                    </div>
                                )}

                                {status === "success" && (
                                    <div className="text-emerald-400 text-sm font-medium bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-3">
                                        Message sent successfully! I'll get back to you soon.
                                    </div>
                                )}

                                <Button
                                    type="submit"
                                    disabled={status === "loading"}
                                    className="w-full py-6 text-lg font-bold rounded-xl bg-gradient-to-r from-primary to-cyan-500 hover:from-primary/90 hover:to-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {status === "loading" ? "Sending..." : "Send Message"}
                                </Button>
                            </form>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
