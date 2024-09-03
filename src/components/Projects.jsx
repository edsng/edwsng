import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../css/Projects.css';
import carsnpicsImage from '../assets/carsnpics.png'; // Make sure to add this image to your assets folder
import bitcoinImage from '../assets/bitcoinImage.png'; // Make sure to add this image to your assets folder
import fynance from '../assets/fynance.png'; // Make sure to add this image to your assets folder
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const FadeInWhenVisible = ({ children }) => {
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	return (
		<motion.div
			ref={ref}
			initial={{ opacity: 0, y: 50 }}
			animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
			transition={{ duration: 0.5 }}
		>
			{children}
		</motion.div>
	);
};

const ParallaxSection = ({ children, offset = 50 }) => {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end start"]
	});

	const y = useTransform(scrollYProgress, [0, 1], [0, offset]);

	return (
		<motion.div ref={ref} style={{ y }}>
			{children}
		</motion.div>
	);
};

function Projects() {

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

	return (
		<div className="projects-container">
			{projects.map((project, index) => (
				<div 
					key={index} 
					className={`project-section ${project.className}`}
					style={{backgroundColor: project.bgColor}}
				>
					<ParallaxSection offset={-50}>
						<div className="project-content">
							<FadeInWhenVisible>
								{project.image && (
									<img src={project.image} alt={project.name} className="project-image" />
								)}
							</FadeInWhenVisible>
							<FadeInWhenVisible>
								<h2>{project.name}</h2>
							</FadeInWhenVisible>
							<FadeInWhenVisible>
								<p>{project.description}</p>
							</FadeInWhenVisible>
							<FadeInWhenVisible>
								<div className="technologies">
									{project.technologies.map((tech, techIndex) => (
										<span key={techIndex} className="tech-tag">{tech}</span>
									))}
								</div>
							</FadeInWhenVisible>
							{project.link && (
								<FadeInWhenVisible>
									<a href={project.link} target="_blank" rel="noopener noreferrer" className="try-me-button">
										Try Me
										<span className="arrow-icon">
											<FontAwesomeIcon icon={faArrowRight} />
										</span>
									</a>
								</FadeInWhenVisible>
							)}
						</div>
					</ParallaxSection>
				</div>
			))}
		</div>
	);
}

export default Projects;