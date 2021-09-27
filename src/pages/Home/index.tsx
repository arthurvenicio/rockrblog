import React, { useEffect, useState } from "react";
import { ContactModal } from "../../components/ContactModal";
import { Header } from "../../components/Header";
import { PostCard } from "../../components/PostCard";
import { useModal } from "../../hooks/useModal";
import api from "../../services/api";
import { PostT } from "../../types/PostTypes";
import * as S from "./style";

export const Home = (): JSX.Element => {
  const [data, setData] = useState<PostT[]>();
  const { setClose } = useModal();

  useEffect(() => {
    api
      .get("/articles")
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });

    setClose();
  }, []);

  console.log(data);

  if (!data) {
    return (
      <>
        <ContactModal />
        <S.Wraper>
          <Header />
          <S.Container className="error">
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
            {data.map((item) => (
              <PostCard
                key={item.id}
                title={item.title}
                article={item.article}
                author={item.author}
                imageUrl={item.imageUrl}
                id={item.id}
              />
            ))}
          </S.Cards>
        </S.Container>
      </S.Wraper>
    </>
  );
};
