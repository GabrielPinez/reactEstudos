import React from 'react';
import './Modal.css';

interface AdicionarTarefaProps {
  isOpen: boolean;
  onClose: () => void;
  texto: string;
  setTexto: (texto: string) => void;
  status: 'fazer' | 'fazendo' | 'feito';
  setStatus: (status: 'fazer' | 'fazendo' | 'feito') => void;
  onSalvar: () => void;
}

export function AdicionarTarefa({ isOpen, onClose, texto, setTexto, onSalvar }: AdicionarTarefaProps) {
  // Se o modal não estiver aberto, não renderiza nada
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>
          &times;
        </button>

        <h2>Criar Nova Tarefa</h2>
        <p>Digite o que precisa de ser feito:</p>

        <input 
          type="text" 
          placeholder="Ex: Estudar React"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          style={{ width: '100%', padding: '8px', margin: '15px 0', boxSizing: 'border-box' }}
        />

        <label>Estado inicial:</label>
        <select 
          value={status} 
          onChange={(e) => setStatus(e.target.value as any)}
          style={{ width: '100%', padding: '8px', margin: '10px 0', boxSizing: 'border-box' }}
        >
          <option value="fazer">A fazer</option>
          <option value="fazendo">Fazendo</option>
          <option value="feito">Feito</option>
        </select>

        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
          <button onClick={onClose}>Cancelar</button>
          <button 
            onClick={onSalvar}
            style={{ background: '#007bff', color: '#fff', border: 'none', padding: '8px 15px', borderRadius: '4px', cursor: 'pointer' }}
          >
            Salvar
          </button>
        </div>

      </div>
    </div>
  );
}