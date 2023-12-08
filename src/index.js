import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './_Shared/Footer';
import Header from './_Shared/Header';
import Startup from './Startup';
import Relatorio from './Relatorio';
import Funcionario from './Funcionario/Index';
import Composicao from './Composicao/Index';
import NotFound from './NotFound';
import Autentica from './Autentica/Index';

export default function App(){
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path='/' element={<Startup/>} />
        <Route exact path='/Funcionario/*' element={<Funcionario/>} />
        <Route exact path='/Composicao/*' element={<Composicao/>} />
        <Route exact path='/Relatorio' element={<Relatorio/>} />
        <Route exact path='/Autentica/*' element={<Autentica/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
      <Footer /> 
    </BrowserRouter>
  );
}
ReactDOM.createRoot(document.getElementById('app')).render(<App/>);
