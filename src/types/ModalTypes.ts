import { ReactNode } from "react";

export type ModalProviderProps = {
  children: ReactNode;
};

export type ModalContextT = {
  isOpen: boolean;
  setClose: () => void;
  toogleOpenModal: () => void;
};
