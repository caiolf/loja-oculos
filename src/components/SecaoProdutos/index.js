import React from "react";
import './style.css'

export default function SecaoProdutos() {
  return (
    <section className="produtos">
      <div className="limitar-secao">
        <h1>NOSSOS PRODUTOS</h1>
        <p>Trabalhamoscom óculos de grau, óculos de sol, lentes transition nos modelos masculino, feminino e infantil.</p>
        <p>Todos os nosso preços são acessíveis e contam com a melhor qualidade do mercado.</p>
        <div className="card-groups">
          <div className="card">
            <h2>Óculos de grau</h2>
            <img src="assets/oculos01.png" alt="Óculos de grau" />
            <h3>R$ 500,00</h3>
          </div>
          <div className="card">
            <h2>Óculos transition</h2>
            <img src="assets/oculos02.png" alt="Óculos transition" />
            <h3>R$ 750,00</h3></div>
          <div className="card">
            <h2>Óculos de sol</h2>
            <img src="assets/oculos03.png" alt="Óculos de sol" />
            <h3>R$ 700,00</h3>
          </div>
          <div className="card">
            <h2>Óculos infanfil</h2>
            <img src="assets/oculos04.png" alt="Óculos infantil" />
            <h3>R$ 500,00</h3>
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
