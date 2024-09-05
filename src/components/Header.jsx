import '../css/Header.css';
import logo from "/assets/icon.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Header({ setCurrentPage }) {
    const handleNavClick = (page) => {
        setCurrentPage(page);
    };

    return(
        <header className="header">
            <div className="logo-container">
                <a href="#" onClick={() => handleNavClick('projects')}><img src={logo} alt="rxdlne logo" className="logo-icon" /></a>
                <span className="logo-text">rxdlne</span>
            </div>
            <div className="center-container">
                <div className="social-links">
                    <a href="https://github.com/edsng" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a href="https://linkedin.com/in/edwsng" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href="https://twitter.com/rxdlne" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                </div>
            </div>
            <nav className="navbar">
                <ul>
                    <li><a href="#" onClick={() => handleNavClick('projects')}>Projects</a></li>
                    <li><a href="#" onClick={() => handleNavClick('about')}>About</a></li>
                    <li><a href="#" onClick={() => handleNavClick('resume')}>CV</a></li>
                    <li><a href="#" onClick={() => handleNavClick('contact')}>Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;