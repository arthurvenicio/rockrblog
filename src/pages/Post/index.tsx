import React from "react";
import { Header } from "../../components/Header";
import * as S from "./style";

export const Post = (): JSX.Element => {
  return (
    <S.Wraper>
      <Header />
      <S.Container>
        <S.Box></S.Box>
      </S.Container>
    </S.Wraper>
  );
};
