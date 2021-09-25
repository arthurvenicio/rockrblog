import React from "react";
import { Link } from "react-router-dom";

import * as S from "./style";
export const Header = (): JSX.Element => {
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
          <p>Contact</p>
        </S.Header>
      </S.Header>
    </>
  );
};
