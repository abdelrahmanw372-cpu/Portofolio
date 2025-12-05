import SectionTitle from '../SectionTitle';
import ProjectCard from '../ProjectCard';
import { projectsData } from '../../data/projects';
import { motion } from 'framer-motion';

const Projects = () => {
    return (
        <section id="projects" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle
                    title="Featured Projects"
                    subtitle="A showcase of my recent work and personal projects"
                />

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {projectsData.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </motion.div>

                {/* Additional Info */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-16 text-center"
                >
                    <p className="text-dark-muted mb-4">
                        These projects demonstrate my ability to create diverse applications
                        across different domains and technologies.
                    </p>
                    <p className="text-accent-primary font-semibold">
                        Click on any project card to see more details!
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
