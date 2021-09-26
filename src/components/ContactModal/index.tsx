import React from "react";
import * as S from "./style";

export const ContactModal = (): JSX.Element => {
  return (
    <>
      <S.Container>
        <S.Modal>
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
            <S.Button>Submit</S.Button>
          </S.Form>
        </S.Modal>
      </S.Container>
    </>
  );
};
