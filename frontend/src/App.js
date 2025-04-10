import './App.css';
import Footer from './components/footer';
import Grafico from './components/grafico';
import Menu from './components/menu';
import MeusLaudos from './components/meus_laudos';
import Notificacoes from './components/notificacoes';

function App() {
  return (
    <div className='pagina'>
      <Menu />
      <div className='conteudo'>
        <div className='painel-superior'>
          <Grafico />
          <Notificacoes />
        </div>
      <MeusLaudos />
      <Footer />
      </div>
    </div>
  );
}

export default App;
                                                                                      