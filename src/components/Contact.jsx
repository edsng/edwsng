import React from 'react';
import '../css/Contact.css';
import PageTransition from './PageTransition';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Contact() {
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
            <div className="contact-container">
                <motion.div 
                    className="contact-content"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.h1 variants={itemVariants}>Contact Me</motion.h1>
                    
                    <motion.section className="contact-info" variants={itemVariants}>
                        <div className="contact-item">
                            <FontAwesomeIcon icon={faEnvelope} />
                            <p>ed.sng892@gmail.com</p>
                        </div>
                        <div className="contact-item">
                            <FontAwesomeIcon icon={faMapMarkerAlt} />
                            <p>Los Angeles, CA</p>
                        </div>
                    </motion.section>

                    <motion.section className="contact-social-links" variants={itemVariants}>
                        <h2>Connect with me</h2>
                        <div className="contact-social-icons">
                            <a href="https://github.com/edsng" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                            <a href="https://linkedin.com/in/edwsng" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                            <a href="https://twitter.com/edwsng" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                            <a href="https://instagram.com/rxdlne" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                        </div>
                    </motion.section>

                    <motion.section className="contact-form" variants={itemVariants}>
                        <h2>Send me a message</h2>
                        <form>
                            <input type="text" placeholder="Your Name" required />
                            <input type="email" placeholder="Your Email" required />
                            <textarea placeholder="Your Message" required></textarea>
                            <button type="submit">Send Message</button>
                        </form>
                    </motion.section>
                </motion.div>
            </div>
        </PageTransition>
    );
}

export default Contact;
