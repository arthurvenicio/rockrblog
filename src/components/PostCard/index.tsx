import React from "react";
import { Link } from "react-router-dom";
import { Card } from "../../types/PostTypes";
import { removeTags } from "../../utils/removeTags";

import * as S from "./style";
export const PostCard = ({
  title,
  article,
  author,
  imageUrl,
  id,
}: Card): JSX.Element => {
  const text = removeTags(article);
  return (
    <>
      <S.Card>
        <S.Image src={imageUrl} />
        <S.Data>
          <p className="author">{author}</p>
          <Link to={`/post/${id}`} className="link">
            <p className="title">{title}</p>
          </Link>

          <p className="article">{text}</p>
        </S.Data>
      </S.Card>
    </>
  );
};
