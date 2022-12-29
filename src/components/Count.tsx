import React, { ChangeEvent, useState } from "react";
import Top from "../assets/top-image.png";
import Bottom from "../assets/bottom-image.png";
import Rocket from "../assets/rocket.png";
import "./Count.css";
import { Modal } from "./Modal";

export function Count() {
  // const totals: number = 55;
  // const totalm: number = 5000;
  // let totalh: number = 2255442;
  // let totald: number = 2;

  const [isOpen, setIsOpen] = useState(false);
  const [seconds, setSeconds] = useState(10);
  const [minutes, setMinutes] = useState(10);
  const [hours, setHours] = useState(10);
  const [days, setDays] = useState(10);

  // const [isOpen, setIsOpen] = useState(false);
  // const [seconds, setSeconds] = useState(Math.floor(totals / 1000) % 60);
  // const [minutes, setMinutes] = useState(Math.floor(totalm / 1000 / 60) % 60);
  // const [hours, setHours] = useState(
  //   Math.floor((totalh / 1000) * 60 * 60) % 24
  // );
  // const [days, setDays] = useState(10);

  // function SetSeconds(value: number) {}

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
              {days}: {hours}: {minutes}: {seconds}
            </h1>
            <p> Dias Horas Minutos Segundos</p>
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
