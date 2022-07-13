import React from "react";
import './style.css'

import oculos01 from '../../assets/oculos01.png';
import oculos02 from '../../assets/oculos02.png';
import oculos03 from '../../assets/oculos03.png';
import oculos04 from '../../assets/oculos04.png';

export default function SecaoProdutos() {
  return (
    <section id="produtos" className="produtos">
      <div className="limitar-secao">
        <h1>NOSSOS PRODUTOS</h1>
        <p>Trabalhamoscom óculos de grau, óculos de sol, lentes transition nos modelos masculino, feminino e infantil.</p>
        <p>Todos os nosso preços são acessíveis e contam com a melhor qualidade do mercado.</p>
        <div className="card-groups">
          <div className="card">
            <h2>Óculos de grau</h2>
            <img src={oculos01} alt="Óculos de grau" />
            <p>R$ 500,00</p>
          </div>
          <div className="card">
            <h2>Óculos transition</h2>
            <img src={oculos02} alt="Óculos transition" />
            <p>R$ 750,00</p></div>
          <div className="card">
            <h2>Óculos de sol</h2>
            <img src={oculos03} alt="Óculos de sol" />
            <p>R$ 700,00</p>
          </div>
          <div className="card">
            <h2>Óculos infanfil</h2>
            <img src={oculos04} alt="Óculos infantil" />
            <p>R$ 500,00</p>
          </div>
        </div>
        <p>Todos os nossos produtos incluem:</p>
        <ul>
          <li>Garantia de 1 ano</li>
          <li>Manutenção preventiva</li>
          <li>Descontos especiais na compra da segunda unidade</li>
          <li>Flexibilidade de pagamento</li>
        </ul>
      </div>
    </section>
  )
}
