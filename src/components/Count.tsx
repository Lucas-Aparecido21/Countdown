import React, { ChangeEvent } from "react";
import Top from "../assets/top-image.png";
import Bottom from "../assets/bottom-image.png";
import Rocket from "../assets/rocket.png";
import "./Count.css";
import { Modal } from "./Modal";

interface ButtonProps {
  display: string;
}

export function Count() {
  const teste2 = document.getElementsByClassName("modalPrimary");

  function teste(event: ChangeEvent<HTMLButtonElement>) {
    document.getElementsByClassName("modalPrimary");
  }
  return (
    <div className="container">
      <header>
        <img src={Top} alt="Imagem topo" />
      </header>
      <body>
        <div className="container2">
          <Modal />
          <div className="container3">
            <h1 className="titulo">Pronto para lançar em...</h1>
            <h1 className="number"> 08: 12: 44: 28</h1>
            <p>inscreva-se para saber mais sobre o lançamento</p>
            <button type="submit" onSubmit={teste}>
              Inscreva-se
            </button>
          </div>

          <img className="rocket" src={Rocket} alt="foguete" />
        </div>
      </body>
      <footer>
        <img src={Bottom} alt="Imagem bottom" />
      </footer>
    </div>
  );
}
