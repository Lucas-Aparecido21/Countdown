import React, { ChangeEvent, useState } from "react";
import Top from "../assets/top-image.png";
import Bottom from "../assets/bottom-image.png";
import Rocket from "../assets/rocket.png";
import "./Count.css";
import { Modal } from "./Modal";

export function Count() {
  const [isOpen, setIsOpen] = useState(false);
  const [segundos, setSegundos] = useState(10);
  const [minutos, setMinutos] = useState(2);
  const [horas, setHoras] = useState(1);
  const [dias, setDias] = useState(1);
  // React.useEffect(() => {
  //   setInterval(() => setSegundos((cont) => cont - 1), 1000);
  // }, []);

  if (segundos === 0) {
    setMinutos(minutos - 1);
  }

  return (
    <div className="container">
      <header>
        <img src={Top} alt="Imagem topo" />
      </header>
      <body>
        <div className="container2">
          <div className="container3">
            <h1 className="titulo">Pronto para lançar em...</h1>
            <h1 className="number">
              {dias}:{horas}:{minutos}:{segundos}
            </h1>
            <p> Dias {"     "} Horas Minutos Segundos</p>
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
