import { useState, useEffect } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CustomCursor = ({ theme = 'dark' }) => {
    const [isHovering, setIsHovering] = useState(false);
    const [isClicking, setIsClicking] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [cursorVariant, setCursorVariant] = useState('default');

    // Use motion values for smooth performance
    const cursorX = useMotionValue(0);
    const cursorY = useMotionValue(0);

    // Spring animations for smooth trailing effect
    const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        // Check if device is mobile or supports hover
        const checkMobile = () => {
            const isMobileDevice = window.innerWidth < 768 ||
                !window.matchMedia('(hover: hover)').matches;
            setIsMobile(isMobileDevice);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        // Update cursor position
        const updateMousePosition = (e) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        // Handle hover states for interactive elements
        const handleMouseOver = (e) => {
            const target = e.target;

            if (target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') ||
                target.closest('button') ||
                target.classList.contains('cursor-pointer')) {
                setIsHovering(true);
                setCursorVariant('hover');
            } else if (target.tagName === 'INPUT' ||
                target.tagName === 'TEXTAREA') {
                setIsHovering(true);
                setCursorVariant('input');
            } else {
                setIsHovering(false);
                setCursorVariant('default');
            }
        };

        // Handle click states
        const handleMouseDown = () => setIsClicking(true);
        const handleMouseUp = () => setIsClicking(false);

        // Add event listeners
        window.addEventListener('mousemove', updateMousePosition);
        document.addEventListener('mouseover', handleMouseOver);
        document.addEventListener('mousedown', handleMouseDown);
        document.addEventListener('mouseup', handleMouseUp);

        // Hide default cursor
        if (!isMobile) {
            document.body.style.cursor = 'none';
            document.querySelectorAll('a, button, input, textarea').forEach(el => {
                el.style.cursor = 'none';
            });
        }

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            window.removeEventListener('resize', checkMobile);
            document.removeEventListener('mouseover', handleMouseOver);
            document.removeEventListener('mousedown', handleMouseDown);
            document.removeEventListener('mouseup', handleMouseUp);

            // Restore default cursor
            document.body.style.cursor = 'auto';
            document.querySelectorAll('a, button, input, textarea').forEach(el => {
                el.style.cursor = 'pointer';
            });
        };
    }, [cursorX, cursorY, isMobile]);

    // Don't render on mobile devices
    if (isMobile) return null;

    // Color schemes based on theme
    const colors = {
        dark: {
            primary: 'rgba(99, 102, 241, 0.8)',
            secondary: 'rgba(139, 92, 246, 0.6)',
            glow: 'rgba(99, 102, 241, 0.4)',
        },
        light: {
            primary: 'rgba(99, 102, 241, 0.9)',
            secondary: 'rgba(139, 92, 246, 0.7)',
            glow: 'rgba(99, 102, 241, 0.5)',
        }
    };

    const currentColors = colors[theme] || colors.dark;

    return (
        <>
            {/* Outer glow ring - slowest follower */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9997]"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
            >
                <motion.div
                    className="rounded-full"
                    animate={{
                        width: isHovering ? 60 : 40,
                        height: isHovering ? 60 : 40,
                        opacity: isClicking ? 0.3 : 0.2,
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                    }}
                    style={{
                        background: `radial-gradient(circle, ${currentColors.glow} 0%, transparent 70%)`,
                        filter: 'blur(8px)',
                    }}
                />
            </motion.div>

            {/* Middle ring - medium speed */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9998]"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
            >
                <motion.div
                    className="rounded-full border-2"
                    animate={{
                        width: isHovering ? 40 : 32,
                        height: isHovering ? 40 : 32,
                        borderColor: isHovering ? currentColors.primary : currentColors.secondary,
                        opacity: isClicking ? 0.5 : 0.6,
                        scale: isClicking ? 0.8 : 1,
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 25,
                    }}
                    style={{
                        boxShadow: `0 0 20px ${currentColors.glow}`,
                    }}
                />
            </motion.div>

            {/* Inner dot - fastest follower */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9999]"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
            >
                <motion.div
                    className="rounded-full"
                    animate={{
                        width: isHovering ? 12 : 8,
                        height: isHovering ? 12 : 8,
                        backgroundColor: isHovering ? currentColors.primary : currentColors.secondary,
                        opacity: isClicking ? 0.8 : 1,
                        scale: isClicking ? 0.5 : 1,
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 28,
                    }}
                    style={{
                        boxShadow: `0 0 15px ${currentColors.primary}, 0 0 30px ${currentColors.glow}`,
                    }}
                />
            </motion.div>

            {/* Pulsating orb effect on hover */}
            {isHovering && (
                <motion.div
                    className="fixed top-0 left-0 pointer-events-none z-[9996]"
                    style={{
                        x: cursorXSpring,
                        y: cursorYSpring,
                        translateX: '-50%',
                        translateY: '-50%',
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                        opacity: [0.3, 0.1, 0.3],
                        scale: [1, 1.5, 1],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    <div
                        className="rounded-full"
                        style={{
                            width: 80,
                            height: 80,
                            background: `radial-gradient(circle, ${currentColors.primary} 0%, transparent 70%)`,
                            filter: 'blur(20px)',
                        }}
                    />
                </motion.div>
            )}
        </>
    );
};

export default CustomCursor;
