import React from "react";
import './style.css';

import logo from '../../assets/logo.png'

export default function Topo() {
  return (
    <header>
      <div className="limitar-secao">
        <img src={logo} alt="Logo" />
        <nav>
          <a href="#produtos">PRODUTOSs</a>
          <a href="#sobre">SOBRE</a>
          <a href="#contato">CONTATO</a>
        </nav>
      </div>
    </header>)
}