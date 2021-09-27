import React from "react";
import { Link } from "react-router-dom";
import { Card } from "../../types/PostTypes";

import * as S from "./style";
export const PostCard = ({
  title,
  article,
  author,
  imageUrl,
  id,
}: Card): JSX.Element => {
  return (
    <>
      <S.Card>
        <S.Image src={imageUrl} />
        <S.Data>
          <p className="author">{author}</p>
          <Link to={`/post/${id}`} className="link">
            <p className="title">{title}</p>
          </Link>

          <p className="article">{article}</p>
        </S.Data>
      </S.Card>
    </>
  );
};
