import { motion } from 'framer-motion';
import SectionTitle from '../SectionTitle';
import SkillBar from '../SkillBar';
import ScrollReveal from '../ScrollReveal';
import { skillsData } from '../../data/skills';
import { Code2, Database, Wrench } from 'lucide-react';

const About = () => {
    const skillCategories = [
        { title: 'Frontend Development', skills: skillsData.frontend, icon: Code2 },
        { title: 'Backend Development', skills: skillsData.backend, icon: Database },
        { title: 'Tools & Technologies', skills: skillsData.tools, icon: Wrench }
    ];

    return (
        <section id="about" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle
                    title="About Me"
                    subtitle="Passionate developer with a proven track record of delivering high-quality web applications"
                />

                <div className="grid md:grid-cols-2 gap-12 mb-16">
                    {/* About Text */}
                    <ScrollReveal animation="slideRight">
                        <div className="glass-effect rounded-xl p-8 glow-effect-hover">
                            <h3 className="text-2xl font-bold text-gradient mb-6">
                                Professional Excellence
                            </h3>
                            <div className="space-y-4 text-dark-muted">
                                <p>
                                    I'm a passionate full-stack developer with extensive experience
                                    building robust web applications. My journey in software development has
                                    been driven by a love for creating elegant solutions to complex problems.
                                </p>
                                <p>
                                    Specializing in Python/Flask for backend development and modern JavaScript
                                    frameworks for frontend, I've successfully delivered numerous projects
                                    ranging from small business websites to enterprise-level applications.
                                </p>
                                <p>
                                    I believe in writing clean, maintainable code and staying current with
                                    the latest technologies and best practices. My approach combines technical
                                    expertise with a deep understanding of user needs to create applications
                                    that are both powerful and user-friendly.
                                </p>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-4 mt-8">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-gradient">Expert</div>
                                    <div className="text-sm text-dark-muted">Level</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-gradient">10+</div>
                                    <div className="text-sm text-dark-muted">Projects</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-gradient">100%</div>
                                    <div className="text-sm text-dark-muted">Dedication</div>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Skills Overview */}
                    <ScrollReveal animation="slideLeft">
                        <div className="glass-effect rounded-xl p-8 glow-effect-hover">
                            <h3 className="text-2xl font-bold text-gradient mb-6">
                                Core Competencies
                            </h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center flex-shrink-0">
                                        <Code2 size={24} className="text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-dark-text mb-2">Frontend Development</h4>
                                        <p className="text-sm text-dark-muted">
                                            Expert in creating responsive, interactive user interfaces using React,
                                            JavaScript, HTML5, CSS3, and modern frameworks.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent-secondary to-accent-tertiary flex items-center justify-center flex-shrink-0">
                                        <Database size={24} className="text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-dark-text mb-2">Backend Development</h4>
                                        <p className="text-sm text-dark-muted">
                                            Proficient in Python/Flask, RESTful API design, database architecture,
                                            and server-side application development.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent-tertiary to-accent-primary flex items-center justify-center flex-shrink-0">
                                        <Wrench size={24} className="text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-dark-text mb-2">DevOps & Tools</h4>
                                        <p className="text-sm text-dark-muted">
                                            Experienced with Git, Docker, CI/CD pipelines, and modern development
                                            workflows for efficient project delivery.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>

                {/* Skills Bars */}
                <ScrollReveal animation="slideUp">
                    <div className="grid md:grid-cols-3 gap-8">
                        {skillCategories.map((category, catIndex) => (
                            <motion.div
                                key={catIndex}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: catIndex * 0.2 }}
                                className="glass-effect rounded-xl p-6 glow-effect-hover"
                            >
                                <div className="flex items-center gap-3 mb-6">
                                    <category.icon size={24} className="text-accent-primary" />
                                    <h3 className="text-lg font-bold text-dark-text">{category.title}</h3>
                                </div>
                                {category.skills.map((skill, index) => (
                                    <SkillBar key={index} skill={skill} delay={catIndex * 0.2 + index * 0.1} />
                                ))}
                            </motion.div>
                        ))}
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default About;
