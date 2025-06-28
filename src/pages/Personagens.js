import React, { useState, useEffect } from 'react';
import { getPersonagens } from '../services/api';
import { useTheme } from '../context/ThemeContext';

const Personagens = () => {
  const [personagens, setPersonagens] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { theme } = useTheme();

  useEffect(() => {
    const fetchPersonagens = async () => {
      try {
        const data = await getPersonagens();
        setPersonagens(data);
        setLoading(false);
      } catch (err) {
        setError('Erro ao carregar personagens. Por favor, tente novamente mais tarde.');
        setLoading(false);
      }
    };

    fetchPersonagens();
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p className="loading-text">Carregando personagens...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <div className="alert alert-error">{error}</div>
      </div>
    );
  }

  return (
    <div className="personagens-page">
      <section className="hero">
        <div className="container">
          <h1 className="fade-in">Nossos Personagens</h1>
          <p className="fade-in">
            Conheça os personagens que vão te guiar nesta jornada de aprendizado
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="personagens-grid">
            {personagens.map((personagem) => (
              <div key={personagem.id} className="personagem-card fade-in">
                <div className="personagem-avatar">
                  <span className="character-emoji">
                    {personagem.nome === 'Amélia' ? '👩‍🎓' : '👨‍🔬'}
                  </span>
                </div>
                <div className="personagem-info">
                  <h3>{personagem.nome}</h3>
                  <p>{personagem.descricao}</p>
                  <div className="personagem-conceitos">
                    <h4>Conceitos Relacionados:</h4>
                    <div className="conceitos-tags">
                      {personagem.conceitos.map((conceito, index) => (
                        <span key={index} className="conceito-tag">{conceito}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Personagens; 