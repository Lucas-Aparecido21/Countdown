import React from "react";
import Top from "../assets/top-image.png";
import Bottom from "../assets/bottom-image.png";
import Rocket from "../assets/rocket.png";
import "./Count.css";

export function Count() {
  return (
    <div className="container">
      <header>
        <img src={Top} alt="Imagem topo" />
      </header>
      <body>
        <div className="container2">
          <div className="container3">
            <h1> 08: 12: 44: 28</h1>
            <p>inscreva-se para saber mais sobre o lançamento</p>
            <button>Inscreva-se</button>
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
