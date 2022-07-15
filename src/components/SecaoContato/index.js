import React from "react";
import './style.css'

import local from '../../assets/local.png'
import tel from '../../assets/telefone.png'
import email from '../../assets/email.png'
import fb from '../../assets/fb.png'
import ig from '../../assets/ig.png'
import tt from '../../assets/tt.png'

export default function SecaoContato() {
  return (
    <section id="contato" className="contato">
      <div className="limitar-secao">
        <h1>FALE CONOSCO</h1>
        <p>Não perca tempo, venha conhecer uma de nossas
          lojas ou entre em contato atravpes de nossas
          redes sociais ou da central de atendimento.</p>
        <div className="contatos-box">
          <div className="contatos">
            <h2>Contato</h2>
            <figure>
              <img src={local} alt="Local" />
              <figcaption>Nova Iguaçu, RJ</figcaption>
            </figure>
            <figure>
              <img src={tel} alt="Telefone" />
              <figcaption>(21)9999-9999</figcaption>
            </figure>
            <figure>
              <img src={email} alt="Email" />
              <figcaption>contato@oticavida.com</figcaption>
            </figure>
          </div>
          <div className="contatos">
            <h2>Nossas Redes Sociais</h2>
            <figure>
              <img src={fb} alt="Fb" />
              <figcaption>/OticaVida</figcaption>
            </figure>
            <figure>
              <img src={ig} alt="Ig" />
              <figcaption>@oticavidaj</figcaption>
            </figure>
            <figure>
              <img src={tt} alt="Tt" />
              <figcaption>@oticavidaj</figcaption>
            </figure>
          </div>
        </div>

      </div>
    </section>
  )
}

