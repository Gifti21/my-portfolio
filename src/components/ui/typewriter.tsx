"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TypewriterProps {
    words: string[];
    typingSpeed?: number;
    deletingSpeed?: number;
    pauseDuration?: number;
    loop?: boolean;
    cursorClassName?: string;
}

export function Typewriter({
    words,
    typingSpeed = 100,
    deletingSpeed = 50,
    pauseDuration = 2000,
    loop = true,
    cursorClassName = "bg-current ml-[2px]",
}: TypewriterProps) {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentText, setCurrentText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [isFinished, setIsFinished] = useState(false);

    useEffect(() => {
        if (isFinished) return;

        let timer: NodeJS.Timeout;
        const currentWord = words[currentWordIndex];

        if (isDeleting) {
            if (currentText === "") {
                setIsDeleting(false);
                setCurrentWordIndex((prev) => (prev + 1) % words.length);
            } else {
                timer = setTimeout(() => {
                    setCurrentText(currentWord.substring(0, currentText.length - 1));
                }, deletingSpeed);
            }
        } else {
            if (currentText === currentWord) {
                if (!loop && currentWordIndex === words.length - 1) {
                    setIsFinished(true);
                    return;
                }
                timer = setTimeout(() => {
                    setIsDeleting(true);
                }, pauseDuration);
            } else {
                timer = setTimeout(() => {
                    setCurrentText(currentWord.substring(0, currentText.length + 1));
                }, typingSpeed);
            }
        }

        return () => clearTimeout(timer);
    }, [currentText, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, pauseDuration, loop, isFinished]);

    return (
        <span className="inline-block min-w-[20px]">
            {currentText}
            {!isFinished && (
                <motion.span
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                    className={`inline-block w-[2px] h-[1em] align-middle ${cursorClassName}`}
                />
            )}
        </span>
    );
}
