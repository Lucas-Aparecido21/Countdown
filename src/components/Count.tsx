import React, { ChangeEvent, useEffect, useState } from "react";
import Top from "../assets/top-image.png";
import Bottom from "../assets/bottom-image.png";
import Rocket from "../assets/rocket.png";
import "./Count.css";
import { Modal } from "./Modal";

export function Count() {
  const [isOpen, setIsOpen] = useState(false);
  const [segundos, setSegundos] = useState(5);
  const [minutos, setMinutos] = useState(1);
  const [horas, setHoras] = useState(1);
  const [dias, setDias] = useState(0);

  const timer = () => {
    setTimeout(() => {
      setSegundos((cont) => cont - 1);

      if (dias === -1) {
        setDias(0);
      }
      if (minutos === -1) {
        setMinutos(0);
      }
      if (horas === -1) {
        setHoras(0);
      }

      if (horas === 0 && dias > 0) {
        setDias((cont) => cont - 1);
        setHoras(23);
      }

      if (minutos === 0 && horas > 0) {
        setHoras((count) => count - 1);
        setMinutos(59);
      }

      if (segundos === 0) {
        setMinutos((count) => count - 1);
        setSegundos(59);
      }
    }, 1000);
  };

  useEffect(() => {
    timer();
  }, [segundos]);

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
              {dias.toLocaleString("pt-br", {
                minimumIntegerDigits: 2,
                useGrouping: false,
              })}
              :
              {horas.toLocaleString("pt-br", {
                minimumIntegerDigits: 2,
                useGrouping: false,
              })}
              :
              {minutos.toLocaleString("pt-br", {
                minimumIntegerDigits: 2,
                useGrouping: false,
              })}
              :
              {segundos.toLocaleString("pt-br", {
                minimumIntegerDigits: 2,
                useGrouping: false,
              })}
            </h1>
            <div className="tempo">
              <p> Dias </p>
              <p> Horas </p>
              <p>Minutos</p>
              <p>Segundos</p>
            </div>
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
