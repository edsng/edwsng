import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../css/Projects.css';
import carsnpicsImage from '../assets/carsnpics.png';
import bitcoinImage from '../assets/bitcoinImage.png';
import fynance from '../assets/fynance.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faInfoCircle, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

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

function Projects() {
	const [expandedProject, setExpandedProject] = useState(null);

	const projects = [
		{
			name: 'Cars-n-Pics',
			description: 'Client matching web application for car enthusiasts and media producers',
			technologies: ['React', 'Node.js', 'PostgreSQL'],
			bgColor: '#1a1a1a',
			image: carsnpicsImage,
			className: 'carsnpics-project',
			link: 'https://www.example.com/cars-n-pics',
			purpose:'Connecting car enthusiasts - one shot at a time',
			details: "Cars-n-Pics is a dedicated platform designed to help photo-videographers transition into freelance work within the car community. A major challenge for photo-videographers is the lack of fair compensation for their work. Many car enthusiasts have a disparity in their expectations of pricing, often underestimating the effort and time invested in each picture. Cars n Pics bridges this gap by allowing car owners to find photo-videographers at any price range and providing media producers with job opportunities at all levels.",
			detailImages: [carsnpicsImage] // Add more images as needed
		},
		{
			name: 'Bitcoin ML Time Series Forecasting',
			description: 'Machine learning model to predict Bitcoin price movements',
			technologies: ['Python', 'TensorFlow', 'LSTM', 'k-NN'],
			bgColor: '#2a2a2a',
			image: bitcoinImage,
			className: 'bitcoin-project',
			purpose:'k-Nearest Neighbors and LSTM',
			details: "The cryptocurrency market has been a significant point of interest in the past decade with Bitcoin leading the space. With a highly volatile market similar to many other securities, predicting Bitcoin's prices has proven to be a challenging task with substantial financial implications. With this project, we created a predictive model for Bitcoin using the K-Nearest Neighbors algorithm alongside the Long Short-Term Memory algorithm, in order to identify coming bull or bear market trends.",
			detailImages: [bitcoinImage] // Add more images as needed

		},
		{
			name: 'Fynance',
			description: 'AI-powered financial advisor',
			technologies: ['React', 'Node.js', 'PostgreSQL'],
			bgColor: '#3a3a3a',
			image: fynance,
			className: 'fynance-project',
			link: 'https://www.example.com/fynance', // Replace with actual link
			purpose:'Your personal AI financial advisor',
			details: "AI app that utilizes OpenAI’s GPT model through RESTful API integration in order to create personalized long-term plans for debt management, building capital, and building credit efficiently using basic financial information from users.",
			detailImages: [fynance] // Add more images as needed

		}
	];

	const toggleProjectDetails = (index) => {
		setExpandedProject(expandedProject === index ? null : index);
	};

	return (
		<div className="projects-container">
			{projects.map((project, index) => (
				<div 
					key={index} 
					className={`project-section ${project.className}`}
					style={{backgroundColor: project.bgColor}}
				>
					<AnimatePresence mode="wait">
						{expandedProject !== index ? (
							<motion.div
								key="summary"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 0.5 }}
								className="project-content"
							>
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
								<FadeInWhenVisible>
									<div className="button-container">
										<button onClick={() => toggleProjectDetails(index)} className="learn-more-button">
											Learn
											<span className="arrow-icon">
												<FontAwesomeIcon icon={faInfoCircle} />
											</span>
										</button>
										{project.link && (
											<a href={project.link} target="_blank" rel="noopener noreferrer" className="try-me-button">
												Try
												<span className="arrow-icon">
													<FontAwesomeIcon icon={faArrowRight} />
												</span>
											</a>
										)}
									</div>
								</FadeInWhenVisible>
							</motion.div>
						) : (
							<motion.div
								key="details"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 0.5 }}
								className="project-details"
							>
								<div className="project-details-content">
									<h2>{project.purpose}</h2>
									<p>{project.details}</p>
									<button onClick={() => toggleProjectDetails(index)} className="back-button">
										<span className="arrow-icon">
											<FontAwesomeIcon icon={faArrowLeft} />
										</span>
										Back
									</button>
								</div>
								<div className="detail-image-container">
									{project.detailImages.map((image, imgIndex) => (
										<img key={imgIndex} src={image} alt={`${project.name} details ${imgIndex + 1}`} className="detail-image" />
									))}
								</div>
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			))}
		</div>
	);
}

export default Projects;