import React from 'react';
import imgcircright from '../imagenes/circled-right-2.png';

function Startbrowing() {
  return (
    <div>
      <div className="container section">
        <h5>Encontra tu viaje perfecto, disenado por profesionales que conocen tu proximo destino.</h5>
      </div>
      <div className="container">
        <div>
          <h3 className="grey-text text-darken-4">Empeza!!!</h3>
        </div>
        <div className="container">
          <a href='/Home2'><img className="responsive-img " width="40%" src={imgcircright} alt="logo" /></a>
        </div>
      </div>
    </div>
  );
}

function Logcreate() {
  return (
    <div>
      <div>
        <h5>Queres crear tu propio itinerario??</h5>
      </div>
      <div className="row section">
        <div>
          <a className="waves-effect waves-light btn-small col s3 offset-s2" href="/IniciarSesion">
            <span className="content-text">Iniciar Sesion</span></a>
        </div>
        <div>
          <a className="waves-effect waves-light btn-small col s3 offset-s2" href="/CrearCuenta">
            <span className="content-text">Crear Cuenta</span></a>
        </div>
      </div>
    </div>
  );
}


function Home() {
  return (
    <div className="center-align container">
      <Startbrowing />
      <Logcreate />
    </div >
  );
}

export default Home