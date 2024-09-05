import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Projects from './components/Projects.jsx'
import About from './components/About.jsx'
import PageTransition from './components/PageTransition.jsx'

function App() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [currentPage, setCurrentPage] = useState('projects');

    useEffect(() => {
        setTimeout(() => setIsLoaded(true), 125);
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
                    </PageTransition>
                );
            // Add cases for 'services' and 'contact' later
            default:
                return (
                    <PageTransition key="projects">
                        <Projects />
                    </PageTransition>
                );
        }
    };

    return(
        <div className={`app-container ${isLoaded ? 'fade-in' : ''}`}>
            <Header setCurrentPage={setCurrentPage} />
            <main>
                <AnimatePresence mode="wait">
                    {renderPage()}
                </AnimatePresence>
            </main>
            
        </div>
    );
}

export default App;