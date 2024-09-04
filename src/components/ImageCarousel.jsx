import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import '../css/ImageCarousel.css';

const ImageCarousel = ({ images, texts }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="slideshow-container">
            <div className="slideshow-image-container">
                <AnimatePresence mode="wait">
                    <motion.img
                        key={currentIndex}
                        src={images[currentIndex]}
                        alt={`Slide ${currentIndex + 1}`}
                        className="slideshow-image"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    />
                </AnimatePresence>
            </div>
            <div className="slideshow-controls">
                <button onClick={prevSlide} className="slideshow-button">
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <button onClick={nextSlide} className="slideshow-button">
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </div>
            <motion.div
                key={`text-${currentIndex}`}
                className="slideshow-text"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
            >
                <p>{texts[currentIndex]}</p>
            </motion.div>
        </div>
    );
};

export default ImageCarousel;
