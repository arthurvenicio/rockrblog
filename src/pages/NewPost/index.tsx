import React, { FormEvent, useState } from "react";
import { v4 as uuid } from "uuid";
import { useHistory } from "react-router";

import api from "../../services/api";

import { Header } from "../../components/Header";
import { ContactModal } from "../../components/ContactModal";
import { IoMdCreate } from "react-icons/io";
import img from "../../assets/img1.jpeg";

import * as S from "./style";

const initValue = {
  author: "",
  title: "",
  article: "",
  date: new Date(),
  imageUrl: "",
};

export const NewPost = (): JSX.Element => {
  const [values, setValues] = useState(initValue);
  const history = useHistory();

  function onChangeInput(ev: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = ev.target;
    const newDate = { ...values, [name]: value };
    const addId = { id: uuid(), ...newDate };
    setValues(addId);
  }

  function onChangeTextArea(ev: React.ChangeEvent<HTMLTextAreaElement>) {
    const { name, value } = ev.target;
    const newDate = { ...values, [name]: value };
    console.log(values);
    setValues(newDate);
  }

  function onSubmit(ev: FormEvent) {
    ev.preventDefault();
    api
      .post("/articles", values)
      .then(() => alert(`create with sucess`))
      .catch(function (error) {
        console.error(error);
      });
    history.push("/");
  }

  return (
    <>
      <ContactModal />
      <S.Wraper>
        <Header />
        <S.Container>
          <S.Box>
            <S.Image src={img} alt="Florest photo" />
            <S.titleBox>
              <p>New Post</p>
            </S.titleBox>
            <S.Form onSubmit={onSubmit}>
              <S.Inputs>
                <p>Title</p>
                <S.Input
                  onChange={onChangeInput}
                  type="text"
                  placeholder="Fill the title"
                  name="title"
                />
              </S.Inputs>
              <S.Inputs>
                <p>Author</p>
                <S.Input
                  onChange={onChangeInput}
                  type="text"
                  placeholder="Fill the author name"
                  name="author"
                />
              </S.Inputs>
              <S.Inputs>
                <p>Image URL</p>
                <S.Input
                  onChange={onChangeInput}
                  type="text"
                  placeholder="Fill the image URL"
                  name="imageUrl"
                />
              </S.Inputs>

              <S.TextArea>
                <p>Post</p>
                <S.textArea
                  placeholder="Post..."
                  name="article"
                  onChange={onChangeTextArea}
                />
              </S.TextArea>
              <S.Button type="submit">
                <IoMdCreate /> Create Post
              </S.Button>
            </S.Form>
          </S.Box>
        </S.Container>
      </S.Wraper>
    </>
  );
};
