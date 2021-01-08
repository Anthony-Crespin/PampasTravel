import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Inicio from './componentes/cliente/Paginas/Inicio/Inicio';
import Mapa from './componentes/cliente/Mapa/Mapa';

function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route exact path="/" component={Inicio} />
        <Route exact path="/mapa" component={Mapa}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
