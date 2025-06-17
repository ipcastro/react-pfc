import React, { useState } from 'react';

function PersonagemModal({ personagem, onClose, onSave }) {
  const [formData, setFormData] = useState({
    nome: personagem?.nome || '',
    descricao: personagem?.descricao || '',
    conceitos: personagem?.conceitos || [],
    imagem: personagem?.imagem || ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2 className="modal-title">
            {personagem?.id ? 'Editar Personagem' : 'Novo Personagem'}
          </h2>
          <button
            onClick={onClose}
            className="modal-close"
          >
            <svg
              className="modal-close-icon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="modal-form">
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
            />
          </div>

          <div className="form-group">
            <label htmlFor="descricao">Descrição</label>
            <textarea
              id="descricao"
              name="descricao"
              value={formData.descricao}
              onChange={handleChange}
              className="form-input"
              rows="4"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="conceitos">Conceitos (separados por vírgula)</label>
            <input
              type="text"
              id="conceitos"
              name="conceitos"
              value={formData.conceitos.join(', ')}
              onChange={(e) => {
                const conceitos = e.target.value.split(',').map(c => c.trim());
                setFormData(prev => ({ ...prev, conceitos }));
              }}
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="imagem">URL da Imagem</label>
            <input
              type="url"
              id="imagem"
              name="imagem"
              value={formData.imagem}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>

          <div className="modal-actions">
            <button type="button" onClick={onClose} className="btn btn-secondary">
              Cancelar
            </button>
            <button type="submit" className="btn btn-primary">
              Salvar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PersonagemModal; 