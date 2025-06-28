import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Home = () => {
  const { theme } = useTheme();

  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="fade-in">
              Aprenda Física de Forma
              <span className="gradient-text"> Divertida e Interativa</span>
            </h1>
            <p className="subtitle fade-in">
              Descubra o mundo da física através de histórias em quadrinhos envolventes
              e exercícios práticos que tornam o aprendizado uma aventura.
            </p>
            <div className="cta-buttons">
              <Link to="/hq" className="btn btn-primary">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                </svg>
                Começar Agora
              </Link>
              <Link to="/o-que-aprender" className="btn btn-secondary">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                </svg>
                Explorar Conteúdo
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-illustration">
              <div className="floating-elements">
                <div className="element element-1">⚡</div>
                <div className="element element-2">🔬</div>
                <div className="element element-3">📚</div>
                <div className="element element-4">🎯</div>
              </div>
              <div className="main-illustration">
                <div className="physics-symbols">
                  <span className="symbol">∑</span>
                  <span className="symbol">∫</span>
                  <span className="symbol">π</span>
                  <span className="symbol">Δ</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-wave">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="currentColor" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="section-header">
            <h2>Por que escolher nossa plataforma?</h2>
            <p>Uma experiência única de aprendizado que combina diversão e conhecimento</p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                </svg>
              </div>
              <h3>Conteúdo Educativo</h3>
              <p>Aprenda física de forma divertida e interativa através de histórias em quadrinhos</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3>Design Atraente</h3>
              <p>Interface moderna e intuitiva que torna o aprendizado mais envolvente</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
                  <line x1="12" y1="18" x2="12.01" y2="18"/>
                </svg>
              </div>
              <h3>Acesso em Qualquer Lugar</h3>
              <p>Estude no seu próprio ritmo, em qualquer dispositivo</p>
            </div>
          </div>
        </div>
      </section>

      {/* Characters Section */}
      <section className="characters">
        <div className="container">
          <div className="section-header">
            <h2>Conheça Nossos Personagens</h2>
            <p>Guias que tornarão sua jornada de aprendizado mais divertida</p>
          </div>
          <div className="characters-grid">
            <div className="character-card">
              <div className="character-image">
                <div className="character-avatar">
                  <span className="character-emoji">👩‍🎓</span>
                </div>
              </div>
              <div className="character-info">
                <h3>Amélia</h3>
                <p>Uma jovem estudante curiosa que adora desvendar os mistérios da física</p>
                <div className="character-tags">
                  <span>Cinemática</span>
                  <span>Movimento</span>
                  <span>Velocidade</span>
                </div>
              </div>
            </div>
            <div className="character-card">
              <div className="character-image">
                <div className="character-avatar">
                  <span className="character-emoji">👨‍🔬</span>
                </div>
              </div>
              <div className="character-info">
                <h3>Isaac Newton</h3>
                <p>O famoso físico que guia Amélia através das leis da física</p>
                <div className="character-tags">
                  <span>Leis do Movimento</span>
                  <span>Gravidade</span>
                  <span>Força</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2>Comece sua jornada hoje</h2>
            <p>Junte-se a milhares de estudantes que já estão aprendendo física de forma divertida</p>
            <div className="cta-buttons">
              <Link to="/cadastro" className="btn btn-primary btn-lg">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="8.5" cy="7" r="4"/>
                  <line x1="20" y1="8" x2="20" y2="14"/>
                  <line x1="23" y1="11" x2="17" y2="11"/>
                </svg>
                Criar Conta Grátis
              </Link>
              <Link to="/acesso" className="btn btn-secondary btn-lg">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/>
                  <polyline points="10,17 15,12 10,7"/>
                  <line x1="15" y1="12" x2="3" y2="12"/>
                </svg>
                Já tenho conta
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="container">
          <div className="section-header">
            <h2>O que nossos usuários dizem</h2>
            <p>Depoimentos de quem já está aprendendo com nossa plataforma</p>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
                <p>Nunca imaginei que aprender física poderia ser tão divertido! As histórias em quadrinhos tornam tudo mais fácil de entender.</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <span>👩‍🎓</span>
                </div>
                <div className="author-info">
                  <strong>Maria Silva</strong>
                  <span>Estudante do Ensino Médio</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
                <p>Uma forma inovadora de ensinar conceitos complexos de física. Meus alunos adoram!</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <span>👨‍🏫</span>
                </div>
                <div className="author-info">
                  <strong>João Santos</strong>
                  <span>Professor de Física</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 