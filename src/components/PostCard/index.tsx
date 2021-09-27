import React from "react";
import { Card } from "../../types/PostTypes";

import * as S from "./style";
export const PostCard = ({
  title,
  article,
  author,
  imageUrl,
  key,
}: Card): JSX.Element => {
  return (
    <>
      <S.Card key={key}>
        <S.Image src={imageUrl} />
        <S.Data>
          <p className="author">{author}</p>
          <p className="title">{title}</p>
          <p className="article">{article}</p>
        </S.Data>
      </S.Card>
    </>
  );
};
