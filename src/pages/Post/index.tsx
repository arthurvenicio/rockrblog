import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { ContactModal } from "../../components/ContactModal";
import { Header } from "../../components/Header";
import api from "../../services/api";
import { PostT, Query } from "../../types/PostTypes";
import { FormatDate } from "../../utils/formatDate";
import { removeTags } from "../../utils/removeTags";
import * as S from "./style";

export const Post = (): JSX.Element => {
  const { id } = useParams<Query>();
  const [data, setData] = useState<PostT>();

  function getData() {
    api.get(`/articles/${id}`).then((response) => {
      setData(response.data);
    });
  }

  useEffect(() => {
    getData();
  }, []);

  if (!data) {
    return (
      <>
        <ContactModal />
        <S.Wraper>
          <Header />
          <S.Container>
            <S.Box>
              <p>Error</p>
            </S.Box>
          </S.Container>
        </S.Wraper>
      </>
    );
  }

  const { author, date, imageUrl, article, title } = data;

  const datef = FormatDate(date);

  const text = removeTags(article);

  return (
    <>
      <ContactModal />
      <S.Wraper>
        <Header />
        <S.Container>
          <S.Box>
            <S.SubBox>
              <S.Image src={imageUrl} alt="People in the party" />
              <S.Info>
                <p className="date">{datef}</p>
                <p className="author">{author}</p>
                <p className="title">{title}</p>
              </S.Info>
            </S.SubBox>
            <S.Article>
              <p>{text}</p>
            </S.Article>
          </S.Box>
        </S.Container>
      </S.Wraper>
    </>
  );
};
