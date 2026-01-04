import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo" onClick={handleLinkClick}>
            <span className="logo-badge">ARZ</span>
            <span className="logo-text">Automobile</span>
          </Link>

          <button 
            className={`mobile-menu-btn ${isMenuOpen ? 'menu-open' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <Link 
              to="/" 
              className={`nav-link ${isActive('/') ? 'active' : ''}`}
              onClick={handleLinkClick}
            >
              Home
            </Link>
            <Link 
              to="/bewertung" 
              className={`nav-link ${isActive('/bewertung') ? 'active' : ''}`}
              onClick={handleLinkClick}
            >
              Bewertung
            </Link>
            <Link 
              to="/ankauf" 
              className={`nav-link ${isActive('/ankauf') ? 'active' : ''}`}
              onClick={handleLinkClick}
            >
              Auto verkaufen
            </Link>
            <Link 
              to="/ueber-uns" 
              className={`nav-link ${isActive('/ueber-uns') ? 'active' : ''}`}
              onClick={handleLinkClick}
            >
              Über uns
            </Link>
            <Link 
              to="/faq" 
              className={`nav-link ${isActive('/faq') ? 'active' : ''}`}
              onClick={handleLinkClick}
            >
              FAQ
            </Link>
            <Link 
              to="/kontakt" 
              className={`nav-link nav-link-cta ${isActive('/kontakt') ? 'active' : ''}`}
              onClick={handleLinkClick}
            >
              Kontakt
            </Link>
          </nav>

          <a href="tel:+4917630339020" className="header-phone">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="phone-icon">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            <span className="phone-text">0176 30339020</span>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;

