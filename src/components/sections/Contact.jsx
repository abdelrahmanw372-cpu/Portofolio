import { motion } from 'framer-motion';
import SectionTitle from '../SectionTitle';
import ScrollReveal from '../ScrollReveal';
import { Mail, Phone, Github, MessageCircle } from 'lucide-react';

const Contact = () => {
    const contactMethods = [
        {
            icon: Phone,
            title: 'WhatsApp',
            value: '01123153529',
            link: 'https://wa.me/201123153529',
            color: 'from-green-500 to-emerald-500'
        },
        {
            icon: Github,
            title: 'GitHub',
            value: 'abdelrahmanw372-cpu',
            link: 'https://github.com/abdelrahmanw372-cpu',
            color: 'from-purple-500 to-pink-500'
        },
        {
            icon: Mail,
            title: 'Email',
            value: 'abdelrahman.waleed@example.com',
            link: 'mailto:abdelrahman.waleed@example.com',
            color: 'from-blue-500 to-cyan-500'
        }
    ];

    return (
        <section id="contact" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle
                    title="Get In Touch"
                    subtitle="Let's collaborate and build something amazing together"
                />

                <div className="max-w-4xl mx-auto">
                    {/* Contact Cards */}
                    <div className="grid md:grid-cols-3 gap-6 mb-12">
                        {contactMethods.map((method, index) => (
                            <ScrollReveal key={index} animation="scaleIn" delay={index * 0.1}>
                                <motion.a
                                    href={method.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ y: -10, scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="block glass-effect rounded-xl p-6 text-center glow-effect-hover transition-all duration-300"
                                >
                                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${method.color} flex items-center justify-center`}>
                                        <method.icon size={32} className="text-white" />
                                    </div>
                                    <h3 className="text-lg font-bold text-dark-text mb-2">
                                        {method.title}
                                    </h3>
                                    <p className="text-dark-muted text-sm break-all">
                                        {method.value}
                                    </p>
                                </motion.a>
                            </ScrollReveal>
                        ))}
                    </div>

                    {/* CTA Section */}
                    <ScrollReveal animation="slideUp">
                        <div className="glass-effect rounded-xl p-8 text-center">
                            <h3 className="text-2xl font-bold text-gradient mb-4">
                                Ready to Start a Project?
                            </h3>
                            <p className="text-dark-muted mb-6 max-w-2xl mx-auto">
                                I'm always open to discussing new projects, creative ideas, or opportunities
                                to be part of your vision. Whether you need a full-stack developer or just
                                want to say hello, feel free to reach out!
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <motion.a
                                    href="https://wa.me/201123153529"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(99, 102, 241, 0.5)" }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-4 bg-gradient-to-r from-accent-primary to-accent-secondary text-white rounded-lg font-semibold flex items-center justify-center gap-2 shadow-lg"
                                >
                                    <MessageCircle size={20} />
                                    Chat on WhatsApp
                                </motion.a>

                                <motion.a
                                    href="https://github.com/abdelrahmanw372-cpu"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-4 glass-effect text-dark-text rounded-lg font-semibold flex items-center justify-center gap-2 hover:border-accent-primary transition-colors"
                                >
                                    <Github size={20} />
                                    View GitHub Profile
                                </motion.a>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Footer */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="mt-12 text-center text-dark-muted text-sm"
                    >
                        <p>© 2025 Abdelrahman Waleed. All rights reserved.</p>
                        <p className="mt-2">Built with React, TailwindCSS, and Framer Motion</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
