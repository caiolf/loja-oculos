import React from "react";
import './style.css'

export default function SecaoContato() {
  return (
    <section className="contato">
      <div className="limitar-secao">
        <h1>FALE CONOSCO</h1>
        <p>Não perca tempo, venha conhecer uma de nossas
          lojas ou entre em contato atravpes de nossas
          redes sociais ou da central de atendimento.</p>
        <div className="contatos-box">
          <div className="contatos">
            <h2>Contato</h2>
            <figure>
              <img src="assets/local.png" alt="Local" />
              <figcaption>Nova Iguaçu, RJ</figcaption>
            </figure>
            <figure>
              <img src="assets/telefone.png" alt="Telefone" />
              <figcaption>(21)9999-9999</figcaption>
            </figure>
            <figure>
              <img src="assets/email.png" alt="Email" />
              <figcaption>contato@oticavida.com</figcaption>
            </figure>
          </div>
          <div className="contatos">
            <h2>Nossas Redes Sociais</h2>
            <figure>
              <img src="assets/fb.png" alt="" />
              <figcaption>/OticaVida</figcaption>
            </figure>
            <figure>
              <img src="assets/ig.png" alt="" />
              <figcaption>@oticavidaj</figcaption>
            </figure>
            <figure>
              <img src="assets/tt.png" alt="" />
              <figcaption>@oticavidaj</figcaption>
            </figure>
          </div>
        </div>

      </div>
    </section>
  )
}

