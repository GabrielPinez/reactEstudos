import { useState } from 'react';
import './App.css';

export function App() {
  // 1. Estado do contador
  const [count, setCount] = useState<number>(0);

  // 2. Estado do nome do utilizador
  const [nome, setNome] = useState<string>('');

  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Meu Treino de React 🚀</h1>

      {/* Input de texto com estado */}
      <section style={{ marginBottom: '1.5rem' }}>
        <label htmlFor="nome">O teu nome: </label>
        <input
          id="nome"
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Digita aqui..."
        />
        <p>Bem-vindo, <strong>{nome || 'visitante'}</strong>!</p>
      </section>

      {/* Contador interativo */}
      <section>
        <h2>Contador: {count}</h2>
        <button onClick={() => setCount((prev) => prev + 1)}>
          +1 Incrementar
        </button>
        <button onClick={() => setCount((prev) => prev - 1)} style={{ marginLeft: '0.5rem' }}>
          -1 Decrementar
        </button>
        <button onClick={() => setCount(0)} style={{ marginLeft: '0.5rem' }}>
          Reset
        </button>
      </section>
    </main>
  );
}

export default App;