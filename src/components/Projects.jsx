import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../css/Projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faInfoCircle, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import ImageCarousel from './ImageCarousel';
import PageTransition from './PageTransition';

//Import images
import carsnpicsImage from '../assets/carsnpics.png';
import bitcoinImage from '../assets/bitcoinImage.png';
import fynance from '../assets/fynance.png';
import btcFeatures from '../assets/features.png';
import LSTMresults from '../assets/LSTMresults.png';
import kNNresults from '../assets/kNNresults.png';

import wip from '../assets/wip.png';
import fy1 from '../assets/fy1.png';

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
			link: 'https://edsng.github.io/carsnpics',
			purpose:'Connecting car enthusiasts - one shot at a time',
			details: ["Cars-n-Pics is a dedicated platform designed to help photo-videographers transition into freelance work within the car community. A major challenge for media producers is the conversation of pricing, often going unpaid or undervalued for their work.",
			"Cars-n-Pics bridges this gap by allowing car owners to find professionals at any price range and providing media producers with job opportunities at all levels."
			],
			detailImages: [wip, wip, wip], // Add three images
			detailTexts: [
				"Context text for image 1",
				"Context text for image 2",
				"Context text for image 3"
			]
		},
		{
			name: 'Bitcoin ML Time Series Forecasting',
			description: 'Machine learning model to predict Bitcoin price movements',
			technologies: ['Python', 'TensorFlow', 'LSTM', 'k-NN'],
			bgColor: '#2a2a2a',
			image: bitcoinImage,
			className: 'bitcoin-project',
			link: 'https://github.com/edsng/Bitcoin-Price-Forecasting-using-Machine-Learning-Models',
			purpose:'k-Nearest Neighbors and LSTM',
			details: ["The cryptocurrency market has been a significant point of interest in the past decade with Bitcoin leading the space. With a highly volatile market similar to many other securities, predicting Bitcoin's prices has proven to be a challenging task with substantial financial implications.",
			"With this project, we created a predictive model for Bitcoin using the K-Nearest Neighbors algorithm alongside the Long Short-Term Memory algorithm, in order to identify coming bull or bear market trends with results beating several research papers."
			],
			detailImages: [kNNresults, LSTMresults, btcFeatures], // Add more images as needed
			detailTexts: [
				"Our k-NN model was able to capture 95.93% of variability in BTC prices as well as boast a significantly low 6.73% error in its predictions, outperforming several research papers.",
				"Our LSTM model was able to capture 90.09% of variability in BTC prices. While not outperforming the k-NN model, it still performed decently with a Mean Absolute Error of $3580.96.",
				"We sourced daily price data from 2014 - 2024 sourced from yahoo finance, and used advanced feature engineering techniques to create a comprehensive dataset for our models."
			]
		},
		{
			name: 'Fynance',
			description: 'AI-powered financial advisor',
			technologies: ['React', 'Node.js', 'PostgreSQL'],
			bgColor: '#3a3a3a',
			image: fynance,
			className: 'fynance-project',
			link: 'https://edsng.github.io/fynance', // Replace with actual link
			purpose:'Your personal AI financial advisor',
			details: ["AI app that utilizes OpenAI’s GPT model through RESTful API integration in order to create personalized long-term plans for debt management, building capital, and building credit efficiently using basic financial information from users.",
			"Track your spending, create budgets, and receive personalized recommendations for improving your financial health."
			],
			detailImages: [fy1, wip, wip], // Add more images as needed
			detailTexts: [
				"Minimalistic landing page styled with react and framer-motion library",
				"Context text for image 2",
				"Context text for image 3"
			]
		}
	];

	const toggleProjectDetails = (index) => {
		setExpandedProject(expandedProject === index ? null : index);
	};

	return (
		<PageTransition>
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
									{project.details.map((paragraph, index) => (
										<p key={index}>{paragraph}</p>
									))}
									<button onClick={() => toggleProjectDetails(index)} className="back-button">
										<span className="arrow-icon">
											<FontAwesomeIcon icon={faArrowLeft} />
										</span>
										Back
									</button>
								</div>
								<div className="detail-image-container">
									<ImageCarousel images={project.detailImages} texts={project.detailTexts} />
								</div>
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			))}
		</div>
		</PageTransition>
	);
}

export default Projects;