import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Sobre Nós</h3>
            <p>
              Física Divertida é uma plataforma educacional que torna o aprendizado
              da física mais acessível e envolvente através de histórias em
              quadrinhos e atividades interativas.
            </p>
          </div>

          <div className="footer-section">
            <h3>Links Úteis</h3>
            <ul>
              <li><a href="#personagens">Personagens</a></li>
              <li><a href="#aprender">O Que Aprender</a></li>
              <li><a href="#hq">HQ</a></li>
              <li><a href="#contato">Contato</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Contato</h3>
            <ul>
              <li>Email: contato@fisicadivertida.com</li>
              <li>Telefone: (11) 99999-9999</li>
            </ul>
            <div className="social-links">
              <a href="#" aria-label="Facebook">
                <svg className="social-icon" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a href="#" aria-label="Twitter">
                <svg className="social-icon" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
              <a href="#" aria-label="Instagram">
                <svg className="social-icon" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Física Divertida. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 