import { useState, useEffect } from 'react';
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Projects from './components/Projects.jsx'

function App() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => setIsLoaded(true), 125); // Add a small delay
    }, []);

    return(
        <div className={`app-container ${isLoaded ? 'fade-in' : ''}`}>
            <Header />
            <main>
                <Projects />
            </main>
            
        </div>
    );
}

export default App