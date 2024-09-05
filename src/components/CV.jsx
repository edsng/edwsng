import React from 'react';
import '../css/CV.css';
import PageTransition from './PageTransition';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faBriefcase, faCode, faDownload } from '@fortawesome/free-solid-svg-icons';

import resumePDF from '../assets/resume.pdf';

function CV() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    return (
        <PageTransition>
            <div className="cv-container">
                <motion.div 
                    className="cv-content"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.h1 variants={itemVariants}>Curriculum Vitae</motion.h1>
                    
                    <motion.section variants={itemVariants}>
                        <h2><FontAwesomeIcon icon={faGraduationCap} /> Education</h2>
                        <motion.div className="cv-item" variants={itemVariants}>
                            <h3>Bachelor of Science in Computer Science</h3>
                            <p>University of California, Riverside - 2025</p>
                        </motion.div>
                    </motion.section>

                    <motion.section variants={itemVariants}>
                        <h2><FontAwesomeIcon icon={faBriefcase} /> Work Experience</h2>
                        <motion.div className="cv-item" variants={itemVariants}>
                            <h3>Full Stack Lead</h3>
                            <p>Cars-n-Pics</p>
                            <ul>
                                <li>Leading full stack development of client matching app for car enthusiasts and multimedia creators (HTML, REACT, Tailwind, Node.js, Python, PostgreSQL).</li>
                                <li>Utilized machine learning clustering techniques alongside elo ratings in order to match photo-videographers with car enthusiasts with personalized preferences as features.</li>
                            </ul>
                        </motion.div>
                        <motion.div className="cv-item" variants={itemVariants}>
                            <h3>Technical Support Engineer</h3>
                            <p>Network Expert Group - NEXG</p>
                            <ul>
                                <li>Implemented internet infrastructure for businesses, encompassing surveillance, data servers, and internet services while ensuring adherence to industry standards.</li>
                                <li>Established routers, switches, hubs, and wiring into businesses around Los Angeles county alongside office telecommunication and data center equipment.</li>
                                <li>Transferred and set up NexG’s Data Center. Efficiently routed and set up data racks for NexG’s colocation and server hosting service.</li>
                            </ul>
                        </motion.div>
                        <motion.div className="cv-item" variants={itemVariants}>
                            <h3>Logistics Staff</h3>
                            <p>Rapid Networks</p>
                            <ul>
                                <li>Demonstrated expertise in effectively managing and leveraging back-end software systems to monitor and streamline inventory flow within storage facilities.</li>
                                <li>Partnered with many industry leaders such as Hyundai J-Com, Korea Aerospace Industries, and Doosan Mottrol to ensure the quality and accuracy of orders for many industries including defense.</li>
                            </ul>
                        </motion.div>
                    </motion.section>

                    <motion.section variants={itemVariants}>
                        <h2><FontAwesomeIcon icon={faCode} /> Skills</h2>
                        <motion.ul className="skills-list" variants={itemVariants}>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>Node.js</li>
                            <li>Python</li>
                            <li>C++</li>
                            <li>SQL</li>
                        </motion.ul>
                    </motion.section>

                    <motion.div className="download-cv" variants={itemVariants}>
                        <a href={resumePDF} download="resume.pdf">
                            <FontAwesomeIcon icon={faDownload} /> Download CV
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </PageTransition>
    );
}

export default CV;
