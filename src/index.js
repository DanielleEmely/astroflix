import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';
// arquivo que inicializa, pega o Root, renderiza o react dentro do root


// todo componente é uma função
// passa o componente usando a rota
const Pagina404 = () => (<> <h1>Página 404</h1> <iframe src="https://editor.p5js.org/DanielleEmely/embed/j9cwK2Fhw"></iframe></>)
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
  );
  /*<React.StrictMode>
    <App />
  </React.StrictMode>*/


