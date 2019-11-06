import React from 'react';

function IniciarSesion() {
    return (
        <div className="center-align container">
            <div className="container section.">
                <h4>Iniciar Sesion</h4>
            </div>
            <div ClassName="row">
        <div ClassName="input-field col s12">
          <input id="email" type="email" ClassName="validate" />
          <label for="email">Email</label>
        </div>
      </div>
            <div ClassName="row">
        <div ClassName="input-field col s12">
          <input Type="password" ClassName="validate" />
          <label for="password">Password</label>
        </div>
      </div>

      <div ClassName="row">
        <div ClassName="col s12">
        <a className="waves-effect waves-light btn-small col s4 offset-s4" href="/" left='100%'>
            <span className="content-text">Iniciar Sesion</span></a>
                    </div>
                </div>
            </div>
    );
}
export default IniciarSesion