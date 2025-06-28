import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Sobre Nós</h3>
          <p>
            Física Divertida é uma plataforma educacional inovadora que transforma 
            o aprendizado da física em uma experiência envolvente através de 
            histórias em quadrinhos interativas e atividades práticas.
          </p>
          <div className="footer-badges">
            <span className="footer-badge">🎓 Educacional</span>
            <span className="footer-badge">🎨 Interativo</span>
            <span className="footer-badge">📱 Responsivo</span>
          </div>
        </div>

        <div className="footer-section">
          <h3>Navegação</h3>
          <ul>
            <li><Link to="/">🏠 Início</Link></li>
            <li><Link to="/personagens">👥 Personagens</Link></li>
            <li><Link to="/conteudo">📚 Conteúdo</Link></li>
            <li><Link to="/contato">📧 Contato</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Recursos</h3>
          <ul>
            <li><Link to="/o-que-aprender">🎯 O Que Aprender</Link></li>
            <li><Link to="/hq">📖 Histórias em Quadrinhos</Link></li>
            <li><Link to="/cadastro">➕ Criar Conta</Link></li>
            <li><Link to="/acesso">🔑 Fazer Login</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contato</h3>
          <ul>
            <li>
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <div className="contact-info">
                  <span className="contact-label">Email</span>
                  <a href="mailto:contato@fisicadivertida.com">contato@fisicadivertida.com</a>
                </div>
              </div>
            </li>
            <li>
              <div className="contact-item">
                <span className="contact-icon">📱</span>
                <div className="contact-info">
                  <span className="contact-label">Telefone</span>
                  <a href="tel:+5511999999999">(11) 99999-9999</a>
                </div>
              </div>
            </li>
            <li>
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <div className="contact-info">
                  <span className="contact-label">Localização</span>
                  <span>São Paulo, SP - Brasil</span>
                </div>
              </div>
            </li>
          </ul>
          
          <div className="social-links">
            <a href="#" aria-label="Facebook" title="Facebook">
              <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a href="#" aria-label="Instagram" title="Instagram">
              <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a href="#" aria-label="YouTube" title="YouTube">
              <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                <polygon points="9.75,15.02 15.5,11.75 9.75,8.48" />
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn" title="LinkedIn">
              <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>&copy; {currentYear} Física Divertida. Todos os direitos reservados.</p>
          <p>Desenvolvido com ❤️ para tornar a física mais acessível</p>
        </div>
        <div className="footer-links">
          <Link to="/politica-privacidade">Política de Privacidade</Link>
          <Link to="/termos-uso">Termos de Uso</Link>
          <Link to="/cookies">Cookies</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 