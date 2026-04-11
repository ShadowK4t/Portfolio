import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar({ theme, toggleTheme }) {
    return(
        <nav className='navbar'>
            <div className='navbar-logo'>
                <Link to="/">Sara M.</Link>
            </div>
            <ul className='navbar-links'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li>
                    <button className="theme-toggle" onClick={toggleTheme}>
                        <span className="toggle-track">
                        <span className={`toggle-thumb ${theme === 'light' ? 'toggle-thumb-right' : ''}`}></span>
                        </span>
                        <span className="toggle-icon">{theme === 'dark' ? '☀️' : '🌙'}</span>
                    </button>
                </li>
            </ul>

        </nav>
    )
}

export default Navbar;