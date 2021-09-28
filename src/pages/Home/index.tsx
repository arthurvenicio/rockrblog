import React, { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import api from "../../services/api";
import { ContactModal } from "../../components/ContactModal";
import { Header } from "../../components/Header";
import { PostCard } from "../../components/PostCard";

import { useModal } from "../../hooks/useModal";

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

  if (!data) {
    return (
      <>
        <ContactModal />
        <S.Wraper>
          <Header />
          <S.Container className="error">
            <S.Cards className="loading">
              <Loader
                type="Oval"
                color="#f1a10a"
                height={50}
                width={50} //3 secs
              />
              <p>Estamos carregando os dados!</p>
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
