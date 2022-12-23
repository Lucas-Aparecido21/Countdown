import React, { ReactNode } from "react";

import "./Modal.css";

interface Open {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Modal({ isOpen, setIsOpen }: Open) {
  return (
    <>
      <div
        id="modalPrincipal"
        className="modalPrimary"
        style={{ display: isOpen ? "flex" : "none" }}
      >
        <div className="modal">
          <div className="modal-content">
            <div className="nameModal">
              <input type="text" placeholder="Nome"></input>
            </div>
            <div className="emailModal">
              <input type="text" placeholder="email@email.com.br"></input>
            </div>
            <div className="botoes">
              <button
                className="confirmar"
                type="button"
                onClick={() => setIsOpen(false)}
              >
                Confirmar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
