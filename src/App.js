import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../../aplicacion/src/componentes/Home';
import IniciarSesion from '../../aplicacion/src/componentes/IniciarSesion';
import CrearCuenta from '../../aplicacion/src/componentes/CrearCuenta';
import Footer from '../../aplicacion/src/componentes/Footer';
import Slider from '../../aplicacion/src/componentes/Home2'
import Header from '../../aplicacion/src/componentes/Header';
import Empleados from '../../aplicacion/src/componentes/Empleados';
import ListaPaises from '../../aplicacion/src/componentes/Citys'
import "./App.css";



function App() {
  return (
    <BrowserRouter>
        <Header />
        <Route exact path='/' component={Home} />
        <Route path='/IniciarSesion' component={IniciarSesion} />
        <Route path='/CrearCuenta' component={CrearCuenta} />
        <Route path='/Home2' component={Slider} />
        <Route path='/Empleados' component={Empleados} />
        <Route path='/Citys' component={ListaPaises} />
        <Footer />
    </BrowserRouter>
  );
}

export default App;


