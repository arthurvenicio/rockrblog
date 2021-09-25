import React from "react";
import { Header } from "../../components/Header";
import * as S from "./style";

export const Home = (): JSX.Element => {
  return (
    <S.Wraper>
      <Header />
      <S.Container>
        <p>Teste</p>
      </S.Container>
    </S.Wraper>
  );
};
