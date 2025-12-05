import { motion } from 'framer-motion';
import SectionTitle from '../SectionTitle';
import ScrollReveal from '../ScrollReveal';
import { experienceData } from '../../data/experience';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
    return (
        <section id="experience" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle
                    title="Experience"
                    subtitle="A journey of continuous learning and professional growth"
                />

                <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-primary via-accent-secondary to-accent-tertiary" />

                    {/* Experience Items */}
                    <div className="space-y-12">
                        {experienceData.map((exp, index) => (
                            <ScrollReveal
                                key={exp.id}
                                animation={index % 2 === 0 ? 'slideRight' : 'slideLeft'}
                                delay={index * 0.1}
                            >
                                <div className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                    }`}>
                                    {/* Timeline Dot */}
                                    <div className="absolute left-8 md:left-1/2 w-4 h-4 -ml-2 rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary glow-effect z-10" />

                                    {/* Content */}
                                    <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 pl-20 md:pl-0' : 'md:pl-12 pl-20 md:pr-0'
                                        }`}>
                                        <motion.div
                                            whileHover={{ scale: 1.02 }}
                                            className="glass-effect rounded-xl p-6 glow-effect-hover"
                                        >
                                            {/* Company & Position */}
                                            <div className="flex items-start gap-3 mb-4">
                                                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center flex-shrink-0">
                                                    <Briefcase size={24} className="text-white" />
                                                </div>
                                                <div className="flex-1">
                                                    <h3 className="text-xl font-bold text-dark-text mb-1">
                                                        {exp.position}
                                                    </h3>
                                                    <p className="text-accent-primary font-semibold mb-2">
                                                        {exp.company}
                                                    </p>
                                                    <div className="flex items-center gap-2 text-dark-muted text-sm">
                                                        <Calendar size={16} />
                                                        <span>{exp.period}</span>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Description */}
                                            <p className="text-dark-muted mb-4">
                                                {exp.description}
                                            </p>

                                            {/* Achievements */}
                                            <div>
                                                <h4 className="text-sm font-semibold text-accent-primary mb-2">
                                                    Key Achievements:
                                                </h4>
                                                <ul className="space-y-2">
                                                    {exp.achievements.map((achievement, i) => (
                                                        <li key={i} className="text-sm text-dark-muted flex items-start">
                                                            <span className="text-accent-primary mr-2 mt-1">▸</span>
                                                            <span>{achievement}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </motion.div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
