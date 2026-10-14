import { useState } from 'react';
import { AdicionarTarefa } from './components/Modal';
import './App.css';

type StatusKanban = 'fazer' | 'fazendo' | 'feito';

interface Bloco {
  id: string;
  texto: string;
  status: StatusKanban;
}


export function App() {


  const [blocos, setBlocos] = useState<Bloco[]>([]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [textoNovoBloco, setTextoNovoBloco] = useState('');

  const adicionarBloco = () => {

  }

  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Kanban do pinercio</h1>
      <button onClick={() => setIsModalOpen(true)}>adicionar Tarefa</button>

      {/* Input de texto com estado */}
      <section style={{ marginBottom: '1.5rem' }}>
        <h1>A fazer: </h1>
        <div id='Fazer' className='secoes' ></div>
      </section>

      <section>
        <h1>Fazendo: </h1>
        <div id='fazendo' className='secoes'></div>
      </section>

      <section>
        <h1>Feito: </h1>
        <div id='feito' className='secoes'></div>
      </section>
      <AdicionarTarefa 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        texto={textoNovoBloco}
        setTexto={setTextoNovoBloco}
        onSalvar={adicionarBloco}
      />
    </main>
  );
}

export default App;