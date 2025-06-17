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
                <i className="fas fa-rocket"></i>
                Começar Agora
              </Link>
              <Link to="/o-que-aprender" className="btn btn-secondary">
                <i className="fas fa-book"></i>
                Explorar Conteúdo
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <img src="/hero-illustration.svg" alt="Ilustração de Física" />
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
                <i className="fas fa-graduation-cap"></i>
              </div>
              <h3>Conteúdo Educativo</h3>
              <p>Aprenda física de forma divertida e interativa através de histórias em quadrinhos</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-paint-brush"></i>
              </div>
              <h3>Design Atraente</h3>
              <p>Interface moderna e intuitiva que torna o aprendizado mais envolvente</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-mobile-alt"></i>
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
                <img src="/amelia.png" alt="Amélia" />
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
                <img src="/newton.png" alt="Isaac Newton" />
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
                <i className="fas fa-user-plus"></i>
                Criar Conta Grátis
              </Link>
              <Link to="/acesso" className="btn btn-secondary btn-lg">
                <i className="fas fa-sign-in-alt"></i>
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
                <i className="fas fa-quote-left"></i>
                <p>Nunca imaginei que aprender física poderia ser tão divertido! As histórias em quadrinhos tornam tudo mais fácil de entender.</p>
              </div>
              <div className="testimonial-author">
                <img src="/avatar-1.jpg" alt="Maria Silva" />
                <div className="author-info">
                  <strong>Maria Silva</strong>
                  <span>Estudante do Ensino Médio</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <i className="fas fa-quote-left"></i>
                <p>Uma forma inovadora de ensinar conceitos complexos de física. Meus alunos adoram!</p>
              </div>
              <div className="testimonial-author">
                <img src="/avatar-2.jpg" alt="João Santos" />
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