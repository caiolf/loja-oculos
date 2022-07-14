import React from "react";
import './style.css'

export default function SecaoSobre() {
  return (
    <section id="sobre" className="sobre">
      <div className="limitar-secao">
        <h1>QUEM SOMOS NÓS?</h1>
        <p>Fundada em 2001, em Nva Iguaçu - Rio de Janeiro,
          a Óticas vida iniciou suas atividade focada no atendimento
          ao público de renda mais baixa, sempre com o objetivo de
          proporcionar ao cleinte bom atendimento, qualidade e preço baixo.</p>
        <div className="card-group">
          <img src='loja-oculos/assets/loja.png' alt="Remédios" />
          <div className="card">
            <h1>NOSSAS FILIAIS</h1>
            <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
          </div>
          <div className="card">
            <h1>ATENDIMENTO FLEXÍVEL</h1>
            <p>Nossa equipe é treinada para te atender</p>
          </div>
          <img src='loja-oculos/assets/atendimento.png' alt="Farmacêutica" />

        </div>
      </div>
    </section>
  )
}
