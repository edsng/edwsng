import React from 'react';
import '../css/About.css';
import PageTransition from './PageTransition';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faJs, faNode, faPython, faAws, faGolang } from '@fortawesome/free-brands-svg-icons';
import { faC, faDatabase } from '@fortawesome/free-solid-svg-icons';

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

    return (
        <PageTransition>
            <div className="about-container">
                <div className="about-text-container">
                    <h2>About Me</h2>
                    <p>Hello! I'm Edward, a passionate developer with a keen interest in creating innovative solutions. With a background in computer science and years of experience in web development, I strive to build applications that are not only aesthetically pleasing, but also functional and user-friendly.</p>
                    <p>My journey in tech has led me to work on a variety of projects that have allowed me to explore different areas of development, from front-end to back-end, and currently machine learning.</p>
                    <p>When I'm not coding, you can find me at photoshoots, experimenting with new recipes in the kitchen, or diving into a new rabbit hole.</p>
                </div>
                <div className="tech-container">
                    <div className="tech-cards-container">
                        {technologies.map((tech, index) => (
                            <div key={index} className="tech-card">
                                <FontAwesomeIcon icon={tech.icon} size="2x" />
                                <span>{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </PageTransition>
    );
}

export default About;
