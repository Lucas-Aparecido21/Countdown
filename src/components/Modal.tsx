import React, { InvalidEvent, ReactNode } from "react";
import { X } from "phosphor-react";
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
          <div className="divFechar">
            <button
              className="fechar"
              type="button"
              onClick={() => setIsOpen(false)}
            >
              <X />
            </button>
          </div>
          <div className="modal-content">
            <div className="nameModal">
              <input type="text" placeholder="Nome" required></input>
            </div>
            <div className="emailModal">
              <input
                type="text"
                placeholder="email@email.com.br"
                required={true}
              ></input>
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
