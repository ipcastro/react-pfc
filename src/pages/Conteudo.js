import React, { useState, useEffect } from 'react';
import { getConteudo } from '../services/api';
import { useTheme } from '../context/ThemeContext';

const Conteudo = () => {
  const [conteudos, setConteudos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { theme } = useTheme();

  useEffect(() => {
    const fetchConteudo = async () => {
      try {
        const data = await getConteudo();
        setConteudos(Array.isArray(data) ? data : [data]);
        setLoading(false);
      } catch (err) {
        setError('Erro ao carregar conteúdo. Por favor, tente novamente mais tarde.');
        setLoading(false);
      }
    };

    fetchConteudo();
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p className="loading-text">Carregando conteúdo...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <div className="error-message">{error}</div>
      </div>
    );
  }

  return (
    <div className="conteudo-page">
      <section className="hero">
        <div className="container">
          <h1 className="fade-in">Conteúdo Didático</h1>
          <p className="fade-in">
            Aprenda física de forma interativa e divertida através de histórias em quadrinhos
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="conteudo-grid">
            {conteudos.map((conteudo, index) => (
              <div key={conteudo.id || index} className="conteudo-card fade-in">
                <div className="conteudo-header">
                  <h2>{conteudo.titulo}</h2>
                  <div className="conteudo-meta">
                    <span className="conteudo-categoria">Cinemática</span>
                    <span className="conteudo-nivel">Nível Básico</span>
                  </div>
                </div>

                <div className="conteudo-body">
                  <div 
                    className="conteudo-texto"
                    dangerouslySetInnerHTML={{ __html: conteudo.conteudo }}
                  />
                </div>

                <div className="conteudo-footer">
                  {conteudo.referencias && conteudo.referencias.length > 0 && (
                    <div className="conteudo-referencias">
                      <h3>Referências</h3>
                      <ul>
                        {conteudo.referencias.map((ref, refIndex) => (
                          <li key={refIndex}>{ref}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Conteudo; 