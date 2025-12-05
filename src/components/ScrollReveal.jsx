import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const ScrollReveal = ({
    children,
    animation = 'fadeIn',
    delay = 0,
    duration = 0.6,
    easing = 'easeOut',
    threshold = 0.1,
    once = true,
    className = ''
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                } else if (!once) {
                    // If once is false, allow re-triggering animation
                    setIsVisible(false);
                }
            },
            {
                threshold: threshold,
                rootMargin: '50px'
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [threshold, once]);

    // Comprehensive animation variants with smooth easing
    const animations = {
        fadeIn: {
            hidden: { opacity: 0 },
            visible: { opacity: 1 }
        },
        slideUp: {
            hidden: { opacity: 0, y: 60 },
            visible: { opacity: 1, y: 0 }
        },
        slideDown: {
            hidden: { opacity: 0, y: -60 },
            visible: { opacity: 1, y: 0 }
        },
        slideLeft: {
            hidden: { opacity: 0, x: 60 },
            visible: { opacity: 1, x: 0 }
        },
        slideRight: {
            hidden: { opacity: 0, x: -60 },
            visible: { opacity: 1, x: 0 }
        },
        scaleIn: {
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 }
        },
        scaleUp: {
            hidden: { opacity: 0, scale: 0.9, y: 20 },
            visible: { opacity: 1, scale: 1, y: 0 }
        },
        slideUpScale: {
            hidden: { opacity: 0, y: 40, scale: 0.95 },
            visible: { opacity: 1, y: 0, scale: 1 }
        },
        rotateIn: {
            hidden: { opacity: 0, rotate: -10, scale: 0.9 },
            visible: { opacity: 1, rotate: 0, scale: 1 }
        },
        blurIn: {
            hidden: { opacity: 0, filter: 'blur(10px)' },
            visible: { opacity: 1, filter: 'blur(0px)' }
        }
    };

    // Easing curve options
    const easingCurves = {
        linear: [0, 0, 1, 1],
        easeIn: [0.4, 0, 1, 1],
        easeOut: [0, 0, 0.2, 1],
        easeInOut: [0.4, 0, 0.2, 1],
        smooth: [0.25, 0.1, 0.25, 1],
        bounce: [0.68, -0.55, 0.265, 1.55],
        elastic: [0.68, -0.6, 0.32, 1.6]
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isVisible ? 'visible' : 'hidden'}
            variants={animations[animation] || animations.fadeIn}
            transition={{
                duration: duration,
                delay: delay,
                ease: easingCurves[easing] || easing
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default ScrollReveal;
