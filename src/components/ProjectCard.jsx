import { motion } from 'framer-motion';
import { Code2, ExternalLink } from 'lucide-react';
import { useState } from 'react';

const ProjectCard = ({ project, index }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const categoryColors = {
        'Productivity': 'from-blue-500 to-cyan-500',
        'Finance': 'from-green-500 to-emerald-500',
        'Utility': 'from-purple-500 to-pink-500',
        'Lifestyle': 'from-orange-500 to-red-500',
        'Web Development': 'from-indigo-500 to-violet-500'
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="group relative glass-effect rounded-xl p-6 transition-all duration-300 glow-effect-hover cursor-pointer"
            onClick={() => setIsExpanded(!isExpanded)}
        >
            {/* Category Badge */}
            <div className="absolute top-4 right-4">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${categoryColors[project.category]} text-white`}>
                    {project.category}
                </span>
            </div>

            {/* Icon */}
            <div className="mb-4">
                <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center">
                    <Code2 size={32} className="text-white" />
                </div>
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-dark-text mb-3 pr-20">
                {project.title}
            </h3>

            {/* Description */}
            <p className="text-dark-muted mb-4 line-clamp-2">
                {project.description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.slice(0, 3).map((tech, i) => (
                    <span
                        key={i}
                        className="px-3 py-1 bg-dark-surface rounded-full text-xs text-accent-primary border border-accent-primary/30"
                    >
                        {tech}
                    </span>
                ))}
                {project.technologies.length > 3 && (
                    <span className="px-3 py-1 bg-dark-surface rounded-full text-xs text-dark-muted">
                        +{project.technologies.length - 3}
                    </span>
                )}
            </div>

            {/* Expanded Content */}
            <motion.div
                initial={false}
                animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
            >
                <div className="pt-4 border-t border-dark-border">
                    <h4 className="text-sm font-semibold text-accent-primary mb-2">Key Features:</h4>
                    <ul className="space-y-1 mb-4">
                        {project.features.map((feature, i) => (
                            <li key={i} className="text-sm text-dark-muted flex items-start">
                                <span className="text-accent-primary mr-2">•</span>
                                {feature}
                            </li>
                        ))}
                    </ul>

                    <h4 className="text-sm font-semibold text-accent-primary mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                            <span
                                key={i}
                                className="px-3 py-1 bg-dark-surface rounded-full text-xs text-dark-text border border-accent-primary/30"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Hover Indicator */}
            <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <ExternalLink size={20} className="text-accent-primary" />
            </div>
        </motion.div>
    );
};

export default ProjectCard;
