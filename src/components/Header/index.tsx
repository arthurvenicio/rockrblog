import React from "react";
import { Link } from "react-router-dom";
import { useModal } from "../../hooks/useModal";

import * as S from "./style";
export const Header = (): JSX.Element => {
  const { toogleOpenModal } = useModal();
  function onClickContact() {
    toogleOpenModal();
  }

  return (
    <>
      <S.Header>
        <S.Title>
          <Link to="/">
            <a>Rockr Blog</a>
          </Link>
        </S.Title>

        <S.Header id="menu">
          <p>Posts</p>
          <button onClick={() => onClickContact()}>Contact</button>
        </S.Header>
      </S.Header>
    </>
  );
};
