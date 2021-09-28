import styled from "styled-components";

export const Card = styled.div`
  width: 45rem;
  height: 10rem;
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.1);

  display: flex;
  gap: 1rem;
`;

export const Image = styled.img`
  width: 10rem;
`;

export const Data = styled.div`
  margin-top: 1rem;
  width: 33rem;
  height: 8rem;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  p {
    width: 33rem;
    &.author {
      font-family: Rubik, sans-serif;
      font-weight: 400;
      font-size: 0.84rem;
      color: #2d2d2d;
    }

    &.title {
      max-height: 1rem;
      max-width: 32rem;
      font-family: Rubik, sans-serif;
      font-weight: 700;
      font-size: 0.9rem;
      color: #f1a10a;
      text-decoration: none;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1; /* number of lines to show */
      -webkit-box-orient: vertical;
    }

    &.article {
      max-width: 32rem;
      font-family: Rubik, sans-serif;
      font-weight: 400;
      font-size: 0.95rem;
      color: #2d2d2d;

      /* Criação de ... */
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 5;
      -webkit-box-orient: vertical;
    }
  }

  .link {
    text-decoration: none;
  }
`;
