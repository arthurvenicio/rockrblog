import React, { useEffect, useState } from "react";
import { ContactModal } from "../../components/ContactModal";
import { Header } from "../../components/Header";
import { PostCard } from "../../components/PostCard";
import api from "../../services/api";
import { Post } from "../../types/PostTypes";
import * as S from "./style";

export const Home = (): JSX.Element => {
  const [data, setData] = useState<Post[]>();

  useEffect(() => {
    api
      .get("/articles")
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  console.log(data);

  if (!data) {
    return (
      <>
        <ContactModal />
        <S.Wraper>
          <Header />
          <S.Container>
            <S.Cards>
              <p>Erro com o Servidor</p>
            </S.Cards>
          </S.Container>
        </S.Wraper>
      </>
    );
  }

  return (
    <>
      <ContactModal />
      <S.Wraper>
        <Header />
        <S.Container>
          <S.Cards>
            {data.map((item, index) => (
              <PostCard
                key={index}
                title={item.title}
                article={item.article}
                author={item.author}
                imageUrl={item.imageUrl}
              />
            ))}
          </S.Cards>
        </S.Container>
      </S.Wraper>
    </>
  );
};
