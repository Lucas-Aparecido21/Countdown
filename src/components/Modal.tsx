import React from "react";

import "./Modal.css";

export function Modal() {
  return (
    <>
      <div className="modalPrimary">
        <div className="modal">
          <div className="modal-content">
            <input type="text" placeholder="Nome"></input>
            <input type="text" placeholder="email@email.com.br"></input>
            <button>Confirmar</button>
          </div>
        </div>
      </div>
    </>
  );
}
