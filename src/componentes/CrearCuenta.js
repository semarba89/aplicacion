import React from 'react';

function CrearCuenta() {
    return (
        <div ClassName="container">
            <div ClassName="row">
                <div ClassName="col s12"></div>
                    <div ClassName="input-field col s6">
                <h4 className="center-align container">Crear una nueva cuenta</h4>
            </div>
          
            <div class="row">
    <form ClassName="col s12">
      <div ClassName="row">
        <div ClassName="input-field col s6">
          <input placeholder="Name" id="first_name" type="text" ClassName="validate" />
          <label for="first_name">First Name</label>
        </div>
        <div ClassName="input-field col s6">
          <input id="last_name" type="text" ClassName="validate" />
          <label for="last_name">Last Name</label>
        </div>
      </div>
      <div ClassName="row">
        <div ClassName="input-field col s12">
          <input type="password" ClassName="validate" />
          <label for="password">Password</label>
        </div>
      </div>
      <div ClassName="row">
        <div ClassName="input-field col s12">
          <input id="email" type="email" ClassName="validate" />
          <label for="email">Email</label>
        </div>
      </div>
      <div ClassName="row">
        <div ClassName="col s12">
        <a className="waves-effect waves-light btn-small col s4 offset-s4" href="/" left='100%'>
            <span className="content-text">Crear Cuenta</span></a>

        </div>
      </div>
    </form>
  </div>      
  </div> 
  </div> 
    );
}
export default CrearCuenta