import '../css/Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} edwsng</p>
        </footer>
    );
}

export default Footer;