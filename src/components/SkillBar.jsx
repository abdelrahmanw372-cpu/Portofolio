import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const SkillBar = ({ skill, delay = 0 }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), delay * 1000);
        return () => clearTimeout(timer);
    }, [delay]);

    return (
        <div className="mb-6">
            <div className="flex justify-between mb-2">
                <span className="text-dark-text font-medium">{skill.name}</span>
                <span className="text-accent-primary font-semibold">{skill.level}%</span>
            </div>
            <div className="h-2 bg-dark-surface rounded-full overflow-hidden">
                <motion.div
                    className="h-full bg-gradient-to-r from-accent-primary via-accent-secondary to-accent-tertiary rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: isVisible ? `${skill.level}%` : 0 }}
                    transition={{ duration: 1, ease: 'easeOut', delay: delay }}
                />
            </div>
        </div>
    );
};

export default SkillBar;
