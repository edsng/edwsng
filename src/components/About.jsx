import React from 'react';
import '../css/About.css';
import PageTransition from './PageTransition';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faJs, faNode, faPython, faAws, faGolang } from '@fortawesome/free-brands-svg-icons';
import { faC, faDatabase } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

function About() {
    const technologies = [
        { name: 'C++', icon: faC },
        { name: 'SQL', icon: faDatabase },
        { name: 'Python', icon: faPython },
        { name: 'AWS', icon: faAws },
        { name: 'JavaScript', icon: faJs },
        { name: 'Node.js', icon: faNode },
        { name: 'React', icon: faReact },
        { name: 'Vite.js', icon: faReact }, // Using React icon as a placeholder
        { name: 'Next.js', icon: faReact }, // Using React icon as a placeholder
        { name: 'Golang', icon: faGolang },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.3,
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0, 
        }
    };

    const textContainerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <PageTransition>
            <div className="about-container">
                <motion.div 
                    className="about-text-container"
                    variants={textContainerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.h2 variants={textVariants}>About Me</motion.h2>
                    <motion.p variants={textVariants}>
                        Hello! I'm Edward, a passionate developer with a keen interest in creating innovative solutions. With a background in computer science and years of experience in web development, I strive to build applications that are not only aesthetically pleasing, but also functional and user-friendly.
                    </motion.p>
                    <motion.p variants={textVariants}>
                        My journey in tech has led me to work on a variety of projects that have allowed me to explore different areas of development, from front-end to back-end, and currently machine learning.
                    </motion.p>
                    <motion.p variants={textVariants}>
                        When I'm not coding, you can find me at photoshoots, experimenting with new recipes in the kitchen, or diving into a new rabbit hole.
                    </motion.p>
                </motion.div>
                <motion.div 
                    className="tech-container"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <div className="tech-cards-container">
                        {technologies.map((tech, index) => (
                            <motion.div 
                                key={index} 
                                className="tech-card"
                                variants={itemVariants}
                            >
                                <FontAwesomeIcon icon={tech.icon} size="2x" />
                                <span>{tech.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </PageTransition>
    );
}

export default About;
