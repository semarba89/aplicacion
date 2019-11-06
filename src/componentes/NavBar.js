import React from 'react'
import { slide as Menu } from "react-burger-menu";

export default props => {
  return (
    <Menu>
      <a className="menu-item" href="/Home">
        Home
      </a>

      <a className="menu-item" href="/Home2">
        Burgers
      </a>

      <a className="menu-item" href="/Empleadoss">
        Pizzas
      </a>

      <a className="menu-item" href="/CrearCuenta">
        Desserts
      </a>
    </Menu>
  );
};
