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
            <p className="title">Rockr Blog</p>
          </Link>
        </S.Title>

        <S.Header id="menu">
          <Link to="/">
            <p>Posts</p>
          </Link>
          <button onClick={() => onClickContact()}>Contact</button>
          <Link to="/newpost">
            <p className="newpost">NewPost</p>
          </Link>
        </S.Header>
      </S.Header>
    </>
  );
};
