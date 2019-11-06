import React from 'react';
import Logo from '../imagenes/MYtineraryLogo.png';



function Header() {
  return (
  <nav className="white" role="navigation">
    <div className="nav-wrapper container "><a id="logo-container " href="#" className="brand-logo logo-ajuste"><img src={Logo} height="50px" alt="logo" /></a>
      <ul className="right hide-on-med-and-down black-text ">
          <li><a href="/">Home</a> </li>
          <li><a href="/IniciarSesion">Iniciar Sesion</a> </li>
          <li><a href="/CrearCuenta">Crear nueva cuenta</a></li>
          <li><a href="/Home2">Destinos</a></li>
          <li><a href="/Empleados">Nosotros</a></li>
      </ul>
      <ul id="nav-mobile" class="sidenav">
          <li><a href="/">Home</a> </li>
          <li><a href="/IniciarSesion">Iniciar Sesion</a> </li>
          <li><a href="/CrearCuenta">Crear nueva cuenta</a></li>
          <li><a href="/Home2">Destinos</a></li>
          <li><a href="/Empleados">Nosotros</a></li>
      </ul>
      <a href="#" data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons black-text">menu</i></a>
    </div>
  </nav>
  );

}
export default Header


