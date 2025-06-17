import React, { useState } from 'react';
import { enviarContato } from '../services/api';
import { useTheme } from '../context/ThemeContext';

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const { theme } = useTheme();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      await enviarContato(formData);
      setSuccess(true);
      setFormData({
        nome: '',
        email: '',
        mensagem: ''
      });
    } catch (err) {
      setError('Erro ao enviar mensagem. Por favor, tente novamente mais tarde.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contato-page">
      <section className="hero">
        <div className="container">
          <h1 className="fade-in">Entre em Contato</h1>
          <p className="fade-in">
            Tem alguma dúvida ou sugestão? Estamos aqui para ajudar!
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contato-grid">
            <div className="contato-info fade-in">
              <h2>Informações de Contato</h2>
              <div className="contato-item">
                <div className="contato-icon">📧</div>
                <div>
                  <h3>Email</h3>
                  <p>contato@hqcinematica.com.br</p>
                </div>
              </div>
              <div className="contato-item">
                <div className="contato-icon">📱</div>
                <div>
                  <h3>WhatsApp</h3>
                  <p>(11) 99999-9999</p>
                </div>
              </div>
              <div className="contato-item">
                <div className="contato-icon">📍</div>
                <div>
                  <h3>Endereço</h3>
                  <p>São Paulo, SP - Brasil</p>
                </div>
              </div>
            </div>

            <div className="contato-form-card fade-in">
              <h2>Envie uma Mensagem</h2>
              {success && (
                <div className="success-message">
                  Mensagem enviada com sucesso! Entraremos em contato em breve.
                </div>
              )}
              {error && (
                <div className="error-message">
                  {error}
                </div>
              )}
              <form onSubmit={handleSubmit} className="contato-form">
                <div className="form-group">
                  <label htmlFor="nome">Nome</label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    className="form-input"
                    required
                    placeholder="Seu nome completo"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    required
                    placeholder="seu@email.com"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="mensagem">Mensagem</label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleChange}
                    className="form-input"
                    required
                    rows="5"
                    placeholder="Digite sua mensagem aqui..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={loading}
                >
                  {loading ? 'Enviando...' : 'Enviar Mensagem'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contato; 