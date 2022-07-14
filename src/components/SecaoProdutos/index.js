import React from "react";
import './style.css'


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
            <img src='loja-oculos/assets/oculos01.png' alt="Óculos de grau" />
            <p>R$ 500,00</p>
          </div>
          <div className="card">
            <h2>Óculos transition</h2>
            <img src='loja-oculos/assets/oculos02.png' alt="Óculos transition" />
            <p>R$ 750,00</p></div>
          <div className="card">
            <h2>Óculos de sol</h2>
            <img src='loja-oculos/assets/oculos03.png' alt="Óculos de sol" />
            <p>R$ 700,00</p>
          </div>
          <div className="card">
            <h2>Óculos infanfil</h2>
            <img src='loja-oculos/assets/oculos04.png' alt="Óculos infantil" />
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
