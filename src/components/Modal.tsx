import React from "react";

import "./Modal.css";

export function Modal() {
  return (
    <>
      <div id="modalPrincipal" className="modalPrimary">
        <div className="modal">
          <div className="modal-content">
            <div className="nameModal">
              <input type="text" placeholder="Nome"></input>
            </div>
            <div className="emailModal">
              <input type="text" placeholder="email@email.com.br"></input>
            </div>
            <div className="botoes">
              <button className="voltar">Voltar</button>
              <button className="confirmar">Confirmar</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
