import React from "react";
import { Header } from "../../components/Header";
import img from "../../assets/img1.jpeg";
import * as S from "./style";

export const NewPost = (): JSX.Element => {
  return (
    <S.Wraper>
      <Header />
      <S.Container>
        <S.Box>
          <S.Image src={img} alt="Florest photo" />
          <S.titleBox>
            <p>New Post</p>
          </S.titleBox>
          <S.Form>
            <S.Inputs>
              <p>Title</p>
              <S.Input type="text" placeholder="Fill the title" />
            </S.Inputs>
            <S.Inputs>
              <p>Author</p>
              <S.Input type="text" placeholder="Fill the author name" />
            </S.Inputs>
            <S.Inputs>
              <p>Image URL</p>
              <S.Input type="text" placeholder="Fill the image URL" />
            </S.Inputs>
            <S.TextArea>
              <p>Post</p>
              <S.textArea placeholder="Post..." />
            </S.TextArea>
            <S.Button> Create Post</S.Button>
          </S.Form>
        </S.Box>
      </S.Container>
    </S.Wraper>
  );
};
