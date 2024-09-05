import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Projects from './components/Projects.jsx'
import CV from './components/CV.jsx'
import About from './components/About.jsx'
import PageTransition from './components/PageTransition.jsx'
import LoadingScreen from './components/LoadingScreen.jsx'
import Contact from './components/Contact.jsx'

// Import all your images here
import logo from "/assets/icon.png";
import wip from './assets/wip.png';
import self from './assets/self.jpg';
import hobby from './assets/hobby.jpg';
import hobby2 from './assets/hobby2.jpg';
import bitcoin from './assets/bitcoin.png';
import carsnpicsImage from './assets/carsnpics.png';
import bitcoinImage from './assets/bitcoinImage.png';
import fynance from './assets/fynance.png';
import btcFeatures from './assets/features.png';
import LSTMresults from './assets/LSTMresults.png';
import kNNresults from './assets/kNNresults.png';

function App() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [currentPage, setCurrentPage] = useState('projects');
    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    const images = [
        logo, wip, self, hobby, hobby2, carsnpicsImage, bitcoin, bitcoinImage, fynance, btcFeatures, LSTMresults, kNNresults
    ];

    useEffect(() => {
        const preloadImages = async () => {
            const totalImages = images.length;
            let loadedImages = 0;

            const loadImage = (src) => {
                return new Promise((resolve, reject) => {
                    const img = new Image();
                    img.src = src;
                    img.onload = () => {
                        loadedImages++;
                        setProgress((loadedImages / totalImages) * 100);
                        resolve();
                    };
                    img.onerror = reject;
                });
            };

            try {
                await Promise.all(images.map(loadImage));
                setProgress(100); // Ensure progress reaches 100%
                
                // Add a 2-second delay before hiding the loading screen
                setTimeout(() => {
                    setLoading(false);
                    setTimeout(() => setIsLoaded(true), 125);
                }, 2000);
            } catch (error) {
                console.error('Error preloading images:', error);
                setLoading(false);
                setTimeout(() => setIsLoaded(true), 125);
            }
        };

        preloadImages();
    }, []);

    const renderPage = () => {
        switch(currentPage) {
            case 'projects':
                return (
                    <PageTransition key="projects">
                        <Projects />
                    </PageTransition>
                );
            case 'about':
                return (
                    <PageTransition key="about">
                        <About />
                        <Footer />
                    </PageTransition>
                );
            case 'cv':
                return (
                    <PageTransition key="cv">
                        <CV />
                        <Footer />
                    </PageTransition>
                );
            case 'contact':
                return (
                    <PageTransition key="contact">
                        <Contact />
                        <Footer />
                    </PageTransition>
                );
            default:
                return (
                    <PageTransition key="projects">
                        <Projects />
                    </PageTransition>
                );
        }
    };

    return(
        <>
            <AnimatePresence>
                {loading && <LoadingScreen progress={progress} />}
            </AnimatePresence>
            {!loading && (
                <div className={`app-container ${isLoaded ? 'fade-in' : ''}`}>
                    <Header setCurrentPage={setCurrentPage} currentPage={currentPage} />
                    <main>
                        <AnimatePresence mode="wait">
                            {renderPage()}
                        </AnimatePresence>
                    </main>
                </div>
            )}
        </>
    );
}

export default App;