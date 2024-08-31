import '../css/Header.css';

function Header() {

    return(
        <header className="header">
            <div className="logo-container">
                <img src="/favi.png" alt="rxdlne logo" className="logo-icon" />
                <span className="logo-text">rxdlne</span>
            </div>
            <nav className="navbar">
                <ul>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>About</a></li>
                    <li><a href='#'>Services</a></li>
                    <li><a href='#'>Contact</a></li>
                </ul>
            </nav>
        </header>

    );
}

export default Header