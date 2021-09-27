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
  p {
    &.author {
      font-family: Rubik, sans-serif;
      font-weight: 400;
      font-size: 0.84rem;
      color: #2d2d2d;
    }

    &.title {
      font-family: Rubik, sans-serif;
      font-weight: 700;
      font-size: 1.6rem;
      color: #f1a10a;
    }

    &.article {
      font-family: Rubik, sans-serif;
      font-weight: 400;
      font-size: 1rem;
      color: #2d2d2d;
    }
  }
`;
