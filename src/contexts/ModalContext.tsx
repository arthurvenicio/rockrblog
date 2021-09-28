import React, { createContext, useState } from "react";
import { ModalContextT, ModalProviderProps } from "../types/ModalTypes";
export const ModalContext = createContext<ModalContextT>({} as ModalContextT);

export const ModalProvider = ({
  children,
}: ModalProviderProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  function toogleOpenModal() {
    setIsOpen(!isOpen);
  }

  function setClose() {
    setIsOpen(false);
  }

  return (
    <ModalContext.Provider value={{ isOpen, toogleOpenModal, setClose }}>
      {children}
    </ModalContext.Provider>
  );
};
