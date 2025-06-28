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

  useEffect(() => {
    // Fechar menu ao mudar de rota
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    // Prevenir scroll quando menu está aberto
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const isActive = (path) => {
    return location.pathname === path;
  };

  const handleLogout = () => {
    logout();
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="nav">
        <div className="nav-container">
          <Link to="/" className="nav-brand">
            <img src="/logo192.png" alt="Logo" className="nav-logo" />
            <span>HQ Cinemática</span>
          </Link>

          {/* Menu Hambúrguer */}
          <button 
            className={`hamburger-menu ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Menu"
            aria-expanded={isMenuOpen}
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>

          {/* Menu Desktop */}
          <div className="nav-menu-desktop">
            <div className="nav-links">
              <Link 
                to="/" 
                className={`nav-link ${isActive('/') ? 'active' : ''}`}
              >
                Início
              </Link>
              <Link 
                to="/personagens" 
                className={`nav-link ${isActive('/personagens') ? 'active' : ''}`}
              >
                Personagens
              </Link>
              <Link 
                to="/conteudo" 
                className={`nav-link ${isActive('/conteudo') ? 'active' : ''}`}
              >
                Conteúdo
              </Link>
              <Link 
                to="/contato" 
                className={`nav-link ${isActive('/contato') ? 'active' : ''}`}
              >
                Contato
              </Link>
            </div>

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
                    >
                      Admin
                    </Link>
                  )}
                  <button 
                    className="btn btn-secondary"
                    onClick={handleLogout}
                  >
                    Sair
                  </button>
                </div>
              ) : (
                <Link 
                  to="/acesso" 
                  className="btn btn-primary"
                >
                  Entrar
                </Link>
              )}
            </div>
          </div>

          {/* Menu Mobile */}
          <div className={`nav-menu-mobile ${isMenuOpen ? 'active' : ''}`}>
            <div className="mobile-menu-header">
              <span className="mobile-menu-title">Menu</span>
              <button 
                className="mobile-menu-close"
                onClick={toggleMenu}
                aria-label="Fechar menu"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            <div className="mobile-nav-links">
              <Link 
                to="/" 
                className={`mobile-nav-link ${isActive('/') ? 'active' : ''}`}
                onClick={toggleMenu}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9,22 9,12 15,12 15,22"></polyline>
                </svg>
                Início
              </Link>
              <Link 
                to="/personagens" 
                className={`mobile-nav-link ${isActive('/personagens') ? 'active' : ''}`}
                onClick={toggleMenu}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                Personagens
              </Link>
              <Link 
                to="/conteudo" 
                className={`mobile-nav-link ${isActive('/conteudo') ? 'active' : ''}`}
                onClick={toggleMenu}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
                Conteúdo
              </Link>
              <Link 
                to="/contato" 
                className={`mobile-nav-link ${isActive('/contato') ? 'active' : ''}`}
                onClick={toggleMenu}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                Contato
              </Link>
            </div>

            <div className="mobile-nav-actions">
              <div className="mobile-theme-toggle">
                <span>Tema</span>
                <button 
                  className="theme-toggle"
                  onClick={toggleTheme}
                  aria-label={theme === 'dark' ? 'Mudar para tema claro' : 'Mudar para tema escuro'}
                >
                  {theme === 'dark' ? '☀️' : '🌙'}
                </button>
              </div>

              {user ? (
                <div className="mobile-user-section">
                  <div className="mobile-user-info">
                    <span className="mobile-user-name">Olá, {user.nome}</span>
                    {user.isAdmin && (
                      <Link 
                        to="/admin" 
                        className="mobile-admin-link"
                        onClick={toggleMenu}
                      >
                        Painel Admin
                      </Link>
                    )}
                  </div>
                  <button 
                    className="btn btn-secondary btn-full"
                    onClick={handleLogout}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                      <polyline points="16,17 21,12 16,7"></polyline>
                      <line x1="21" y1="12" x2="9" y2="12"></line>
                    </svg>
                    Sair
                  </button>
                </div>
              ) : (
                <div className="mobile-auth-buttons">
                  <Link 
                    to="/acesso" 
                    className="btn btn-primary btn-full"
                    onClick={toggleMenu}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
                      <polyline points="10,17 15,12 10,7"></polyline>
                      <line x1="15" y1="12" x2="3" y2="12"></line>
                    </svg>
                    Entrar
                  </Link>
                  <Link 
                    to="/cadastro" 
                    className="btn btn-secondary btn-full"
                    onClick={toggleMenu}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="8.5" cy="7" r="4"></circle>
                      <line x1="20" y1="8" x2="20" y2="14"></line>
                      <line x1="23" y1="11" x2="17" y2="11"></line>
                    </svg>
                    Criar Conta
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Overlay para fechar menu */}
          {isMenuOpen && (
            <div className="mobile-menu-overlay" onClick={toggleMenu}></div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar; 