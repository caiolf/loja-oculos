import React from "react";
import './style.css'

export default function Header() {
  return (
    <header>
      <div className="limitar-secao">
        <img src="assets/logo.png" alt="Logo" />
        <nav>
          <a href="#">PRODUTOS</a>
          <a href="#">SOBRE</a>
          <a href="#">CONTATO</a>
        </nav>
      </div>
    </header>)
}