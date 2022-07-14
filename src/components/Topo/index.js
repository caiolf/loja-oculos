import React from "react";
import './style.css';

export default function Topo() {
  return (
    <header>
      <div className="limitar-secao">
        <img src="loja-oculos/assets/logo.png" alt="Logo" />
        <nav>
          <a href="#produtos">PRODUTOS</a>
          <a href="#sobre">SOBRE</a>
          <a href="#contato">CONTATO</a>
        </nav>
      </div>
    </header>)
}