import { useRef, useEffect } from 'react';
import '../css/Projects.css';
import carsnpicsImage from '../assets/carsnpics.png'; // Make sure to add this image to your assets folder
import bitcoinImage from '../assets/bitcoinImage.png'; // Make sure to add this image to your assets folder
import fynance from '../assets/fynance.png'; // Make sure to add this image to your assets folder
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function Projects() {

    const projectRefs = useRef([]);

    const projects = [
        {
            name: 'Cars-n-Pics',
            description: 'Client matching web application for car enthusiasts and media producers',
            technologies: ['React', 'Node.js', 'PostgreSQL'],
            bgColor: '#1a1a1a',
            image: carsnpicsImage,
            className: 'carsnpics-project',
            link: 'https://www.example.com/cars-n-pics' // Replace with actual link
        },
        {
            name: 'Bitcoin ML Time Series Forecasting',
            description: 'Machine learning model to predict Bitcoin price movements',
            technologies: ['Python', 'TensorFlow', 'LSTM', 'k-NN'],
            bgColor: '#2a2a2a',
            image: bitcoinImage,
            className: 'bitcoin-project'
        },
        {
            name: 'Fynance',
            description: 'AI-powered financial advisor',
            technologies: ['React', 'Node.js', 'PostgreSQL'],
            bgColor: '#3a3a3a',
            image: fynance,
            className: 'fynance-project',
            link: 'https://www.example.com/fynance' // Replace with actual link
        }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                } else {
                    entry.target.classList.remove('fade-in');
                }
            });
        }, { threshold: 0.1 });

        projectRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => {
            projectRefs.current.forEach((ref) => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, []);

    return (
        <div className="projects-container">
            {projects.map((project, index) => (
                <div 
                    key={index} 
                    className={`project-section ${project.className}`}
                    style={{backgroundColor: project.bgColor}}
                    ref={el => projectRefs.current[index] = el}
                >
                    <div className="project-content">
                        {project.image && (
                            <img src={project.image} alt={project.name} className="project-image fade-in-element" />
                        )}
                        <h2 className="fade-in-element">{project.name}</h2>
                        <p className="fade-in-element">{project.description}</p>
                        <div className="technologies fade-in-element">
                            {project.technologies.map((tech, techIndex) => (
                                <span key={techIndex} className="tech-tag">{tech}</span>
                            ))}
                        </div>
                        {project.link && (
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="try-me-button fade-in-element">
                                Try Me
                                <span className="arrow-icon">
                                    <FontAwesomeIcon icon={faArrowRight} />
                                </span>
                            </a>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Projects