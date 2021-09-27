import { useContext } from "react";
import { ModalContext } from "../contexts/ModalContext";
import { ModalContextT } from "../types/ModalTypes";

export const useModal = (): ModalContextT => {
  const value = useContext(ModalContext);
  return value;
};
