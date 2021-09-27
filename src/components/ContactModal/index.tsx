import React from "react";
import { useModal } from "../../hooks/useModal";
import { IoMdClose, IoMdSend } from "react-icons/io";
import * as S from "./style";

export const ContactModal = (): JSX.Element => {
  const { isOpen, toogleOpenModal } = useModal();
  function onClickContact() {
    toogleOpenModal();
  }
  return (
    <>
      {isOpen ? (
        <S.Container>
          <S.Modal>
            <S.ButtonExit onClick={() => onClickContact()}>
              <IoMdClose size="2rem" />
            </S.ButtonExit>

            <S.Title>Contact</S.Title>
            <S.Form>
              <S.Inputs>
                <p>Name</p>
                <S.Input type="text" placeholder="Fill your full name" />
              </S.Inputs>
              <S.Inputs>
                <p>Email</p>
                <S.Input type="text" placeholder="Fill a valid email" />
              </S.Inputs>
              <S.Inputs>
                <p>Phone</p>
                <S.Input type="text" placeholder="Fill your phone" />
              </S.Inputs>
              <S.TextArea>
                <p>Post</p>
                <S.textArea placeholder="Hello..." />
              </S.TextArea>
              <S.Button>
                <IoMdSend size="1rem" /> Submit
              </S.Button>
            </S.Form>
          </S.Modal>
        </S.Container>
      ) : (
        ""
      )}
    </>
  );
};
