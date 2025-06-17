import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/personagens', label: 'Personagens' },
    { path: '/o-que-aprender', label: 'Aprender' },
    { path: '/hq', label: 'HQ' },
    { path: '/contato', label: 'Contato' }
  ];

  return (
    <nav className={`nav ${isScrolled ? 'nav-scrolled' : ''}`}>
      <div className="nav-brand">
        <img src="/logo.png" alt="Física Divertida" className="nav-logo-img" />
        <Link to="/" className="nav-logo">
          Física Divertida
        </Link>
      </div>
      
      <div className={`nav-links ${isMenuOpen ? 'nav-links-open' : ''}`}>
        {navLinks.map((link) => (
          <Link 
            key={link.path} 
            to={link.path}
            className="nav-link"
            onClick={() => setIsMenuOpen(false)}
          >
            {link.label}
          </Link>
        ))}
        <Link to="/cadastro" className="btn btn-primary nav-btn">Cadastro</Link>
        <Link to="/acesso" className="btn btn-secondary nav-btn">Acesso</Link>
        <button 
          onClick={toggleTheme} 
          className="theme-toggle" 
          aria-label="Alternar tema"
        >
          {isDarkMode ? '☀️' : '🌙'}
        </button>
      </div>

      <button 
        className={`mobile-menu-button ${isMenuOpen ? 'open' : ''}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
}

export default Navbar; 