import { useState, useEffect } from 'react';
import { AdicionarTarefa } from './components/Modal';
import './App.css';

type StatusKanban = 'fazer' | 'fazendo' | 'feito';

interface Bloco {
  id: string;
  texto: string;
  status: StatusKanban;
  data: string
}

export function App() {

  const [blocos, setBlocos] = useState<Bloco[]>(() => {
    const dadosSalvos = localStorage.getItem('meus_blocos');

    if (dadosSalvos) {
      return JSON.parse(dadosSalvos);
    }

    return [];
  });

  useEffect(() => {
    localStorage.setItem('meus_blocos', JSON.stringify(blocos));
  }, [blocos]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [textoNovoBloco, setTextoNovoBloco] = useState('');
  const [statusNovoBloco, setStatusNovoBloco] = useState<StatusKanban>('fazer')

  const adicionarBloco = () => {

    console.log(textoNovoBloco)
    console.log(statusNovoBloco)

    const novoBloco: Bloco = {
      id: crypto.randomUUID(), // Gerador de ID único nativo
      texto: textoNovoBloco,
      status: statusNovoBloco,
      data: new Date().toLocaleString('pt-BR')
    };
    setBlocos(prevBlocos => [...prevBlocos, novoBloco]);
    setIsModalOpen(false)
  }

  const avancar = () => {

  }

  const voltar = () => {

  }

  const apagar = () => {

  }

  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Kanban do pinercio</h1>
      <button onClick={() => setIsModalOpen(true)}>adicionar Tarefa</button>

      {/* Input de texto com estado */}
      <section style={{ marginBottom: '1.5rem', padding: '2rem', borderBottom: 'black solid 2px' }}>
        <h1>A fazer: </h1>
        {blocos
          .filter((bloco) => bloco.status === 'fazer')
          .map((bloco, index) => (
            <div key={bloco.id} className={index % 2 === 0 ? 'secaoA' : 'secaoB'}>
              <p>tarefa: {bloco.texto}</p>
              <p>data de cricao: {bloco.data}</p>
              <button onClick={avancar} className='botoes'>avançar</button>
              <button onClick={voltar} className='botoes'>voltar</button>
              <button onClick={apagar} className='botoes'>apagar</button>
            </div>
          ))}
      </section>

      <section style={{ marginBottom: '1.5rem', padding: '2rem', borderBottom: 'black solid 2px' }}>
        <h1>Fazendo: </h1>
        {blocos
          .filter((bloco) => bloco.status === 'fazendo')
          .map((bloco, index) => (
            <div key={bloco.id} className={index % 2 === 0 ? 'secaoA' : 'secaoB'}>
              <p>tarefa: {bloco.texto}</p>
              <p>data de cricao: {bloco.data}</p>
              <button onClick={avancar} className='botoes'>avançar</button>
              <button onClick={voltar} className='botoes'>voltar</button>
              <button onClick={apagar} className='botoes'>apagar</button>
            </div>
          ))}
      </section>

      <section style={{ marginBottom: '1.5rem', padding: '2rem' }}>
        <h1>Feito: </h1>
        {blocos
          .filter((bloco) => bloco.status === 'feito')
          .map((bloco, index) => (
            <div key={bloco.id} className={index % 2 === 0 ? 'secaoA' : 'secaoB'}>
              <p>tarefa: {bloco.texto}</p>
              <p>data de cricao: {bloco.data}</p>
              <button onClick={avancar} className='botoes'>avançar</button>
              <button onClick={voltar} className='botoes'>voltar</button>
              <button onClick={apagar} className='botoes'>apagar</button>
            </div>
          ))}
      </section>
      <AdicionarTarefa
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        texto={textoNovoBloco}
        setTexto={setTextoNovoBloco}
        onSalvar={adicionarBloco}
        status={statusNovoBloco}
        setStatus={setStatusNovoBloco}
      />
    </main>
  );
}

export default App;