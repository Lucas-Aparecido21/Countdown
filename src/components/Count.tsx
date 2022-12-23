import React, { ChangeEvent, useState } from "react";
import Top from "../assets/top-image.png";
import Bottom from "../assets/bottom-image.png";
import Rocket from "../assets/rocket.png";
import "./Count.css";
import { Modal } from "./Modal";

export function Count() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="container">
      <header>
        <img src={Top} alt="Imagem topo" />
      </header>
      <body>
        <div className="container2">
          <div className="container3">
            <h1 className="titulo">Pronto para lançar em...</h1>
            <h1 className="number"> 08: 12: 44: 28</h1>
            <p>inscreva-se para saber mais sobre o lançamento</p>
            <button type="button" onClick={() => setIsOpen(true)}>
              Inscreva-se
            </button>
          </div>
          <Modal isOpen={isOpen} setIsOpen={setIsOpen} />

          <img className="rocket" src={Rocket} alt="foguete" />
        </div>
      </body>
      <footer>
        <img src={Bottom} alt="Imagem bottom" />
      </footer>
    </div>
  );
}
