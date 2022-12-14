import React from 'react';
import MyFooter from './components/myFooter';
import MyNavbar from './components/myNavbar';
import Conhecimentos from './pages/conhecimentos';
import Contato from './pages/contato';
import Experiencia from './pages/experiencias';
import Inicio from './pages/inicio';
import Projetos from './pages/projetos';
import Sobre from './pages/sobre';
import './style.scss';

function App() {
  return (
    <>
      <MyNavbar />
      <Inicio />
      <Sobre />
      <Projetos />
      <Conhecimentos />
      <Experiencia />
      <Contato />
      <MyFooter />
    </>
  );
}

export default App;
