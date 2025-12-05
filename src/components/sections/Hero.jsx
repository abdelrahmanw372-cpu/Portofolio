import { motion } from 'framer-motion';
import { ArrowDown, Download, Mail } from 'lucide-react';
import { smoothScroll } from '../../utils/smoothScroll';
import { useEffect, useState } from 'react';

const Hero = () => {
    const [displayedText, setDisplayedText] = useState('');
    const fullText = "Full-Stack Developer | Python & JavaScript Expert";

    useEffect(() => {
        let index = 0;
        const timer = setInterval(() => {
            if (index <= fullText.length) {
                setDisplayedText(fullText.slice(0, index));
                index++;
            } else {
                clearInterval(timer);
            }
        }, 50);

        return () => clearInterval(timer);
    }, []);

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            {/* Floating Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        y: [0, -30, 0],
                        rotate: [0, 180, 360]
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute top-20 left-10 w-20 h-20 border-2 border-accent-primary/30 rounded-lg"
                />
                <motion.div
                    animate={{
                        y: [0, 30, 0],
                        rotate: [360, 180, 0]
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute bottom-20 right-10 w-32 h-32 border-2 border-accent-secondary/30 rounded-full"
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-accent-primary text-lg mb-4 font-medium"
                    >
                        Welcome to my portfolio
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="text-5xl md:text-7xl font-bold mb-6"
                    >
                        <span className="text-dark-text">I'm </span>
                        <span className="text-gradient">Abdelrahman Waleed</span>
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="text-xl md:text-2xl text-dark-muted mb-8 h-8 font-mono"
                    >
                        {displayedText}
                        <span className="animate-pulse">|</span>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2 }}
                        className="text-lg text-dark-muted max-w-2xl mx-auto mb-12"
                    >
                        With 14 years of experience crafting elegant web solutions using Python, Flask,
                        JavaScript, and modern frameworks. Transforming ideas into powerful digital experiences.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.5 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(99, 102, 241, 0.5)" }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => smoothScroll('projects')}
                            className="px-8 py-4 bg-gradient-to-r from-accent-primary to-accent-secondary text-white rounded-lg font-semibold flex items-center gap-2 shadow-lg"
                        >
                            View My Work
                            <ArrowDown size={20} />
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => smoothScroll('contact')}
                            className="px-8 py-4 glass-effect text-dark-text rounded-lg font-semibold flex items-center gap-2 hover:border-accent-primary transition-colors"
                        >
                            <Mail size={20} />
                            Get In Touch
                        </motion.button>
                    </motion.div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 1 }}
                    className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="text-accent-primary cursor-pointer"
                        onClick={() => smoothScroll('about')}
                    >
                        <ArrowDown size={32} />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
