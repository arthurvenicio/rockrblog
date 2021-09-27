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

  return (
    <>
      <ContactModal />
      <S.Wraper>
        <Header />
        <S.Container>
          <S.Cards>
            <PostCard
              title="Teste"
              article="auhsadhdashdhuashudusadhua"
              author="Arthur Venicio"
              imageUrl="https://source.unsplash.com/640x640/?trees"
            />
          </S.Cards>
        </S.Container>
      </S.Wraper>
    </>
  );
};
