import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const { user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className={`nav ${isScrolled ? 'nav-scrolled' : ''}`}>
      <div className="nav-container container">
        <Link to="/" className="nav-brand">
          <img src="/logo192.png" alt="Logo" className="nav-logo" />
          <span>HQ Cinemática</span>
        </Link>

        <button 
          className="nav-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
        >
          <span className={`nav-toggle-icon ${isMenuOpen ? 'active' : ''}`}></span>
        </button>

        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <Link 
            to="/" 
            className={`nav-link ${isActive('/') ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Início
          </Link>
          <Link 
            to="/personagens" 
            className={`nav-link ${isActive('/personagens') ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Personagens
          </Link>
          <Link 
            to="/conteudo" 
            className={`nav-link ${isActive('/conteudo') ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Conteúdo
          </Link>
          <Link 
            to="/contato" 
            className={`nav-link ${isActive('/contato') ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            Contato
          </Link>

          <div className="nav-actions">
            <button 
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Mudar para tema claro' : 'Mudar para tema escuro'}
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>

            {user ? (
              <div className="nav-user">
                <span className="nav-user-name">Olá, {user.nome}</span>
                {user.isAdmin && (
                  <Link 
                    to="/admin" 
                    className={`nav-link ${isActive('/admin') ? 'active' : ''}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Admin
                  </Link>
                )}
                <button 
                  className="btn btn-secondary"
                  onClick={() => {
                    logout();
                    setIsMenuOpen(false);
                  }}
                >
                  Sair
                </button>
              </div>
            ) : (
              <Link 
                to="/login" 
                className={`btn btn-primary ${isActive('/login') ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Entrar
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 