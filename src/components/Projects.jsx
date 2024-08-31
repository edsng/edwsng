import { useRef } from 'react';
import '../css/Projects.css';

function Projects() {

    const projectRefs = useRef([]);

    const projects = [
        {
            name: 'Cars-n-Pics',
            description: 'Client matching web application for car enthusiasts and media producers',
            technologies: ['React', 'Node.js', 'PostgreSQL'],
            bgColor: '#1a1a1a'
        },
        {
            name: 'Bitcoin ML Time Series Forecasting',
            description: 'Machine learning model to predict Bitcoin price movements',
            technologies: ['Python', 'TensorFlow', 'LSTM', 'k-NN'],
            bgColor: '#2a2a2a'
        },
        {
            name: 'Fynance',
            description: 'AI-powered financial advisor',
            technologies: ['React', 'Node.js', 'PostgreSQL'],
            bgColor: '#3a3a3a'
        }
    ];

    return (
        <div className="projects-container">
            {projects.map((project, index) => (
                <div 
                    key={index} 
                    className="project-section" 
                    style={{backgroundColor: project.bgColor}}
                    ref={el => projectRefs.current[index] = el}
                >
                    <div className="project-content">
                        <h2>{project.name}</h2>
                        <p>{project.description}</p>
                        <div className="technologies">
                            {project.technologies.map((tech, techIndex) => (
                                <span key={techIndex} className="tech-tag">{tech}</span>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Projects